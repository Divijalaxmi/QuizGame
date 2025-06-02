import React from 'react'
import './Item.css'
import { Link, useNavigate } from 'react-router-dom'
const Item = (props) => {

  
  return (
    <div className='item'>
        <img onClick={props.onClick} src={props.image} alt=""/>
      
    </div>
  )
}

export default Item
