'use client'

import { memo, useEffect, useMemo, useRef, type CSSProperties } from 'react'

// Tilt card adapted from React Bits' ProfileCard; styles in globals.css (.pc-*)

const ANIMATION_CONFIG = {
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  ENTER_TRANSITION_MS: 180,
  // Max tilt in degrees
  ROTATE_AMPLITUDE: 12,
}

const clamp = (v: number, min = 0, max = 100) => Math.min(Math.max(v, min), max)
const round = (v: number, precision = 3) => parseFloat(v.toFixed(precision))
const adjust = (v: number, fMin: number, fMax: number, tMin: number, tMax: number) =>
  round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin))

type ProfileCardProps = {
  avatarUrl: string
  name: string
  className?: string
}

function createTiltEngine(shell: HTMLElement, wrap: HTMLElement) {
  let rafId: number | null = null
  let running = false
  let lastTs = 0
  let currentX = 0
  let currentY = 0
  let targetX = 0
  let targetY = 0
  let initialUntil = 0

  const DEFAULT_TAU = 0.14
  const INITIAL_TAU = 0.6

  const setVarsFromXY = (x: number, y: number) => {
    const percentX = clamp((100 / (shell.clientWidth || 1)) * x)
    const percentY = clamp((100 / (shell.clientHeight || 1)) * y)
    const centerX = percentX - 50
    const centerY = percentY - 50

    const properties = {
      '--pointer-x': `${percentX}%`,
      '--pointer-y': `${percentY}%`,
      '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
      '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
      '--pointer-from-center': `${clamp(Math.hypot(centerY, centerX) / 50, 0, 1)}`,
      '--pointer-from-top': `${percentY / 100}`,
      '--pointer-from-left': `${percentX / 100}`,
      // Map -50..50 to ±ROTATE_AMPLITUDE
      '--rotate-x': `${round((-centerX / 50) * ANIMATION_CONFIG.ROTATE_AMPLITUDE)}deg`,
      '--rotate-y': `${round((centerY / 50) * ANIMATION_CONFIG.ROTATE_AMPLITUDE)}deg`,
    }
    for (const [k, v] of Object.entries(properties)) wrap.style.setProperty(k, v)
  }

  const stop = () => {
    if (rafId) cancelAnimationFrame(rafId)
    rafId = null
    running = false
    lastTs = 0
  }

  const step = (ts: number) => {
    if (!running) return
    if (lastTs === 0) lastTs = ts
    const dt = (ts - lastTs) / 1000
    lastTs = ts

    const k = 1 - Math.exp(-dt / (ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU))
    currentX += (targetX - currentX) * k
    currentY += (targetY - currentY) * k
    setVarsFromXY(currentX, currentY)

    // Stop once settled; pointer events restart it
    const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05
    if (stillFar) rafId = requestAnimationFrame(step)
    else stop()
  }

  const start = () => {
    if (running) return
    running = true
    lastTs = 0
    rafId = requestAnimationFrame(step)
  }

  return {
    setImmediate(x: number, y: number) {
      currentX = x
      currentY = y
      setVarsFromXY(x, y)
    },
    setTarget(x: number, y: number) {
      targetX = x
      targetY = y
      start()
    },
    toCenter() {
      this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2)
    },
    beginInitial(durationMs: number) {
      initialUntil = performance.now() + durationMs
      start()
    },
    cancel: stop,
  }
}

function ProfileCardComponent({
  avatarUrl,
  name,
  className = '',
}: ProfileCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const shellRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const shell = shellRef.current
    const wrap = wrapRef.current
    if (!shell || !wrap) return

    const engine = createTiltEngine(shell, wrap)
    let enterTimer: number | undefined

    const offsets = (event: PointerEvent) => {
      const rect = shell.getBoundingClientRect()
      return { x: event.clientX - rect.left, y: event.clientY - rect.top }
    }

    // Hover on: glow, shine and scale
    const onEnter = (event: PointerEvent) => {
      wrap.classList.add('active', 'entering')
      window.clearTimeout(enterTimer)
      enterTimer = window.setTimeout(() => wrap.classList.remove('entering'), ANIMATION_CONFIG.ENTER_TRANSITION_MS)
      const { x, y } = offsets(event)
      engine.setTarget(x, y)
    }

    const onMove = (event: PointerEvent) => {
      const { x, y } = offsets(event)
      engine.setTarget(x, y)
    }

    // Hover off: effects stop instantly, tilt eases back
    const onLeave = () => {
      window.clearTimeout(enterTimer)
      wrap.classList.remove('active', 'entering')
      engine.toCenter()
    }

    shell.addEventListener('pointerenter', onEnter)
    shell.addEventListener('pointermove', onMove)
    shell.addEventListener('pointerleave', onLeave)
    // Touch release ends hover; mouse clicks don't
    const onUp = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') onLeave()
    }
    shell.addEventListener('pointerup', onUp)
    shell.addEventListener('pointercancel', onLeave)

    engine.setImmediate((shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET, ANIMATION_CONFIG.INITIAL_Y_OFFSET)
    engine.toCenter()
    engine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION)

    return () => {
      shell.removeEventListener('pointerenter', onEnter)
      shell.removeEventListener('pointermove', onMove)
      shell.removeEventListener('pointerleave', onLeave)
      shell.removeEventListener('pointerup', onUp)
      shell.removeEventListener('pointercancel', onLeave)
      window.clearTimeout(enterTimer)
      engine.cancel()
      wrap.classList.remove('active', 'entering')
    }
  }, [])

  const cardStyle = useMemo(
    () =>
      ({
        '--inner-gradient':
          'linear-gradient(145deg, color-mix(in oklab, var(--color-primary) 35%, transparent) 0%, color-mix(in oklab, var(--color-primary) 8%, transparent) 100%)',
        '--behind-glow-color': 'color-mix(in oklab, var(--color-primary) 35%, transparent)',
        '--behind-glow-size': '30%',
      }) as CSSProperties,
    [],
  )

  return (
    <div ref={wrapRef} className={`pc-card-wrapper ${className}`.trim()} style={cardStyle}>
      <div className="pc-behind" />
      <div ref={shellRef} className="pc-card-shell">
        <section className="pc-card">
          <div className="pc-inside">
            <div className="pc-shine" />
            <div className="pc-glare" />
            <div className="pc-content pc-avatar-content">
              {/* eslint-disable-next-line @next/next/no-img-element -- CSS-driven parallax transform on the raw img */}
              <img className="avatar" src={avatarUrl} alt={name} />
            </div>
            <div className="pc-content">
              <div className="pc-details">
                <h3>{name}</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export const ProfileCard = memo(ProfileCardComponent)
