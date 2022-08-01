import React from 'react'
import { Link } from 'react-router-dom';

const WelcomePage = (props) => {
  return (
  <div style={{
    display: 'flex',
    justifyContent: 'Right',
    alignItems: 'Right',
    height: '100vh'
  }}>
   <h1>Welcome to Asymbol</h1>
    <div>

      <Link to="/addguest">First Time Visiting</Link>\
      <Link to="/secondguest">Second Time Visiting!</Link>
    </div>
  </div>);
}

export default WelcomePage;