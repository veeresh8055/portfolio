import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function ProjectsPage() {
  return (
    <div className="main">
      <Navbar />
      <Projects showAll />
    </div>
  );
}
