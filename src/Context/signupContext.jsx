import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

export const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
    const [signupData, setSignupData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
      });   
  return (
      <SignupContext.Provider value={{signupData,setSignupData }}>
        {children}
      </SignupContext.Provider>
    );
  };
  