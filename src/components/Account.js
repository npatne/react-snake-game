import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styled from "styled-components";
import { css, scoreHistory } from "../constants";
import { Notification } from "./index";

function Account() {
  const snakeDetails = [
    { title: "Snake Name", value: "Snake" },
    { title: "Current Score", value: "30" },
    { title: "Color", value: "Red" },
    { title: "Head", value: "🐍" },
    { title: "Speed Controls", value: true },
    { title: "Change Color", value: false },
    { title: "Change Head", value: true },
  ];
  return (
    <Wrapper>
      <header>
        <div className="acc-info-section">
          <div className="acc-info">
            <h2>
              <p className="font-size-135">Connected Account: </p>{" "}
              <span>XXAASDFFEESsd</span>
            </h2>

            <h2>
              <p className="font-size-135">Balance:</p>{" "}
              <span>
                <small>
                  <i>ST</i>
                </small>{" "}
                1234
              </span>
            </h2>
          </div>
          <div className="acc-btn-container">
            <button
              className={`${true ? "loading-btn" : ""}`}
              onClick={() => {
                console.log(`🎈clicked🎈`);
              }}
            >
              {true ? "Loading..." : "Redeem Current Score"}
            </button>
            <button
              className={`${false ? "loading-btn" : ""}`}
              onClick={() => {
                console.log(`🎈clicked🎈`);
              }}
            >
              {false ? "Loading..." : "Fetch/Update Snake Info"}
            </button>
          </div>
        </div>
        {true && (
          <Notification
            msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          natus!"
          />
        )}
      </header>
      <div className="acc-container">
        <div className="details-container">
          <h3>Details</h3>
          <div className="details">
            {snakeDetails.map((item, index) => {
              const { title, value } = item;
              return (
                <div key={index} className="details-card">
                  <p className="title">{title}</p>
                  {value === true ? (
                    <FaCheckCircle className="check-icon" />
                  ) : (
                    <p className="value">{value}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="high-scores">
          <h3>Score Board</h3>
          {scoreHistory.map((item, index) => {
            const { timestamp, score, price } = item;

            const timestampFormated = new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }).format(timestamp);
            return (
              <div key={index} className="score-card">
                <div>
                  <span className="timestamp">{timestampFormated}</span>
                  <span className="score">{score}</span>
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

export default Account;

const Wrapper = styled.article`
  padding: 0 10px;
  header {
    border-bottom: 1px solid ${css.actionColor};
    padding-bottom: 5px;
    .acc-info-section {
      display: flex;
      justify-content: space-between;
    }
    .acc-btn-container {
      width: 22%;

      button {
        border: none;
        background-color: ${css.secondaryColor};
        padding: 6px 12px;
        color: ${css.primaryColor};
        font-weight: 600;
        border-radius: 6px;
        display: block;
        width: 100%;
        margin-bottom: 10px;
      }
      button:hover {
        cursor: pointer;
        background-color: ${css.actionColor};
        transition: all ease-in-out 100ms;
      }
      .loading-btn {
        background-color: ${css.backgroundColor};
        transition: all ease-in-out 200ms;
      }
      .loading-btn:hover {
        cursor: default;
        background-color: ${css.backgroundColor};
      }
    }
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

  .acc-container {
    display: flex;
    padding: 10px 0;
    h3 {
      font-size: 1.05rem;
      margin-bottom: 10px;
      color: ${css.secondaryColor};
    }

    .high-scores {
      flex: 3;
      margin-right: 5px;
      padding-left: 10px;
      border-left: 3px solid gainsboro;

      .score-card {
        background-color: #faf7f7;
        padding: 5px;
        margin: 5px 0px;
        border-radius: ${css.borderRadius};
        display: flex;

        .timestamp {
          color: lightslategray;
          font-size: 0.75rem;
        }
        .score {
          color: ${css.actionColor};
          font-weight: 700;
          margin-left: 2rem;
        }
        .price {
          margin-left: auto;
          margin-right: 5px;
          font-weight: 600;

          color: ${css.backgroundColor};
        }
      }
    }
    .details-container {
      flex: 5;
      margin-left: 5px;

      .details {
        display: flex;
        flex-wrap: wrap;

        .details-card {
          height: 6rem;
          width: 8rem;
          border-radius: 6px;
          background-color: #dff2eb;
          padding: 5px;
          margin: 5px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .check-icon {
            color: green;
            font-size: larger;
            margin: 5px;
          }
          .title {
            font-weight: 700;
            color: ${css.backgroundColor};
          }
          .value {
            margin: 5px;
            padding: 5px;
            font-weight: 600;
          }
        }
      }
    }
  }
`;
