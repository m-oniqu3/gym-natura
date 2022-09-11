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
    <section className={styled.hero}>
      <Container>
        <Navbar />

        <div className={styled["hero__content--container"]}>
          <article className={styled.hero__content}>
            <Heading className="large" heading={heading} />
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              morbi malesuada sem vitae vestibulum. Amet viverra ipsum in cras
              habitant dolor.
            </p>

            <Button className="primary">Become a Member</Button>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
