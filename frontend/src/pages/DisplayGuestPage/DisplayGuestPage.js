import React, { useEffect } from "react";






const DisplayGuestPage = ({ guest }) => {
    function generateGuestForToday() {
      console.log(guest);
  
      //Filter the guests by date
      let filteredGuests = guest.filter((guest) => guest.date_of_visit === "Only Today's Date");
  
      console.log(filteredGuests);
    }

    useEffect(()=>{
      generateGuestForToday()
    })
               
    return ( 
        <div style={{
          display: 'center',
          justifyContent: 'Center',
          alignItems: 'flex',
          height: '100vh'
        }}>
          <h1>All Guest</h1>
          {guest.map(filteredGuests => <div>{filteredGuests.first_name}{filteredGuests.last_name}{filteredGuests.date_of_visit}</div>)}

        
        
     
        </div>
    )
  }
 
export default DisplayGuestPage;