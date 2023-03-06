import React, { useState } from "react";
import { Button } from "../Button";
import "./App.scss";

const App = () => {
  const [value, setValue] = useState<string>("0");
  return (
    <div className="App">
      <div className="top">17:38</div>
      <div className="display">{value}</div>
      <div className="buttons">
        <Button content={"AC"} type={"function"} />
        <Button content={"±"} type={"function"} />
        <Button content={"%"} type={"function"} />
        <Button content={"÷"} type={"operator"} />
        <Button content={"7"} />
        <Button content={"8"} />
        <Button content={"9"} />
        <Button content={"×"} type={"operator"} />
        <Button content={"4"} />
        <Button content={"5"} />
        <Button content={"6"} />
        <Button content={"−"} type={"operator"} />
        <Button content={"1"} />
        <Button content={"2"} />
        <Button content={"3"} />
        <Button content={"+"} type={"operator"} />
        <Button content={"0"} />
        <Button content={"."} />
        <Button content={"="} type={"operator"} />
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default App;
