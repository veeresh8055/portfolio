import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export default function ProjectCard({ project }) {
  const cardContent = (
    <article className="group h-full overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md sm:p-4">
      <div
        className={`relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${project.accent}`}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative rounded-xl border border-white/20 bg-background/80 px-5 py-4 text-center shadow-xl backdrop-blur-md">
          <span className="font-mono text-xs text-muted-foreground">PROJECT {project.label}</span>
          <p className="mt-1 font-heading text-lg font-semibold tracking-tight text-foreground">{project.title}</p>
        </div>
        <ArrowUpRight className="absolute right-3 top-3 size-5 text-foreground/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="px-1 pb-1 pt-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">{project.title}</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((technology) => (
            <Badge key={technology} variant="secondary" className="font-mono text-[0.7rem]">
              {technology}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )

  if (project.liveUrl) {
    return (
      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4">
        {cardContent}
      </a>
    )
  }

  return cardContent
}
