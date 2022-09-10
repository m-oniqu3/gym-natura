import React from "react";
import styled from "./Item.module.css";
import Heading from "../heading/Heading";

const Item = (props) => {
  const { image, heading, desc } = props.item;

  const headingClassName = props.theme === "dark" ? "small--dark" : "small";
  const descClassName = props.theme === "dark" ? "text-dark" : "text";
  return (
    <article className={styled.item}>
      <figure className={styled[props.className]}>
        <img src={image} alt={heading} />
      </figure>

      <div className={styled.item__info}></div>
      <Heading className={headingClassName} heading={heading} />
      <p className={descClassName}>{desc}</p>
    </article>
  );
};

export default Item;
