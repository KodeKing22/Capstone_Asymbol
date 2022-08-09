import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";
import { Link } from "react-router-dom";



const SearchForGuestPage = () => {
  const [user, token] = useAuth();
  const [guestsByPhoneNumber, setGuestsByPhoneNumber] = useState([])

  const initialValues = {
    phone_number: ""
  };

  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    initialValues,
    searchForGuest
  );

  async function searchForGuest() {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/guests/phonenumber/1${formData.phone_number}/` ,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data)
      setGuestsByPhoneNumber(response.data)
      // navigate("/");
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
          name="phone_number"
          onChange={handleInputChange}
          value={formData.phone_number}
          />
        </label>
        <button type="submit" className="button">
          Search
        </button>
      
    </form>
    {guestsByPhoneNumber.map((guest) => {
      return(
        <table>
          
        <tr>
                  <th>Name</th>
                  <th>Phone Number</th>
                </tr>
                <tr>
                    <td>{guest.first_name} {guest.last_name}</td>
                    <td>{guest.phone_number}</td>
                </tr>
        </table>
         ) })}
{/* use .map to display name and phone number of guestsByPhoneNumber */}
          </div>

  );
};

export default SearchForGuestPage;