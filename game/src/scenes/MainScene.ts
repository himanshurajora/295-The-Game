import { buildTargets } from "../constants";

export class MainScene extends Phaser.Scene {
    image: Phaser.GameObjects.Image;
    constructor() {
        super({
            key: "MainScene",
        });
    }

    init() {
        console.log("MainScene");
    }

    preload() {
        this.image = this.add.image(
            this.scale.width / 2,
            this.scale.height / 2,
            "phaser3_cli"
        );
    }

    create(): void {}

    update() {
        this.image.rotation += .01
        
        this.input.on("pointerdown", ()=>{
            this.scene.start("AnotherScene")
        })
    }
}
