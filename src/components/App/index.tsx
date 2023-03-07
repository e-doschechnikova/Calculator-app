import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import menu from "../../assets/menu.png";
import commafy from "./../../utils/commafy";
import "./App.scss";

const App = () => {
  const [time, setTime] = useState<any>(new Date());
  const [value, setValue] = useState<string>("0");
  const [memory, setMemory] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  useEffect(() => {
    setTime(new Date());
  }, [new Date().getMinutes()]);
  const handleButtonPress = (content: string) => () => {
    const num = parseFloat(value);

    //function
    if (content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === "+/-") {
      setValue((num * -1).toString());
      return;
    }

    if (content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    //operator
    if (content === "+") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory! + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory! - parseFloat(value));
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
      return;
    }
    if (content === "−") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory! + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory! - parseFloat(value));
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
      return;
    }
    if (content === "×") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory! + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory! - parseFloat(value));
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
      return;
    }
    if (content === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory! + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory! - parseFloat(value));
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
      return;
    }

    if (content === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory! + parseFloat(value)).toString());
      } else if (operator === "−") {
        setValue((memory! - parseFloat(value)).toString());
      } else if (operator === "×") {
        setValue((memory! * parseFloat(value)).toString());
      } else if (operator === "÷") {
        setValue((memory! / parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }
    //other
    if (content === ".") {
      if (value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  };

  return (
    <div className="App">
      <div className="top">
        <div className="time">
          {time.getHours()}:{time.getMinutes().toString().padStart(2, "0")}
        </div>
        <div className="menu">
          <img src={menu} alt="menu" />
        </div>
      </div>
      <div className="display">{commafy(value)}</div>
      <div className="buttons">
        <Button
          onButtonClick={handleButtonPress}
          content={"AC"}
          type={"function"}
        />
        <Button
          onButtonClick={handleButtonPress}
          content={"+/-"}
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
