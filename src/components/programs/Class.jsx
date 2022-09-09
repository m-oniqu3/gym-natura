import React from "react";
import styled from "./Class.module.css";
import Heading from "../helpers/heading/Heading";

const Class = (props) => {
  const { image, heading, desc } = props.program;

  return (
    <article className={styled.class}>
      <figure>
        <img src={image} alt={heading} />
      </figure>

      <div className={styled.class__info}></div>
      <Heading className="small" heading={heading} />
      <p className="text">{desc}</p>
    </article>
  );
};

export default Class;
