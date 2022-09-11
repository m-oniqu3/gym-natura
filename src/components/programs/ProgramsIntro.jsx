import React from "react";
import styled from "./ProgramsIntro.module.css";
import Container from "../helpers/wrapper/Container";
import womanRunning from "../../assets/woman_running.png";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";

const ProgramsIntro = () => {
  const heading = (
    <>
      perspire to <span>greatness</span>
    </>
  );

  return (
    <section className={styled.intro} id="programs">
      <Container className={styled.intro__content}>
        <article className={styled["intro__content--info"]}>
          <Heading className="medium" heading={heading} />
          <p className="text">
            With experienced and certified instructors, Natura is the perfect
            place to get started on your fitness journey or take your workout to
            the next level. We offer a variety of classes designed to help women
            of all shapes and sizes.
          </p>

          <p className="text">
            Our classes include everything from yoga and pilates to kickboxing
            and strength & personal training, nutritional counseling, and
            massages plus workshops that focus on topics such as body image,
            self-care,
          </p>
          <Button className="primary" link="#classes">
            See Programs
          </Button>
        </article>

        <figure className={styled["intro__content--image"]}>
          <img src={womanRunning} alt="Woman running in gym attire" />
        </figure>
      </Container>
    </section>
  );
};

export default ProgramsIntro;
