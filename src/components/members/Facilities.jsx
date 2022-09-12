import React from "react";
import styled from "./Facilities.module.css";
import boxing from "../../assets/woman_boxing.mp4";
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
      <video src={boxing} autoPlay loop muted />
      {/* Video by cottonbro on pexels */}
      <div className={styled.facility__overlay}>
        <Container>
          <article className={styled.facility__content}>
            <Heading className="medium" heading={heading} />
            <p className="text">
              Take advantage of our private locker rooms, showers, well-equipped
              gym floor, saunas, eucalyptus-infused towels, and hair & makeup
              stations.
            </p>
          </article>
        </Container>
      </div>
    </section>
  );
};

export default Facilities;
