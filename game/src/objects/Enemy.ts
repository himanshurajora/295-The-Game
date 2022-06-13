import { ENEMY_HEALTH, ENEMY_KEY } from '../constants/GameConstants';
import { getRandomInRange } from '../utils';
import { EnemyGroup } from './EnemyGroup';
import { Player } from './Player';

export class Enemy extends Phaser.Physics.Arcade.Sprite {
  public health: number = ENEMY_HEALTH;
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, ENEMY_KEY);
  }

  setHealth(health: number) {
    this.health = health;
  }

  blast(enemyGroup: EnemyGroup, player: Player | null = null) {
    if ((this.health <= 0 && this.active) || player !== null) {
      const explosion = this.scene.add.particles('bullet');
      explosion.createEmitter({
        speed: { min: 100, max: 200 },
        scale: {
          start: 0.2,
          end: 0,
          steps: 10,
        },
        quantity: 10,
        x: this.x,
        y: this.y,
        blendMode: 'ADD',
        maxParticles: 10,
        lifespan: { min: 100, max: 400 },
        bounce: {
          end: 0.5,
          start: 0.5,
          random: true,
        },
      });

      this.setActive(false);
      this.setVisible(false);
      this.setVelocity(0);

      enemyGroup.remove(this);

      this.scene.time.delayedCall(200, () => {
        explosion.setActive(false);
        explosion.setVisible(false);
      });
      return 1;
    }
    return 0;
  }
}
