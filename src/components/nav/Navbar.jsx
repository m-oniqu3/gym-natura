import React from "react";
import styled from "./Navbar.module.css";
import { RiMenuLine } from "react-icons/ri";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className={styled.nav}>
      <div className={styled.nav__logo}>
        <figure>
          <img src={logo} alt="Logo" />
        </figure>
        <p>Natura</p>
      </div>

      <RiMenuLine size={25} color="var(--primary)" />
    </nav>
  );
};

export default Navbar;
