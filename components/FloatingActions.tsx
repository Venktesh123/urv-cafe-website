import { site, whatsappLink } from "@/lib/site";

// Sticky call / WhatsApp buttons — always one tap away on mobile.
export default function FloatingActions() {
  return (
    <div className="fab-wrap">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fab fab-wa"
        aria-label="Order on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.4.7 4.7 1.9 6.7L3 29l6.9-2.1c1.9 1 4 1.6 6.1 1.6 7 0 12.7-5.7 12.7-12.7S23 3 16 3Zm0 23.2c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.1 1.2 1.2-4-.3-.4a10.4 10.4 0 0 1-1.6-5.6C5.4 9.9 10.1 5.3 16 5.3s10.6 4.7 10.6 10.4S21.8 26.2 16 26.2Zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.6 8.6 0 0 1-4.3-3.7c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.6.7.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4Z"
          />
        </svg>
        <span className="fab-label">WhatsApp</span>
      </a>
      <a href={site.phoneHref} className="fab fab-call" aria-label={`Call ${site.phone}`}>
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z"
          />
        </svg>
        <span className="fab-label">Call now</span>
      </a>
    </div>
  );
}
