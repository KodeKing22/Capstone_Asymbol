import React from 'react'
import { Link } from 'react-router-dom';

const WelcomePage = (props) => {
  return (
  <div style={{
    display: 'center',
    justifyContent: 'center',
    alignItems: 'flex',
    height: '100vh'
  }}>
   <h1>Welcome to Asymbol</h1>
    <div className='multi-button'>
      <Link to="/addguest">
      <a href="#" class="btn btn-white btn-animation-1">First Visit</a> 
      </Link>
      <Link to="/secondguest">
      <a href="#" class="btn btn-white btn-animation-1">Second Visit</a> 
      </Link>
      
    </div>
  </div>);
}

export default WelcomePage;