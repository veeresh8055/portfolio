import ProjectCard from "./ProjectCard";

export default function Projects() {
  const data = [
    {
      title: "Portfolio Website",
      img: "/images/repo.png",
      video: "/videos/windows-11.mp4",
      stacks: ["/images/html-min.webp", "/images/css-min.webp", "/images/js-min.webp"],
    },
  ];

  return (
    <div className="project" id="project">
      <h2>Projects</h2>

      <div className="projectContent">
        {data.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}