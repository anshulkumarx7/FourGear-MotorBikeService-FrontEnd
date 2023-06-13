import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import axios from "axios";
// const axios = require("axios");
// let data = JSON.stringify({
//   "email": "adityasubham03@gmail.com",
//   "password": "27Adich@"
// });


function Login() {
  const navigate =useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error,setError]=useState('');
  function handleChange(event) {
    const { name, value } = event.target;
    setLoginData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:5000/api/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: loginData,
  };
  function handleSubmit(e){
    e.preventDefault();
    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }
  return (
    <div className="fourGearSignin">
      <div className="fourGearSigninForm">
        <h2>Login</h2>
        <div className="fourGearSigninFormContainer">
          <form onSubmit={handleSubmit}>
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={handleChange}
              value={loginData.email}
            ></input>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={loginData.password}
            ></input>
            {error && <h1>ERROR</h1>}
            <div className="fourGearSigninButton bt-signin">
              <button onSubmit={handleSubmit}>Login</button>
            </div>
            <div className="fourGearRegisterButton bt-signin">
              <Link to="/signup">
                <button>Register</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
