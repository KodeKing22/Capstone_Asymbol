import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { Link } from "react-router-dom";
import Notification from 'rc-notifications'


let initialValues = {
  first_name: "",
  last_name: "",
  email_address: "",
  phone_number: "",
  address: "",
  city: "",
  zip_code: "",
  state: "",
  date_of_visit: "",
  guest_of: "",
};

const AddGuestPage = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    initialValues,
    addNewGuest
  );
  var handleClick = () => {
    Notification.newInstance({}, notification => {
      notification.notice({
        content: 'Guest Check-In'
      });
    });
  };
  async function addNewGuest() {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/guests/",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }
  
  return (
    <div>
      <h1>Welcome First Time Guest!</h1>
      <h4>Please complete the short form below</h4>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          First Name:{""}
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:{""}
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email Address:{""}
          <input
            type="text"
            name="email_address"
            value={formData.email_address}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone Number:{""}
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Address:{""}
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </label>
        <label>
          City:{""}
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </label>
        <label>
          State:{""}
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Zip Code:{""}
          <input
            type="text"
            name="zip_code"
            value={formData.zip_code}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Guest of:{""}
          <input
            type="text"
            name="guest_of"
            value={formData.guest_of}
            onChange={handleInputChange}
          />
        </label>

        <div></div>
        <Popup
          trigger={
            <button type="submit" className="button" href="#" onClick={() => { handleClick(); Notification.newInstance();}}>
              Submit
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <div className="content">
                <img src="green_checkmark.svg" /> Thank You for Visiting!
                <br />
                We Have a Special Gift just for You!
              </div>
              <div className="actions">
                <Link to="/welcome">
                  <button type="button">OK</button>
                </Link>
              </div>
            </div>
          )}
        </Popup>
      </form>
    </div>
  );
};

export default AddGuestPage;
