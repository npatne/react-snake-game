import React from "react";
import { SnakeBoard, SnakeVitals } from "./components/index";

function App() {
  return (
    <main className="section">
      <div className="header">
        <h1 className="heading">Snake game</h1>
      </div>
      <section className="container">
        <SnakeVitals />
        <p className="info">use arrow keys to control</p>
        <SnakeBoard />
      </section>
    </main>
  );
}

export default App;
