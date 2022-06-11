import {
  PLAYER_FIRE_RATE_LEVEL2,
  PLAYER_FIRE_RATE_LEVEL3,
  PLAYER_FIRE_RATE_LEVEL4,
  PLAYER_FIRE_RATE_LEVEL5,
} from '../constants/GameConstants';
import { Player } from '../objects/Player';

export function setPlayerControlByLevel(player: Player) {
  const level = player.killCount / 10;

  switch (Math.floor(level)) {
    case 1:
      player.fireRate = PLAYER_FIRE_RATE_LEVEL2;
      break;
    case 2:
      player.fireRate = PLAYER_FIRE_RATE_LEVEL3;
      break;
    case 3:
      player.fireRate = PLAYER_FIRE_RATE_LEVEL4;
      break;
    case 4:
      player.fireRate = PLAYER_FIRE_RATE_LEVEL5;
      break;
    case 5:
      player.fireRate = PLAYER_FIRE_RATE_LEVEL5 * 2;
      break;
    default:
      break;
  }
}
