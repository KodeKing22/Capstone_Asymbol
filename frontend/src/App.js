// General Imports
import { Route, Router, Routes } from "react-router-dom";
import React from 'react';
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
  return ( 
    <>
  <NavBar />

    <Routes> 
     
        {/* <Route
          path="/displayguest"
          element={
            <PrivateRoute>
              <DisplayGuestPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/searchguest"
          element={
            <PrivateRoute>
              <SearchForGuestPage />
            </PrivateRoute>
          }
        />
      </Navbar>

      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/welcome"
          element={
            <PrivateRoute>
              <WelcomePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/addguest"
          element={
            <PrivateRoute>
              <AddGuestPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/secondguest"
          element={
            <PrivateRoute>
              <SecondTimeGuestPage />
            </PrivateRoute>
          }
        />
        </Routes> */}
       
        <Route path="/" element= {<HomePage />} />
        <Route path="/welcome" element= {<WelcomePage />} />
        <Route path="/displayguest" element= {<DisplayGuestPage />} />
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
