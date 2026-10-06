import { getWhatsAppUrl } from '../../data/siteConfig'

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M20.5 3.5A11 11 0 0 0 2.4 17.8L1 23l5.3-1.4A11 11 0 0 0 12 23c6.1 0 11-4.9 11-11 0-2.9-1.2-5.6-3.5-7.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.2.8.8-3.1-.2-.3A9 9 0 1 1 12 21zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1c-.2.1-.3.2-.6.1s-1.2-.4-2.2-1.4c-.8-.8-1.4-1.7-1.5-2s0-.4.1-.6l.5-.6c.1-.2.1-.3 0-.5l-.9-2.1c-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3 2 3.1 4.9 4.2c1.8.7 2.3.7 3.1.6.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.1-1.3s-.2-.2-.5-.3z" />
      </svg>
    </a>
  )
}
