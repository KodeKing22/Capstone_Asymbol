import React, { useEffect, useState } from "react";

const NotificationsPage = ({ guest }) => {
  const [todaysGuests, setTodaysGuests] = useState([]);
  function generateGuestForToday() {
    console.log(guest);

    const date = new Date();

    let day = date.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let year = date.getFullYear();

    let currentDate = `${year}-${month}-${day}`;
    console.log(currentDate); // "08-4-2022"

    let results = guest.filter((el) => el.date_of_visit == currentDate);
    setTodaysGuests(results);
  }
  useEffect(() => {
    generateGuestForToday();
  }, []);
  return (
    <div>
      <h1>Guest for Today </h1>
      <table>
       
        <tr>
          <th>Name</th>
          <th>Date</th>
        </tr>
        
         {todaysGuests.map((results) => {
          return (
            <tr>
              <td>
                {results.first_name} {results.last_name}
              </td>
              <td>{results.date_of_visit}</td>
            </tr>
          );
        })}
        
      </table>
    </div>
  );
};

export default NotificationsPage;
