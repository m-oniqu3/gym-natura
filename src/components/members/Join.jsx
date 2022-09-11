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
            <p className="text-dark">
              Aliquam mattis eu semper elit non senectus proin adipiscing in.
              Aenean sollicitudin risus aliquet id cursus lorem facilisi. Cursus
              faucibus ut amet vitae convallis phasellus.
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
