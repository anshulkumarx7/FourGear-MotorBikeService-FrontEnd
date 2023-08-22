import React from "react";
import "../Styles/Benefits.css";
import BenefitBox from "./BenefitBox";
import BenefitLogo1 from "../assets/benefit1.svg";
import BenefitLogo2 from "../assets/benefit2.svg";
import BenefitLogo3 from "../assets/benefit3.svg";
import BenefitLogo4 from "../assets/benefit4.svg";
function Benefit() {
  return (
    <div className="fourGearBenefit">
      <div className="fourGearBenefitContainer">
        <h1>Moto Magicians Benefits</h1>
        <div className="fourGearBenefitInnerContainer">
          <BenefitBox
            logo={BenefitLogo1}
            title="15 days Free Service Gurantee"
            content="15 days Unconditional Warranty"
          />
          <BenefitBox
            logo={BenefitLogo2}
            title="Free Pickup & Drop Service"
            content="Real-time service & Tune- Up"
          />
          <BenefitBox
            logo={BenefitLogo3}
            title="Transparent & Competitive Pricing"
            content="Save upto 40% on your bike service"
          />
          <BenefitBox
            logo={BenefitLogo4}
            title="Trained & Experts Mechanics"
            content="Over 10 years of experienced."
          />
        </div>
      </div>
    </div>
  );
}

export default Benefit;
