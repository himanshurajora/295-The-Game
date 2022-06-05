import { buildTargets } from '../constants';
import { Bullet } from '../objects/Bullet';
import { BulletGroup } from '../objects/BulletGroup';
import { Player } from '../objects/Player';
import { Enemy } from '../objects/Enemy';
export class MainScene extends Phaser.Scene {
  player: Player;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  rotationSpeed: number = 200;
  bulletTime: number = 0;
  bulletGroup: BulletGroup;
  enemy: Enemy;
  constructor() {
    super({
      key: 'MainScene',
    });
  }

  init() {
    console.log('MainScene');
  }

  // for preloading main scene assets
  preload() {}

  create(): void {
    // making player and enemy
    this.player = new Player(this, 200, 200);
    this.enemy = new Enemy(this, 100, 100);

    // create cursor for keyboard input
    this.cursors = this.input.keyboard.createCursorKeys();

    // set origin to center of player
    this.player.setOrigin(0.4, 0.5);

    // the bullet group
    this.bulletGroup = new BulletGroup(this);
    this.bulletGroup.createMultiple({
      classType: Bullet,
      frameQuantity: 1,
      key: 'bullet',
      active: false,
      visible: false,
      max: 10,
    });
  }

  update(time: number, delta: number) {
    // accelerate player
    if (this.cursors.up.isDown) {
      this.physics.velocityFromRotation(
        this.player.rotation,
        200,
        (this.player.body as any).acceleration
      );
    } else {
      (this.player.body as any).acceleration.set(0);
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

    // firing logic
    if (this.cursors.space.isDown) {
      this.player.fire(this.bulletGroup);
    }

    this.physics.world.wrap(this.player, 5);
  }
}
