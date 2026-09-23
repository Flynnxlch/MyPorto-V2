import type { ComponentProps } from 'react'
import { newTabProps } from '@/lib/utils'

type LinkProps = ComponentProps<'a'> & { href: string }

// Accent text link; external links open in a new tab
export function TextLink({ className = '', ...props }: LinkProps) {
  return (
    <a
      {...newTabProps(props.href)}
      {...props}
      className={`inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline ${className}`}
    />
  )
}

// DaisyUI button as a link
export function ButtonLink({ className = '', ...props }: LinkProps) {
  return <a {...newTabProps(props.href)} {...props} className={`btn ${className}`} />
}
