import React, { useState,useContext } from "react";
import "../Styles/OtpPage.css";
import { SignupContext } from "../Context/signupContext";
import axios from "axios";
import { Verification } from "../Constants";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { ThreeDots } from "react-loader-spinner";
function OtpPage() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const { signupData,setSignupData} = useContext(SignupContext);
  const { loading,setLoading,accessToken,isLoggedIn} = useContext(AuthContext);
  const navigate=useNavigate();
  const handleChange = (element,index) => {
    if(isNaN(element.value)) return false;
    setOtp([...otp.map((d,idx)=>(idx===index)? element.value:d)])

    if(element.nextSibling){
      element.nextSibling.focus();
    }
    
  };
  const dataSignup={
    "email":signupData.email,
    "otp":otp.join("")
  }
  const loginData={
    
    "otp":otp.join("")
  }
  let signupconfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:5000/api/auth/register/verify',
    headers: { 
      'Content-Type': 'application/json', 
    },
    data : dataSignup
  };
  let loginconfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:5000/api/auth/verify',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${accessToken}`
    },
    data : loginData
  };
  const signupVerification =async(config)=>{
    try{
      setLoading(true);
      // console.log(dataSignup);
      console.log(accessToken);
      const response=await axios.request(config);
      console.log(JSON.stringify(response.data));
      setLoading(false);
      // {isLoggedIn?alert("Successfully logged in"):alert("Successfully Signed up")};
      {isLoggedIn?navigate("/signin/profile"):navigate("/signup/success")}
      
    }catch(error){
      console.log(error);
    }

  }
  console.log(isLoggedIn);
  const handleSubmit=async(e)=>{
    console.log(`isLoggedIn: ${isLoggedIn}`);
    e.preventDefault();
    try{
    {isLoggedIn ? signupVerification(loginconfig):signupVerification(signupconfig)} 
    }catch(error){
     console.log(error);
    }

  }
  return (
    <div className="fourGearOtp">
      <div class="fourGearOtpContainer">
        <h2>{Verification.header}</h2>
        <p>
          {Verification.title1}<br/>
          {Verification.title2}
        </p>

        <div class="code-container">
          {otp.map((data, index) => {
            return (
              <input
                type="number"
                class="code"
                placeholder="*"
                maxLength={1}
                key={index}
                value={data}
                onChange={e=>handleChange(e.target,index)}
                onFocus={e=>e.target.select()}
              />
            );
          })}
        </div>

        <div className="otpButton">
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>
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
                  <>Verify</>
                )}
          </button>
        </div>

        <div class="info">
          {Verification.resend}<strong> RESEND</strong>
        </div>
      </div>
    </div>
  );
}

export default OtpPage;
