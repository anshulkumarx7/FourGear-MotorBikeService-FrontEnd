import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import "../Styles/Login.css";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
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
  const login = async (config) => {
    try {
      setLoading(true);
      const response = await axios.request(config);
      setLoading(false);
      console.log(JSON.stringify(response.data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    login(config);
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
              <button onSubmit={handleSubmit}>
                {loading ? (
                  <ThreeDots
                    height="30"
                    width="30"
                    radius="9"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                ) : (
                  <>Login</>
                )}
              </button>
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
