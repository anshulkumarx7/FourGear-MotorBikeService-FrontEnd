import React, { useEffect, useState } from "react";
import "../Styles/Success.css";
import SuccessImg from "../assets/success.svg";
import { Link, useLocation } from "react-router-dom";
const Success = () => {
  const [register, setRegister] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/signup/success") {
      setRegister(true);
    }
  }, [location]);

  return (
    <div className="fourGearSuccess">
      <div className="fourGearSuccessContainer">
        <img src={SuccessImg} alt="success"></img>
        <div className="fourGearSuccessMssg">
          <h1>{register && "Thank you for registering with us!!"}</h1>
          <h5>
            Empowering millions of bike service professionals and making
            two-wheeler maintenance simple, cost effective and stress-free.
          </h5>
          {register && <Link to={"/signin"}> &gt; Return to Login Page</Link>}
        </div>
      </div>
    </div>
  );
};

export default Success;
