import { SceneName } from "kaboom";

export const globalGameState: {
  scenes: string[];
  nextScene: string;
  currentScene: string;
  setNextScene: (SceneName: string) => void;
  setCurrentscene: (SceneName: string) => void;
} = {
  scenes: ["level-1", "level-2", "end"],
  nextScene: "",
  currentScene: "level-1",
  setCurrentscene(sceneName: string) {
    if (this.scenes.includes(sceneName)) {
      this.currentScene = sceneName;
    }
  },
  setNextScene(sceneName: string) {
    if (this.scenes.includes(sceneName)) {
      this.nextScene = sceneName;
    }
  },
};
