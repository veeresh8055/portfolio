import ProjectCard from "./ProjectCard"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

export default function Projects({ limit }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-5 sm:py-10 lg:px-7">
      <div className="mb-7 sm:mb-9">
        <p className="font-mono text-sm text-muted-foreground">Selected work</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A selection of things I have built, explored, and shipped.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {limit && projects.length > limit && (
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline">
            <Link to="/projects">
              More projects
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      )}
    </section>
  )
}
