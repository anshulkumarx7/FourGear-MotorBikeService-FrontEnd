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
import { SignupProvider } from "./Context/signupContext";
import OtpPage from "./Components/OtpPage";
import Success from "./Components/Success";
import LoginP from "./pages/LoginP";
import SignupP from "./pages/SignupP";
import axios from "axios";
const baseURL =
	window.location.hostname === "motomagicians.com"
		? "https://backend.motomagicians.com"
		: "https://backend.motomagicians.com";
// console.log(baseURL);

axios.defaults.baseURL=baseURL;

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <AuthProvider>
          <BookingProvider>
            <SignupProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />}>
                  <Route path="/" element={<BookService />} />
                  <Route path="/location" element={<Location />} />
                  {/* <Route path="/success" element={<Success/>} /> */}
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactL />} />
                <Route path="/service" element={<Services />}>
                  <Route path="/service" element={<BookService />} />
                  <Route path="/service/location" element={<Location />} />
                </Route>

                <Route path="/signin" element={<LoginP />}>
                  <Route path="/signin" element={<Login />} />
                  <Route path="/signin/otp" element={<OtpPage />} />
                  <Route path="/signin/profile" element={<Profile />} />
                </Route>
                <Route path="/signup" element={<SignupP />}>
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/signup/otp" element={<OtpPage />} />
                  <Route path="/signup/success" element={<Success />} />
                </Route>
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </SignupProvider>
          </BookingProvider>
        </AuthProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
