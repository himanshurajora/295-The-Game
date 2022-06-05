/**
 * A function to convert fire rate to milliseconds delay
 * @param {number} fireRate
 * @returns {number} the time delay between each bullet
 */
export const getDelay = (fireRate: number) : number => 1000 / fireRate;
