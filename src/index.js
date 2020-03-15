import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import GameScene from "./GameScene";


const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: window.innerWidth - 10,
  height: window.innerHeight - 20,
  scene: GameScene,
  physics: {
    default: "arcade"
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", logoImg);
}

function create() {
  const logo = this.add.image(400, 150, "logo");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
