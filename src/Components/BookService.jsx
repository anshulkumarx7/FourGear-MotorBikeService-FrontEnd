import React, { useContext, useState } from "react";
import "../Styles/BookService.css";
import IconsData from "../data/icons";
import { CgDanger } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import bikeServiceValidation from "../schemas/bookServiceValidation";
import { BookingContext } from "../Context/bookingContext";
function BookService() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setLoading, loading, logout } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const {bookServiceDetails,setBookServiceDetails}=useContext(BookingContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hii i got clicked");
    console.log(bookServiceDetails);
    try {
      setLoading(true);
      await bikeServiceValidation.validate(bookServiceDetails, {
        abortEarly: false,
      });
      setLoading(false);
      if (location.pathname === "/") {
        navigate("/location");
      }
      if (location.pathname === "/service") {
        navigate("/service/location");
      }
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
  const handleLogout = () => {
    logout();
  };
  //  handleBlur function
  const handleBlur = (event) => {
    const { name } = event.target;
    try {
      bikeServiceValidation.validateSyncAt(name, bookServiceDetails);
    } catch (validationError) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validationError.message,
      }));
    }
  };
  function handleChange(event) {
    const { name, value } = event.target;
    setBookServiceDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  }
  return (
    <div className="fourGearBookService">
      <div className="fourGearBookServiceContainer">
        <div className="fourGearBookServiceDetails">
          <div className="fourGearBookDetailsInfo">
            <h2>Two Wheeler Services @ Home</h2>
            <p>
              Get the best bike service center experience at the comfort of your
              home or office when using Moto Magicians to book bike repair or
              service online. Choose from our vast motorbike service offerings
              and avail time & cost savings.
            </p>
          </div>
          <div className="fourGearBookServiceDetailsIcons">
            {IconsData.map((data, index) => (
              <div className="fourBookServiceBox" key={index}>
                <img src={data.image} alt={data.title} />
                <p>{data.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="fourGearBookServiceForm">
          <h2>Book Bike Service</h2>
          <div className="fourGearBookServiceFormContainer">
            <form onSubmit={handleSubmit}>
              <div className="bookServiceInputBox">
                <input
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={bookServiceDetails.name}
                ></input>
                {errors.name && (
                  <div className="bookingErrors">
                    <CgDanger className="cgDanger" />
                    {errors.name}
                  </div>
                )}
              </div>
              <div className="bookServiceInputBox">
                <input
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={bookServiceDetails.phone}
                ></input>
                {errors.phone && (
                  <div className="bookingErrors">
                    <CgDanger className="cgDanger" />
                    {errors.phone}
                  </div>
                )}
              </div>
              <div className="bookServiceInputBox">
                <input
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={bookServiceDetails.email}
                ></input>
                {errors.email && (
                  <div className="bookingErrors">
                    <CgDanger className="cgDanger" />
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="bookServiceInputBox">
                <select
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={bookServiceDetails.city}
                >
                  <option value="">City</option>
                  <option value="Bhubaneshwar">Bhubaneshwar</option>
                </select>
                {errors.city && (
                  <div className="bookingErrors">
                    <CgDanger className="cgDanger" />
                    {errors.city}
                  </div>
                )}
              </div>
              <div className="bookServiceInputBox">
                <select
                  name="bike_Company"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={bookServiceDetails.bike_Company}
                >
                  <option value="">Bike Company</option>
                  <option value="Hero">Hero</option>
                  <option value="Honda">Honda</option>
                  <option value="Tvs">TVS</option>
                  <option value="Bajaj">Bajaj</option>
                  <option value="Yahama">Yahama</option>
                </select>
                {errors.bike_Company && (
                  <div className="bookingErrors">
                    <CgDanger className="cgDanger" />
                    {errors.bike_Company}
                  </div>
                )}
              </div>
              <div className="bookServiceInputBox">
                <input
                  name="bike_Model"
                  placeholder="Bike Model"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={bookServiceDetails.bike_Model}
                ></input>
                {errors.bike_Model && (
                  <div className="bookingErrors">
                    <CgDanger className="cgDanger" />
                    {errors.bike_Model}
                  </div>
                )}
              </div>

              <div className="formGearBookServiceContainerButton">
                <button onSubmit={handleSubmit}>Book Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default BookService;
