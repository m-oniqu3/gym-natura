import React, { useEffect, useState } from "react";
import styled from "./Navbar.module.css";
import { RiMenuLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import Menu from "./Menu";
import { HashLink as Link } from "react-router-hash-link";
import Button from "../helpers/button/Button";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hash } = useLocation();

  // toggle menu state
  const handleMenu = () => setIsOpen((state) => !state);

  //close menu when hash changes
  useEffect(() => {
    setIsOpen(false);
  }, [hash]);

  return (
    <>
      <nav className={styled.nav}>
        <div className={styled.nav__logo}>
          <figure>
            <img src={logo} alt="Logo" />
          </figure>
          <p>Natura</p>
        </div>

        <RiMenuLine
          className={styled.nav__icon}
          size={25}
          color="var(--primary)"
          onClick={handleMenu}
        />

        <ul className={styled.nav__items}>
          <li>
            <Link smooth to="#home">
              Home
            </Link>
          </li>

          <li>
            <Link smooth to="#about">
              About
            </Link>
          </li>

          <li>
            <Link smooth to="#programs">
              Programs
            </Link>
          </li>

          <li>
            <Link smooth to="#facilities">
              Facilities
            </Link>
          </li>

          <li>
            <Link smooth to="#locations">
              Locations
            </Link>
          </li>
        </ul>

        <div className={styled.nav__button}>
          <Button link="#classes" className="secondary">
            View Classes
          </Button>
        </div>
      </nav>

      {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;
