// a box in a prefab's local frame: centre x/z, bottom y0, size w x h x d
export const B = (x, y0, z, w, h, d, extra = {}) => Object.assign({ x, y0, z, w, h, d }, extra);
