import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/shama2.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello,I'm</h5>
        <h1>Nafisa Sabnam Shama</h1>
        <h5 className="text-light">Software Developer & Tech Enthusiast</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="shama" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
