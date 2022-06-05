import { Physics } from 'phaser';
import {
  PLAYER_DRAG,
  PLAYER_FIRE_RATE,
  PLAYER_KEY,
  PLAYER_MASS,
  PLAYER_MAX_VELOCITY,
  PLAYER_SCALE,
} from '../constants/GameConstants';
import { BulletGroup } from './BulletGroup';
export class Player extends Physics.Arcade.Sprite {
  private bulletTime = 0;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, PLAYER_KEY);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.setDrag(PLAYER_DRAG);
    this.setMaxVelocity(PLAYER_MAX_VELOCITY);
    this.setScale(PLAYER_SCALE, PLAYER_SCALE);
    this.setMass(PLAYER_MASS);
    this.setName(PLAYER_KEY);
  }

  fire(bulletGroup: BulletGroup) {
    if (this.bulletTime < this.scene.time.now) {
      this.bulletTime = this.scene.time.now + PLAYER_FIRE_RATE;
      bulletGroup.fire(this);
    }
  }
}
