import React, { useState } from "react";
import styled from "styled-components";
import { css } from "../constants";
import { useGameContext } from "../gameContext";
import { TOGGLE_CONSOLE } from "../constants";
import { AiFillCloseCircle } from "react-icons/ai";
import { Instructions, Transactions, Account } from "./index";

function Console() {
  const [screen, setScreen] = useState({
    inst: true,
    acc: false,
    trx: false,
  });

  const { dispatch } = useGameContext();

  return (
    <Wrapper>
      <div className="modal">
        <nav>
          <div className="btn-container">
            <button
              className={screen.inst ? "active-btn" : ""}
              onClick={() => {
                setScreen({
                  inst: true,
                  acc: false,
                  trx: false,
                });
              }}
            >
              instructions
            </button>
            <button
              className={screen.acc ? "active-btn" : ""}
              onClick={() => {
                setScreen({
                  inst: false,
                  acc: true,
                  trx: false,
                });
              }}
            >
              account
            </button>
            <button
              className={screen.trx ? "active-btn" : ""}
              onClick={() => {
                setScreen({
                  inst: false,
                  acc: false,
                  trx: true,
                });
              }}
            >
              transact
            </button>
          </div>
          <button
            className="close-modal"
            onClick={() => {
              dispatch({ type: TOGGLE_CONSOLE });
            }}
          >
            <AiFillCloseCircle />
          </button>
        </nav>
        <section className="modal-container">
          {screen.inst && <Instructions />}
          {screen.acc && <Account />}
          {screen.trx && <Transactions />}
        </section>
      </div>
    </Wrapper>
  );
}

export default Console;
const Wrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 8;

  .modal {
    height: 90vh;
    width: 85vw;
    background-color: ${css.primaryColor};
    border-radius: ${css.borderRadius};
    display: flex;
    flex-direction: column;
  }

  nav {
    margin: 2px 10px;
    padding-bottom: 5px;
    display: flex;
    border-bottom: 1px solid black;

    .btn-container button {
      margin: 10px 5px 0px;
      border: 0.5px solid ${css.actionColor};
      padding: 2px 4px;
      background-color: transparent;
      color: ${css.backgroundColor};
      font-size: 1rem;
      font-weight: 600;
      text-transform: capitalize;
    }
    .btn-container button:hover {
      cursor: pointer;
      border-bottom: 2px solid ${css.actionColor};
      transition: all cubic-bezier(0.785, 0.135, 0.15, 0.86) 150ms;
    }
    .btn-container button.active-btn {
      border-bottom: 2px solid ${css.accentColor};
    }

    .close-modal {
      margin: 8px 5px 0px;
      border: none;
      background-color: transparent;
      color: ${css.actionColor};
      align-self: flex-end;
      justify-self: flex-end;
      font-size: 1.3rem;
      font-weight: 600;
      cursor: pointer;
      margin-left: auto;
    }
  }
  .modal-container {
    margin: 10px;
    overflow-y: scroll;
  }
`;
