import React, { useContext, useEffect, useState } from "react";
import "../Styles/Profile.css";
import ProfileIcon from "../assets/profile.svg";
import ShopIcon from "../assets/customer.svg";
import MobileIcon from "../assets/mobile.svg";
import AmountIcon from "../assets/id.svg";
import StatusIcon from "../assets/statussvg.svg";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
function Profile() {
  const { regenerateToken } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({});
  const makeRequest = async () => {
    let accessToken = localStorage.getItem('accessToken');
    let refreshToken = localStorage.getItem('refreshToken');
    let configRegenerateToken = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/api/auth/refresh",
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    };
    const urlUser = "http://localhost:5000/api/auth/user";
    const urlBooking="http://localhost:5000/api/bookings/bike"
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    try {
      const response = await axios.get(urlUser, { headers });
      // const responseBooking = await axios.get(urlBooking,{headers});
      console.log(JSON.stringify(response.data));
      // console.log(JSON.stringify(responseBooking.data.data[0]));
      setProfileData(response.data.user);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // whenever there is error with status code 400 regenrating token 
        console.log("Error: Bad Request");
        regenerateToken(configRegenerateToken);
        makeRequest();
      } else {
        console.log("Error:", error);
      }
    }
  };
  useEffect(() => {
    makeRequest();
  }, []);

  console.log(profileData);

  return (
    <div className="fourGearProfile">
      <div className="fourGearProfileContainer">
        <div className="fourGearProfileDetails">
          <div className="fourGearProfileDetailsContainer">
            <div className="fourGearProfileIcon">
              <img src={ProfileIcon} alt="profileIcon" />
            </div>
            <div>
              <h2>
                {profileData.fname} {profileData.lname}
              </h2>
              <h4>{profileData.email}</h4>
              {/* <h4>Contact: 9984771258</h4> */}
            </div>
          </div>
        </div>
        <div className="fourGearServiceDetails">
          <h2>RECENT SERVICES</h2>
          <table>
            <tr>
              <th className="tableSn bold">
                <img src={ShopIcon} alt="" />
                <>Shop Name</>
              </th>
              <th className="tableDate bold">
                <img src={MobileIcon} alt="" /> <>Date</>
              </th>
              <th className="tableDetails bold">
                <img src={StatusIcon} alt="" /> <>Status</>
              </th>
              <th className="tableAmount bold">
                <img src={AmountIcon} alt="" />
                <>Amount</>
              </th>
            </tr>
            <tr>
              <td className="tableSn">New Rajiv Garage</td>
              <td className="tableDate">19 Apr 2019</td>
              <td className="tableDetails">Confirmed</td>
              <td className="tableAmount">5000</td>
            </tr>
            <tr>
              <td className="tableSn">2</td>
              <td className="tableDate">19 Apr 2019</td>
              <td className="tableDetails">Wheel Change</td>
              <td className="tableAmount">5000</td>
            </tr>
            <tr>
              <td className="tableSn">3</td>
              <td className="tableDate">19 Apr 2019</td>
              <td className="tableDetails">Wheel Change</td>
              <td className="tableAmount">5000</td>
            </tr>
            <tr>
              <td className="tableSn">4</td>
              <td className="tableDate">19 Apr 2019</td>
              <td className="tableDetails">Wheel Change</td>
              <td className="tableAmount">5000</td>
            </tr>
            <tr>
              <td className="tableSn">5</td>
              <td className="tableDate">19 Apr 2019</td>
              <td className="tableDetails">Wheel Change</td>
              <td className="tableAmount">5000</td>
            </tr>
            <tr>
              <td className="tableSn">5</td>
              <td className="tableDate">19 Apr 2019</td>
              <td className="tableDetails">Wheel Change</td>
              <td className="tableAmount">5000</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
