import "./styles/style.scss";
import { useEffect } from "react";

function App() {

  // 🔥 ONEKO INIT
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/oneko.js"; // we create this file
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const playSound = () => {
    const sound = new Audio("/audio/veeresh.mp3");
    sound.play();
  };

  const toggleTheme = () => {
    const isDark = document.body.classList.toggle("theme-dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("theme-dark");
    }
  }, []);

  return (
    <div className="main">
      
      {/* NAVBAR */}
      <div className="navbar">
        <div className="nav">
          <a href="#">Home</a>
          <a href="#project">Project</a>
          <a href="#">Resume</a>
        </div>

        <button className="toggle" onClick={toggleTheme}>
          <img src="/svg/dark.svg" alt="theme" />
        </button>
      </div>

      <div className="container">

        {/* PROFILE */}
        <div className="profile">
          <div className="imgName">
            <img src="/images/profile.jpg" />

            <div className="name">
              <h2>
                Veeresh B C
                <img
                  src="/svg/sound.svg"
                  id="nameSound"
                  onClick={playSound}
                />
              </h2>

              <p><span className="dot"></span> Open for work</p>
            </div>
          </div>

          <p>Love to build cool stuf and modern UI</p>
        </div>

        {/* ABOUT */}
        <div className="about">
          <h2>About</h2>

          <div className="aboutContent">
            <div className="aboutOne">
              <p><img src="/svg/location.svg" /> Gadag, Karnataka</p>
              <p><img src="/svg/location.svg" /> +91112223330</p>
              <p><img src="/svg/link.svg" /> veeresh.me</p>
            </div>

            <div className="aboutTwo">
              <p><img src="/svg/location.svg" /> 12:22</p>
              <p><img src="/svg/mail.svg" /> veeresh@gmail.com</p>
              <p><img src="/svg/gender.svg" /> he/him</p>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="project" id="project">
          <h2>Projects</h2>

          <div className="projectContent">

            <div className="projectCard">
              <div
                className="media"
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  video.play();
                  e.currentTarget.parentElement.classList.add("is-playing");
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  video.pause();
                  video.currentTime = 0;
                  e.currentTarget.parentElement.classList.remove("is-playing");
                }}
              >
                <img src="/images/repo.png" />

                <video className="preview-video" muted loop>
                  <source src="/videos/windows-11.mp4" />
                </video>
              </div>

              <h4>Portfolio Website</h4>

              <div className="stacks">
                <img src="/images/html-min.webp" />
                <img src="/images/css-min.webp" />
                <img src="/images/js-min.webp" />
              </div>
            </div>

            {/* COPY SAME FOR OTHER CARDS */}
          </div>
        </div>

        <div className="skills">
          <h2>stack</h2>
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default App;