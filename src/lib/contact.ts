import DOMPurify from 'dompurify'

export const NAME_MAX = 80
export const MESSAGE_MIN = 10
export const MESSAGE_MAX = 2000

// Letters (any language) with spaces, dots, apostrophes and hyphens; one line only
const NAME_RULE = /^\p{L}[\p{L}\p{M} .'-]*$/u
// Anything that looks like a tag, comment or doctype
const MARKUP = /<\s*[a-z!/?]/i
// Control characters except tab and newline
const CONTROL = /[\u0000-\u0008\u000B-\u001F\u007F-\u009F\u200B-\u200F\u2028-\u202E\u2066-\u2069]/g

export type ContactErrors = { name?: string; message?: string }

// Drops every tag (and script/style contents) and returns plain text
function toPlainText(value: string) {
  const fragment = DOMPurify.sanitize(value, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
    KEEP_CONTENT: true,
    RETURN_DOM_FRAGMENT: true,
  })
  return fragment.textContent ?? ''
}

export function cleanName(value: string) {
  return toPlainText(value.normalize('NFC').replace(CONTROL, '')).replace(/\s+/g, ' ').trim()
}

export function cleanMessage(value: string) {
  return toPlainText(value.normalize('NFC').replace(/\r\n?/g, '\n').replace(CONTROL, ''))
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

// Validates the raw input; markup is rejected rather than silently rewritten
export function validateContact(rawName: string, rawMessage: string) {
  const name = cleanName(rawName)
  const message = cleanMessage(rawMessage)
  const errors: ContactErrors = {}

  if (MARKUP.test(rawName)) errors.name = 'Please use plain text only, without HTML or code tags.'
  else if (!name) errors.name = 'Please enter your name.'
  else if (name.length > NAME_MAX || !NAME_RULE.test(name))
    errors.name = `Use letters, spaces, dots, apostrophes or hyphens (max ${NAME_MAX}).`

  if (MARKUP.test(rawMessage)) errors.message = 'Please use plain text only, without HTML or code tags.'
  else if (message.length < MESSAGE_MIN) errors.message = `Please write at least ${MESSAGE_MIN} characters.`
  else if (message.length > MESSAGE_MAX) errors.message = `Please keep it under ${MESSAGE_MAX} characters.`

  return { name, message, errors }
}

// mailto link with an encoded subject and body
export function mailtoHref(to: string, subject: string, name: string, message: string) {
  const query = `subject=${encodeURIComponent(`${subject} ${name}`)}&body=${encodeURIComponent(`${message}\n\n${name}`)}`
  return `mailto:${to}?${query}`
}
