import React from "react";
import Hero from "../Components/Hero";
import BookService from "../Components/BookService";
import Features from "../Components/Features";
import Pickup30 from "../Components/Pickup30";
import FourGearWorks from "../Components/FourGearWorks";
import Benefit from "../Components/Benefit";
import CustomerSpeaks from "../Components/CustomerSpeaks";
import Brands from "../Components/Brands";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Hero />
      <BookService />
      <Features />
      <Pickup30 />
      <FourGearWorks />
      <Benefit />
      <CustomerSpeaks />
      <Brands />
    </div>
  );
}

export default Home;
