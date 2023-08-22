import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { CgDanger } from "react-icons/cg";
import "../Styles/Login.css";
import loginValidation from "../schemas/loginValidation";
import { AuthContext } from '../Context/AuthContext';
function Login() {
  const { isLoggedIn,setLoading,loading,loginData,setLoginData, login,loginError} = useContext(AuthContext);
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
    url: "/api/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: loginData,
  };
  const forgetPassword=async(configForget)=>{
    try{
      const res= await axios.request(configForget);
      console.log(JSON.stringify(res.data));
    }catch(error){
      console.log(error);
    }
  }
  //  handleBlur function
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
  // handleSubmit Function
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
  console.log(loginError);

  return (
    <div className="fourGearSignin">
      <div className="fourGearSigninForm">
        <h2>Welcome back!</h2>
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
              {/* For invalid password */}
              {(loginError && !errors.password) && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {loginError}
                </div>
              )}
            </div>
            <div className="fourGearForgetPassword" onClick={forgetPassword}>
              <Link to="">Forget Password ?</Link>
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
