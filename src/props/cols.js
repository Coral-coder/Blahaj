// Collision boxes for the rest of the house, one file per room. Pure data
// (no THREE): the level checker in tools/ reads exactly what the game uses.
import { KITCHEN } from './kitchen.cols.js';
import { LAUNDRY } from './laundry.cols.js';
import { BACKYARD } from './backyard.cols.js';
import { GARAGE } from './garage.cols.js';

export const COLS = Object.assign({}, KITCHEN, LAUNDRY, BACKYARD, GARAGE);
