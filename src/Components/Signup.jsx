import React, { useState } from "react";
import "../Styles/Signup.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
function Signup() {
  const [loading, setLoading] = useState(false);
  const [signupData, setSignupData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setSignupData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
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
  function handleSubmit(e) {
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
    signup(config);
  }
  return (
    <div className="fourGearSignUp">
      <div className="fourGearSignUpForm">
        <h2>SignUp</h2>
        <div className="fourGearSignUpFormContainer">
          <form onSubmit={handleSubmit}>
            <input
              name="fname"
              placeholder="First Name"
              onChange={handleChange}
              value={signupData.firstName}
            ></input>
            <input
              name="lname"
              placeholder="Last Name"
              onChange={handleChange}
              value={signupData.lastName}
            ></input>
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={handleChange}
              value={signupData.email}
            ></input>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={signupData.password}
            ></input>
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
