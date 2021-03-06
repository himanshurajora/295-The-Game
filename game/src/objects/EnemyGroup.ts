import {
  ENEMY_DRAG,
  ENEMY_HEALTH,
  ENEMY_KEY,
  ENEMY_MASS,
  ENEMY_MAX_SCALE,
  ENEMY_MIN_SCALE,
} from '../constants/GameConstants';
import { getRandomInRange, getRandomNumberInTwoRanges } from '../utils';
import { Enemy } from './Enemy';
import { Player } from './Player';

export class EnemyGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.createMultiple({
      classType: Enemy,
      key: ENEMY_KEY,
      visible: false,
      active: false,
    });
  }

  createEnemy(player: Player) {
    const x = getRandomNumberInTwoRanges(
      -200,
      0,
      this.scene.game.canvas.width,
      this.scene.game.canvas.width + 500
    );
    const y = getRandomNumberInTwoRanges(
      -200,
      0,
      this.scene.game.canvas.height,
      this.scene.game.canvas.height + 500
    );
    const enemy = this.getFirstDead(true, x, y, ENEMY_KEY, 0, true) as Enemy;
    // // random values
    const xScale = getRandomInRange(ENEMY_MIN_SCALE, ENEMY_MAX_SCALE),
      yScale = getRandomInRange(ENEMY_MIN_SCALE, ENEMY_MAX_SCALE);
    const xVelocity = getRandomInRange(-100, 100) + 50,
      yVelocity = getRandomInRange(-100, 100) + 50;
    // set values
    enemy.setActive(true);
    enemy.setVisible(true);
    enemy.setName(ENEMY_KEY);
    enemy.setScale(xScale, xScale);
    enemy.setVelocity(xVelocity, yVelocity);
    enemy.setMass(ENEMY_MASS * xScale * (1 / 3));
    enemy.setAngularVelocity(getRandomInRange(10, 150));
    enemy.setHealth(100);

    // move towards player
    this.scene.physics.moveToObject(enemy, player, 100);

    // enemy.setDrag(ENEMY_DRAG);
    enemy.health = ENEMY_HEALTH;
  }
}
