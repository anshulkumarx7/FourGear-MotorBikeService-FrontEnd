import { useState } from "react";
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BookService from "./Components/BookService";
import { BrowserRouter } from "react-router-dom";
import Pickup30 from "./Components/Pickup30";
import Footer from "./Components/Footer";
import Brands from "./Components/Brands";
import FourGearWorks from "./Components/FourGearWorks";
import Features from "./Components/Features";
import Benefit from "./Components/Benefit";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        {/* <Hero /> */}
        <BookService />
        {/* <Features />
        <Pickup30/> */}
        <FourGearWorks/>
        <Benefit />
        <Brands/>
        {/* <Footer /> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
