import React from "react";
import FeatureIcon1 from "../assets/Group 11.svg";
import FeatureIcon2 from "../assets/Group 12.svg";
import FeatureIcon3 from "../assets/Group 13.svg";
import FeatureIconBox from "./FeatureIconBox";
import "../Styles/Features.css";
function Features() {
  return (
    <div className="fourGearFeature">
      <div className="fourGearFeatureContainer">
        <div className="fourGearFeatureContent">
          <h2>Book Four Gear - Doorstep Bike Service</h2>
          <p>
            No time to go to a bike workshop or Scooter Service Center? No
            worries! With one tap, we bring the two wheeler workshop to you.
            Just choose the Doorstep Services option and select the package you
            require. Voila!
          </p>
        </div>
        <div className="fourGearFeatureInnerContainer">
          <FeatureIconBox
            icon={FeatureIcon1}
            title="Easy Service Appointments"
            content="You can book your bike service from home, office or anywhere on move"
          />
          
          <FeatureIconBox
            icon={FeatureIcon2}
            title="Less Time Consuming"
            content="Now, you will get your bike serviced/repaired in commenced time"
          />
          <FeatureIconBox
            icon={FeatureIcon3}
            title="Sit & Relax"
            content="While bike is being serviced/repaired, Sit back and relax at your place"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
