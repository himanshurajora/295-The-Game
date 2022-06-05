/**
 * A function to convert fire rate to milliseconds delay
 * @param {number} fireRate
 * @returns {number} the time delay between each bullet
 */
export const getDelay = (fireRate: number): number => 1000 / fireRate;

/**
 * A function to get random number b/w specified range
 * @param {number} min Min number of range
 * @param {number } max  Max number of range
 * @returns {number} A random number b/w specified range
 */
export const getRandomInRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;

/**
 * A function to generate random number b/w two specified ranges
 * @param {number} min1 Min number of range 1
 * @param {number} max1 Max number of range 21
 * @param {number} min2 Min number of range 2
 * @param {number} max2 Max number of range 2
 * @returns {number} return the targeted random number
 */
export const getRandomNumberInTwoRanges = (
  min1: number,
  min2: number,
  max1: number,
  max2: number
) => {
  // random number b/w min1 and min2
  let num1 = Math.floor(Math.random() * (min2 - min1 + 1)) + min1;
  // random number b/w max1 and max2
  let num2 = Math.floor(Math.random() * (max2 - max1 + 1)) + max1;
  // return random number
  return Math.random() < 0.5 ? num1 : num2;
};
