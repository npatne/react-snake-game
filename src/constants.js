// Constants file to some hard coded values

const FIXED_HIEGHT = 377.555;
const FIXED_WIDTH = 932.33;
const Y_DIVISIONS = 16;
const X_DIVISIONS = 40;

const snakeStartPosition = { top: 6, left: 17 }; // taken randomly, roughly in middle of the board
const mouseStartPosition = { top: 7, left: 25 };
const directions = { right: "right", left: "left", down: "down", up: "up" };

// actions
const SET_DIFFICULTY = "SET_DIFFICULTY";
const TOGGLE_PLAY = "TOGGLE_PLAY";
const MOVE_SNAKE = "MOVE_SNAKE";
const CHANGE_DIRECTION = "CHANGE_DIRECTION";
const SHOW_MOUSE = "SHOW_MOUSE";
const EAT_MOUSE = "EAT_MOUSE";

export {
  FIXED_HIEGHT,
  FIXED_WIDTH,
  Y_DIVISIONS,
  X_DIVISIONS,
  snakeStartPosition,
  mouseStartPosition,
  directions,
  SET_DIFFICULTY,
  TOGGLE_PLAY,
  MOVE_SNAKE,
  CHANGE_DIRECTION,
  SHOW_MOUSE,
  EAT_MOUSE,
};
