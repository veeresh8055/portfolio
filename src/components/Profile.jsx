import soundIcon from "../assets/svg/sound.svg";

export default function Profile() {
  const playSound = () => {
    const sound = new Audio("/audio/veeresh.mp3");
    sound.play();
  };

  return (
    <section className="profile">
      <div className="imgName">
        <div className="img">
          <img src="/images/profile.jpg" alt="Veeresh profile" />
        </div>

        <div className="name">

          <h2>
            Veeresh B C
           
            <button
              type="button"
              className="sound-btn"
              onClick={playSound}
              aria-label="Play intro sound"
               title="name prounounciation"
            >
              <img src={soundIcon} className="sound-icon" alt="" aria-hidden="true" />
            </button>
          </h2>

          <p className="bio">Love to build cool stuff </p>
        </div>
      </div>
    </section>
  );
}
