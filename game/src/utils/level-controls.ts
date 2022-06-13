import {
  ENEMY_RESPAWN_TIME_DELAY,
  ENEMY_RESPAWN_TIME_DELAY_LEVEL2,
  ENEMY_RESPAWN_TIME_DELAY_LEVEL3,
  ENEMY_RESPAWN_TIME_DELAY_LEVEL4,
  ENEMY_RESPAWN_TIME_DELAY_LEVEL5,
  PLAYER_FIRE_RATE,
  PLAYER_FIRE_RATE_AFTER,
  PLAYER_FIRE_RATE_LEVEL2,
  PLAYER_FIRE_RATE_LEVEL3,
  PLAYER_FIRE_RATE_LEVEL4,
  PLAYER_FIRE_RATE_LEVEL5,
} from '../constants/GameConstants';
import { Player } from '../objects/Player';

/**
 * Controls the rate of fire of the player.
 * @param {Player} player the main player
 */
export function setPlayerControlByLevel(player: Player) {
  const level = player.killCount / 50;

  switch (Math.floor(level)) {
    case 0:
      player.fireRate = PLAYER_FIRE_RATE;
      break;
    case 1:
      player.fireRate = PLAYER_FIRE_RATE;
      break;
    case 2:
      player.fireRate = PLAYER_FIRE_RATE_LEVEL2;
      break;
    case 3:
      player.fireRate = PLAYER_FIRE_RATE_LEVEL3;
      break;
    case 4:
      player.fireRate = PLAYER_FIRE_RATE_LEVEL4;
      break;
    case 5:
      player.fireRate = PLAYER_FIRE_RATE_LEVEL5;
      break;
    default:
      player.fireRate = PLAYER_FIRE_RATE_AFTER;
      break;
  }
}

export function setEnemyControlByLevel(kills: number) {
  const level = kills / 50;

  switch (Math.floor(level)) {
    case 0:
      return ENEMY_RESPAWN_TIME_DELAY;
    case 1:
      return ENEMY_RESPAWN_TIME_DELAY;
    case 2:
      return ENEMY_RESPAWN_TIME_DELAY_LEVEL2;
    case 3:
      return ENEMY_RESPAWN_TIME_DELAY_LEVEL3;
    case 4:
      return ENEMY_RESPAWN_TIME_DELAY_LEVEL4;
    case 5:
      return ENEMY_RESPAWN_TIME_DELAY_LEVEL5;
    default:
      return 200;
  }
}
