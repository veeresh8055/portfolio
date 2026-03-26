export default function Profile() {
  const playSound = () => {
    const sound = new Audio("/audio/veeresh.mp3");
    sound.play();
  };

  return (
    <div className="profile">
      <div className="imgName">
        <img src="/images/profile.jpg" alt="profile" />

        <div className="name">
          <h2>
            Veeresh B C
            <img
              src="/svg/sound.svg"
              className="sound-icon"
              onClick={playSound}
            />
          </h2>

          <p>
            <span className="dot"></span> Open for work
          </p>
        </div>
      </div>

      <p>Love to build cool stuf and modern UI</p>
    </div>
  );
}