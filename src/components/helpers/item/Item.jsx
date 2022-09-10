import React from "react";
import styled from "./Item.module.css";
import Heading from "../heading/Heading";

const Item = (props) => {
  const { image, heading, desc } = props.item;

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

export default Item;
