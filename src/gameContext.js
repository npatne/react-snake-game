import React, { useContext, useEffect, useReducer } from "react";

import {
  FIXED_HIEGHT,
  FIXED_WIDTH,
  Y_DIVISIONS,
  X_DIVISIONS,
  snakeStartPosition,
  mouseStartPosition,
  directions,
  CHANGE_DIRECTION,
} from "./constants";

import reducer from "./reducer";

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

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  useEffect(() => {
    if (state.play) {
      window.addEventListener("keydown", handleChangeDirection);
      return () => {
        window.removeEventListener("keydown", handleChangeDirection);
      };
    }
  }, [state.play, state.validDirection]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGameContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
