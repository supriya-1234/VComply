import React, { useState } from "react";
import Sequential from "./Sequential";
import RoundRobin from "./RoundRobin";
import AnyOne from "./AnyOne";
export default function TypesOfLevel() {
  const [optionState, setOptionState] = useState("Types");
  const handleChange = (e) => {
    setOptionState(e.target.value);
  };
  return (
    <>
      <select value={optionState} onChange={handleChange}>
        <option value="Sequential">Sequential</option>
        <option value="Round Robin">RoundRobin</option>
        <option value="Any one">AnyOne</option>
      </select>
      {optionState === "Sequential" ? (
        <Sequential />
      ) : optionState === "Round Robin" ? (
        <RoundRobin />
      ) : (
        <AnyOne />
      )}
    </>
  );
}
