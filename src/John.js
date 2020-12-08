import React, { useState } from "react";
const John = () => {
  const [optionState, setOptionState] = useState("Types");
  const handleChange = (e) => {
    setOptionState(e.target.value);
  };
  return (
    <>
      <select value={optionState} onChange={handleChange}>
        <option value="Approave">Active</option>
        <option value="Reject">Terminate</option>
        <option value="Reject & Remove from workflow">Remove</option>
      </select>
    </>
  );
};
export default John;
