import React, { useState } from "react";

const SearchForGuestPage = ({SearchForVideoGuests}) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(phoneNumber)
    SearchForVideoGuests(phoneNumber);
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <div style={{
        display: 'center',
        justifyContent: 'center',
        alignItems: 'flex',
        height: '100vh'
      }}>
        <label>Seach Guests by Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          className="form-control"
          />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForGuestPage;