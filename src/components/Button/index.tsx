import React from "react";
import "./Button.scss";

type ButtonPropsType = {
  content: string;
  type?: string;
};

export const Button: React.FC<ButtonPropsType> = ({ content, type }) => {
  return (
    <button className={`Button ${content === "0" ? "zero" : ""} ${type || ""}`}>
      {content}
    </button>
  );
};
