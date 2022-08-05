import React, { useEffect } from "react";






const DisplayGuestPage = ({ guest }) => {
    function generateAllGuest() {
      console.log(guest);
  
      //Filter the guests by date
      let filteredGuests = guest.filter((guest) => guest.all === "All guest");
  
      console.log(filteredGuests);
    }

    useEffect(()=>{
      generateAllGuest()
    })
               
    return ( 
        <div style={{
          display: 'center',
          justifyContent: 'Center',
          alignItems: 'flex',
          height: '100vh'
        }}>
          <h1>All Guest</h1>
          {guest.map(filteredGuests => <div>{filteredGuests.first_name} {filteredGuests.last_name}</div>)}

        
        
     
        </div>
    )
  }
 
export default DisplayGuestPage;