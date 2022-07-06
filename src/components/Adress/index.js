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
                <Button>Get directions</Button>
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
