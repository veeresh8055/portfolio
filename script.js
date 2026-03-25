// name sound
const nameSound = document.getElementById("nameSound");

if (nameSound) {
  const sound = new Audio("./audio/veeresh.mp3");

  nameSound.addEventListener("click", () => {
    sound.currentTime = 0; // restart if clicked again
    sound.play();
  });
}

//theme change 
const button = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const THEME_STORAGE_KEY = "theme";
const DARK_CLASS_NAME = "theme-dark";

function getInitialTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "dark") return true;
  if (savedTheme === "light") return false;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

function applyTheme(isDarkMode) {
  document.body.classList.toggle(DARK_CLASS_NAME, isDarkMode);

  if (!button || !themeIcon) return;

  themeIcon.src = isDarkMode ? "./svg/light.svg" : "./svg/dark.svg";
  themeIcon.alt = isDarkMode ? "light mode icon" : "dark mode icon";
  button.setAttribute(
    "aria-label",
    isDarkMode ? "Switch to light mode" : "Switch to dark mode",
  );
  button.setAttribute("aria-pressed", String(isDarkMode));
}

applyTheme(getInitialTheme());

if (button) {
  button.addEventListener("click", () => {
    const nextIsDarkMode = !document.body.classList.contains(DARK_CLASS_NAME);
    applyTheme(nextIsDarkMode);
    localStorage.setItem(
      THEME_STORAGE_KEY,
      nextIsDarkMode ? "dark" : "light",
    );
  });
}



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





























//oneko code

(function oneko() {
  const mediaQuery = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null;
  const isReducedMotion = Boolean(mediaQuery && mediaQuery.matches);

  const existingNeko = document.getElementById("oneko");
  if (existingNeko) {
    existingNeko.remove();
  }

  const nekoEl = document.createElement("div");
  let persistPosition = true;

  let nekoPosX = 32;
  let nekoPosY = 32;
  
  let mousePosX = 0;
  let mousePosY = 0;

  let frameCount = 0;
  let idleTime = 0;
  let idleAnimation = null;
  let idleAnimationFrame = 0;

  const nekoSpeed = 10;
  const spriteSets = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratchSelf: [
      [-5, 0],
      [-6, 0],
      [-7, 0],
    ],
    scratchWallN: [
      [0, 0],
      [0, -1],
    ],
    scratchWallS: [
      [-7, -1],
      [-6, -2],
    ],
    scratchWallE: [
      [-2, -2],
      [-2, -3],
    ],
    scratchWallW: [
      [-4, 0],
      [-4, -1],
    ],
    tired: [[-3, -2]],
    sleeping: [
      [-2, 0],
      [-2, -1],
    ],
    N: [
      [-1, -2],
      [-1, -3],
    ],
    NE: [
      [0, -2],
      [0, -3],
    ],
    E: [
      [-3, 0],
      [-3, -1],
    ],
    SE: [
      [-5, -1],
      [-5, -2],
    ],
    S: [
      [-6, -3],
      [-7, -2],
    ],
    SW: [
      [-5, -3],
      [-6, -1],
    ],
    W: [
      [-4, -2],
      [-4, -3],
    ],
    NW: [
      [-1, 0],
      [-1, -1],
    ],
  };

  function parseStoredNekoState() {
    try {
      const rawNekoState = window.localStorage.getItem("oneko");
      if (!rawNekoState) {
        return null;
      }
      const parsedNekoState = JSON.parse(rawNekoState);
      if (!parsedNekoState || typeof parsedNekoState !== "object") {
        return null;
      }
      return parsedNekoState;
    } catch (error) {
      return null;
    }
  }

  function init() {
    let nekoFile = "./oneko.gif";
    const curScript = document.currentScript;
    if (curScript && curScript.dataset.cat) {
      nekoFile = curScript.dataset.cat;
    }
    if (curScript && curScript.dataset.persistPosition) {
      if (curScript.dataset.persistPosition === "") {
        persistPosition = true;
      } else {
        persistPosition = JSON.parse(curScript.dataset.persistPosition.toLowerCase());
      }
    }
  
    if (persistPosition) {
      const storedNeko = parseStoredNekoState();
      if (storedNeko !== null) {
        nekoPosX = typeof storedNeko.nekoPosX === "number" ? storedNeko.nekoPosX : nekoPosX;
        nekoPosY = typeof storedNeko.nekoPosY === "number" ? storedNeko.nekoPosY : nekoPosY;
        mousePosX = typeof storedNeko.mousePosX === "number" ? storedNeko.mousePosX : mousePosX;
        mousePosY = typeof storedNeko.mousePosY === "number" ? storedNeko.mousePosY : mousePosY;
        frameCount = typeof storedNeko.frameCount === "number" ? storedNeko.frameCount : frameCount;
        idleTime = typeof storedNeko.idleTime === "number" ? storedNeko.idleTime : idleTime;
        idleAnimation = typeof storedNeko.idleAnimation === "string" ? storedNeko.idleAnimation : idleAnimation;
        idleAnimationFrame =
          typeof storedNeko.idleAnimationFrame === "number"
            ? storedNeko.idleAnimationFrame
            : idleAnimationFrame;
        if (typeof storedNeko.bgPos === "string") {
          nekoEl.style.backgroundPosition = storedNeko.bgPos;
        }
      }
    }
  
    nekoEl.id = "oneko";
    nekoEl.ariaHidden = true;
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.position = "fixed";
    nekoEl.style.pointerEvents = "none";
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
    nekoEl.style.zIndex = 2147483647;
    nekoEl.style.backgroundRepeat = "no-repeat";

    nekoEl.style.backgroundImage = `url(${nekoFile})`;
    
    document.body.appendChild(nekoEl);

    document.addEventListener("mousemove", function (event) {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    });
    
    if (persistPosition) {
      window.addEventListener("beforeunload", function () {
        try {
          window.localStorage.setItem(
            "oneko",
            JSON.stringify({
              nekoPosX: nekoPosX,
              nekoPosY: nekoPosY,
              mousePosX: mousePosX,
              mousePosY: mousePosY,
              frameCount: frameCount,
              idleTime: idleTime,
              idleAnimation: idleAnimation,
              idleAnimationFrame: idleAnimationFrame,
              bgPos: nekoEl.style.backgroundPosition,
            })
          );
        } catch (error) {
          // Ignore storage errors (private mode/quota/security restrictions).
        }
      });
    }

    if (isReducedMotion) {
      setSprite("idle", 0);
      return;
    }

    window.requestAnimationFrame(onAnimationFrame);
  }

  let lastFrameTimestamp;

  function onAnimationFrame(timestamp) {
    // Stops execution if the neko element is removed from DOM
    if (!nekoEl.isConnected) {
      return;
    }
    if (!lastFrameTimestamp) {
      lastFrameTimestamp = timestamp;
    }
    if (timestamp - lastFrameTimestamp > 100) {
      lastFrameTimestamp = timestamp;
      frame();
    }
    window.requestAnimationFrame(onAnimationFrame);
  }

  function setSprite(name, frame) {
    const sprite = spriteSets[name][frame % spriteSets[name].length];
    nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
  }

  function resetIdleAnimation() {
    idleAnimation = null;
    idleAnimationFrame = 0;
  }

  function idle() {
    idleTime += 1;

    // every ~ 20 seconds
    if (
      idleTime > 10 &&
      Math.floor(Math.random() * 200) == 0 &&
      idleAnimation == null
    ) {
      let avalibleIdleAnimations = ["sleeping", "scratchSelf"];
      if (nekoPosX < 32) {
        avalibleIdleAnimations.push("scratchWallW");
      }
      if (nekoPosY < 32) {
        avalibleIdleAnimations.push("scratchWallN");
      }
      if (nekoPosX > window.innerWidth - 32) {
        avalibleIdleAnimations.push("scratchWallE");
      }
      if (nekoPosY > window.innerHeight - 32) {
        avalibleIdleAnimations.push("scratchWallS");
      }
      idleAnimation =
        avalibleIdleAnimations[
          Math.floor(Math.random() * avalibleIdleAnimations.length)
        ];
    }

    switch (idleAnimation) {
      case "sleeping":
        if (idleAnimationFrame < 8) {
          setSprite("tired", 0);
          break;
        }
        setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
        if (idleAnimationFrame > 192) {
          resetIdleAnimation();
        }
        break;
      case "scratchWallN":
      case "scratchWallS":
      case "scratchWallE":
      case "scratchWallW":
      case "scratchSelf":
        setSprite(idleAnimation, idleAnimationFrame);
        if (idleAnimationFrame > 9) {
          resetIdleAnimation();
        }
        break;
      default:
        setSprite("idle", 0);
        return;
    }
    idleAnimationFrame += 1;
  }

  function frame() {
    frameCount += 1;
    const diffX = nekoPosX - mousePosX;
    const diffY = nekoPosY - mousePosY;
    const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

    if (distance < nekoSpeed || distance < 48) {
      idle();
      return;
    }

    idleAnimation = null;
    idleAnimationFrame = 0;

    if (idleTime > 1) {
      setSprite("alert", 0);
      // count down after being alerted before moving
      idleTime = Math.min(idleTime, 7);
      idleTime -= 1;
      return;
    }

    let direction;
    direction = diffY / distance > 0.5 ? "N" : "";
    direction += diffY / distance < -0.5 ? "S" : "";
    direction += diffX / distance > 0.5 ? "W" : "";
    direction += diffX / distance < -0.5 ? "E" : "";
    setSprite(direction, frameCount);

    nekoPosX -= (diffX / distance) * nekoSpeed;
    nekoPosY -= (diffY / distance) * nekoSpeed;

    nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
    nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
  }

  init();
})();
