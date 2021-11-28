import React from "react";
import { GiSnakeTotem, GiRat } from "react-icons/gi";
import { SnakeBoard, SnakeVitals, Console } from "./components/index";
import { useGameContext } from "./gameContext";

function App() {
  const { state } = useGameContext();
  return (
    <main className="section">
      <div className="header">
        <h1 className="heading">
          <GiSnakeTotem />
          Snake & Mouse
          <GiRat className="rat-Icon" />
        </h1>
      </div>
      <section className="container">
        <SnakeVitals />
        <p className="info">use arrow keys to control</p>
        <SnakeBoard />
      </section>
      {state.showConsole && <Console />}
    </main>
  );
}

export default App;
