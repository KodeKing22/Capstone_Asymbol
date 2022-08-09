import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";
import { Link } from "react-router-dom";

let initialValues = {
  phone_number: ""
};

const SearchForGuestPage = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    initialValues,
    searchForGuest
  );

  async function searchForGuest() {
    try {
      let response = await axios.get(
        "http://127.0.0.1:8000/api/guests/phonenumber/17777777777/",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      navigate();
    } catch (error) {
      console.log(error.message);
    }
  }

 
  return (
    <div>
    <h1>Seach for Guests</h1>
    <h4>Enter Phone Number</h4>
      <form className="form" onSubmit={handleSubmit}>
        <label>
        <input
          type="text"
          phone_number=""
          onChange={handleInputChange}
          />
        </label>
        <button type="submit" className="button">
          Search
        </button>
      
    </form>
    </div>
  );
};

export default SearchForGuestPage;