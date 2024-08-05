import { globalGameState } from "./state";
import { k } from "./kaboomCtx";
import {
  makeBirdEnemy,
  makeFlameEnemy,
  makeGuyEnemy,
  makePlayer,
  setControls,
} from "./entities";

import { makeMap } from "./utils";

async function gameSetup() {
  k.loadSprite("assets", "./kirby-like.png", {
    sliceX: 9,
    sliceY: 10,
    anims: {
      kirbIdle: 0,
      kirbInhaling: 1,
      kirbFull: 2,
      kirbInhaleEffect: { from: 3, to: 8, speed: 15, loop: true },
      shootingStar: 9,
      flame: { from: 36, to: 37, speed: 4, loop: true },
      guyIdle: 18,
      guyWalk: { from: 18, to: 19, speed: 4, loop: true },
      bird: { from: 27, to: 28, speed: 4, loop: true },
    },
  });
  k.loadSprite("level-1", "./level-1.png");
  k.loadSprite("level-2", "./level-2.png");
  k.loadSprite("level-3", "./level-3.png");
  k.loadSprite("level-4", "./level-4.png");
  k.add([k.rect(k.width(), k.height()), k.color(0, 0, 0), k.fixed()]);

  const { map: level1Layout, spawnPoints: level1SpawnPoints } = await makeMap(
    k,
    "level-1"
  );
  const { map: level2Layout, spawnPoints: level2SpawnPoints } = await makeMap(
    k,
    "level-2"
  );
  const { map: level3Layout, spawnPoints: level3SpawnPoints } = await makeMap(
    k,
    "level-3"
  );
  const { map: level4Layout, spawnPoints: level4SpawnPoints } = await makeMap(
    k,
    "level-4"
  );
  if (
    !level1SpawnPoints ||
    !level1SpawnPoints.player ||
    level1SpawnPoints.player.length === 0
  ) {
  }
  k.scene("level-1", () => {
    globalGameState.setCurrentscene("level-1");
    globalGameState.setNextScene("level-2");
    k.setGravity(2100);
    k.add([
      k.rect(k.width(), k.height()),
      k.color(k.Color.fromHex("#f7d7db")),
      k.fixed(),
    ]);
    k.add(level1Layout);

    const kirb = makePlayer(
      k,
      level1SpawnPoints.player[0].x,
      level1SpawnPoints.player[0].y
    );
    setControls(k, kirb);
    k.add(kirb);
    k.camScale(k.vec2(0.66));
    k.onUpdate(() => {
      if (kirb.pos.x < level1Layout.pos.x + 432)
        k.camPos(kirb.pos.x + 500, 740);
    });
    for (const flame of level1SpawnPoints.flame) {
      makeFlameEnemy(k, flame.x, flame.y);
    }
    for (const guy of level1SpawnPoints.guy) {
      makeGuyEnemy(k, guy.x, guy.y);
    }
    for (const bird of level1SpawnPoints.bird) {
      const possibleSpeeds = [100, 200, 300];
      k.loop(10, () => {
        makeBirdEnemy(
          k,
          bird.x,
          bird.y,
          possibleSpeeds[Math.floor(Math.random() * possibleSpeeds.length)]
        );
      });
    }
  });
  k.scene("level-2", () => {
    globalGameState.setCurrentscene("level-2");
    globalGameState.setNextScene("level-3");
    k.setGravity(2100);
    k.add([
      k.rect(k.width(), k.height()),
      k.color(k.Color.fromHex("#f7d7db")),
      k.fixed(),
    ]);
    k.add(level2Layout);

    const kirb = makePlayer(
      k,
      level2SpawnPoints.player[0].x,
      level2SpawnPoints.player[0].y
    );
    setControls(k, kirb);
    k.add(kirb);
    k.camScale(k.vec2(0.67));
    k.onUpdate(() => {
      if (kirb.pos.x < level3Layout.pos.x + 1000)
        k.camPos(kirb.pos.x + 500, 650);
    });
    for (const flame of level2SpawnPoints.flame) {
      makeFlameEnemy(k, flame.x, flame.y);
    }
    for (const guy of level2SpawnPoints.guy) {
      makeGuyEnemy(k, guy.x, guy.y);
    }
    for (const bird of level2SpawnPoints.bird) {
      const possibleSpeeds = [100, 200, 300];
      k.loop(10, () => {
        makeBirdEnemy(
          k,
          bird.x,
          bird.y,
          possibleSpeeds[Math.floor(Math.random() * possibleSpeeds.length)]
        );
      });
    }
  });
  k.scene("level-3", () => {
    globalGameState.setCurrentscene("level-3");
    globalGameState.setNextScene("level-4");
    k.setGravity(2100);
    k.add([
      k.rect(k.width(), k.height()),
      k.color(k.Color.fromHex("#f7d7db")),
      k.fixed(),
    ]);
    k.add(level3Layout);

    const kirb = makePlayer(
      k,
      level3SpawnPoints.player[0].x,
      level3SpawnPoints.player[0].y
    );
    setControls(k, kirb);
    k.add(kirb);
    k.camScale(k.vec2(0.66));
    k.onUpdate(() => {
      if (kirb.pos.x < level3Layout.pos.x + 2100)
        k.camPos(kirb.pos.x + 500, 760);
    });
    for (const flame of level3SpawnPoints.flame) {
      makeFlameEnemy(k, flame.x, flame.y);
    }
    for (const guy of level3SpawnPoints.guy) {
      makeGuyEnemy(k, guy.x, guy.y);
    }
    for (const bird of level3SpawnPoints.bird) {
      const possibleSpeeds = [100, 200, 300];
      k.loop(10, () => {
        makeBirdEnemy(
          k,
          bird.x,
          bird.y,
          possibleSpeeds[Math.floor(Math.random() * possibleSpeeds.length)]
        );
      });
    }
  });
  k.scene("level-4", () => {
    globalGameState.setCurrentscene("level-4");
    globalGameState.setNextScene("level-1");
    k.setGravity(2100);
    k.add([
      k.rect(k.width(), k.height()),
      k.color(k.Color.fromHex("#f7d7db")),
      k.fixed(),
    ]);
    k.add(level4Layout);

    const kirb = makePlayer(
      k,
      level4SpawnPoints.player[0].x,
      level4SpawnPoints.player[0].y
    );
    setControls(k, kirb);
    k.add(kirb);
    k.camScale(k.vec2(0.67));
    k.onUpdate(() => {
      if (kirb.pos.x < level4Layout.pos.x + 2700)
        k.camPos(kirb.pos.x + 500, 650);
    });
    for (const flame of level4SpawnPoints.flame) {
      makeFlameEnemy(k, flame.x, flame.y);
    }
    for (const guy of level4SpawnPoints.guy) {
      makeGuyEnemy(k, guy.x, guy.y);
    }
    for (const bird of level4SpawnPoints.bird) {
      const possibleSpeeds = [100, 200, 300];
      k.loop(10, () => {
        makeBirdEnemy(
          k,
          bird.x,
          bird.y,
          possibleSpeeds[Math.floor(Math.random() * possibleSpeeds.length)]
        );
      });
    }
  });
  k.scene("end", () => {});
  k.go("level-1");
}
gameSetup();
