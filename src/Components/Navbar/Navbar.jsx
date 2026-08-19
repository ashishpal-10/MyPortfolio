import React, { useState } from "react";
import Styles from "./style.module.css";
// import moon from "../../../public/moon.svg";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={Styles.navbar}>
      <div className={Styles.container}>
        <h2 className={Styles.logo}>  <a href="#home">
         {"<Code/>"}
          </a> 
        </h2>

       
        <div className={Styles.navlinks}>
          <a href="#about" className={Styles.navlink}>About</a>
          <a href="#skills" className={Styles.navlink}>Skills</a>
          <a href="#project" className={Styles.navlink}>Projects</a>
          <a href="#contact" className={Styles.navlink}>Contact</a>
        </div>
        
        <div className={Styles.navactions}>
  
          <a href="#resume" className={Styles.mobileResume}>
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            className={Styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

    

      {/* Mobile Menu */}
      <div
        className={`${Styles.mobileMenu} ${
          menuOpen ? Styles.active : ""
        }`}
      >
          
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>
        <a href="#project" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        {/* <a href="#resume" className={Styles.mobileResume}>
          Resume
        </a> */}
      </div>
    </header>
  );
};

export default Navbar;