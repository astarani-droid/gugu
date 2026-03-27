# gugu 🐍

A classic **Snake** game built with HTML5 Canvas and vanilla JavaScript — no dependencies required.

## Play

Open `index.html` in any modern browser (or serve the folder with any static-file server).

```bash
# Quick local server — pick whichever you have available
npx serve .
# or
python3 -m http.server 8080
```

Then navigate to `http://localhost:8080`.

## Controls

| Action | Keys |
|--------|------|
| Move up | `↑` / `W` |
| Move down | `↓` / `S` |
| Move left | `←` / `A` |
| Move right | `→` / `D` |
| Mobile | Swipe on the canvas |

## Features

- Smooth canvas rendering with a glowing snake and food
- Speed increases as you eat more food
- High-score persisted in `localStorage`
- Touch / swipe support for mobile
- Wraps around edges (no wall collisions)

## Project Structure

```
index.html   — game shell / markup
style.css    — dark-themed UI styles
game.js      — all game logic (Snake, rendering, input, scoring)
```
