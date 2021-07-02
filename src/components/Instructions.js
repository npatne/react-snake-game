import React from "react";
import styled from "styled-components";
import { css, instructions } from "../constants";

function Instructions() {
  return (
    <Wrapper>
      <div className="game">
        <h2>Game Instructions</h2>
        {instructions.game.map((item, index) => {
          return <p key={index}>#&nbsp;{item}</p>;
        })}
      </div>
      <div className="blockchain">
        <h2>Blockchain Instructions</h2>
        <div className="bc-section-container">
          {instructions.blockchain.map((section, index) => {
            return (
              <div key={index} className="bc-section">
                <h3>{section.title}</h3>
                {section.inst.map((item, index) => {
                  return <p key={index}>#&nbsp;{item}</p>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Instructions;
const Wrapper = styled.article`
  display: flex;
  .game {
    border-radius: 8px;
    background-color: lightgoldenrodyellow;
    padding: 5px;
    margin: 5px;
    flex: 1;
  }
  .blockchain {
    border-radius: 8px;
    background-color: lightpink;
    padding: 5px;
    margin: 5px;
    flex: 2;

    .bc-section-container {
      display: flex;
    }
    .bc-section {
      padding: 5px;
    }
  }
  h2 {
    font-size: 1.25rem;
    color: ${css.backgroundColor};
    margin-bottom: 5px;
  }
  h3 {
    font-size: 1rem;
    color: black;
    margin-bottom: 5px;
  }

  p {
    padding: 3px;
    font-weight: 500;
  }
`;
