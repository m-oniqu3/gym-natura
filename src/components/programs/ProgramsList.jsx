import React from "react";
import styled from "./ProgramsList.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import Class from "./Class";
import { classes } from "./classes";

const ProgramsList = () => {
  const programs = classes.map((program) => {
    return <Class key={program.id} program={program} />;
  });

  return (
    <section className={styled.programs}>
      <Container>
        <article>
          <Heading className="medium" heading="our programs" />
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis morbi
            malesuada sem vitae.
          </p>
        </article>

        <div className={styled.programs__list}>{programs}</div>
      </Container>
    </section>
  );
};

export default ProgramsList;
