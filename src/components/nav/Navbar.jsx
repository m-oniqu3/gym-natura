import React, { useEffect, useState } from "react";
import styled from "./Navbar.module.css";
import { RiMenuLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import Menu from "./Menu";

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

        <RiMenuLine size={25} color="var(--primary)" onClick={handleMenu} />
      </nav>

      {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;
