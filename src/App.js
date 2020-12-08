import React, { useState } from "react";
import "./styles.css";
import TypesOfLevel from "./TypesOfLevel";

export default function App() {
  const [level, setLevel] = useState("");
  let level1 = [];
  for (let i = 1; i <= level; i++) {
    level1.push(<TypesOfLevel />);
  }

  return (
    <div className="App">
      <input
        type="text"
        name="number"
        value={level}
        onChange={(event) => setLevel(event.target.value)}
      />
      <h1>{level}</h1>
      {level1}
    </div>
  );
}
