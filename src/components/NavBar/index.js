import React from 'react'
import './index.css'

export default function NavBar({ open, setOpen }) {
  return (
    <div className={`navBar ${open ? 'close' : ''}`}>
        <a href='#contact' onClick={() => setOpen(!open)}>Contact</a>
    </div>
  )
}
