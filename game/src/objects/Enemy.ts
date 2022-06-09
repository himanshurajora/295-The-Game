import {
  ENEMY_HEALTH,
  ENEMY_KEY
} from '../constants/GameConstants';

export class Enemy extends Phaser.Physics.Arcade.Sprite {
  public health: number = ENEMY_HEALTH;
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, ENEMY_KEY);
  }

  setHealth(health: number){
    this.health = health;
  }
}
