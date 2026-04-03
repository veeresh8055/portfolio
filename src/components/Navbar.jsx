import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navlink">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <a href="/resume/veeresh-resume.pdf" download="Veeresh-Resume.pdf">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
