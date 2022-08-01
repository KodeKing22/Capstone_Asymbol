import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";
import Popup from "reactjs-popup";
// import { toast } from "react-toastify";
import { Link } from "react-router-dom";

let initialValues = {
  phone_number: "",
};

const SecondTimeGuestPage = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    initialValues,
    secondGuestCheckIn
  );
  var handleClick = () => {
    //toast.success("trigger");
  };
  async function secondGuestCheckIn() {
    try {
      let response = await axios.map(
        "http://127.0.0.1:8000/api/guests/date/2022-07-18/",
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
    <div style={{
      display: 'flex',
      justifyContent: 'Right',
      alignItems: 'Right',
      height: '100vh'
    }}>
      <h1>Welcome Back!</h1>
      <h4>Please Check-In below Using your Phone Number</h4>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Phone Number:{""}
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
          />
        </label>

        <div></div>
        <Popup
          trigger={
            <button type="submit" className="button" onClick={handleClick}>
              Submit
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <div className="content">
                <img src="green_checkmark.svg" /> Thank You for Coming Back!
                <br />
                We Have a Aother Special Gift for You!
              </div>
              <div className="actions">
                <Link to="/welcome">

                <button type="button">
                  OK
                </button>
                </Link>
              </div>
            </div>
          )}
        </Popup>
      </form>
    </div>
  );
};
export default SecondTimeGuestPage;
