import { Link, NavLink } from "react-router-dom"
import {
  ArrowUpRight,
  FileDown,
  FolderKanban,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import portfolioLogo from "@/assets/portfoiliologo.png"

const RESUME_URL = "https://drive.google.com/file/d/1R_c8snmijrRjPaZaWWvpwVH2sVH3DP-8/view"
const GITHUB_URL = "https://github.com/veeresh8055"
const LINKEDIN_URL = "https://www.linkedin.com/in/veeresh-chared/"

const navItems = [
  {
    label: "Projects",
    to: "/projects",
    icon: FolderKanban,
  },
]

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.15 9.15 0 0 1 12 7.88c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.48A10.3 10.3 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.4 8.05h4.2V24H.4V8.05ZM8.24 8.05h4.03v2.18h.06c.56-1.06 1.94-2.18 4-2.18 4.28 0 5.06 2.82 5.06 6.49V24h-4.2v-7.24c0-1.73-.03-3.95-2.41-3.95-2.42 0-2.79 1.89-2.79 3.83V24h-4.2V8.05Z" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          aria-label="Veeresh's portfolio home"
          className="group inline-flex size-15 items-center justify-center overflow-visible">
          <img
            src={portfolioLogo}
            alt="Veeresh portfolio logo"
            className="h-full w-full scale-125 object-contain transition-transform duration-500 group-hover:scale-[1.38]"
          />
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-500",
                    isActive
                      ? "border-foreground bg-foreground text-background shadow-sm"
                      : "border-border/60 bg-card/60 text-foreground hover:border-border hover:bg-card"
                  )
                }>
                <Icon className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
                {item.label}
              </NavLink>
            )
          })}

          <Button
            asChild
            className="rounded-full bg-emerald-400 text-black hover:bg-emerald-300 ">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2">
              <FileDown className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
              Resume
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile">
              <GitHubIcon className="h-6 w-6 transition-transform duration-500 hover:scale-110" />
            </a>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile">
              <LinkedInIcon className="h-5 w-5 transition-transform duration-500 hover:scale-110" />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
