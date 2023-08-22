import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// Create the authentication context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [loginErrorMssg,setLoginErrorMssg]=useState("");
  const [tokenExpiration, setTokenExpiration] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  let configRegenerateToken = {
    method: 'get',
    maxBodyLength: Infinity,
    url: '/api/auth/refresh',
    headers: { 
      'Authorization': `Bearer ${refreshToken}`
    }
  };
  useEffect(() => {
    // Check if the user is logged in using local storage
    const storedAccessToken = localStorage.getItem('accessToken');
    const storedRefreshToken = localStorage.getItem('refreshToken');
    const storedTokenExpiration = localStorage.getItem('tokenExpiration');
    console.log("Checking user is logged in or not");
    if (storedAccessToken && storedRefreshToken && storedTokenExpiration) {
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
      setTokenExpiration(Date.now() / 1000 + 20);
      setIsLoggedIn(true);
      console.log("User is already logged in")
    }
  }, []);
  useEffect(() => {
    const checkTokenExpiration = () => {
      // console.log("Regenerate");
      console.log("regenerate")
      console.log(tokenExpiration);
      if (tokenExpiration && tokenExpiration < Date.now() / 1000) {
        console.log("Hello");
        regenerateToken(configRegenerateToken);
      }
    };
    // Check expiration every second
    const tokenExpirationTimer = setInterval(checkTokenExpiration, 1000); 
    return () => {
      clearInterval(tokenExpirationTimer);
    };
  }, [tokenExpiration]);

  //regenerateToken
  // /api/auth/user
  let config1={
    headers: { 
      'Authorization': `Bearer ${refreshToken}`
    }
  }
  const getUser =async()=>{
    try{
      const res=await axios.get("/api/auth/user",config1);
      console.log(JSON.stringify(res.data));

    }catch(error){
      console.log(error);
    }
  }
  const regenerateToken = async(configRegenerateToken,config1) => {
    try{
        console.log('Regenerating')
        const response = await axios.request(configRegenerateToken);
        console.log(response);
        getUser(config1);
        const newAccessToken = response.data.token;

        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('tokenExpiration', Date.now() / 1000 + 20);
        

        setAccessToken(newAccessToken);
        setTokenExpiration(Date.now() / 1000 + 20);
    }catch(error){
        console.error('Token regeneration failed', error);
        logout(); // Logout if token regeneration fails
    }
  };

  //login 
  const [loginError,setLoginError]=useState("");
  const login = async(config) => {
    try {
        setLoading(true);
        const response = await axios.request(config);
        const accessToken = response.data.token;
        const refreshToken = response.data.refreshToken;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('tokenExpiration', Date.now() / 1000 + 20);

        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setTokenExpiration(Date.now() / 1000 + 20);
        console.log(tokenExpiration);
        setIsLoggedIn(true);
        navigate("/signin/otp");
        setLoading(false);
        console.log(JSON.stringify(response.data));
        console.log("navigate");
        // navigate("/profile");
        console.log("navigated");
        setLoginError("");
      } catch (error) {
        // if(error.response && error.response.status === 401){
        //   console.log(error.response.data.message);
        // }
        console.log(error);
        setLoginError(error.response.data.message);
        setIsLoggedIn(false);
        setLoading(false);
      }
  };
//logout
  const logout = () => {
    setIsLoggedIn(false);
    setAccessToken(null);
    setRefreshToken(null);
    setTokenExpiration(null);

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('tokenExpiration');
    console.log("Logged out");
  };

return (
    <AuthContext.Provider value={{ isLoggedIn,logout,loading,setLoading,loginData,setLoginData,login,loginError,accessToken,regenerateToken}}>
      {children}
    </AuthContext.Provider>
  );
};
