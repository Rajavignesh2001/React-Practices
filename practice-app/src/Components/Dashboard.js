import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const Navigate = useNavigate();
  return (
    <>
      <h1>React Practices</h1>
      <button onClick={() => Navigate("./UseStates")}>Use State</button>
    </>
  );
}

export default Dashboard;
