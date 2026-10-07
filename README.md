# 🦈 Blåhaj's Big Adventure

A soft, squishy 3D platformer starring everyone's favourite plush shark. Hop across a
bedroom where the floor is lava, bounce off kitchen sponges, climb a bookshelf, dash
over rooftops and glide across a starry dream sea, learning a new trick in every level.

Everything is generated in code: the shark, the props, and every texture (knitted rugs,
wood grain, marble, cookie crumbs, roof tiles, plush fabric). The game ships as one
HTML page plus one JavaScript bundle, with no image, model or audio files.

## Play

Open `index.html` in a modern browser. No server or build step is needed.

To serve it locally instead (handy on a phone on the same network):

```sh
npm run serve        # then visit http://localhost:8080
```

### Controls

| Action | Keyboard | Gamepad | Touch |
| --- | --- | --- | --- |
| Swim | WASD / arrows | Left stick | Left joystick |
| Jump (hold for higher) | Space | A | ⤴ |
| Double jump | Space in the air | A in the air | ⤴ in the air |
| Belly flop | C | B / LB / LT | 💥 |
| Torpedo dash | Shift | X / RB / RT | 🚀 |
| Fin glide | Hold Space while falling | Hold A | Hold ⤴ |
| Camera | Drag mouse, Q / E | Right stick | Drag right side |
| Pause / restart / mute | Esc · R · M | Start | ⏸ |

## Levels and progression

Each level teaches the move you need for the next one.

| # | Level | New mechanics | Finishing it unlocks |
| --- | --- | --- | --- |
| 1 | Cozy Bedroom | Jumping, moving toy car, dust bunnies, toy bricks | 🫧 Double jump |
| 2 | Kitchen Counter | Sponge bounce pads, sliding chopping boards | 💥 Belly flop |
| 3 | Bookshelf Climb | Crumbling cookies, cardboard crates, robo-vacuums, super bounce | 🚀 Torpedo dash |
| 4 | Rooftop Breeze | Long dash gaps, hot-air balloon baskets | 🪽 Fin glide |
| 5 | Dream Sea | Gliding, bubble-column updrafts, floating islands | The ending |
| ★ | Starlight Lagoon | Bonus gauntlet using everything | Opens at 12 starfish |

Every level hides three ⭐ starfish (some inside crates) and is full of 🐟 fish. Collect
every fish for a 👑. Falling off is gentle: Blåhaj pops back at the last lamp you lit.
Progress saves automatically in the browser.

## Graphics

- Physically based materials: plush fabric with sheen, clearcoat ceramics, transmissive
  iridescent crystals and bubbles, and brushed metal.
- Procedural tileable textures with generated normal and roughness maps.
- Image-based lighting baked from each level's sky, plus soft sun shadows that follow the
  player.
- Post-processing: ground-truth ambient occlusion, Unreal bloom, ACES filmic tone
  mapping, MSAA, and a colour grade with vignette.
- Instanced wind-swept grass, animated lava goo and sea, background bokeh, fireflies and
  particle effects.
- Four quality presets (Low to Ultra). The game drops a preset automatically if the frame
  rate falls below about 32 fps.

## Development

```sh
npm install
npm run build      # bundles src/ into dist/game.js (commit the result)
npm run watch      # rebuild on change, with source maps
npm run check      # proves every level is beatable with the abilities available
npm run playtest   # headless end-to-end gameplay tests (needs Chromium)
```

`npm run check` simulates the game's real jump physics to confirm that each level's goal and
all of its starfish are reachable. It also confirms that each level requires the ability
unlocked just before it.

`npm run playtest` drives the real game through its input system in headless Chromium.
It checks movement, every ability, enemies, hazards, moving and crumbling platforms,
respawning and level completion. Set `CHROMIUM_PATH` if Chromium isn't found
automatically.

| Path | What lives there |
| --- | --- |
| `src/config.js` | Physics and progression tuning, shared with the level checker |
| `src/levels.js` | Level layouts as plain data |
| `src/game.js` | Physics, abilities, enemies, collectibles, camera |
| `src/world.js` | Sky, lighting, floors, platform visuals, grass, particles |
| `src/art.js` | Blåhaj and every prop and creature |
| `src/textures.js`, `src/materials.js` | Procedural textures and PBR materials |
| `src/renderer.js` | Render pipeline and quality presets |
| `src/audio.js` | Synthesised music and sound effects |
| `src/main.js`, `index.html` | Menus, saving, the main loop |

Built with [three.js](https://threejs.org) (MIT). Blåhaj is a trademark of IKEA. This is an
unofficial fan project made with love for the shark.
