export const globalGameState: {
  scenes: string[];
  nextScene: string;
  currentScene: string;
  setNextScene: (sceneName: string) => void;
  setCurrentscene: (sceneName: string) => void;
} = {
  scenes: ["level-1", "level-2","level-3","level-4", "end"],
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
