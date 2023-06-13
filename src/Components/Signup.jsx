import React, { useState } from "react";
import "../Styles/Signup.css";
import axios from "axios";
import { CgDanger } from "react-icons/cg";
import { ThreeDots } from "react-loader-spinner";
import signUpValidation from "../schemas/signupValidation";
function Signup() {
  const [loading, setLoading] = useState(false);
  const [signupData, setSignupData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  function handleChange(event) {
    const { name, value } = event.target;
    setSignupData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  }
  const signup = async (config) => {
    try {
      setLoading(true);
      const response = await axios.request(config);
      setLoading(false);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  const handleBlur = (event) => {
    const { name } = event.target;
    try {
      signUpValidation.validateSyncAt(name, signupData);
    } catch (validationError) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validationError.message,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/api/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: signupData,
    };
    try {
      setLoading(true);
      await signUpValidation.validate(signupData, { abortEarly: false });
      setLoading(false);
      signup(config);
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
  return (
    <div className="fourGearSignUp">
      <div className="fourGearSignUpForm">
        <h2>SignUp</h2>
        <div className="fourGearSignUpFormContainer">
          <form onSubmit={handleSubmit}>
            <div className="fourGearSignUpFormInput">
              <input
                name="fname"
                placeholder="First Name"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={signupData.fName}
              ></input>
              {errors.fname && (
                <div className="signUpErrors">
                  <CgDanger className="cgDanger" />
                  {errors.fname}
                </div>
              )}
            </div>
            <div className="fourGearSignUpFormInput">
              <input
                name="lname"
                placeholder="Last Name"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={signupData.lName}
              ></input>
              {errors.lname && (
                <div className="signUpErrors">
                  <CgDanger className="cgDanger" />
                  {errors.lname}
                </div>
              )}
            </div>
            <div className="fourGearSignUpFormInput">
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                autoComplete="off"
                onBlur={handleBlur}
                onChange={handleChange}
                value={signupData.email}
              ></input>
              {errors.email && (
                <div className="signUpErrors">
                  <CgDanger className="cgDanger" />
                  {errors.email}
                </div>
              )}
            </div>
            <div className="fourGearSignUpFormInput">
              <input
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={signupData.password}
              ></input>
              {errors.password && <div className="signUpErrors"><CgDanger className="cgDanger" />{errors.password}</div>}
            </div>

            <div className="fourGearSignupRegisterButton">
              <button>
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
                  <>Register</>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
