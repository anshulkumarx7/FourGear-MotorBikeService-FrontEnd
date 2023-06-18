import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { CgDanger } from "react-icons/cg";
import "../Styles/Login.css";
import loginValidation from "../schemas/loginValidation";
import axios from "axios";
import { AuthContext } from '../Context/AuthContext';
function Login() {
  // const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  // const [loginData, setLoginData] = useState({
  //   email: "",
  //   password: "",
  // });
  const { isLoggedIn,setLoading,loading,loginData,setLoginData, login} = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  function handleChange(event) {
    const { name, value } = event.target;
    setLoginData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
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
  const handleBlur = (event) => {
    const { name } = event.target;
    try {
      loginValidation.validateSyncAt(name, loginData);
    } catch (validationError) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validationError.message,
      }));
    }
  };
  // const login = async (config) => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.request(config);
  //     setLoading(false);
  //     console.log(JSON.stringify(response.data));
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await loginValidation.validate(loginData, { abortEarly: false });
      setLoading(false);
      login(config);
    } catch (validationError) {
      setLoading(false);
      console.log(validationError);
      const newErrors = {};
      validationError.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };
  console.log(isLoggedIn);
  return (
    <div className="fourGearSignin">
      <div className="fourGearSigninForm">
        <h2>Login</h2>
        <div className="fourGearSigninFormContainer">
          <form onSubmit={handleSubmit}>
            <div className="fourgearLoginFormInput">
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                onBlur={handleBlur}
                autoComplete="off"
                onChange={handleChange}
                value={loginData.email}
              ></input>
              {errors.email && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.email}
                </div>
              )}
            </div>
            <div className="fourgearLoginFormInput">
              <input
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={loginData.password}
              ></input>
              {errors.password && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.password}
                </div>
              )}
            </div>
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
