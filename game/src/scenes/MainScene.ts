import { buildTargets } from '../constants';
import { Bullet } from '../objects/Bullet';
import { BulletGroup } from '../objects/BulletGroup';
import { Player } from '../objects/Player';
import { Enemy } from '../objects/Enemy';
import { EnemyGroup } from '../objects/EnemyGroup';
import {
  ENEMY_RESPAWN_TIME_DELAY,
  PLAYER_ORIGIN_X,
  PLAYER_ORIGIN_Y,
} from '../constants/GameConstants';
import {
  setEnemyControlByLevel,
  setPlayerControlByLevel,
} from '../utils/level-controls';
export class MainScene extends Phaser.Scene {
  player: Player;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  rotationSpeed: number = 200;
  bulletTime: number = 0;
  bulletGroup: BulletGroup;
  enemyGroup: EnemyGroup;
  enemyTimer: number = 0;
  playerScore: Phaser.GameObjects.Text;
  currentLevel: Phaser.GameObjects.Text;
  playerHealth: Phaser.GameObjects.Graphics;
  playerHealthText: Phaser.GameObjects.Text;
  // keys
  wKey: Phaser.Input.Keyboard.Key;
  sKey: Phaser.Input.Keyboard.Key;
  aKey: Phaser.Input.Keyboard.Key;
  dKey: Phaser.Input.Keyboard.Key;
  constructor() {
    super({
      key: 'MainScene',
    });
  }

  create(): void {
    // making player and enemy
    this.player = new Player(this, 200, 200);

    // player health bar
    this.playerHealth = this.add.graphics({
      fillStyle: { color: 0xff0000 },
    });
    // this.add.rectangle(this.game.canvas.width - 140, 20, 100, 10, 0xffffff);
    // TODO: Later fix the player health bar
    // this.playerHealth.fillRect(this.game.canvas.width - 140, 20, 100, 10);
    // boundary for player health bar
    // create cursor for keyboard input
    this.cursors = this.input.keyboard.createCursorKeys();

    // set origin to center of player
    this.player.setOrigin(PLAYER_ORIGIN_X, PLAYER_ORIGIN_Y);

    // the enemy group
    this.enemyGroup = new EnemyGroup(this);

    // the bullet group
    this.bulletGroup = new BulletGroup(this);
    this.bulletGroup.createMultiple({
      classType: Bullet,
      key: 'bullet',
      active: false,
      visible: false,
      max: 1000,
      'setXY.x': -1000,
      'setXY.y': -1000,
    });

    // add collisions b/w player and enemy
    this.physics.add.overlap(
      this.player,
      this.enemyGroup,
      (obj1: Player, obj2: Enemy) => {
        obj2.blast(this.enemyGroup, this.player);
        this.player.health -= 1;
        this.sound.play('collision', { volume: 0.2 });
        // this.playerHealth = this.playerHealth.fillRect(
        //   this.game.canvas.width - 140,
        //   20,
        //   this.player.health,
        //   10
        // );
      }
    );

    this.physics.add.overlap(
      this.enemyGroup,
      this.bulletGroup,
      (obj1: Enemy, obj2: Bullet) => {
        // TODO: Fix deActivate() function not working
        obj2.deActivate();
        obj1.health -= 10;
        if (obj1.health <= 0) {
          this.player.killCount += obj1.blast(this.enemyGroup);
          this.sound.play('blast', { volume: 0.2 });
        }
      }
    );

    // add player score
    this.playerScore = this.add.text(20, 20, '', {
      fontSize: '12px',
    });

    // show current level
    this.currentLevel = this.add.text(20, 40, '', {
      fontSize: '12px',
    });

    // player health text
    this.playerHealthText = this.add.text(
      this.game.canvas.width - 100,
      20,
      '',
      {
        fontSize: '12px',
        color: '#ffff00',
      }
    );

    this.wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    // game audio
    let theme = this.sound.add('295-song', { loop: true, volume: 1 });
    theme.play();
  }

  update(time: number, delta: number) {
    // accelerate player
    if (this.cursors.up.isDown || this.wKey.isDown) {
      this.physics.velocityFromRotation(
        this.player.rotation,
        200,
        (this.player.body as any).acceleration
      );
    } else {
      (this.player.body as any).acceleration.set(0);
    }
    // decelerate
    if (this.cursors.down.isDown || this.sKey.isDown) {
      this.player.setVelocity(
        this.player.body.velocity.x * 0.98,
        this.player.body.velocity.y * 0.98
      );
    }

    // rotate player
    if (this.cursors.left.isDown || this.aKey.isDown) {
      this.player.setAngularVelocity(-this.rotationSpeed);
    } else if (this.cursors.right.isDown || this.dKey.isDown) {
      this.player.setAngularVelocity(this.rotationSpeed);
    } else {
      this.player.setAngularVelocity(0);
    }

    // firing logic
    if (this.cursors.space.isDown) {
      this.player.fire(this.bulletGroup);
    }

    // generate enemies
    if (time > this.enemyTimer) {
      this.enemyTimer = time + setEnemyControlByLevel(this.player.killCount);
      // generate x less than 0 and greater than game width
      this.enemyGroup.createEnemy(this.player);
    }

    this.physics.world.wrap(this.player, 5);
    this.playerScore.setText(`Kill Count ${this.player.killCount}`);

    // current level
    this.currentLevel.setText(`Level: ${this.player.killCount / 50}`);

    // player health text
    this.playerHealthText.setText(`Health:  ${this.player.health}`);

    // level controls
    setPlayerControlByLevel(this.player);

    // check for player death
    if (this.player.health <= 0) {
      this.scene.start('GameOverScene');
      localStorage.setItem('295-kill-count', this.player.killCount.toString());
    }
  }
}
