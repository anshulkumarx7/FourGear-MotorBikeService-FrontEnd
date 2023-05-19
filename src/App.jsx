import { useState } from "react";
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BookService from "./Components/BookService";
import { BrowserRouter } from "react-router-dom";
import Pickup30 from "./Components/Pickup30";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <BookService />
        <Pickup30/>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
