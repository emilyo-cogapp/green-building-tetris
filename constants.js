'use strict';

const COLS = 9;
const ROWS = 17;
// const BLOCK_SIZE_X = 17;
// const BLOCK_SIZE_Y = 21;
const BLOCK_SIZE_X = 21;
const BLOCK_SIZE_Y = 26;

const SHAPES = [
  [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
  [[2, 0, 0], [2, 2, 2], [0, 0, 0]],
  [[0, 0, 3], [3, 3, 3], [0, 0, 0]],
  [[4, 4], [4, 4]],
  [[0, 5, 5], [5, 5, 0], [0, 0, 0]],
  [[0, 6, 0], [6, 6, 6], [0, 0, 0]],
  [[7, 7, 0], [0, 7, 7], [0, 0, 0]]
];

const COLORS = [
  '#ffdc14',
  '#ff7d32',
  '#ff4637',
  '#aa2ddc',
  '#0091ff',
  '#008296',
  '#00c82d',
];

const PALE_COLORS = [
  '#fff4b5',
  '#ffc3a0',
  '#ffb1aa',
  '#dfa8f5',
  '#acdbff',
  '#79a8b0',
  '#b3d8bc',
];

// Keyboard controls
const KEY = {  
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,  
  DOWN: 40  
}

Object.freeze(KEY);

const moves = {
  [KEY.LEFT]:  (piece) => ({ ...piece, x: piece.x - 1 }),  
  [KEY.RIGHT]: (piece) => ({ ...piece, x: piece.x + 1 }),  
  [KEY.DOWN]:  (piece) => ({ ...piece, y: piece.y + 1 }), 
  [KEY.UP]: (piece) => board.rotate(piece),
  [KEY.SPACE]: (p) => ({ ...p, y: p.y + 1 })
};

let requestId = null;