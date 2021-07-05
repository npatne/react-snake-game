import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { css } from "../constants";

function Notification({ msg }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const timeout = setTimeout(() => {
      setShow(false);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <Wrapper>
      <div className={`notification ${show ? "show" : ""}`}>{msg}</div>
    </Wrapper>
  );
}

export default Notification;
const Wrapper = styled.div`
  .notification {
    padding: 0;
    margin: 0;
    background-color: ${css.accentColor};
    color: ${css.backgroundColor};
    border-radius: ${css.borderRadius};
    width: max-content;
    font-weight: 500;
    height: 0;
    overflow: hidden;
    transition: all ease-in-out 150ms;
  }

  .show {
    padding: 5px 10px;
    margin: 5px 0;
    height: max-content;
  }
`;
