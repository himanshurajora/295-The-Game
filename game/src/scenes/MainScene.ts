import { buildTargets } from "../constants";
import { Player } from "../objects/Player";

export class MainScene extends Phaser.Scene {
    player: Phaser.Physics.Arcade.Sprite;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    rotationSpeed: number = 200
    constructor() {
        super({
            key: "MainScene",
        });
    }

    init() {
        console.log("MainScene");
    }

    preload() {
        this.player = new Player(this, 200, 200);
    }

    create(): void {
        // create cursor for keyboard input
        this.cursors = this.input.keyboard.createCursorKeys();

        // set origin to center of player
        this.player.setOrigin(0.4, 0.5);
    }

    update(time: number, delta: number) {
        // accelerate player
        if (this.cursors.up.isDown) {
            this.physics.velocityFromRotation(
                this.player.rotation,
                200,
                this.player.body.velocity
            );
        }
        // decelerate
        if (this.cursors.down.isDown) {
            this.player.setVelocity(
                this.player.body.velocity.x * 0.98,
                this.player.body.velocity.y * 0.98
            );
        }

        // rotate player
        if (this.cursors.left.isDown) {
            this.player.setAngularVelocity(-this.rotationSpeed);
        } else if (this.cursors.right.isDown) {
            this.player.setAngularVelocity(this.rotationSpeed);
        } else {
            this.player.setAngularVelocity(0);
        }

        this.physics.world.wrap(this.player, 5);
    }
}
