import React, { useState } from 'react'
import './index.css'
import Container from '../Container';
import Burger from '../Burger';
import Logo from '../../images/logo.jpeg'
import { headerNavData } from './variables';
import NavBar from '../NavBar';

export default function Header({ handleOpen }) {

  return (
    <header className="header">
        <Container>
            <div className='logoContainer'>
              <Burger handleOpen={handleOpen}/>
              <div className='imageContainer'>
                <img src={Logo} alt=''/>
              </div>
            </div>
            <nav className='navigation'>
              {
                headerNavData.map(item => {
                  return (
                  <div className='navigationItem' key={item.id}>
                    {item.icon}
                    <a target="_blank" href={item.link && item.link}>{item.name}</a>
                  </div>)
                })
              }
            </nav>
        </Container>
    </header>
  )
}
