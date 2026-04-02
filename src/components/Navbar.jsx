const Navbar = () => {
  const cleanPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isProjectsPage = cleanPath === "/projects";

  return (
    <div className="navbar">
      <div className="navlink">
        <li className={!isProjectsPage ? "active" : ""}>
          <a href="/">Home</a>
        </li>
        <li className={isProjectsPage ? "active" : ""}>
          <a href="/projects">
            Projects
          </a>
        </li>
        <li>
          <a href="/resume/veeresh-resume.pdf" download="Veeresh-Resume.pdf">
            Resume
          </a>
        </li>
      </div>
    </div>
  );
};
export default Navbar;
