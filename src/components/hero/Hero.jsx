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
    <section className={styled.hero} id="home">
      <Container>
        <Navbar />

        <div className={styled["hero__content--container"]}>
          <article className={styled.hero__content}>
            <Heading className="large" heading={heading} />
            <p className="text">
              We believe women should exercise in safe and welcoming space. Our
              goal is to help women feel confident and comfortable in their own
              skin, and to encourage them to lead healthy, active lifestyles.
            </p>

            <Button className="primary" link="#membership">
              Become a Member
            </Button>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
