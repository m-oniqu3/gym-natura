import React from "react";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import styled from "./AboutIntro.module.css";

const AboutIntro = () => {
  const heading = (
    <>
      Fitness for <span>her</span>
    </>
  );
  return (
    <section className={styled.intro} id="about">
      <Container className={styled.intro__grid}>
        <article className={styled.intro__content}>
          <Heading className="medium" heading={heading} />
          <p className="text">
            Natura was founded in 2014 by two women who were passionate about
            health and fitness. They wanted to create a safe space for women to
            workout, free from the judgment and harassment that they often
            experienced in traditional gyms.
          </p>

          <p className="text">
            The gym has helped countless women improve their health and
            wellbeing, and it continues to be a place where women can come
            together to support and motivate each other.
          </p>
          <Button link="#membership" className="primary">
            Join Natura
          </Button>
        </article>
      </Container>
    </section>
  );
};

export default AboutIntro;
