import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [bookServiceDetails, setBookServiceDetails] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        bike_Company: "",
        bike_Model: "",
      });  
  return (
      <BookingContext.Provider value={{bookServiceDetails,setBookServiceDetails }}>
        {children}
      </BookingContext.Provider>
    );
  };
  