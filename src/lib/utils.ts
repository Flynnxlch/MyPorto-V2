const DRIVE_FILE_ID = /drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:.*&)?id=)([\w-]+)/

export const isRemote = (path: string) => /^https?:\/\//.test(path)

/** Turns a Google Drive share link into a direct image URL; other paths pass through. */
export function imageSrc(path: string) {
  const id = path.match(DRIVE_FILE_ID)?.[1]
  return id ? `https://lh3.googleusercontent.com/d/${id}` : path
}

/** Empty strings and `TODO` placeholders from the data files are not rendered. */
export const isFilled = (value: string) => value.trim() !== '' && !value.startsWith('TODO')

/** `https://www.linkedin.com/in/me/` → `linkedin.com/in/me` */
export const displayUrl = (url: string) => url.replace(/^(https?:\/\/(www\.)?|mailto:)/, '').replace(/\/$/, '')

/** Opens remote links and files (e.g. /cv.pdf) in a new tab. */
export const newTabProps = (href: string) =>
  isRemote(href) || /^\/.*\.\w+$/.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
