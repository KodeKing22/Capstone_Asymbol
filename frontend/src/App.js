// General Imports
import { Route, Router, Routes } from "react-router-dom";
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddGuestPage from "./pages/AddGuestPage/AddGuestPage";
import DisplayGuestPage from "./pages/DisplayGuestPage/DisplayGuestPage";
import SearchForGuestPage from "./pages/SearchForGuestPage/SearchForGuestPage";

// Component Imports
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

import SecondTimeGuestPage from "./pages/SecondTImeGuestPage/SecondTImeGuestPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  const [guest, setGuest] = useState([]);

  async function getAllGuest() {
    let response = await axios.get("http://127.0.0.1:8000/api/guests/all/");
    setGuest(response.data);
  }
  useEffect(() => {
    getAllGuest();
  }, []);

  function SearchForGuestByDate(searchTerm) {
    let guestByDate = guest.filter((guest) => {
      if (guest.date.toLowerCase.includes(searchTerm)) {
        return true;
      } else{
        return false;
      }
    });
    console.log("Testing")
    setGuest(guestByDate);
  }
  
  return (

 <>
  <NavBar/ >

  <Routes> 
     
  <Route path="/" element= {<HomePage/>} />
  <Route path="/welcome" element= {<WelcomePage />} />
  <Route path="/displayguest" element= {<DisplayGuestPage  guest={guest}/>} />
  <Route path="/searchguest" element= {<SearchForGuestPage />} />
  <Route path="/addguest" element= {<AddGuestPage />} />
  <Route path="/secondguest" element= {<SecondTimeGuestPage />} />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/login" element={<LoginPage />} />
 
  </Routes>
 
<Footer />
</>
  
);

}
export default App;
    
