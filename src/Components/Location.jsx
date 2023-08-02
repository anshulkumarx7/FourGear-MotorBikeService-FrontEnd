import React, { useEffect, useState,useContext } from "react";
import "../Styles/Location.css";
import { ThreeDots } from "react-loader-spinner";
import { CgDanger } from "react-icons/cg";
import { AuthContext } from "../Context/AuthContext";
import locationValidation from "../schemas/locationValidation";
import { BookingContext } from "../Context/bookingContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Location() {
  const { setLoading, loading} = useContext(AuthContext);
  const {bookServiceDetails,setBookServiceDetails}=useContext(BookingContext);
  const [errors, setErrors] = useState({});
  const navigate=useNavigate();
  const [address, setAddress] = useState({
    address: "",
    street: "",
    landmark: "",
  });
  const [map, setmap] = useState({
    latitude: "",
    longitude: "",
  });
  
  
  const handleBlur = (event) => {
    const { name } = event.target;
    try {
      locationValidation.validateSyncAt(name, address);
    } catch (validationError) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validationError.message,
      }));
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setmap({
        latitude: latitude,
        longitude: longitude,
      });
    });
  };
  function handleChange(event) {
    const { name, value } = event.target;
    setAddress((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    // setBookServiceDetails((prevBookingDetails)=>({
    //   ...prevBookingDetails,
    //   "map":map,
    //   "address":address
    // }))
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  }
  // const detailsBikeBooking={
  //   bookServiceDetails,
  //   "map":map,
  //   "address":address
  // }
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:5000/api/book/bike',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : bookServiceDetails
  };
  const booking =async(config)=>{
    try{
      setLoading(true);
      
      console.log(bookServiceDetails);
      // console.log(detailsBikeBooking);
      // console.log(address);
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      alert(response.data.message);
      navigate("/");
      setLoading(false);
    }catch(error){
      console.log(error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(address);
    console.log(map);
    try {
      // setLoading(true);
      
      await locationValidation.validate(address, {
        abortEarly: false,
      });
      booking(config);
      
      // setLoading(false);
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
    <div className="fourGearLocation">
      <div className="fourGearLocationForm">
        <h2>Location Details</h2>
        <div className="fourGearLocationFormContainer">
          <form>
            <div className="locationBox">
              <input
                name="street"
                placeholder="Street"
                onBlur={handleBlur}
                onChange={handleChange}
                value={address.street}
              ></input>
              {errors.street && (
                  <div className="locationErrors">
                    <CgDanger className="cgDanger" />
                    {errors.street}
                  </div>
                )}   
            </div>
            <div className="locationBox">
              <input
                name="landmark"
                placeholder="Landmark"
                onBlur={handleBlur}
                onChange={handleChange}
                value={address.landmark}
              ></input>
              {errors.landmark && (
                  <div className="locationErrors">
                    <CgDanger className="cgDanger" />
                    {errors.landmark}
                  </div>
                )}   
            </div>
            <div className="locationBox">
              <input
                name="address"
                placeholder="Full Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={address.address}
              ></input>
              {errors.address && (
                  <div className="locationErrors">
                    <CgDanger className="cgDanger" />
                    {errors.address}
                  </div>
                )}   
            </div>

            {/* {map.latitude === "" && (
              <div className="registrationFormErrorMessage">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49375 13.75C4.04279 13.7465 1.2477 10.9468 1.25 7.49583C1.2523 4.04487 4.05112 1.24885 7.50208 1.25C10.953 1.25115 13.75 4.04903 13.75 7.5C13.7479 10.9534 10.9471 13.7514 7.49375 13.75ZM2.5 7.6075C2.52957 10.3583 4.77569 12.5685 7.52659 12.5537C10.2775 12.5389 12.4997 10.3047 12.4997 7.55375C12.4997 4.80281 10.2775 2.56861 7.52659 2.55375C4.77569 2.53903 2.52957 4.74922 2.5 7.5V7.6075ZM8.125 10.625H6.875V9.375H8.125V10.625ZM8.125 8.125H6.875V4.375H8.125V8.125Z"
                    fill="#F94545"
                  />
                </svg>
                <p>Please allow access to location</p>
              </div>
            )} */}

            <div className="fourGearLocationBookNowButton">
              <button onClick={handleSubmit}>
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
                  <>Book Now</>
                )}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Location;
