import React from "react";
import "../Styles/Brands.css";
import LogoData from "../data/BrandsLogo";
function Brands() {
  return (
    <div className="fourGearBrands">
      <div className="fourGearBrandContainer">
        <div className="fourGearBrandContent">
          <h1>We Look After All Brands</h1>
        </div>
        <div className="fourGearBrandInnerContainer">
          {/* <div className="fourGearBrandLogo">
            <img src={Logo1}></img>
        </div>
        <div className="fourGearBrandLogo">
            <img src={Logo1}></img>
        </div>
        <div className="fourGearBrandLogo">
            <img src={Logo1}></img>
        </div>
        <div className="fourGearBrandLogo">
            <img src={Logo1}></img>
        </div>
        <div className="fourGearBrandLogo">
            <img src={Logo1}></img>
        </div>
        <div className="fourGearBrandLogo">
            <img src={Logo1}></img>
        </div>
        <div className="fourGearBrandLogo">
            <img src={Logo1}></img>
        </div>
        <div className="fourGearBrandLogo">
            <img src={Logo1}></img>
        </div>
        <div className="fourGearBrandLogo">
            <img src={Logo1}></img>
        </div>
        <div className="fourGearBrandLogo">
            <img src={Logo1}></img>
        </div>
        <div className="fourGearBrandLogo">
            <img src={Logo1}></img>
        </div>
        <div className="fourGearBrandLogo">
            <img src={Logo1}></img>
        </div> */}
        {LogoData.map( (data,index) => (
          <div className="fourGearBrandLogo" key={index}>
            <img src={data.image} alt={index}></img>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
