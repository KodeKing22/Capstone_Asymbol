import React, { useEffect, useState } from "react";

const NotificationsPage = ({ guest }) => {
  const [todaysGuests, setTodaysGuests] =useState([])
  function generateGuestForToday() {
    console.log(guest);

    // //Filter the guests by date
    // let allGuests = guest.get((guest) => guest.all === "All Guest");
    // console.log(allGuests);


    const date = new Date();

    let day = date.getDate();
    if(day < 10){
      day = `0${day}`
    }
    let month = date.getMonth() + 1;
    if(month < 10){
      month = `0${month}`
    }
    let year = date.getFullYear();

    let currentDate = `${year}-${month}-${day}`;
    console.log(currentDate); // "08-4-2022"
  
    let results = guest.filter(el => el.date_of_visit == currentDate)
    setTodaysGuests(results)
  }
  useEffect (()=>{
    generateGuestForToday()
  },[])
  return (
    <div
      style={{
        display: "center",
        justifyContent: "Center",
        alignItems: "flex",
        height: "100vh",
      }}
    >
      <h1>Guest for Today </h1>
      
        <div>
        {todaysGuests.map(results =><div>{results.first_name} {results.last_name}  {results.date_of_visit}</div> )}
        </div>
     
    </div>
  ) 
};

export default NotificationsPage;
