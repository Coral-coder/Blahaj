// Shared tuning numbers. The level checker (tools/check-levels.js) reads
// this same file, so level layouts are validated against real physics.

export const CFG = {
    dt: 1 / 120,          // fixed physics step
    radius: 0.42,         // half-width of Blåhaj's collision box
    height: 0.9,          // collision box height
    run: 7.5,             // top swim speed
    groundAccel: 70,
    airAccel: 38,
    groundFriction: 14,
    gravity: 32,
    jump: 11.5,           // ~2.1 units high
    jumpCut: 0.45,        // vy multiplier when releasing jump early
    doubleJump: 10,       // ~1.6 extra units
    maxFall: 26,
    coyote: 0.12,
    jumpBuffer: 0.14,
    dashSpeed: 18,
    dashTime: 0.2,
    dashCooldown: 0.45,
    glideFall: 2.2,       // max fall speed while gliding
    poundSpeed: 26,
    poundHang: 0.14,
    bounce: 16,           // sponge bounce (~4 units)
    superBounce: 21,      // belly flop onto sponge (~6.9 units)
    stompBounce: 11,
    updraft: 46,          // upward acceleration inside updrafts
    updraftMax: 9,
    maxHearts: 3,
    // ability unlocks: ability -> index of the level whose completion grants it
    unlocks: { doubleJump: 0, flop: 1, dash: 2, glide: 3 },
    bonusStars: 12,       // stars needed to open the bonus level
  };


