import {
  ENEMY_DRAG,
  ENEMY_HEALTH,
  ENEMY_KEY,
  ENEMY_MASS,
  ENEMY_MAX_SCALE,
  ENEMY_MIN_SCALE,
} from '../constants/GameConstants';
import { getRandomInRange } from '../utils';

export class Enemy extends Phaser.Physics.Arcade.Sprite {
  public health: number = ENEMY_HEALTH;
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, ENEMY_KEY);
  }

  setHealth(health: number){
    this.health = health;
  }
}
