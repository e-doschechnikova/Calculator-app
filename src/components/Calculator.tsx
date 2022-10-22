import React, {useState} from "react";
import style from "./Calculator.module.css"
import {Screen} from "./screen/Screen";
import {Button} from "./Button/Button";

const valueButton = [
    "C", "+/-", "%", "/",
    "7", "8", "9", "X",
    "4", "5", "6", "-",
    "3", "2", "1", "+",
    "0", ".", "🠔", "=",
]

export const Calculator = () => {

    return (
        <div className={style.calculatorBlock}>
            <div className={style.calculatorContainer}>
                <Screen/>
                <div className={style.buttonsContainer}>
                    {valueButton.map((btn) => {
                        return <Button value={btn} callback={() => {
                        }}/>
                    })}
                </div>
            </div>
        </div>
    );
};



