# 🦈 Blåhaj: Back to Bed

A cinematic 3D story platformer. In the middle of the night, Leo rolls over to pull
up his blanket and lets go of his Blåhaj. The plush shark tumbles off the bed, and
Leo's sweet dream of sharks and teddy bears starts turning into a nightmare. Get
Blåhaj back into his arms before the nightmares reach him.

## Play

Open `index.html` in a modern browser. No server or build step is needed.

```sh
npm run serve        # or serve it locally, then visit http://localhost:8080
```

## The story

| | Chapter | What happens |
| --- | --- | --- |
| 🎬 | Prologue | Leo hugs Blåhaj while dreaming of teddy bears. He gets cold, reaches for the covers, rolls over, and Blåhaj tumbles off the bed. |
| 1 | Off the Edge | Cross the messy bedroom floor, climb the pulled-out dresser drawers, and make your way to the windowsill. Then Biscuit the dog shows up. |
| 2 | Downstairs | Biscuit drops you in his dog bed and falls asleep. Cross the dark living room, past the fireplace, couch and robo-vacuum, and find the stairs. |
| 3 | The Big Stairs | Climb while the darkness rises behind you. Watch out for rolling balls and a grumpy cat, and get over the baby gate. |
| 4 | Back to Bed | The nightmare has found Leo. Climb, glide to the bed, and belly-flop the nightmare knots away. |
| 🎬 | Ending | Leo pulls Blåhaj close and the dream turns sweet again. |

**Leo's dream** is the meter at the top of the screen. It fades slowly while he's alone,
and fast when you stand on the **dark floor** where the nightmares live. Light, rugs and
anything you can climb onto are safe. Glowing dream stars, lamps you switch on and hidden
teddy bears keep the dream sweet. Each chapter hides three teddy bears.

### Controls

| Action | Keyboard | Gamepad | Touch |
| --- | --- | --- | --- |
| Move | WASD / arrows | Left stick | Left joystick |
| Jump, double jump | Space | A | ⤴ |
| Belly flop (chapter 2+) | C | B / LB | 💥 |
| Torpedo dash (chapter 3+) | Shift | X / RB | 🚀 |
| Fin glide (chapter 4) | Hold Space while falling | Hold A | Hold ⤴ |
| Camera | Drag mouse, Q / E | Right stick | Drag right side |
| Pause, skip scene, mute | Esc · Enter · M | Start | ⏸ |

## How it's made

Everything except Blåhaj herself is built in code: the rooms and furniture, Leo, Biscuit the
dog, the cat, the teddy bears and nightmares, every texture, and the music and sound.

- **Night lighting:** moonlight casts shadows through the windows, with visible moonbeams and
  dust. Warm lamps flicker, the fireplace glows, and light spills in from the hallway.
- **Materials:** physically based plush, fabric, wood, ceramic and brass, with procedural
  textures, normal maps and roughness maps.
- **The nightmare:** a smoky shader pools in the dark on the floor, and creatures smoulder with
  glowing eyes. As the dream sours, the colour grade drains, a heartbeat pulses, colours
  fringe, and the lullaby detunes into a drone.
- **Post-processing:** ambient occlusion, bloom, ACES tone mapping and MSAA, with four quality
  presets that step down automatically on slow devices.
- **Cutscenes:** in-engine, with letterboxing, subtitles and a skip button.

## Development

```sh
npm install
npm run build      # bundles src/ into dist/game.js (commit the result)
npm run check      # proves each chapter's goal and teddies are reachable, flags overlapping furniture
npm run playtest   # a bot plays the whole story through the real controls (needs Chromium)
```

| Path | What lives there |
| --- | --- |
| `src/chapters.js` | The four chapters as data: furniture, lights, pickups, creatures |
| `src/prefabs.js` | Furniture and rooms as collision boxes, shared with the checker |
| `src/rooms.js` | Room and furniture visuals, lighting, moonbeams, the dark floor |
| `src/characters.js` | Leo, the dream bubble, Biscuit, the cat, teddy bears, nightmares |
| `src/cinematics.js` | The cutscenes |
| `src/game.js` | Physics, abilities, the dream meter, creatures, the indoor camera |
| `src/art.js` | Blåhaj (model loading, plush material, pool-noodle flex) and small props |
| `src/main.js`, `index.html` | Title, story flow, HUD, saving |
| `tools/` | Level checker, jump-reach model, playtest bot and its routes |

## Credits

- Blåhaj 3D model: ["Blahaj"](https://sketchfab.com/3d-models/blahaj-ce981de49111488c81ea646067abe1ec)
  by [Kaine_G](https://sketchfab.com/Kaine_G), licensed
  [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Changes for this game: new plush
  material, textures shipped separately so strict browsers load them, a recreated teeth
  texture, and vertex-shader animation for the tail, fins and floppy body. Files are in
  `assets/`.
- Built with [three.js](https://threejs.org) (MIT).
- Blåhaj is a trademark of IKEA. This is an unofficial fan project made with love for the shark.
