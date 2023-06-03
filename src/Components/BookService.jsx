import React, { useState } from "react";
import "../Styles/BookService.css";
import IconsData from "../data/icons";
import { useNavigate } from "react-router-dom";
function BookService() {
  const navigate =useNavigate();
  const [bookServiceDetails, setBookServiceDetails] = useState({
    customerName: "",
    phoneNumber: "",
    Email: "",
    city: "",
    bikeCompany: "",
    bikeModel: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Hii i got clicked");
    console.log(bookServiceDetails);
    navigate("/location");

  }
  function handleChange(event) {
    const { name, value } = event.target;
    setBookServiceDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }
  return (
    <div className="fourGearBookService">
      <div className="fourGearBookServiceContainer">
        <div className="fourGearBookServiceDetails">
          <div className="fourGearBookDetailsInfo">
            <h2>Two Wheeler Services @ Home</h2>
            <p>
              Get the best bike service center experience at the comfort of your
              home or office when using Four Gears to book bike repair or
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
              <input
                name="customerName"
                placeholder="Your Name"
                onChange={handleChange}
                value={bookServiceDetails.customerName}
              ></input>
              <input
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={handleChange}
                value={bookServiceDetails.phoneNumber}
              ></input>
              <input
                name="Email"
                placeholder="Email"
                onChange={handleChange}
                value={bookServiceDetails.Email}
              ></input>
              <select
                name="city"
                onChange={handleChange}
                value={bookServiceDetails.city}
              >
                <option value="">City</option>
                <option value="Bhubaneshwar">Bhubaneshwar</option>
              </select>
              <select
                name="bikeCompany"
                onChange={handleChange}
                value={bookServiceDetails.bikeCompany}
              >
                <option value="">Bike Company</option>
                <option value="Hero">Hero</option>
                <option value="Honda">Honda</option>
                <option value="Tvs">TVS</option>
                <option value="Bajaj">Bajaj</option>
                <option value="Yahama">Yahama</option>
              </select>
              <input
                name="bikeModel"
                placeholder="Bike Model"
                onChange={handleChange}
                value={bookServiceDetails.bikeModel}
              ></input>
              <div className="formGearBookServiceContainerButton">
                <button onSubmit={handleSubmit}>Book Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookService;
