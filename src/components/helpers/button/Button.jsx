import React from "react";
import styled from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${styled.button} ${styled[props.className]}`}>
      {props.children}
    </button>
  );
};

export default Button;
