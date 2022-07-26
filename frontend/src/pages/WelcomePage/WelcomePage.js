import React from 'react'
import { Link } from 'react-router-dom';

const WelcomePage = (props) => {
  return (
  <div>
   <h1>Welcome to Asymbol</h1>
   <Link to="/addguest">First Time Visiting</Link>\
   <Link to="/secondguest">Second Time Visiting!</Link>
  </div>);
}

export default WelcomePage;