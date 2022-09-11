import React from "react";
import styled from "./Join.module.css";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import exercise from "../../assets/exercise.png";

const Join = () => {
  const heading = (
    <>
      convenient. <span>safe.</span> affordable.
    </>
  );

  return (
    <Container>
      <section className={styled.join} id="membership">
        <div>
          <article className={styled.join__content}>
            <Heading className="medium--dark" heading={heading} />
            <p className="text--dark">
              If you're looking for a luxury gym that's dedicated to helping
              women of all shapes and sizes, look no further than Natura. With
              tons of programs to choose from, you can find the perfect one for
              your fitness level and goals.
            </p>
            <p className="text--dark">
              Plus, the supportive community of women at Natura will make you
              feel right at home. So what are you waiting for? Sign up today and
              start reaching your fitness goals!
            </p>
          </article>

          <form>
            <input type="text" placeholder="Enter your email" />
            <Button className="neutral">Join Natura</Button>
          </form>
        </div>

        <figure className={styled.join__image}>
          <img src={exercise} alt="Woman in the gym exercising" />
        </figure>
      </section>
    </Container>
  );
};

export default Join;
