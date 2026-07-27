import About from "./About"
import Profile from "./Profile"
import Projects from "./Projects"
import Stack from "./Stack"

export default function Home() {
  return (
    <div className="home">
      <Profile />
      <About />
      <Stack />
      <Projects limit={4} />
    </div>
  )
}
