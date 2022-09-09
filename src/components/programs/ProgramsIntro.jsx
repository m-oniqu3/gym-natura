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
    <section className={styled.intro}>
      <Container>
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
          <Button className="primary">See Programs</Button>
        </article>

        <figure className={styled.intro__image}>
          <img src={womanRunning} alt="Woman running in gym attire" />
        </figure>
      </Container>
    </section>
  );
};

export default ProgramsIntro;
