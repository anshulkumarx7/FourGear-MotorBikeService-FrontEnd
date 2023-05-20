import React from "react";

function FeatureIconBox(props) {
  return (
    <div className="fourGearFeatureIconBox">
      <img src={props.icon}></img>
      <h3>{props.title}</h3>
      <h5>{props.content}</h5>
    </div>
  );
}

export default FeatureIconBox;
