import React from "react";
import "../Styles/Profile.css";
import ProfileIcon from "../assets/profile.svg";
function Profile() {
  return (
    <div className="fourGearProfile">
      <h1>USER DASHBOARD</h1>
      <div className="fourGearProfileContainer">
        <div className="fourGearProfileDetails">
          <div className="fourGearProfileDetailsContainer">
            <div className="fourGearProfileIcon">
              <img src={ProfileIcon} alt="profileIcon" />
            </div>
            <div>
              <h2>Anshul Kumar</h2>
              <h4>Email: anshulkumarx7@gmail.com</h4>
              <h4>Contact: 9984771258</h4>
            </div>
          </div>
        </div>
        <div className="fourGearServiceDetails">
          <h2>RECENT SERVICES</h2>
          <table>
            <tr>
              <th className="tableSn bold">S.N</th>
              <th className="tableDate bold">Date</th>
              <th className="tableDetails bold">Details</th>
              <th className="tableAmount bold">Amount</th>
            </tr>
            <tr>
              <td className="tableSn">1</td>
              <td className="tableDate">19 Apr 2019</td>
              <td className="tableDetails">Wheel Change</td>
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
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
