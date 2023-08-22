import React from "react";
import "../Styles/AboutMain.css";
import mechanicImg from "../assets/mechanic.svg";
function AboutMain() {
  return (
    <div className="fourGearAboutMain">
      <div className="fourGearAboutMainContainer">
        <h1>About Moto Magicians</h1>
        <div className="fourGearAboutMainContent">
          <img src={mechanicImg}></img>
          <div className="fourGearAboutMainContent-About">
          <h3>
            #Moto magicians is the best two-wheeler servicing and repairing company
            in India, offering customers two-wheeler service or repair at
            competitive prices at their doorstep.
          </h3>
          <h3>
            Moto magicians offers the best bike service and repair in the comfort of
            your own home. You no longer need to waste time for servicing bikes
            because Moto Magicians will handle it. Within 30 minutes of your
            appointment, Moto Magicians will deliver the best, most skilled bike
            mechanics to your door. Reliable and reasonably priced bike service
            and repair. Moto Magicians provides the best prices for bike services.
          </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMain;
