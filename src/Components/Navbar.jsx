import React, { useContext, useRef } from "react";
import "../Styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import FacebookLogo from "../assets/facebook 1.svg";
import TwitterLogo from "../assets/twitter 1.svg";
import InstaGramLogo from "../assets/instagram 1.svg";
import LinkedinLogo from "../assets/linkedin 1.svg";
import CallLogo from "../assets/phone-call 1.svg";
import FourgearLogo from "../assets/LogoMotoMagicians.svg";
import UserLogo from "../assets/user-circle 1.svg";
import Cross from "../assets/cross.svg";
import Bars from "../assets/bars.svg";
import { AuthContext } from "../Context/AuthContext";
function Navbar() {
  const navRef = useRef();
  const { isLoggedIn }=useContext(AuthContext);
  function showNavbar() {
    navRef.current.classList.toggle("responsive_nav");
  }
  function hideNavbar() {
    navRef.current.classList.remove("responsive_nav");
  }
  return (
    <div id="fourGearNavbar">
      <div className="fourGearNavbarHeader">
        <div className="fourGearNavbarContactno">
          <img src={CallLogo}></img>
          <h1>+91-9693563637</h1>
        </div>
        <div className="fourGearNavbarSocialMedia">
          <Link to={{ pathname: "https://www.facebook.com/" }}>
            <img src={FacebookLogo}></img>
          </Link>
          <Link to={{ pathname: "https://www.facebook.com/" }}>
            <img src={TwitterLogo}></img>
          </Link>
          <Link to={{ pathname: "https://www.facebook.com/" }}>
            <img src={InstaGramLogo}></img>
          </Link>
          <Link to={{ pathname: "https://www.facebook.com/" }}>
            <img src={LinkedinLogo}></img>
          </Link>
        </div>
      </div>
      <div className="fourGearNavbarMain" >
        <img className="mainLogo" src={FourgearLogo}></img>
        <div className="fourGearNavbarContent" ref={navRef} >
          <NavLink to="/" onClick={hideNavbar}>Home</NavLink>
          <NavLink to="/about" onClick={hideNavbar}>About</NavLink>
          <NavLink to="/service" onClick={hideNavbar}>Services</NavLink>
          <NavLink to="/partner" onClick={hideNavbar}>Partner</NavLink>
          <NavLink to="/gallery" onClick={hideNavbar}>Gallery</NavLink>
          <NavLink to="/contact" onClick={hideNavbar}>Contact</NavLink>
          <NavLink className="profileLinkNavbar" to={isLoggedIn ? "/profile":"/signin"} onClick={hideNavbar}>{isLoggedIn ? "Profile" : "Login"}</NavLink>
          <NavLink  className="createAccountLinkNavbar" to={isLoggedIn ? "":"/signup"} onClick={hideNavbar}>{isLoggedIn ? "" : "Create Account"}</NavLink>
          <button className="nav-btn close-button" onClick={showNavbar}>
            <img src={Cross}></img>
          </button>
        </div>
        <NavLink className="userLogo" to={isLoggedIn ? "/profile":"/signin"}>
          <img src={UserLogo}></img>
        </NavLink>
        <button className="nav-btn open-button" onClick={showNavbar}>
          <img src={Bars}></img>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
