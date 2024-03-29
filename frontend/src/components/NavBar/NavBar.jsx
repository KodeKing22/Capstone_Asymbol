import React, {useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import ASYMBOL from "../../img/ASYMBOLlogo.svg.png"

import { NavLink as Link} from 'react-router-dom';
 

  const Navbar = () => {
    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    
    return (
      <div className="navBar">
        <ul>
          <li class="navBar" href="/">
      <img
        href="/"
        src={ASYMBOL}
       
        />
          </li>
          <li className="navBar">
            <Link to="/welcome" style={{ textDecoration: "none", color: "white" }}>
              <b className="">Welcome Page</b>
            </Link>
          </li>
          <li className="navBar">
            <Link to="/notification" style={{ textDecoration: "none", color: "white" }}>
              <b className="">Notification Page</b>
            </Link>
          </li>
           <li className="navBar">
            <Link to="/displayguest" style={{ textDecoration: "none", color: "white" }}>
              <b className="">Display Guest</b>
            </Link>
          </li>
          <li className="navBar">
            <Link to="/searchguest" style={{ textDecoration: "none", color: "white" }}>
              <b className="">Search Guest</b>
            </Link>
          </li>
          <li>
            {user ? (
              <button onClick={logoutUser}>Logout</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </li>
        </ul>
      </div>
    );
  };
  
  export default Navbar;
