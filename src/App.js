import { useEffect, useReducer } from "react";
import reducer from "./reducer";

import {
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
} from "./constants";

function getMatrixPos() {
  const width = FIXED_WIDTH;
  const height = FIXED_HIEGHT;

  const pointX = X_DIVISIONS; // points along x
  const pointY = Y_DIVISIONS; // points along y
  const unitY = height / pointY;
  const unitX = width / pointX;

  const matrix = Array.from({ length: pointY }, (_, y) => {
    return Array.from({ length: pointX }, (_, x) => {
      return { top: y * unitY, left: x * unitX };
    });
  });
  return matrix;
}
const matrixPos = getMatrixPos();

function App() {
  const initialState = {
    score: 0,
    difficulty: 1,
    matrixPos: matrixPos,
    play: false,
    mousePosition: matrixPos[mouseStartPosition.top][mouseStartPosition.left],
    snake: {
      headPos: matrixPos[snakeStartPosition.top][snakeStartPosition.left],
      body: [
        matrixPos[snakeStartPosition.top][snakeStartPosition.left - 1],
        matrixPos[snakeStartPosition.top][snakeStartPosition.left - 2],
      ],
      direction: directions.right,
    },
    validDirection: true,
    showMouse: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // game functions

  const handleChangeDirection = (event) => {
    if (event.keyCode === 38) {
      changeDirection(directions.down);
    }
    if (event.keyCode === 40) {
      changeDirection(directions.up);
    }
    if (event.keyCode === 39) {
      changeDirection(directions.right);
    }
    if (event.keyCode === 37) {
      changeDirection(directions.left);
    }
  };

  const changeDirection = (dir) => {
    dispatch({ type: CHANGE_DIRECTION, payload: dir });
  };

  // game use effects

  useEffect(() => {
    if (state.play) {
      window.addEventListener("keydown", handleChangeDirection);
      return () => {
        window.removeEventListener("keydown", handleChangeDirection);
      };
    }
  }, [state.play, state.validDirection]);

  useEffect(() => {
    if (state.play) {
      const interval = setInterval(() => {
        dispatch({ type: MOVE_SNAKE });
      }, 600 - 100 * state.difficulty);
      return () => {
        clearInterval(interval);
      };
    }
  }, [state.play, state.difficulty]);

  useEffect(() => {
    dispatch({ type: EAT_MOUSE });
  }, [state.snake.headPos]);

  useEffect(() => {
    if (!state.showMouse) {
      const y = Math.floor(Math.random() * 16);
      const x = Math.floor(Math.random() * 40);
      const timer = setTimeout(() => {
        dispatch({ type: SHOW_MOUSE, payload: { y, x } });
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [state.showMouse]);

  return (
    <main className="section">
      <div className="header">
        <h1 className="heading">Snake game</h1>
      </div>
      <section className="container">
        <div className="game-vitals d-flex">
          <div className="score d-flex">
            <h1>{state.score}</h1>
          </div>
          <div className="button-container d-flex">
            <button
              type="button"
              onClick={() => {
                dispatch({ type: TOGGLE_PLAY });
              }}
              className="button"
            >
              {!state.play ? "play💃" : "pause🧍‍♂️"}
            </button>
          </div>
          <div className="difficulty d-flex">
            <div>
              <h1>Difficulty:</h1>
              <h3>1 to 5</h3>
            </div>
            <input
              min="1"
              max="5"
              type="number"
              className="input"
              value={state.difficulty}
              disabled={state.play ? true : false}
              onChange={(event) => {
                const value = event.target.value;
                if (value < 0 || value > 5) {
                  alert("Input difficulty level between 1 to 5");
                } else {
                  dispatch({
                    type: SET_DIFFICULTY,
                    payload: parseInt(value),
                  });
                }
              }}
            />
          </div>
        </div>
        <p className="info">use arrow keys to control</p>
        <article className="game-board">
          <div className="game-arena">
            <div className="grid">
              {state.matrixPos.map((row, i) => {
                return row.map((col, j) => {
                  return (
                    <div
                      key={i + 1 * j + 1}
                      className="point"
                      style={{ top: col.top, left: col.left }}
                    ></div>
                  );
                });
              })}
            </div>
            {state.showMouse && (
              <div
                style={{
                  top: state.mousePosition.top,
                  left: state.mousePosition.left,
                }}
                className="mouse"
              >
                🐭
              </div>
            )}
            <div
              className="snake-head"
              style={{
                top: state.snake.headPos.top,
                left: state.snake.headPos.left,
              }}
            >
              🐍
            </div>
            {state.snake.body.map((frag, index) => {
              return (
                <div
                  className="snake-body"
                  key={index}
                  style={{ top: frag.top, left: frag.left }}
                >
                  🔸
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
