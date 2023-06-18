import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
// import { useNavigate } from "react-router-dom";

// Create the authentication context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [tokenExpiration, setTokenExpiration] = useState(0);
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  // let config = {
  //   method: "post",
  //   maxBodyLength: Infinity,
  //   url: "http://localhost:5000/api/auth/login",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: loginData,
  // };
  let configRegenerateToken = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:5000/api/auth/refresh',
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
      else{
        // console.log("Cancelled");
      }
    };
    // Check expiration every second
    const tokenExpirationTimer = setInterval(checkTokenExpiration, 1000); 
    return () => {
      clearInterval(tokenExpirationTimer);
    };
  }, [tokenExpiration]);
  
  const regenerateToken = async(configRegenerateToken) => {
    try{
        console.log('Regenerating')
        const response = await axios.request(configRegenerateToken);
        console.log(response);
        const newAccessToken = response.data.token;
        // const newExpiration = response.data.expiresIn;
        // const newExpiry = response.data.expiresIn;
        // const newExpiration=parseInt(newExpiry);
        // console.log(newExpiration);

        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('tokenExpiration', Date.now() / 1000 + 20);

        setAccessToken(newAccessToken);
        setTokenExpiration(Date.now() / 1000 + 20);
    }catch(error){
        console.error('Token regeneration failed', error);
        logout(); // Logout if token regeneration fails
    }
    // axios
    //   .post('/api/refresh', { refreshToken })
    //   .then(response => {
    //     const newAccessToken = response.data.accessToken;
    //     const newExpiration = response.data.expiresIn;

    //     localStorage.setItem('accessToken', newAccessToken);
    //     localStorage.setItem('tokenExpiration', newExpiration);

    //     setAccessToken(newAccessToken);
    //     setTokenExpiration(Number(newExpiration));
    //   })
    //   .catch(error => {
    //     console.error('Token regeneration failed', error);
    //     logout(); // Logout if token regeneration fails
    //   });
  };

  const login = async(config) => {
    try {
        setLoading(true);
        const response = await axios.request(config);
        const accessToken = response.data.token;
        const refreshToken = response.data.refreshToken;
        // const expires = response.data.expiresIn;
        // const expiration=parseInt(expires);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('tokenExpiration', Date.now() / 1000 + 20);

        setAccessToken(accessToken);
        // console.log(accessToken);
        // console.log(expiration);
        setRefreshToken(refreshToken);
        // console.log(refreshToken);
        // console.log(parseInt(expiration));
        setTokenExpiration(Date.now() / 1000 + 20);
        // console.log("Token expiration");
        // let a=localStorage.getItem(tokenExpiration);
        // console.log(a);
        console.log(tokenExpiration);
        setIsLoggedIn(true);
        setLoading(false);
        console.log(JSON.stringify(response.data));
        // navigate("/");
      } catch (error) {
        console.log(error);
        setIsLoggedIn(false);
      }
    // axios
    //   .post('/api/login', { username, password })
    //   .then(response => {
    //     const accessToken = response.data.accessToken;
    //     const refreshToken = response.data.refreshToken;
    //     const expiration = response.data.expiresIn;

    //     localStorage.setItem('accessToken', accessToken);
    //     localStorage.setItem('refreshToken', refreshToken);
    //     localStorage.setItem('tokenExpiration', expiration);

    //     setAccessToken(accessToken);
    //     setRefreshToken(refreshToken);
    //     setTokenExpiration(Number(expiration));
    //     setIsLoggedIn(true);
    //   })
    //   .catch(error => {
    //     console.error('Login failed', error);
    //   });
  };

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
    <AuthContext.Provider value={{ isLoggedIn,logout,loading,setLoading,loginData,setLoginData,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
