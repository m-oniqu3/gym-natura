import React from "react";
import styled from "./Heading.module.css";

const Heading = (props) => {
  return (
    <h1 className={`${styled.heading} ${styled[props.className]}`}>
      {props.heading}
    </h1>
  );
};

export default Heading;
