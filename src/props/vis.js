// What the rest of the house looks like, one file per room (see cols.js).
import { KITCHEN } from './kitchen.vis.js';
import { LAUNDRY } from './laundry.vis.js';
import { BACKYARD } from './backyard.vis.js';
import { GARAGE } from './garage.vis.js';
import { BASEMENT } from './basement.vis.js';
import { HALLWAY } from './hallway.vis.js';
import { BATHROOM } from './bathroom.vis.js';

export const VIS = Object.assign({}, KITCHEN, LAUNDRY, BACKYARD, GARAGE, BASEMENT, HALLWAY, BATHROOM);
