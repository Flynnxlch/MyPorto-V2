const DRIVE_FILE_ID = /drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:.*&)?id=)([\w-]+)/

export const isRemote = (path: string) => /^https?:\/\//.test(path)

// Google Drive share link to direct image URL
export function imageSrc(path: string) {
  const id = path.match(DRIVE_FILE_ID)?.[1]
  return id ? `https://lh3.googleusercontent.com/d/${id}` : path
}

// Hides empty and TODO values
export const isFilled = (value: string) => value.trim() !== '' && !value.startsWith('TODO')

// Short display form of a URL
export const displayUrl = (url: string) => url.replace(/^(https?:\/\/(www\.)?|mailto:)/, '').replace(/\/$/, '')

// New tab for remote links and files
export const newTabProps = (href: string) =>
  isRemote(href) || /^\/.*\.\w+$/.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
