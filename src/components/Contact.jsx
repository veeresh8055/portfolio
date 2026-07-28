import { useState } from "react"
import emailjs from "@emailjs/browser"
import { GitBranch, Mail, MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const serviceId = "service_unz6ese"
const recipientEmail = "veereshbchared@gmail.com"
const githubUrl = "https://github.com/veeresh8055"

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState("idle")
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!templateId || !publicKey) {
      setStatus("configuration-error")
      return
    }

    setStatus("sending")

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          phone: form.phone || "Not provided",
          message: form.message,
          to_email: recipientEmail,
        },
        { publicKey }
      )
      setForm(initialForm)
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-5 sm:py-10 lg:px-7">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
        <div className="flex flex-col justify-center">
          <p className="font-mono text-sm text-muted-foreground">Open to opportunities</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Let&apos;s talk.</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Have a project in mind? I&apos;d love to hear from you and explore how we can build it together.
          </p>

          <div className="mt-8 space-y-4">
            <a className="group flex items-center gap-3" href={`mailto:${recipientEmail}`}>
              <span className="inline-flex size-11 items-center justify-center rounded-full border border-border/60 bg-card shadow-sm transition-colors group-hover:bg-muted"><Mail className="size-5 text-muted-foreground" /></span>
              <span className="font-medium group-hover:underline group-hover:underline-offset-4">{recipientEmail}</span>
            </a>
            <a className="group flex items-center gap-3" href={githubUrl} target="_blank" rel="noreferrer">
              <span className="inline-flex size-11 items-center justify-center rounded-full border border-border/60 bg-card shadow-sm transition-colors group-hover:bg-muted"><GitBranch className="size-5 text-muted-foreground" /></span>
              <span className="font-medium group-hover:underline group-hover:underline-offset-4">github.com/veeresh8055</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="inline-flex size-11 items-center justify-center rounded-full border border-border/60 bg-card shadow-sm"><MapPin className="size-5" /></span>
              <span>India · Available remotely</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-border/60 bg-card/70 p-5 shadow-sm sm:p-7">
          <h3 className="text-2xl font-semibold tracking-tight">Send a message</h3>
          <Separator className="my-5" />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" required><input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required /></Field>
            <Field label="Email" required><input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required /></Field>
          </div>
          <div className="mt-5"><Field label="Phone"><input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" /></Field></div>
          <div className="mt-5"><Field label="Message" required><textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required rows={5} /></Field></div>
          <Button className="mt-6 w-full rounded-lg" type="submit" disabled={status === "sending"}>
            <Send className="size-4" /> {status === "sending" ? "Sending…" : "Send message"}
          </Button>
          {status === "success" && <p className="mt-4 text-sm text-emerald-600">Thanks — your message has been sent.</p>}
          {status === "error" && <p className="mt-4 text-sm text-destructive">Your message could not be sent. Please try again or email me directly.</p>}
          {status === "configuration-error" && <p className="mt-4 text-sm text-muted-foreground">Add your EmailJS template ID and public key to enable this form.</p>}
        </form>
      </div>
    </section>
  )
}

function Field({ label, required, children }) {
  return (
    <label className="block text-sm font-medium">
      {label} {required && <span className="text-destructive">*</span>}
      <span className="mt-2 block [&>input]:h-11 [&>input]:w-full [&>input]:rounded-lg [&>input]:border [&>input]:border-border/70 [&>input]:bg-background [&>input]:px-3 [&>input]:text-sm [&>input]:outline-none [&>input]:transition-colors [&>input]:focus:border-foreground/50 [&>textarea]:w-full [&>textarea]:resize-y [&>textarea]:rounded-lg [&>textarea]:border [&>textarea]:border-border/70 [&>textarea]:bg-background [&>textarea]:p-3 [&>textarea]:text-sm [&>textarea]:outline-none [&>textarea]:transition-colors [&>textarea]:focus:border-foreground/50">
        {children}
      </span>
    </label>
  )
}
