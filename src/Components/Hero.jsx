import React from "react";
import "../Styles/Hero.css";
import mobileLogo from "../assets/mobilemotomagicians.svg";
function Hero() {
  return (
    <div className="fourGearHero">
      <div className="fourGearHeroContainer">
        <img src={mobileLogo}></img>
        <div className="fourGearHeroInnerContainer">
          <div className="fourGearHeroInnerContent">
            <p>Experience The Best</p>
            <p className="bd">Two Wheeler</p>
            <p>Service with</p>
            <p className="bd">Moto Magicians</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
