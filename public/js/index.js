import Phaser from "phaser";
import GameScene from "./GameScene.js";
import StartScene from "./StartScene.js";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: window.innerWidth - 10,
  height: window.innerHeight - 20,
  scene: [StartScene, GameScene],
  physics: {
    default: "arcade"
  }
};

new Phaser.Game(config);
