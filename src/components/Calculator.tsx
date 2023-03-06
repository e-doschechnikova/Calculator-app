import React, { useState } from "react";
import style from "./Calculator.module.css";
import { Screen } from "./screen/Screen";
import { Button } from "./Button";

const valueButton: Array<string> = [
  "C",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "X",
  "4",
  "5",
  "6",
  "-",
  "3",
  "2",
  "1",
  "+",
  "0",
  ".",
  "🠔",
  "=",
];

export const Calculator = () => {
  const [calculator, setCalculator] = useState("0");

  const onChangeValueHandler = () => {
    console.log("button");
  };

  return (
    <div className={style.calculatorBlock}>
      <div className={style.calculatorContainer}>
        <Screen value={calculator} />
        <div className={style.buttonsContainer}>
          {valueButton.map((btn) => {
            return <Button value={btn} callback={onChangeValueHandler} />;
          })}
        </div>
      </div>
    </div>
  );
};
