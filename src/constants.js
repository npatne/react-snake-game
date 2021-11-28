// Constants file to some hard coded values

const FIXED_HIEGHT = 377.555;
const FIXED_WIDTH = 932.33;
const Y_DIVISIONS = 16;
const X_DIVISIONS = 40;

const snakeStartPosition = { top: 6, left: 17 }; // taken randomly, roughly in middle of the board
const mouseStartPosition = { top: 7, left: 25 };
const directions = { right: "right", left: "left", down: "down", up: "up" };

// css variables
const css = {
  backgroundColor: "#031c20",
  primaryColor: "#f7fff7",
  secondaryColor: "#64aaa5",
  actionColor: "#d83b3b",
  accentColor: "#ffe66d",
  borderRadius: "8px",
  boxShadow: "2px 2px 5px -2px rgba(0, 0, 0, 0.5)",
};

// actions
const SET_SPEED = "SET_SPEED";
const TOGGLE_PLAY = "TOGGLE_PLAY";
const MOVE_SNAKE = "MOVE_SNAKE";
const CHANGE_DIRECTION = "CHANGE_DIRECTION";
const SHOW_MOUSE = "SHOW_MOUSE";
const EAT_MOUSE = "EAT_MOUSE";
const TOGGLE_CONSOLE = "TOGGLE_CONSOLE";

// instructions
const instructions = {
  game: [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.",
    "Lorem ipsum, dolor sit amet consectetur lit. Ducimus, nostrum.",
    "Lorem ipsum, dololit. Ducimus, nostrum.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.",
    "Lorem ipsum, dolor icing elit. Ducimus, nostrum.",
    "Lorem ipsum, dolorpisicing elit. Ducimus, nostrum.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.",
    "Lorem ipsum, doisicing elit. Ducimus, nostrum.",
    "Lorem ipsum, dolor sitg elit. Ducimus, nostrum.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.",
    "Lorem ipsum, dolor sit amet consecteturelit. Ducimus, nostrum.",
    "Lor adipisicing elit. Ducimus, nostrum.",
    "Lorem ipsum, dolor sit amet consectetur nostrum.",
    "Lore. Ducimus, nostrum.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum. Ducimus, nostrum.",
    "Lorem ipsum, dolor adipisicing elit. Ducimus, nostrum.",
    "Lorem ipsum, dolor sit amet coelit. Ducimus, nostrum.",
    "Lorem ipsum, dolor sit amet consectetur.",
  ],
  blockchain: [
    {
      title: "Transactions",
      inst: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.",
        "Lorem ipsum, dolor sit amet consectetur lit. Ducimus, nostrum.",
        "Lorem ipsum, dololit. Ducimus, nostrum.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.",
        "Lorem ipsum, dolor icing elit. Ducimus, nostrum.",
        "Lorem ipsum, dolorpisicing elit. Ducimus, nostrum.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.",
        "Lorem ipsum, doisicing elit. Ducimus, nostrum.",
        "Lorem ipsum, dolor sitg elit. Ducimus, nostrum.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.",
        "Lorem ipsum, dolor sit amet consecteturelit. Ducimus, nostrum.",
        "Lor adipisicing elit. Ducimus, nostrum.",
        "Lorem ipsum, dolor sit amet consectetur nostrum.",
        "Lore. Ducimus, nostrum.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum. Ducimus, nostrum.",
        "Lorem ipsum, dolor adipisicing elit. Ducimus, nostrum.",
        "Lorem ipsum, dolor sit amet coelit. Ducimus, nostrum.",
        "Lorem ipsum, dolor sit amet consectetur.",
      ],
    },
    {
      title: "Setup",
      inst: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.",

        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.",
        "Lorem ipsum, dolor icing elit. Ducimus, nostrum.",
        "Lorem ipsum, dolorpisicing elit. Ducimus, nostrum.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.",
        "Lorem ipsum, doisicing elit. Ducimus, nostrum.",
        "Lorem ipsum, dolor sitg elit. Ducimus, nostrum.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.",
        "Lorem ipsum, dolor sit amet consecteturelit. Ducimus, nostrum.",
        "Lor adipisicing elit. Ducimus, nostrum.",
        "Lorem ipsum, dolor sit amet consectetur nostrum.",
        "Lore. Ducimus, nostrum.",
        "Lorem ipsum, dolor sit amet consectetur.",
      ],
    },
  ],
};

// transaction
const transactionOptions = [
  {
    title: "Create Snake",
    label:
      "Input name for the snake (note: this will override and reset any previous snake created with this account)",
  },
  {
    title: "Change Color",
    label: "Input desired color hex value.",
  },
  {
    title: "Change Head",
    label:
      "Input desired emoji for the snake head. (keyboard shortcut: win + '.' )",
  },
];

const transactionHistory = [
  {
    timestamp: Date.now(),
    cause: "Change Color",
    price: "10 ST",
  },
  {
    timestamp: Date.now() - 10000000,
    cause: "Change Head",
    price: "40 ST",
  },
  {
    timestamp: Date.now() - 30000000,
    cause: "Change Color",
    price: "10 ST",
  },
];

// Account related constants

const scoreHistory = [
  {
    timestamp: Date.now(),
    score: "20",
    price: "10 ST",
  },
  {
    timestamp: Date.now() - 10000000,
    score: "80",
    price: "40 ST",
  },
  {
    timestamp: Date.now() - 30000000,
    score: "30",
    price: "10 ST",
  },
];

export {
  FIXED_HIEGHT,
  FIXED_WIDTH,
  Y_DIVISIONS,
  X_DIVISIONS,
  snakeStartPosition,
  mouseStartPosition,
  directions,
  SET_SPEED,
  TOGGLE_PLAY,
  MOVE_SNAKE,
  CHANGE_DIRECTION,
  SHOW_MOUSE,
  EAT_MOUSE,
  TOGGLE_CONSOLE,
  css,
  instructions,
  transactionOptions,
  transactionHistory,
  scoreHistory,
};
