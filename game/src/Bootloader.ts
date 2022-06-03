export class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            key: "Bootloader",
        });
        console.log("Scene Bootloader");
    }

    preload(): void {
        const screenCenterX =
            this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY =
            this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.add.text(
            screenCenterX,
            screenCenterY,
            "Loading...",
            { align:'center', color: "#ffffff", font: "32px Impact, Arial" }
        ).setOrigin(0.5);

        this.load.setPath("assets/");
        this.load.image("295");

        this.load.on("complete", () => {
            this.scene.start("MainScene");
        });
    }
}
