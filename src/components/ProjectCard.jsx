import { useRef, useState } from "react";

export default function ProjectCard({ image, video, title, stacks }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const play = () => {
    if (!videoRef.current) {
      return;
    }

    setIsHovered(true);
    const playPromise = videoRef.current.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  };

  const stop = () => {
    if (!videoRef.current) {
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsHovered(false);
  };

  return (
    <article className="projectCard">
      <div
        className={`media ${isHovered ? "is-hovered" : ""}`}
        onMouseEnter={play}
        onMouseLeave={stop}
        onFocus={play}
        onBlur={stop}
        tabIndex={0}
      >
        <img src={image} alt={`${title} preview`} className="preview-image" loading="lazy" />
        {video && (
          <video ref={videoRef} className="preview-video" muted loop playsInline>
            <source src={video} type="video/mp4" />
          </video>
        )}
      </div>

      <h4 className="projectTitle">{title}</h4>

      <div className="stacks">
        {stacks.map((stack) => (
          <span key={`${title}-${stack}`} className="stackTag">
            {stack}
          </span>
        ))}
      </div>
    </article>
  );
}
