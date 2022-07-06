import React from 'react'
import './index.css'

export default function Burger({ handleOpen }) {
  return (
    <div className="burger" onClick={handleOpen}>
        <span id='1'></span>
        <span id='dis'></span>   
        <span id='2'></span>
    </div>
  )
}
