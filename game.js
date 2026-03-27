'use strict';

const CELL = 20;          // pixels per grid cell
const COLS = 25;          // grid columns
const ROWS = 25;          // grid rows
const INITIAL_SPEED = 150; // ms per tick
const SPEED_INCREMENT = 3; // ms reduction per food eaten

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width  = COLS * CELL;
canvas.height = ROWS * CELL;

const overlay    = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlayTitle');
const overlayMsg   = document.getElementById('overlayMsg');
const finalScore   = document.getElementById('finalScore');
const startBtn   = document.getElementById('startBtn');
const scoreEl    = document.getElementById('score');
const highScoreEl = document.getElementById('highScore');

// ── State ────────────────────────────────────────────────────────────────────
let snake;        // array of {x,y} segments, head first
let dir;          // current movement direction {x,y}
let nextDir;      // queued direction (applied at next tick)
let food;         // food position {x,y}
let score;        // current score
let speed;        // tick interval in ms (decreases as score grows)
let timerId;      // setInterval handle
let running;      // boolean — is a game in progress

let highScore = parseInt(localStorage.getItem('snakeHighScore') || '0', 10);
highScoreEl.textContent = highScore;

// ── Helpers ──────────────────────────────────────────────────────────────────
function randCell() {
  return {
    x: Math.floor(Math.random() * COLS),
    y: Math.floor(Math.random() * ROWS),
  };
}

function spawnFood() {
  let pos;
  do {
    pos = randCell();
  } while (snake.some(s => s.x === pos.x && s.y === pos.y));
  food = pos;
}

function initGame() {
  const startX = Math.floor(COLS / 2);
  const startY = Math.floor(ROWS / 2);
  snake   = [{ x: startX, y: startY }, { x: startX - 1, y: startY }];
  dir     = { x: 1, y: 0 };
  nextDir = { x: 1, y: 0 };
  score   = 0;
  speed   = INITIAL_SPEED;
  scoreEl.textContent = score;
  spawnFood();
}

// ── Drawing ──────────────────────────────────────────────────────────────────
function drawGrid() {
  ctx.strokeStyle = 'rgba(255,255,255,0.03)';
  ctx.lineWidth = 0.5;
  for (let x = 0; x <= COLS; x++) {
    ctx.beginPath();
    ctx.moveTo(x * CELL, 0);
    ctx.lineTo(x * CELL, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y <= ROWS; y++) {
    ctx.beginPath();
    ctx.moveTo(0, y * CELL);
    ctx.lineTo(canvas.width, y * CELL);
    ctx.stroke();
  }
}

function drawSnake() {
  snake.forEach((seg, i) => {
    const ratio = 1 - (i / snake.length) * 0.6;
    ctx.fillStyle = i === 0
      ? '#4ecca3'
      : `rgba(78, 204, 163, ${ratio})`;
    ctx.beginPath();
    ctx.roundRect(seg.x * CELL + 2, seg.y * CELL + 2, CELL - 4, CELL - 4, 4);
    ctx.fill();

    if (i === 0) {
      // Eyes
      const eyeSize = 3;
      ctx.fillStyle = '#16213e';
      const ex = seg.x * CELL + CELL / 2;
      const ey = seg.y * CELL + CELL / 2;
      // Offset eyes based on direction
      const offX = dir.x !== 0 ? dir.x * 4 : 0;
      const offY = dir.y !== 0 ? dir.y * 4 : 0;
      const perpX = dir.y !== 0 ? 4 : 0;
      const perpY = dir.x !== 0 ? 4 : 0;
      ctx.beginPath();
      ctx.arc(ex + offX + perpX, ey + offY + perpY, eyeSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(ex + offX - perpX, ey + offY - perpY, eyeSize, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}

function drawFood() {
  const cx = food.x * CELL + CELL / 2;
  const cy = food.y * CELL + CELL / 2;
  const radius = CELL / 2 - 3;

  // Glow
  const grd = ctx.createRadialGradient(cx, cy, 1, cx, cy, radius + 4);
  grd.addColorStop(0, 'rgba(233,69,96,0.6)');
  grd.addColorStop(1, 'rgba(233,69,96,0)');
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(cx, cy, radius + 4, 0, Math.PI * 2);
  ctx.fill();

  // Apple body
  ctx.fillStyle = '#e94560';
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();

  // Shine
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.beginPath();
  ctx.arc(cx - 3, cy - 3, radius * 0.4, 0, Math.PI * 2);
  ctx.fill();
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  drawFood();
  drawSnake();
}

// ── Game loop ────────────────────────────────────────────────────────────────
function tick() {
  dir = { ...nextDir };

  // Compute new head position, adding COLS/ROWS before modulo so that
  // negative values wrap to the opposite edge (e.g. x=-1 → COLS-1).
  const head = {
    x: (snake[0].x + dir.x + COLS) % COLS,
    y: (snake[0].y + dir.y + ROWS) % ROWS,
  };

  // Self-collision
  if (snake.some(s => s.x === head.x && s.y === head.y)) {
    endGame();
    return;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    scoreEl.textContent = score;
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
      localStorage.setItem('snakeHighScore', highScore);
    }
    speed = Math.max(60, speed - SPEED_INCREMENT);
    spawnFood();
    clearInterval(timerId);
    timerId = setInterval(tick, speed);
  } else {
    snake.pop();
  }

  render();
}

// ── Controls ─────────────────────────────────────────────────────────────────
const KEY_MAP = {
  ArrowUp:    { x:  0, y: -1 },
  ArrowDown:  { x:  0, y:  1 },
  ArrowLeft:  { x: -1, y:  0 },
  ArrowRight: { x:  1, y:  0 },
  w: { x:  0, y: -1 },
  s: { x:  0, y:  1 },
  a: { x: -1, y:  0 },
  d: { x:  1, y:  0 },
};

document.addEventListener('keydown', e => {
  const newDir = KEY_MAP[e.key];
  if (!newDir) return;
  // Prevent reversing
  if (newDir.x === -dir.x && newDir.y === -dir.y) return;
  nextDir = newDir;
  e.preventDefault();
});

// Touch / swipe support
let touchStart = null;
canvas.addEventListener('touchstart', e => {
  touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
}, { passive: true });
canvas.addEventListener('touchend', e => {
  if (!touchStart) return;
  const dx = e.changedTouches[0].clientX - touchStart.x;
  const dy = e.changedTouches[0].clientY - touchStart.y;
  touchStart = null;
  if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
  let newDir;
  if (Math.abs(dx) >= Math.abs(dy)) {
    newDir = dx > 0 ? { x: 1, y: 0 } : { x: -1, y: 0 };
  } else {
    newDir = dy > 0 ? { x: 0, y: 1 } : { x: 0, y: -1 };
  }
  if (newDir.x === -dir.x && newDir.y === -dir.y) return;
  nextDir = newDir;
}, { passive: true });

// ── Start / End ───────────────────────────────────────────────────────────────
function startGame() {
  initGame();
  render();
  overlay.classList.add('hidden');
  running = true;
  timerId = setInterval(tick, speed);
}

function endGame() {
  clearInterval(timerId);
  running = false;
  overlayTitle.textContent = 'Game Over';
  overlayMsg.textContent   = 'Your score:';
  finalScore.textContent   = score;
  startBtn.textContent     = 'Play Again';
  overlay.classList.remove('hidden');
}

startBtn.addEventListener('click', startGame);

// Initial render
render();
