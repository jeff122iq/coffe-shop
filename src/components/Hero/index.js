import React from 'react'
import Container from '../Container'
import './index.css'
import Logo from '../../images/logo.jpeg'
import Button from '../Button/index';

export default function Hero() {
  return (
    <section className='heroSection'>
        <Container>
            <div className='imageContainer'>
                <img src={Logo} alt=''/>
            </div>
            <div className='textContainer'>
                <p>Cafe in Munich</p>
            </div>
        </Container>
    </section>
  )
}
