import React from "react";
import { useGameContext } from "../gameContext";
import { TOGGLE_CONSOLE, TOGGLE_PLAY } from "../constants";

function SnakeVitals() {
  const { state, dispatch, handleChangeSpeed } = useGameContext();

  return (
    <div className="d-flex game-vitals">
      <div className="score d-flex">
        <h1>
          Current Score:&nbsp;<span className="score-value">{state.score}</span>
        </h1>
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
        <button
          type="button"
          disabled={state.play ? true : false}
          onClick={() => {
            dispatch({ type: TOGGLE_CONSOLE });
          }}
          className="button menu-btn"
        >
          console
        </button>
      </div>
      <div className="speed-container d-flex">
        <div className="speed-label">
          <h1>Speed:</h1>
        </div>
        <div className="speed-value">
          <button
            className="speed-btn"
            disabled={state.play ? true : false}
            name="dec"
            onClick={handleChangeSpeed}
          >
            -
          </button>

          <span className="value">{state.speed}</span>

          <button
            className="speed-btn"
            disabled={state.play ? true : false}
            name="inc"
            onClick={handleChangeSpeed}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default SnakeVitals;
