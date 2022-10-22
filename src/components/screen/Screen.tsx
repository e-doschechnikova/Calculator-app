import React from "react";
import style from "./Screen.module.css"

type ScreenPropsType = {
    value: string,
}

export const Screen: React.FC<ScreenPropsType> = ({value}) => {

    return (
        <div className={style.screenBlock}>
            <span>{value}</span>
        </div>
    );
}

