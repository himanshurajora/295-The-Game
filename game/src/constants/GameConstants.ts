/*
USE BETTER COMMENTS EXTENSION IN VS CODE TO MAKE THIS FILE MORE READABLE

THE GAME WILL USE SAME VALUES AGAIN AND AGAIN
note WE WILL USE THESE AS CONSTANTS REDUCING THE ERRORS BY MISTYPING
*/

import { getDelay } from '../utils';

// asset keys for images and sounds
export const BULLET_KEY = 'bullet';
export const PLAYER_KEY = '295';
export const ENEMY_KEY = 'enemy';

// player constants
export const PLAYER_MASS = 80;
export const PLAYER_SCALE = 0.4;
export const PLAYER_ROTATION = 200;
export const PLAYER_DRAG = 100;
export const PLAYER_VELOCITY = 200;
export const PLAYER_ORIGIN_X = 0.4;
export const PLAYER_ORIGIN_Y = 0.5;
// specify the number of bullets per second
const PLAYER_FIRE_RATE_INTERNAL_LEVEL1 = 5;
const PLAYER_FIRE_RATE_INTERNAL_LEVEL2 = 7;
const PLAYER_FIRE_RATE_INTERNAL_LEVEL3 = 10;
const PLAYER_FIRE_RATE_INTERNAL_LEVEL4 = 13;
const PLAYER_FIRE_RATE_INTERNAL_LEVEL5 = 15;

// convert fire rate to milliseconds
// default fire rate
export const PLAYER_FIRE_RATE = getDelay(PLAYER_FIRE_RATE_INTERNAL_LEVEL1);
export const PLAYER_FIRE_RATE_LEVEL2 = getDelay(PLAYER_FIRE_RATE_INTERNAL_LEVEL2);
export const PLAYER_FIRE_RATE_LEVEL3 = getDelay(PLAYER_FIRE_RATE_INTERNAL_LEVEL3);
export const PLAYER_FIRE_RATE_LEVEL4 = getDelay(PLAYER_FIRE_RATE_INTERNAL_LEVEL4);
export const PLAYER_FIRE_RATE_LEVEL5 = getDelay(PLAYER_FIRE_RATE_INTERNAL_LEVEL5);
export const PLAYER_FIRE_RATE_AFTER = getDelay(25);
export const PLAYER_MAX_VELOCITY = 300;
export const PLAYER_SPEED = 200;

/*
IN THE GAME: 
- WE WILL HAVE SEVERAL TYPES OF BULLETS
THE ORIGINAL CLASS WILL ALWAYS BE BULLET BUT 
THE PROPERTIES WILL BE DIFFERENT

PROPERTIES MAY INCLUDE:
- KEY, LIFE, SCALE, SPEED ETC.
*/

// bullet constants

// basic bullet constants
export const BULLET_MASS = 1;
export const BULLET_SPEED = 300;
export const MAX_BULLETS = 10;
export const BULLET_LIFE = 3000;
export const BULLET_SCALE = 0.3;


// enemy constants
export const ENEMY_MASS = 1;
export const ENEMY_HEALTH = 100;
export const ENEMY_MIN_SCALE = 0.1;
export const ENEMY_MAX_SCALE = 0.25;
export const ENEMY_DRAG = 100;

export const ENEMY_RESPAWN_TIME_DELAY = 2200;
export const ENEMY_RESPAWN_TIME_DELAY_LEVEL2 = 1500;
export const ENEMY_RESPAWN_TIME_DELAY_LEVEL3 = 1000;
export const ENEMY_RESPAWN_TIME_DELAY_LEVEL4 = 800;
export const ENEMY_RESPAWN_TIME_DELAY_LEVEL5 = 500;
