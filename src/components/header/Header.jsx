import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Profile.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kamlesh Rathod</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />

        <HeaderSocials />
        <div className="flex_center">
          <div className="me">
            <img src={ME} alt="" className="header__img" />
          </div>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
