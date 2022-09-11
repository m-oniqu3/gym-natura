import React from "react";
import styled from "./Facilities.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";

const Facilities = () => {
  const heading = (
    <>
      Where <span>health</span>, beauty, and fitness meet.
    </>
  );
  return (
    <section className={styled.facility} id="facilities">
      <div className={styled.facility__overlay}>
        <Container>
          <article className={styled.facility__content}>
            <Heading className="medium" heading={heading} />
            <p className="text">
              Risus aliquet id cursus lorem facilisi. Cursus faucibus ut amet
              vitae convallis phasellus.
            </p>
          </article>
        </Container>
      </div>
    </section>
  );
};

export default Facilities;
