'use client'

import { Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { socials } from '@/data/assets'
import { site } from '@/data/site'
import { type ContactErrors, MESSAGE_MAX, NAME_MAX, mailtoHref, validateContact } from '@/lib/contact'

const { contact } = site

// Name + message, sent through the visitor's own email app via mailto
export function ContactForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<ContactErrors>({})

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = validateContact(name, message)
    setErrors(result.errors)
    if (result.errors.name || result.errors.message) return

    window.location.href = mailtoHref(socials.email, contact.subject, result.name, result.message)
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">{contact.formTitle}</h3>

      <fieldset className="fieldset">
        <label htmlFor="contact-name" className="fieldset-legend">
          {contact.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={NAME_MAX}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={contact.namePlaceholder}
          aria-invalid={Boolean(errors.name)}
          aria-describedby="contact-name-hint"
          className={`input w-full ${errors.name ? 'input-error' : ''}`}
        />
        <p id="contact-name-hint" className={`label whitespace-normal ${errors.name ? 'text-error' : ''}`}>
          {errors.name ?? contact.nameHint}
        </p>
      </fieldset>

      <fieldset className="fieldset">
        <label htmlFor="contact-message" className="fieldset-legend">
          {contact.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          maxLength={MESSAGE_MAX}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={contact.messagePlaceholder}
          aria-invalid={Boolean(errors.message)}
          aria-describedby="contact-message-hint"
          className={`textarea w-full resize-y ${errors.message ? 'textarea-error' : ''}`}
        />
        <p id="contact-message-hint" className={`label justify-between whitespace-normal ${errors.message ? 'text-error' : ''}`}>
          <span>{errors.message ?? contact.messageHint}</span>
          <span className="font-mono tabular-nums">
            {message.length}/{MESSAGE_MAX}
          </span>
        </p>
      </fieldset>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <button type="submit" className="btn btn-primary active:scale-[0.98]">
          <Send aria-hidden className="size-4" strokeWidth={1.5} />
          {contact.send}
        </button>
        <p className="text-sm text-base-content/60">{contact.note}</p>
      </div>
    </form>
  )
}
