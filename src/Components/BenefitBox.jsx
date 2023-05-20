import React from "react";

function BenefitBox(props) {
  return (
    <div className="fourGearBenefitBox">
      <div className="fourGearBenefitInnerBox">
        <img src={props.logo}></img>
        <div className="fourGearBenefitInnerContent">
          <h2>{props.title}</h2>
          <h5>{props.content}</h5>
        </div>
      </div>
    </div>
  );
}

export default BenefitBox;
