import React from "react";
import styled from "./Button.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  return (
    <Link
      smooth
      to={props?.link ?? ""}
      className={`${styled.button} ${styled[props.className]}`}
    >
      {props.children}
    </Link>
  );
};

export default Button;
