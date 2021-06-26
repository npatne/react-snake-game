import React from "react";
import { useGameContext } from "../gameContext";
import { SET_DIFFICULTY, TOGGLE_PLAY } from "../constants";

function SnakeVitals() {
  const { state, dispatch } = useGameContext();
  return (
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
  );
}

export default SnakeVitals;
