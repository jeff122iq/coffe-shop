import React from 'react'
import './index.css'

export default function NavBar({ open, setOpen }) {
  return (
    <div className={`${open === true ? 'navBar open' : 'navBar'}`}>
        <a href='#contact' onClick={() => setOpen(!open)}>Contact</a>
    </div>
  )
}
