import { useState } from "react";
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BookService from "./Components/BookService";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Pickup30 from "./Components/Pickup30";
import Footer from "./Components/Footer";
import Brands from "./Components/Brands";
import FourGearWorks from "./Components/FourGearWorks";
import Features from "./Components/Features";
import Benefit from "./Components/Benefit";
import CustomerSpeaks from "./Components/CustomerSpeaks";
import Vision from "./Components/Vision";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AboutDetail from "./Components/AboutDetail";
import AboutMain from "./Components/AboutMain";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactL from "./pages/ContactL";
import Services from "./pages/Services";
import Location from "./Components/Location";
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        {/* <Navbar />
        <Hero />
        <BookService />
        <Features />
        <Pickup30/>
        <FourGearWorks/>
        <Benefit />
        <CustomerSpeaks />
        <Brands/>
        <Vision />
        <Contact />
        <Login />
        <Footer />
        <Signup />
        <AboutMain />
        <AboutDetail /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactL />} />
          <Route path="/service" element={<Services />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/location" element={<Location />} />
        </Routes>
        <Footer />
        

      </BrowserRouter>
    </div>
  );
}

export default App;
