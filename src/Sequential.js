import React, { useState } from "react";
import Select from "react-select";
import DJoshi from "./DJoshi";
import ElsaIngram from "./ElsaIngram";
import NickHolden from "./NickHolden";
import PaulMarsh from "./PaulMarsh";
import John from "./John";
const Sequential = () => {
  const data = [
    {
      value: 1,
      label: "Elsa Ingram"
    },
    {
      value: 2,
      label: "Paul Marsh"
    },
    {
      value: 3,
      label: "D Joshi"
    },
    {
      value: 4,
      label: "Nick Holden"
    },
    {
      value: 5,
      label: "John"
    }
  ];
  const [selectedValue, setSelectedValue] = useState([]);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  return (
    <>
      <h1>Sequential</h1>
      <Select
        className="dropdown"
        placeholder="Select Option"
        value={data.filter((obj) => selectedValue.includes(obj.value))} // set selected values
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
        isMulti
        isClearable
      />
      <h2>{selectedValue.value}</h2>
      {selectedValue === "Elsa Ingram" ? (
        <ElsaIngram />
      ) : selectedValue === "Paul Marsh" ? (
        <PaulMarsh />
      ) : selectedValue === "D Joshi" ? (
        <DJoshi />
      ) : selectedValue === "Nick Holden" ? (
        <NickHolden />
      ) : (
        <John />
      )}
    </>
  );
};
export default Sequential;
