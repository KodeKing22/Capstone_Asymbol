import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";




const DisplayGuestPage = ({ guests }) => {
    // function generateGuestForToday() {
    //   console.log(guests);
  
      //Filter the guests by date
    //   let filteredGuests = guests.filter((guest) => guests.day == "Only Today's Date");
  
    //   console.log("Filtered Guests", filteredGuests);
    // }
    
      
    
    return ( 
        <div style={{
          display: 'flex',
          justifyContent: 'Center',
          alignItems: 'flex',
          height: '100vh'
        }}>
          <h1>Guest for "today's date"</h1>
            
        
     
        </div>
    )};

 
export default DisplayGuestPage;