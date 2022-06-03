import { Bootloader } from "./Bootloader";
import { MainScene } from "./scenes/MainScene";
import { AnotherScene } from "./scenes/AnotherScene";

export const CONFIG: any = {
    title: "117",
    version: "0.0.1",
    type: Phaser.AUTO,
    backgroundColor: "#111111",
    scale: {
        parent: "phaser_container",
        width: 640,
        height: 360,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    dom: {
        createContainer: true,
    },
    render: {
        pixelArt: false,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 0,
            },
            debug: true,
        },
    },
    scene: [Bootloader, MainScene, AnotherScene],
};
