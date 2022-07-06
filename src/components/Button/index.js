import React from 'react'
import './index.css'

export default function Button({ children, link }) {
  return (
    <>
       { 
        link ? <a className='button' target="_blank" href={link}>{children}</a> :    
        <div className='button'>
        { children }
      </div>
      }
    </>
  )
}
