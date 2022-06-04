import { BULLET_KEY } from '../constants/GameConstants';
import { Bullet } from './Bullet';
import { Player } from './Player';

export class BulletGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.createMultiple({
      classType: Bullet,
      frameQuantity: 1,
      active: false,
      visible: false,
      key: BULLET_KEY,
      max: 10,
    });
    console.log(this.getChildren());
  }

  fire(player: Player) {
    // this will get the first inactive bullet
    const bullet = this.getFirstDead(true);
    console.log(bullet);
    bullet?.fire(player);
  }
}
