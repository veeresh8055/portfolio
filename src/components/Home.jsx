import About from "./About"
import Contact from "./Contact"
import GitHubContributionGraph from "./GitHubContributionGraph"
import Profile from "./Profile"
import Projects from "./Projects"
import Stack from "./Stack"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

function SectionSeparator({ label, dashed = false }) {
  if (dashed) {
    return <Separator className="border-border border-b-2 border-dashed bg-transparent" />
  }

  return (
    <div className="flex items-center gap-4">
      <Separator className="flex-1" />
      <Badge className="h-6 shrink-0 rounded-full p-4 text-2xl font-medium  "    variant = "destructive">{label}</Badge>
      <Separator className="flex-1" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="home">
      <Profile />
      <div className="m-auto w-full max-w-full space-y-4 px-4 sm:px-5 lg:px-7">
        <SectionSeparator dashed />
        <SectionSeparator label="About" />
        <SectionSeparator dashed />
      </div>
      <About />
      <div className="mx-auto w-full max-w-full space-y-4 px-4 sm:px-5 lg:px-7">
        <SectionSeparator dashed />
        <SectionSeparator label="Stacks" />
        <SectionSeparator dashed />
       
      </div>
      <Stack />
      <div className="mx-auto w-full max-w-full space-y-4 px-4 sm:px-5 lg:px-7">
        <SectionSeparator dashed />
        <SectionSeparator label="Projects" />
        <SectionSeparator dashed />
      </div>
      <Projects limit={4} />
      <div className="mx-auto w-full max-w-full space-y-4 px-4 sm:px-5 lg:px-7">
        <SectionSeparator dashed />
        <SectionSeparator label="GitHub Contributions" />
        <SectionSeparator dashed />
      </div>
      <GitHubContributionGraph />
      <div className="mx-auto w-full max-w-full space-y-4 px-4 sm:px-5 lg:px-7">
        <SectionSeparator dashed />
        <SectionSeparator label="Contact Me" />
        <SectionSeparator dashed />
      </div>
      <Contact />
    </div>
  )
}
