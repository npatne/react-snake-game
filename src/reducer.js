import {
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
} from "./constants";

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case SET_SPEED:
      return { ...state, speed: action.payload };

    case TOGGLE_PLAY:
      return { ...state, play: !state.play };

    case MOVE_SNAKE:
      const current_y = state.matrixPos.findIndex(
        (item) => item[0].top === state.snake.headPos.top
      );
      const current_x = state.matrixPos[current_y].findIndex(
        (item) => item.left === state.snake.headPos.left
      );
      const body = [
        state.matrixPos[current_y][current_x],
        ...state.snake.body.slice(0, -1),
      ];

      let new_x = current_x;
      let new_y = current_y;

      if (state.snake.direction === directions.up) {
        new_y++;
      }
      if (state.snake.direction === directions.down) {
        new_y--;
      }
      if (state.snake.direction === directions.left) {
        new_x--;
      }
      if (state.snake.direction === directions.right) {
        new_x++;
      }

      if (new_x < 0 || new_x > 39 || new_y < 0 || new_y > 15) {
        return {
          score: 0,
          speed: 1,
          matrixPos: state.matrixPos,
          play: false,
          mousePosition:
            state.matrixPos[mouseStartPosition.top][mouseStartPosition.left],
          snake: {
            headPos:
              state.matrixPos[snakeStartPosition.top][snakeStartPosition.left],
            body: [
              state.matrixPos[snakeStartPosition.top][
                snakeStartPosition.left - 1
              ],
              state.matrixPos[snakeStartPosition.top][
                snakeStartPosition.left - 2
              ],
            ],
            direction: directions.right,
          },
          validDirection: true,
        };
      }

      const selfBite = state.snake.body.some((item) => {
        return (
          item.top === state.matrixPos[new_y][new_x].top &&
          item.left === state.matrixPos[new_y][new_x].left
        );
      });

      if (selfBite) {
        return {
          score: 0,
          speed: 1,
          matrixPos: state.matrixPos,
          play: false,
          mousePosition:
            state.matrixPos[mouseStartPosition.top][mouseStartPosition.left],
          snake: {
            headPos:
              state.matrixPos[snakeStartPosition.top][snakeStartPosition.left],
            body: [
              state.matrixPos[snakeStartPosition.top][
                snakeStartPosition.left - 1
              ],
              state.matrixPos[snakeStartPosition.top][
                snakeStartPosition.left - 2
              ],
            ],
            direction: directions.right,
          },
          validDirection: true,
        };
      }

      return {
        ...state,
        snake: {
          ...state.snake,
          body,
          headPos: state.matrixPos[new_y][new_x],
        },
      };

    case CHANGE_DIRECTION:
      const dir = action.payload;
      const currentDir = state.snake.direction;

      if (currentDir === directions.right || currentDir === directions.left) {
        if (dir === directions.up || dir === directions.down) {
          return {
            ...state,
            snake: { ...state.snake, direction: action.payload },
          };
        }
      }
      if (currentDir === directions.up || currentDir === directions.down) {
        if (dir === directions.right || dir === directions.left) {
          return {
            ...state,
            snake: { ...state.snake, direction: action.payload },
          };
        }
      }

      return state;

    case SHOW_MOUSE:
      const { y, x } = action.payload;
      return {
        ...state,
        showMouse: true,
        mousePosition: state.matrixPos[y][x],
      };

    case EAT_MOUSE:
      const mouse_ate =
        state.mousePosition.top === state.snake.headPos.top &&
        state.mousePosition.left === state.snake.headPos.left;
      if (mouse_ate) {
        const last_y = state.matrixPos.findIndex(
          (item) =>
            item[0].top === state.snake.body[state.snake.body.length - 1].top
        );
        const last_x = state.matrixPos[last_y].findIndex(
          (item) =>
            item.left === state.snake.body[state.snake.body.length - 1].left
        );

        return {
          ...state,
          showMouse: false,
          score: state.score + 1,
          snake: {
            ...state.snake,
            body: [...state.snake.body, state.matrixPos[last_y][last_x]],
          },
        };
      }
      return state;

    case TOGGLE_CONSOLE:
      return { ...state, showConsole: !state.showConsole };
    default:
      return state;
  }
};

export default reducer;
