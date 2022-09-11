import React from "react";
import styled from "./Benefits.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import Button from "../helpers/button/Button";

const Benefits = () => {
  const heading = (
    <>
      building <span>confidence.</span> building fitness.
    </>
  );
  return (
    <section className={styled.benefits__container}>
      <div className={styled.benefits}>
        <Container className={styled.benefits__content}>
          <article className={styled["benefits__content--intro"]}>
            <Heading className="medium" heading={heading} />
            <p className="text">
              Aliquam mattis eu semper elit non senectus proin adipiscing in.
              Aenean sollicitudin risus aliquet id cursus lorem facilisi. Cursus
              faucibus ut amet vitae convallis phasellus.
            </p>

            <p className="text">
              Nisi facilisi vestibulum id felis libero dictum. Ullamcorper id
              est est posuere ut. Sagittis, viverra gravida ornare nunc arcu.
            </p>
            <Button link="#locations" className="primary">
              See Locations
            </Button>
          </article>
        </Container>

        <figure className={styled.benefits__image}>
          <img
            src="https://images.unsplash.com/photo-1539794830467-1f1755804d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="A woman stretching her arms"
          />
        </figure>
      </div>
    </section>
  );
};

export default Benefits;
