import React, { useState } from 'react'
import './CSS/loginsignup.css'
import { useLocation, useNavigate } from 'react-router-dom'

const LoginSignup = ({topic}) => {

  const navigate = new useNavigate();
  // const location = new useLocation();
  // const {props} = location.state;

  const [showLogin,setShowLogin]=useState(true);

  const change = (e)=>{
    e.preventDefault();
    if(topic)
    navigate('/quiz',{state:{props:topic}});
    else
    alert("No topic selected");
  }

  const closeModal = ()=>{
    setShowLogin(false);
    navigate('/popular');
  }
  
  if(!showLogin) return null;

  return (
    <div className='loginsignup-overlay'>
      <div className="loginsignup-container">
        <button className='close-btn' onClick={closeModal}>X</button>
        <h1 className='mainHead'>Fill Your Details</h1>
        <form onSubmit={change}>
        <div className="loginsignup-fields">
          <input name='username' type="text" placeholder='Your Name' required/>
          <input name='email' type="email" placeholder='Email Address' required/>
        </div>
        <button >Start</button>
        <div className="loginsignup-agree">
          <input type="Checkbox" name='' id='' required/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        </form>
      </div>
      
    </div>
  )
}

export default LoginSignup
