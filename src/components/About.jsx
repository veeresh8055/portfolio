import { useEffect, useState } from "react"

const timeFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
})

const aboutItems = [
  { icon: "code", text: "Frontend Developer & Designer" },
  { icon: "lightbulb", text: "Open-source contributor" },
  { icon: "location_on", text: " India" },
]

const EMAIL = "veereshbchared@gmail.com"
const WEBSITE_URL = "https://veeresh.developer"

function AboutItem({ icon, text, href, onCopy, copied }) {
  return (
    <li
      className={`group grid min-h-8 items-center gap-3 text-sm text-foreground sm:text-base ${
        onCopy ? "grid-cols-[2rem_minmax(0,1fr)_2rem]" : "grid-cols-[2rem_minmax(0,1fr)]"
      }`}>
      <span
        className="material-symbols-rounded inline-flex size-8 items-center justify-center rounded-lg border border-border/70 bg-background/80 text-[18px] leading-none text-muted-foreground shadow-sm"
        aria-hidden="true">
        {icon}
      </span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="w-fit font-mono tracking-tight underline decoration-transparent underline-offset-4 transition-colors hover:cursor-pointer hover:decoration-current focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4">
          {text}
        </a>
      ) : (
        <span className="font-mono tracking-tight">{text}</span>
      )}
      {onCopy && (
        <button
          type="button"
          onClick={onCopy}
          className="material-symbols-rounded inline-flex size-8 items-center justify-center rounded-lg border border-border/70 bg-background/80 text-[17px] text-muted-foreground opacity-0 transition-all hover:border-foreground/30 hover:text-foreground focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 group-hover:opacity-100"
          aria-label={copied ? "Email copied" : "Copy email"}
          title={copied ? "Copied" : "Copy email"}>
          {copied ? "check" : "content_copy"}
        </button>
      )}
    </li>
  )
}

export default function About() {
  const [currentTime, setCurrentTime] = useState(() => timeFormatter.format(new Date()))
  const [emailCopied, setEmailCopied] = useState(false)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(timeFormatter.format(new Date()))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setEmailCopied(true)
    window.setTimeout(() => setEmailCopied(false), 1600)
  }

  const contactItems = [
    { icon: "schedule", text: `${currentTime} IST` },
    { icon: "mail", text: EMAIL, onCopy: copyEmail, copied: emailCopied },
    { icon: "link", text: "veeresh.developer", href: WEBSITE_URL },
  ]

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-5 sm:py-10 lg:px-7">
      <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/70 shadow-sm">
        <div className="grid md:grid-cols-2">
          <ul className="space-y-4 p-5 sm:p-6">
            {aboutItems.map((item) => (
              <AboutItem key={item.icon} {...item} />
            ))}
          </ul>

          <ul className="space-y-4 border-t border-border/60 p-5 sm:p-6 md:border-t-0 md:border-l">
            {contactItems.map((item) => (
              <AboutItem key={item.icon} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
