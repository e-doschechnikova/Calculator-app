import React, { useState } from "react";
import { Button } from "../Button";
import "./App.scss";

const App = () => {
  const [value, setValue] = useState<string>("0");
  const [memory, setMemory] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const handleButtonPress = (content: any) => () => {
    // console.log("value", value);
    const num = parseFloat(value);

    setValue(parseFloat(num + content).toString());

    switch (content) {
      // function
      case "AC":
        setValue("0");
        setMemory(null);
        setOperator(null);
        break;
      case "±":
        setValue((num * -1).toString());
        break;
      case "%":
        setValue((num / 100).toString());
        setMemory(null);
        setOperator(null);
        break;
      // operator
      case "÷":
        if (operator !== null) {
          if (operator === "+") {
            setMemory(memory! + parseFloat(value));
          } else if (operator === "−") {
            setMemory(memory! - parseFloat(value)); // TODO: fix ?????
          } else if (operator === "×") {
            setMemory(memory! * parseFloat(value));
          } else if (operator === "÷") {
            setMemory(memory! / parseFloat(value));
          }
        } else {
          setMemory(parseFloat(value));
        }
        setValue("0");
        setOperator("÷");
        break;
      case "×":
        if (operator !== null) {
          if (operator === "+") {
            setMemory(memory! + parseFloat(value));
          } else if (operator === "−") {
            setMemory(memory! - parseFloat(value)); // TODO: fix ?????
          } else if (operator === "×") {
            setMemory(memory! * parseFloat(value));
          } else if (operator === "÷") {
            setMemory(memory! / parseFloat(value));
          }
        } else {
          setMemory(parseFloat(value));
        }
        setValue("0");
        setOperator("×");
        break;
      case "−":
        if (operator !== null) {
          if (operator === "+") {
            setMemory(memory! + parseFloat(value));
          } else if (operator === "−") {
            setMemory(memory! - parseFloat(value)); // TODO: fix ?????
          } else if (operator === "×") {
            setMemory(memory! * parseFloat(value));
          } else if (operator === "÷") {
            setMemory(memory! / parseFloat(value));
          }
        } else {
          setMemory(parseFloat(value));
        }
        setValue("0");
        setOperator("−");
        break;
      case "+":
        if (operator !== null) {
          if (operator === "+") {
            setMemory(memory! + parseFloat(value));
          } else if (operator === "−") {
            setMemory(memory! - parseFloat(value)); // TODO: fix ?????
          } else if (operator === "×") {
            setMemory(memory! * parseFloat(value));
          } else if (operator === "÷") {
            setMemory(memory! / parseFloat(value));
          }
        } else {
          setMemory(parseFloat(value));
        }
        setValue("0");
        setOperator("+");
        break;

      case "=":
        if (!operator) return;

        if (operator === "+") {
          setValue((memory! + parseFloat(value)).toString());
        } else if (operator === "−") {
          setValue((memory! - parseFloat(value)).toString()); // TODO: fix ?????
        } else if (operator === "×") {
          setValue((memory! * parseFloat(value)).toString());
        } else if (operator === "÷") {
          setValue((memory! / parseFloat(value)).toString());
        }
        setMemory(null);
        setOperator(null);
        break;
      // other
      case ".":
        setMemory(parseFloat(value));
        setValue("0");
        break;
    }
  };

  return (
    <div className="App">
      <div className="top">17:38</div>
      <div className="display">{value}</div>
      <div className="buttons">
        <Button
          onButtonClick={handleButtonPress}
          content={"AC"}
          type={"function"}
        />
        <Button
          onButtonClick={handleButtonPress}
          content={"±"}
          type={"function"}
        />
        <Button
          onButtonClick={handleButtonPress}
          content={"%"}
          type={"function"}
        />
        <Button
          onButtonClick={handleButtonPress}
          content={"÷"}
          type={"operator"}
        />
        <Button onButtonClick={handleButtonPress} content={"7"} />
        <Button onButtonClick={handleButtonPress} content={"8"} />
        <Button onButtonClick={handleButtonPress} content={"9"} />
        <Button
          onButtonClick={handleButtonPress}
          content={"×"}
          type={"operator"}
        />
        <Button onButtonClick={handleButtonPress} content={"4"} />
        <Button onButtonClick={handleButtonPress} content={"5"} />
        <Button onButtonClick={handleButtonPress} content={"6"} />
        <Button
          onButtonClick={handleButtonPress}
          content={"−"}
          type={"operator"}
        />
        <Button onButtonClick={handleButtonPress} content={"1"} />
        <Button onButtonClick={handleButtonPress} content={"2"} />
        <Button onButtonClick={handleButtonPress} content={"3"} />
        <Button
          onButtonClick={handleButtonPress}
          content={"+"}
          type={"operator"}
        />
        <Button onButtonClick={handleButtonPress} content={"0"} />
        <Button onButtonClick={handleButtonPress} content={"."} />
        <Button
          onButtonClick={handleButtonPress}
          content={"="}
          type={"operator"}
        />
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default App;
