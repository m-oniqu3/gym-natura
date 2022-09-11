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
    <section className={styled.intro}>
      <Container className={styled.intro__grid}>
        <article className={styled.intro__content}>
          <Heading className="medium" heading={heading} />
          <p className="text">
            Aliquam mattis eu semper elit non senectus proin adipiscing in.
            Aenean sollicitudin risus aliquet id cursus lorem facilisi. Cursus
            faucibus ut amet vitae convallis phasellus.
          </p>

          <p className="text">
            Nisi facilisi vestibulum id felis libero dictum. Ullamcorper id est
            est posuere ut. Sagittis, viverra gravida ornare nunc arcu.
          </p>
          <Button className="primary">Join Natura</Button>
        </article>
      </Container>
    </section>
  );
};

export default AboutIntro;
