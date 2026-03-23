document.addEventListener("DOMContentLoaded", () => {
  const mediaCards = document.querySelectorAll(".projectCard .media");

  mediaCards.forEach((media) => {
    const card = media.closest(".projectCard");
    const video = media.querySelector(".preview-video");

    if (!card || !video) return;

    const playPreview = () => {
      card.classList.add("is-playing");
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    };

    const stopPreview = () => {
      card.classList.remove("is-playing");
      video.pause();
      video.currentTime = 0;
    };

    media.addEventListener("mouseenter", playPreview);
    media.addEventListener("mouseleave", stopPreview);
  });
});
