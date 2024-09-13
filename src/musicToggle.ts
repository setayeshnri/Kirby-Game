import "./styles/musicToggle.css";
import { k } from "./kaboomCtx";
import musicOff from "./styles/assets/volume-off.svg";
import musicOn from "./styles/assets/volume-on.svg";
export function musicToggleHTML() {
  const toggleContainer = document.createElement("div");

  toggleContainer.innerHTML = `
    <img id="toggle" src="${musicOff}" />
  `;
  document.body.appendChild(toggleContainer);

  let musicInstance: any;
  let isPlaying: boolean = false;

  const musicBtn = document.getElementById("toggle") as HTMLImageElement;

  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      playMusic();
      isPlaying = true;
      musicBtn.src = musicOn
    } else {
      stopMusic();
      isPlaying = false;
      musicBtn.src = musicOff;
    }
  });

  function loadMusic() {
    return k.loadSound("music", "./src/styles/assets/Pixelland.mp3");
  }

  function playMusic() {
    if (!musicInstance) {
      loadMusic().then(() => {
        musicInstance = k.play("music", {
          loop: true,
          volume: 0.5,
        });
      });
      focusGameCanvas();
    } else {
      musicInstance.play();
    }
  }

  function stopMusic() {
    if (musicInstance) {
      musicInstance.stop();
      musicInstance = null;
    }
    focusGameCanvas();
  }

  function focusGameCanvas() {
    const gameCanvas = document.querySelector("canvas");
    if (gameCanvas) {
      gameCanvas.focus();
    }
  }
}
