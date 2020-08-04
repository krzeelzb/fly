// import Phaser from 'phaser';

export default class Start extends Phaser.Scene {
  constructor() {
    super("Start");
  }
  init(data) {
    console.log(data);
    this.score = data.score;
  }

  preload() {
    // load plane image
    this.load.image("plane", "../static/plane-rayanair.png");
    // load coin image
    this.load.image("coin", "../static/coinPlaceholder.png");
    // load cloud images
    for (let i = 1; i <= 9; i++) {
      this.load.image("cloud" + i, "../static/clouds/cloud" + i + ".png");
    }
    this.load.image("bg", "../static/italy.png");
    this.load.image("plane1", "../static/plane1.png");
    this.load.image("plane2", "../static/plane2.png");
    this.load.image("plane3", "../static/plane3.png");
    this.load.image("plane4", "../static/plane4.png");
    this.load.spritesheet("coinSpritesheet", "../static/animation/coin.png", {
      frameWidth: 64,
      frameHeight: 64,
      endFrame: 64
    });
    this.load.spritesheet(
      "seagullSpritesheet",
      "../static/animation/seagull.png",
      { frameWidth: 120, frameHeight: 240 }
    );
    this.load.spritesheet("fuelSpritesheet", "../static/animation/fuel.png", {
      frameWidth: 101,
      frameHeight: 117
    });
    this.load.audio("birdSound", "../static/bird.wav");
    this.load.audio("fuelSound", "../static/fuel.wav");
    this.load.audio("coinSound", "../static/coin.wav");
    this.load.audio("planeSound", "../static/plane.wav");
  }

  create() {
    this.add.image(window.innerWidth / 2, window.innerHeight / 2, "bg");

    this.add
      .text(
        window.innerWidth / 2 - 100,
        window.innerHeight / 2 - 100,
        "START",
        { fontSize: "64px", fill: "#fff", align: "center" }
      )
      .setInteractive()
      .on("pointerdown", () => this.scene.start("Game"));

    const instructions = `
            Welcome to Fly!
            Gather as many coins as you can while avoiding clouds and seagulls! 
            Be careful to also not run out of fuel!
            The plane will follow the clicks of your mouse
        `;

    this.add.text(
      window.innerWidth / 2 - 550,
      window.innerHeight / 2 - 300,
      instructions,
      { fontSize: "20px", align: "center", fill: "#fff" }
    );
    this.add.text(
      window.innerWidth / 2 - 150,
      window.innerHeight / 2 + 100,
      `SCORE: ${this.score === undefined ? 0 : this.score}`,
      { fontSize: "64px", align: "center", fill: "#fff" }
    );
  }
}
