import {Physics} from 'phaser'

export class Player  extends Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "295");
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.setDrag(100);
        this.setMaxVelocity(200);
        this.setRotation(Math.random() * 360);
        this.setScale(0.5, 0.5);
        return this as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
    }
}