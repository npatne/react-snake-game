import React, { useState } from "react";
import styled from "styled-components";
import { css, transactionOptions, transactionHistory } from "../constants";
import { Loader } from "./index";
import { Notification } from "./index";

function Transactions() {
  const initialState = { 0: "", 1: "", 2: "" };
  const [value, setValue] = useState(initialState);
  // loader, notifications are yet to be triggred

  const handleChange = (e) => {
    const name = e.target.name;
    const _value = e.target.value;
    if (name === "Create Snake") {
      setValue((old) => {
        return { ...old, 0: _value };
      });
    }
    if (name === "Change Color") {
      setValue((old) => {
        return { ...old, 1: _value };
      });
    }
    if (name === "Change Head") {
      setValue((old) => {
        return { ...old, 2: _value };
      });
    }
  };

  return (
    <Wrapper>
      <header>
        <h2>
          Snake Name: <span>Snake</span>
        </h2>
        <h2>
          Balance: <span>123432</span>
        </h2>

        {true && (
          <Notification
            msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          natus!"
          />
        )}
      </header>
      <div className="trx-container">
        <div className="transact">
          <h3>Transact</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {transactionOptions.map((item, index) => {
              const { title, label } = item;
              return (
                <div key={index} className="form-control">
                  {true && (
                    <div className="loader-pos">
                      <Loader />
                    </div>
                  )}
                  <div className="label-group">
                    <label>
                      <p className="trx-title">{title}</p>
                      <p className="trx-label">{label}</p>
                    </label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      name={title}
                      value={value[index]}
                      onChange={handleChange}
                    />
                    <button
                      onClick={() => {
                        setValue(initialState);
                        console.log(`🎈send clicked🎈`, {
                          value: value[index],
                          title,
                        });
                      }}
                    >
                      Send
                    </button>
                  </div>
                </div>
              );
            })}
          </form>
        </div>
        <div className="transactions">
          <h3>Transaction History</h3>
          {transactionHistory.map((item, index) => {
            const { timestamp, cause, price } = item;

            const timestampFormated = new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }).format(timestamp);
            return (
              <div key={index} className="transaction">
                <div>
                  <span className="timestamp">{timestampFormated}</span>
                  <span className="cause">{cause}</span>
                </div>
                <div className="price">{price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Transactions;

const Wrapper = styled.article`
  padding: 0 10px;
  header {
    border-bottom: 1px solid ${css.actionColor};
    padding-bottom: 5px;
    h2 {
      font-size: 1.1rem;
      color: ${css.secondaryColor};
      margin-bottom: 5px;
      span {
        color: ${css.actionColor};
      }
    }
  }
  /* header code ended */

  .trx-container {
    display: flex;
    padding: 10px 0;
    h3 {
      font-size: 1.05rem;
      margin-bottom: 10px;
      color: ${css.secondaryColor};
    }

    .transactions {
      flex: 3;
      margin-right: 5px;
      padding-left: 10px;
      border-left: 3px solid gainsboro;

      .transaction {
        background-color: #faf7f7;
        padding: 5px;
        margin: 5px 0px;
        border-radius: ${css.borderRadius};
        display: flex;

        .timestamp {
          color: lightslategray;
          font-size: 0.75rem;
        }
        .cause {
          color: ${css.backgroundColor};
          font-weight: 500;
          margin-left: 1.5rem;
        }
        .price {
          margin-left: auto;
          margin-right: 5px;
          font-weight: 600;
          color: ${css.actionColor};
        }
      }
    }
    .transact {
      flex: 5;
      margin-left: 5px;

      .form-control {
        padding: 10px 20px;
        margin: 10px 0px;
        background-color: whitesmoke;
        border-radius: 5px;
        max-width: 95%;
        position: relative;

        .loader-pos {
          position: absolute;
          top: 21px;
          left: 579px;
          max-width: fit-content;
        }

        .label-group {
          display: flex;
          margin-bottom: 10px;
          .trx-title {
            font-weight: bolder;
            color: ${css.backgroundColor};
          }
          .trx-label {
            font-weight: 500;
            font-size: small;
          }
        }

        input {
          padding: 5px;
          color: ${css.backgroundColor};
          font-weight: 400;
          border: 1px solid ${css.primaryColor};
          background-color: #f5f0e8;
          min-width: 300px;
          border-radius: 6px 0px 0px 6px;
        }

        button {
          border: none;
          background-color: ${css.secondaryColor};
          padding: 6px 15px;
          color: ${css.primaryColor};
          font-weight: 600;
          border-radius: 0px 6px 6px 0px;
        }
        button:hover {
          cursor: pointer;
          background-color: ${css.actionColor};
          transition: all ease-in-out 100ms;
        }
      }
    }
  }
`;
