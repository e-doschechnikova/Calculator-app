import React from "react";
import "./Button.scss";

type ButtonPropsType = {
  content: string;
  type?: string;

  onButtonClick: (content: any) => () => void;
};

export const Button: React.FC<ButtonPropsType> = ({
  content,
  type,
  onButtonClick,
}) => {
  return (
    <button
      className={`Button ${content === "0" ? "zero" : ""} ${type || ""}`}
      onClick={onButtonClick(content)}
    >
      {content}
    </button>
  );
};
