import React, { useState } from "react";
const ElsaIngram = () => {
  const [optionState, setOptionState] = useState("Types");
  const handleChange = (e) => {
    setOptionState(e.target.value);
  };
  return (
    <>
      <select value={optionState} onChange={handleChange}>
        <option value="Approave">Active</option>
        <option value="Reject">Terminate</option>
        <option value="Reject & Remove from workflow">Active</option>
      </select>
    </>
  );
};
export default ElsaIngram;