import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
function Homepage() {
  
  return (
    <>
    <h1>Homepage(to be designed later...)</h1>
      <div className="container">
        <img src={logo} alt="app_logo" width={"300px"}/>
        Create account and start using our app now...
        
          <Link to="/auth/v1/560qw108/register" >
          <button className='register-btn'>

            Sign Up
          </button>
          </Link>

       

      </div>
    </>
  )
}

export default Homepage