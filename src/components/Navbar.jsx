import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    setDark(isDark);
    document.body.classList.toggle("theme-dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.body.classList.toggle("theme-dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div className="navbar">
      <div className="nav">
        <a href="#">Home</a>
        <a href="#project">Project</a>
        <a href="#">Resume</a>
      </div>

      <button className="toggle" onClick={toggleTheme}>
        <img
          src={dark ? "/svg/light.svg" : "/svg/dark.svg"}
          alt="theme"
        />
      </button>
    </div>
  );
}