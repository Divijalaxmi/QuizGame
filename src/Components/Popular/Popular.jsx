import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'
import topics from '../Assets/topic.js'
import LoginSignup from '../../Pages/LoginSignup.jsx'
const Popular = () => {

  const [selectedTopic,setSelectedTopic]=useState(null);
  const [showLogin,setShowLogin]=useState(false);

  const handleTopicClick = (topic)=>{
    setSelectedTopic(topic);
    setShowLogin(true);
  }
  
  return (
    <div className='popular'>
      <h1>Choose Your Topic</h1>
      <hr/>
      <div className="popular-item">
        {
            topics.map((item,i)=>{
                return <Item key={i} name={item.name} image={item.image} onClick={()=>handleTopicClick(item)}/>
            })
        }
      </div>

      {showLogin?
      <div className="login-popup-overlay">
        <LoginSignup topic={selectedTopic}/>
      </div>:<></>
      }
    </div>
  )
}

export default Popular
