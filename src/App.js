import React, { useState } from "react";
import "./App.css";
import Forms from "./components/Forms";

const App = () => {
  const [a1, setA1] = useState({});

  return (
    <div>
      <h1>Grocery Bud</h1>
      <Forms a1={a1} setA1={setA1} />
    </div>
  );
};

export default App;
