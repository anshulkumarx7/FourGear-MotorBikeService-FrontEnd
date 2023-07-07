import React from "react";
import Navbar from "./Components/Navbar";
import BookService from "./Components/BookService";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactL from "./pages/ContactL";
import Services from "./pages/Services";
import Location from "./Components/Location";
import Profile from "./Components/Profile";
import { AuthProvider } from "./Context/AuthContext";
import { BookingProvider } from "./Context/bookingContext";
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <AuthProvider>
          <BookingProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="/" element={<BookService />} />
                <Route path="/location" element={<Location />} />
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactL />} />
              <Route path="/service" element={<Services />}>
                <Route path="/service" element={<BookService />} />
                <Route path="/service/location" element={<Location />} />
              </Route>

              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </BookingProvider>
        </AuthProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
