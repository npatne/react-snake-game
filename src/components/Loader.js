import React from "react";
import styled from "styled-components";

function Loader() {
  return (
    <Wrapper>
      <span className="loading"></span>
    </Wrapper>
  );
}

export default Loader;
const Wrapper = styled.div`
  .loading {
    position: relative;
    &::before,
    &::after {
      content: "";
      width: 0.6em;
      height: 0.6em;
      display: block;
      border-radius: 50%;
      position: absolute;
      transform-origin: 50% 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &::before {
      background: lightcoral;
    }
    &::after {
      background: transparent;
      border: 2px solid lightcoral;
      animation: growCircle 1s ease-out infinite;
    }
  }

  @keyframes growCircle {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%) scale(2);
      opacity: 0;
    }
  }
`;
