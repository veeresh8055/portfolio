import { useRef } from "react";

export default function ProjectCard({ img, video, title, stacks }) {
  const videoRef = useRef();

  const play = () => {
    videoRef.current.play();
  };

  const stop = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div className="projectCard">
      <div
        className="media"
        onMouseEnter={play}
        onMouseLeave={stop}
      >
        <img src={img} />
        <video ref={videoRef} className="preview-video" muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <h4>{title}</h4>

      <div className="stacks">
        {stacks.map((s, i) => (
          <img key={i} src={s} />
        ))}
      </div>
    </div>
  );
}