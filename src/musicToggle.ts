import "./styles/musicToggle.css";
import { k } from "./kaboomCtx";

export function musicToggleHTML() {
  const toggleContainer = document.createElement("div");

  toggleContainer.innerHTML = `
    <img id="toggle" src="src/styles/assets/volume-off.svg" />
  `;
  document.body.appendChild(toggleContainer);

  let musicInstance: any;
  let isPlaying: boolean = false;

  const musicBtn = document.getElementById("toggle") as HTMLImageElement;

  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      playMusic();
      isPlaying = true;
      musicBtn.src = "src/styles/assets/volume-on.svg";
    } else {
      stopMusic();
      isPlaying = false;
      musicBtn.src = "src/styles/assets/volume-off.svg";
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
