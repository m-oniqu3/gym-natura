import React from "react";
import styled from "./Item.module.css";
import Heading from "../heading/Heading";

const Item = (props) => {
  const { image, heading, desc } = props.item;

  // classNames to be applied based on the theme
  const headingClassName = props.theme === "light" ? "small" : "small--dark";
  const descClassName = props.theme === "light" ? "text" : "text--dark";

  return (
    <article className={styled.item}>
      <figure className={styled[props.className]}>
        <img src={image} alt={heading} />
      </figure>

      <div className={styled.item__info}>
        <Heading className={headingClassName} heading={heading} />
        <p className={descClassName}>{desc}</p>
      </div>
    </article>
  );
};

export default Item;
