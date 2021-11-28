import { useState, useEffect } from "react";
import styled from "styled-components";
import { CLOSE_MODAL, css } from "../constants";
import { VscDebugRestart } from "react-icons/vsc";
import { useGameContext } from "../gameContext";

function GameOver() {
  const { dispatch } = useGameContext();
  const [modalClass, setModalClass] = useState("hide-gameover-modal");

  useEffect(() => {
    setModalClass("show-gameover-modal");
    const timeout = setTimeout(() => {
      setModalClass("hide-gameover-modal");
      dispatch({ type: CLOSE_MODAL });
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Wrapper className={modalClass}>
      <div className="modal">
        <p>Game Over!</p>{" "}
        <span className="restart-icon">
          <VscDebugRestart />
        </span>
        <small>restarting in 3 sec</small>
      </div>
      <div className="back-drop"></div>
    </Wrapper>
  );
}

export default GameOver;
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal {
    width: 25%;
    height: max-content;
    padding: 1rem;
    border-radius: ${css.borderRadius};
    background-color: ${css.primaryColor};
    display: flex;
    flex-direction: column;
    z-index: 105;

    p {
      color: ${css.actionColor};
      font-size: 2rem;
      text-align: center;
      font-weight: 800;
    }
    small {
      text-align: center;
    }
  }
  .restart-icon {
    display: block;
    font-size: 3.5rem;
    color: ${css.backgroundColor};
    text-align: center;
  }
  .back-drop {
    filter: blur(5px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
