import React, { useState } from 'react'
import "../Styles/Signup.css";
function Signup() {
  const [signupData,setSignupData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  });
  function handleChange(event){
    const {name,value}=event.target;
    setSignupData((prevValue)=>({
      ...prevValue,
      [name]:value
    }))
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log("clicked");
    console.log(signupData);
  }
  return (
    
    <div className='fourGearSignUp'>
        <div className='fourGearSignUpForm'>
        <h2>SignUp</h2>
          <div className="fourGearSignUpFormContainer">
            <form onSubmit={handleSubmit}>
              <input
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={signupData.firstName}
              ></input>
              <input
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={signupData.lastName}
              ></input>
              <input
                name="email"
                type='email'
                placeholder="E-mail"
                onChange={handleChange}
                value={signupData.email}
              ></input>
              <input
                name="password"
                type='password'
                placeholder="Password"
                onChange={handleChange}
                value={signupData.password}
              ></input>
              <div className="fourGearSignupRegisterButton">
                <button>Register</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Signup