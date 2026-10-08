// What the rest of the house looks like, one file per room (see cols.js).
import { KITCHEN } from './kitchen.vis.js';
import { LAUNDRY } from './laundry.vis.js';
import { BACKYARD } from './backyard.vis.js';

export const VIS = Object.assign({}, KITCHEN, LAUNDRY, BACKYARD);
