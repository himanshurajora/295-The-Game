export class Bootloader extends Phaser.Scene {
  constructor() {
    super({
      key: 'Bootloader',
    });
  }

  preload(): void {
    const screenCenterX =
      this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY =
      this.cameras.main.worldView.y + this.cameras.main.height / 2;
    let text = this.add
      .text(screenCenterX, screenCenterY, 'Loading...', {
        align: 'center',
        color: '#ffffff',
        font: '32px Impact, Arial',
      })
      .setOrigin(0.5);

    this.load.setPath('assets/');
    this.load.image('295');
    this.load.image('bullet');
    this.load.image('enemy');
    this.load.audio('295-song', '295-song.mp3');
    this.load.audio('shoot', 'shoot.wav');
    this.load.audio('blast', 'blast.wav');
    this.load.audio('collision', 'collision.wav');

    this.load.on('progress', (value) => {
      text.setText(`Loading ${Math.floor(value * 100)}%`);
    });
    this.load.on('complete', () => {
      this.scene.start('MainScene');
    });
  }
}
