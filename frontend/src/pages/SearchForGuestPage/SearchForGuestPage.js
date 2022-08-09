import React, { useState } from "react";

const SearchForGuestPage = ({SearchForVideoGuests}) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(phoneNumber)
    SearchForVideoGuests(phoneNumber);
  }

  return (
    <div className="form">


    <form onSubmit={handleSubmit}>
     
        <h1>Seach for Guests by Phone Number</h1>
        <input
          type="text"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          className="form-control"
          />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      
    </form>
    </div>
  );
};

export default SearchForGuestPage;