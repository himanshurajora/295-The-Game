import { BULLET_KEY } from '../constants/GameConstants';
import { Bullet } from './Bullet';
import { Player } from './Player';

export class BulletGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
  }

  fire(player: Player) {
    // this will get the first inactive bullet
    const bullet = this.getFirstDead(true);
    (bullet as Bullet).fire(player);
    // shoot sound
    this.scene.sound.play('shoot', { volume: 0.2 });
  }
}
