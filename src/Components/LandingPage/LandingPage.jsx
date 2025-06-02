import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = new useNavigate();

    const change = ()=>{
        navigate('/popular');
    }

  return (
    <div className='landing-page'>
      <button className='btn' onClick={change}>Let's Go!</button>
    </div>
  )
}

export default LandingPage
