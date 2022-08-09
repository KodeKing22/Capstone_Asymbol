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
        <div>
          <h1>All Guest to Date </h1>
          <table>
            <tr>
              <th>Name </th>
              <th>Date of Visit </th>
            </tr>
          {guest.map((filteredGuests) => {
              return(
                <tr>
                    <td>{filteredGuests.first_name} {filteredGuests.last_name}</td>
                    <td>{filteredGuests.date_of_visit}</td>
                </tr>)
          })}
                
          </table>

        
        
     
        </div>
    )
  }
 
export default DisplayGuestPage;