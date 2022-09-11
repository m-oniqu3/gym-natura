import React from "react";
import styled from "./Footer.module.css";
import { HashLink as Link } from "react-router-hash-link";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styled.footer__container}>
      <Container className={styled.footer}>
        <ul className={styled.footer__links}>
          <Heading className="small--dark" heading="Links" />
          <li>
            <Link to="#home">Home</Link>
          </li>

          <li>
            <Link to="#programs">Programs</Link>
          </li>

          <li>
            <Link to="#facilities">Facilities</Link>
          </li>

          <li>
            <Link to="#locations">Locations</Link>
          </li>
        </ul>

        <article>
          <Heading className="small--dark" heading="get in touch" />
          <ul className={styled.footer__contact}>
            <div className={styled["footer__contact--info"]}>
              <h3>Email</h3>
              <li>
                <p>Maddison Garden</p>
                <p>gymnaturamaddison@gmail.com</p>
              </li>

              <li>
                <p>Blairgrove</p>
                <p>gymnaturablairgrove@gmail.com</p>
              </li>
            </div>

            <div className={styled["footer__contact--info"]}>
              <h3>Phone</h3>
              <li>
                <p>Maddison Garden</p>
                <p>1-547-697-9236</p>
              </li>

              <li>
                <p>Blairgrove</p>
                <p>1-250-520-4256</p>
              </li>
            </div>
          </ul>
        </article>

        <div className={styled.footer__icons}>
          <Heading className="small--dark" heading="social media" />
          <div className={styled["footer__icons--icons"]}>
            <FaInstagramSquare size={35} color="var(--secondary)" />
            <FaFacebookSquare size={35} color="var(--secondary)" />
            <FaTwitterSquare size={35} color="var(--secondary)" />
          </div>
        </div>
      </Container>
      <div className={styled.footer__logo}>
        <Heading className="small" heading="natura" />
      </div>
    </footer>
  );
};

export default Footer;
