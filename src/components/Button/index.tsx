import React from "react";
import "./Button.scss";

type ButtonPropsType = {
  content: string;
};

export const Button: React.FC<ButtonPropsType> = ({ content }) => {
  return (
    <button className={`Button ${content === "0" ? "zero" : ""}`}>
      {content}
    </button>
  );
};
