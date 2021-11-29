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
const CLOSE_MODAL = "CLOSE_MODAL";

// instructions
const instructions = {
  game: [
    "Please read the instructions carefully.",
    "To start/pause, use the 'Play'/'Pause' button in the game taskbar.",
    "Use arrow keys on the keyboard to control the direction of the snake.",
    "During gameplay, the console and speed controls will be disabled.",
    "Score increase along with the increase in speed.",
    "For speed 1 - the score increases by 1",
    "For speed 2 - the score increases by 3",
    "For speed 3 - the score increases by 5",
    "For speed 4 - the score increases by 7",
    "For speed 5 - the score increases by 10",
    "On colliding with a wall or self bite the game resets.",
    "The progress resets if not connected to an account.",
  ],
  blockchain: [
    {
      title: "Transactions",
      inst: [
        "Ensure the game is connected to the test network account.",
        "To create a new Snake Game account, or to change the name of an existing snake associated with the current account route to the transactions tab.",
        "Head icon change-ability unlocks when the user collects 20 snake tokens.",
        "Color change-ability unlocks when the user collects 40 snake tokens.",
        "The cost for head and color change in 10 and 15 ST respectively.",
        "Once an account is created/connected, in the account tab use the Fetch button to fetch the details of the snake.",
        "Use the Redeem button to redeem Snake Token (ST) in exchange for the current score.",
        "A record of the last 10 redemptions will be visible in the right-hand side panel.",
        "Conversion rate: 1 ST for a score of 10 each.",
        "Use the transact tab for blockchain transactions and wait for the confirmation notification to validate the transaction.",
      ],
    },
    {
      title: "Setup",
      inst: [
        "Install Metamask wallet extension on your browser.",
        "Connect your Metamask wallet to Ropsten Test-net.",
        "When prompted or from the extension, connect the snake game to your account.",
        "To verify the connection, please check that the account number is visible in the account section of the console.",
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
  CLOSE_MODAL,
};
