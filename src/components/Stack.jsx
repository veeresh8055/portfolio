import { Badge } from "@/components/ui/badge"
import { BsOpenai } from "react-icons/bs"
import { PanelsTopLeft, Terminal } from "lucide-react"
import { DiPhotoshop } from "react-icons/di"
import {
  SiClaude,
  SiCursor,
  SiDocker,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiGreensock,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPosthog,
  SiRadixui,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si"

const toolIcons = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Java: SiOpenjdk,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  "Radix UI": SiRadixui,
  Motion: SiFramer,
  GSAP: SiGreensock,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  MySQL: SiMysql,
  Cursor: SiCursor,
  Claude: SiClaude,
  Gemini: SiGooglegemini,
  ChatGPT: BsOpenai,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  Vercel: SiVercel,
  OpenPanel: PanelsTopLeft,
  PostHog: SiPosthog,
  Figma: SiFigma,
  Photoshop: DiPhotoshop,
}

const stackGroups = [
  {
    name: "Language",
    icon: "code",
    tools: ["TypeScript", "JavaScript", "Java"],
  },
  {
    name: "Frontend",
    icon: "web",
    tools: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Radix UI", "Motion", "GSAP"],
  },
  {
    name: "Backend & Database",
    icon: "storage",
    tools: ["Node.js", "PostgreSQL", "MongoDB", "Redis" , "MySQL"] ,
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
    tools: ["Figma", "Photoshop" ],
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
                {group.tools.map((tool) => {
                  const SkillIcon = toolIcons[tool] ?? Terminal

                  return (
                    <Badge
                      key={tool}
                      variant="outline"
                      className="h-8 gap-1.5 rounded-full px-3 font-mono text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-muted">
                      <SkillIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                      {tool}
                    </Badge>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
