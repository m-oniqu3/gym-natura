import React from "react";
import styled from "./Hero.module.css";
import Navbar from "../nav/Navbar";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";

const Hero = () => {
  const heading = (
    <>
      THE EVOLUTION OF <span> fitness</span> for <span>her</span>
    </>
  );
  return (
    <div className={styled.hero}>
      <div className={styled.hero__image}>
        <Container>
          <Navbar />

          <article className={styled.hero__content}>
            <Heading className="large" heading={heading} />
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              morbi malesuada sem vitae vestibulum. Amet viverra ipsum in cras
              habitant dolor.
            </p>

            <div className={styled["hero__content--btns"]}>
              <Button className="primary">Become a Member</Button>
              <Button className="secondary">View Classes</Button>
            </div>
          </article>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
