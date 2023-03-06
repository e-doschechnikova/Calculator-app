import React from "react";
import style from "./Button.module.css"

type ButtonPropsType = {
    value: string | Array<string>,
    callback: () => void,
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }

    return <button className={style.btn} onClick={onClickHandler}>{props.value} </button>;
};


