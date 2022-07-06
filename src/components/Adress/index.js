import React from 'react'
import Button from '../Button';
import Container from '../Container/index';
import './index.css'

export default function Adress() {
  return (
    <div className="adress">
        <Container>
            <div className="adressContainer">
                <h3>Address</h3>
                <p>Ehrengutstraße 18, 80469 München, <br/><br/> Germany</p>
                <Button link='https://www.google.com/maps/place/Storm+in+a+Coffeepot/@48.1210957,11.5607772,17z/data=!3m1!4b1!4m5!3m4!1s0x479e75eb67b769a7:0x75bed7038a1fa3ca!8m2!3d48.1211048!4d11.560745'>Get directions</Button>
            </div>
            <div className="businessContainer">
                <h3>Business hours</h3>
                <p>Monday: <span>09:00–17:00</span></p>
                <p>Tuesday: <span>09:00–17:00</span></p>
                <p>Wednesday: <span>09:00–17:00</span></p>
                <p>Thursday: <span>09:00–17:00</span></p>
                <p>Friday: <span>09:00–17:00</span></p>
                <p>Saturday: <span>09:00–17:00</span></p>
                <p>Sunday: <span>closed</span></p>
            </div>
        </Container>
    </div>
  )
}
