import {
  BULLET_KEY,
  BULLET_LIFE,
  BULLET_MASS,
  BULLET_SCALE,
  BULLET_SPEED,
} from '../constants/GameConstants';
import { Player } from './Player';

export class Bullet extends Phaser.Physics.Arcade.Sprite {
  bulletSpeed: number = BULLET_SPEED;
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, BULLET_KEY);
    this.setName(BULLET_KEY);
  }

  fire(player: Player) {
    // required for bullet to be visible
    this.setActive(true);
    this.setVisible(true);
    this.setScale(BULLET_SCALE, BULLET_SCALE);
    this.setMass(BULLET_MASS);

    // essentially a copy of the player's transform (position, rotation)
    this.setPosition(player.x, player.y);
    this.scene.physics.velocityFromRotation(
      player.rotation,
      this.bulletSpeed,
      this.body.velocity
    );

    this.setVelocityX(this.body.velocity.x + player.body.velocity.x);
    this.setVelocityY(this.body.velocity.y + player.body.velocity.y);

    // destroy the bullet after it's lifetime
    this.scene.time.delayedCall(
      BULLET_LIFE,
      () => {
        // using destroy because it saved computation
        // while setActive(false) and setVisible(false) will still compute the transform
        
        this.setActive(false);
        this.setVisible(false);
        this.destroy();
      },
      [],
      this
    );
  }

  deActivate() {
    this.setActive(false);
    this.setVisible(false);
  }
}
