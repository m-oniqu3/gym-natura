import React from "react";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import Item from "../helpers/item/Item";
import { gymLocations } from "./gymLocations";

const Locations = () => {
  const locations = gymLocations.map((location) => {
    return <Item key={location.id} item={location} />;
  });
  return (
    <section>
      <Container>
        <article>
          <Heading className="medium--dark" heading="be part of the elite" />
          <p className="text-dark">
            Risus aliquet id cursus lorem facilisi. Cursus faucibus ut amet
            vitae convallis phasellus.
          </p>
        </article>

        <div>{locations}</div>
      </Container>
    </section>
  );
};

export default Locations;
