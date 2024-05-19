import React, { useState } from "react";

function UseStates() {
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState();

  const add = () => {
    setNumber(number + 1);
  };
  const sub = () => {
    setNumber(number - 1);
  };

  const theme = () => {
    setColor((color) => (color === "white" ? "black" : "white"));
  };

  return (
    <>
      <h1>Use States</h1>
      <div style={{ backgroundColor: color }}>
        <button onClick={theme}>Theme</button>
        <p style={{ color: "red" }}>Number : {number} </p>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
      </div>
    </>
  );
}

export default UseStates;
