import { Badge } from "@/components/ui/badge"

const stackGroups = [
  {
    name: "Language",
    icon: "code",
    tools: ["TypeScript", "JavaScript", "Python"],
  },
  {
    name: "Frontend",
    icon: "web",
    tools: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Radix UI", "Motion", "TanStack"],
  },
  {
    name: "Backend & Database",
    icon: "storage",
    tools: ["Node.js", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "Workflow & AI",
    icon: "auto_awesome",
    tools: ["Cursor", "Claude", "Gemini", "ChatGPT", "Git", "GitHub", "Docker", "Vercel"],
  },
  {
    name: "Analytics",
    icon: "monitoring",
    tools: ["OpenPanel", "PostHog"],
  },
  {
    name: "Design",
    icon: "palette",
    tools: ["Figma", "Paper", "Photoshop"],
  },
]

export default function Stack() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-5 sm:py-10 lg:px-7">
      <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/70 shadow-sm">

        <div>
          {stackGroups.map((group, index) => (
            <div
              key={group.name}
              className="grid border-b border-border/60 last:border-b-0 md:grid-cols-[minmax(13rem,0.8fr)_minmax(0,1.6fr)]">
              <div className="flex items-center gap-3 border-border/60 px-5 py-5 sm:px-7 md:border-r">
                <span className="font-mono text-sm text-muted-foreground/70">{String(index + 1).padStart(2, "0")}</span>
                <span className="material-symbols-rounded text-[21px] leading-none text-muted-foreground" aria-hidden="true">
                  {group.icon}
                </span>
                <h3 className="text-lg text-muted-foreground sm:text-xl">{group.name}</h3>
              </div>

              <div className="flex flex-wrap content-center gap-2 px-5 py-5 sm:px-7">
                {group.tools.map((tool) => (
                  <Badge
                    key={tool}
                    variant="outline"
                    className="h-8 gap-1.5 rounded-full px-3 font-mono text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-muted">
                    <span className="material-symbols-rounded text-[16px] leading-none text-muted-foreground" aria-hidden="true">
                      terminal
                    </span>
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
