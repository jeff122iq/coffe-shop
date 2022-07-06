import React from 'react'
import Header from '../Header'
import './index.css'

export default function Layout({ children, handleOpen }) {
  return (
    <div>
      <Header handleOpen={handleOpen}/>
      <div className="content"> 
        { children }
      </div>
    </div>
  )
}
