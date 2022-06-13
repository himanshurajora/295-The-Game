export class GameOverScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameOverScene',
    });
  }
  create(): void {
    const screenCenterX =
      this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY =
      this.cameras.main.worldView.y + this.cameras.main.height / 2;
    this.add
      .text(screenCenterX, screenCenterY - 50, 'Game Over', {
        align: 'center',
        color: '#ffffff',
        font: '32px Impact, Arial',
      })
      .setOrigin(0.5);

    // your score, from localStorage
    const score = localStorage.getItem('295-kill-count');
    this.add
      .text(screenCenterX, screenCenterY, `Your score was: ${score}`, {
        align: 'center',
        color: '#ffffff',
        font: '24px Arial',
      })
      .setOrigin(0.5);
    // press spcae to restart
    this.add
      .text(screenCenterX, screenCenterY + 50, 'Press space to restart', {
        align: 'center',
        color: '#ffffff',
        font: '18px Arial',
      })
      .setOrigin(0.5);
    let enterKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    enterKey.on('down', () => {
      this.scene.start('Bootloader');
    });
  }
}
