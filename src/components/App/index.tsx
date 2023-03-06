import React from "react";
import { Button } from "../Button";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <div className="top">17:38</div>
      <div className="display">0</div>
      <div className="buttons">
        <Button />
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default App;
