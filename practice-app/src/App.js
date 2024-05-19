import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import UseStates from "./Components/UseStates";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/UseStates" element={<UseStates />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
