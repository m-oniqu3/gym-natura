import React, { useEffect, useState } from "react";
import styled from "./Navbar.module.css";
import { RiMenuLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import Menu from "./Menu";
import { HashLink as Link } from "react-router-hash-link";
import Button from "../helpers/button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // toggle menu state
  const handleMenu = () => setIsOpen((state) => !state);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else if (!isOpen) document.body.style.overflow = "auto";
  }, [isOpen]);

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

        <Button className="secondary">View Classes</Button>
      </nav>

      {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;
