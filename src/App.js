import './App.css';
import Adress from './components/Adress';
import Hero from './components/Hero';
import Layout from './components/Layout';
import Slider from './components/Slider';
import { useState } from 'react';
import NavBar from './components/NavBar/index';

function App() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
    if (open === true) setOpen(!open)
  }

  return (
    <div className="App">
      <Layout handleOpen={handleOpen}>
      {
        open ? <NavBar/> : null
      }
        <Hero/>
        <Slider/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.4369838684643!2d11.5607772!3d48.1210957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75eb67b769a7%3A0x75bed7038a1fa3ca!2sStorm%20in%20a%20Coffeepot!5e0!3m2!1sru!2sua!4v1657097271274!5m2!1sru!2sua" width="1000" height="650" style={{border:0, margin: '100px, 0'}} allowFullScreen=""></iframe>
        <Adress/>
      </Layout>
    </div>
  );
}

export default App;
