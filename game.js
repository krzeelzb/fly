// import Phaser from "phaser";
import GameScene from "./public/js/GameScene";
import StartScene from "./public/js/StartScene";

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
