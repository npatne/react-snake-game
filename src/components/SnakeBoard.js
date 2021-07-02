import React from "react";
import { useEffect } from "react";
import { useGameContext } from "../gameContext";
import { MOVE_SNAKE, SHOW_MOUSE, EAT_MOUSE } from "../constants";

function SnakeBoard() {
  const { state, dispatch } = useGameContext();

  useEffect(() => {
    if (state.play) {
      const interval = setInterval(() => {
        dispatch({ type: MOVE_SNAKE });
      }, 600 - 100 * state.speed);
      return () => {
        clearInterval(interval);
      };
    }
  }, [state.play, state.speed]);

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
  );
}

export default SnakeBoard;
