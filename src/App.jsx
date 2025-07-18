import { useState } from 'react'
import './App.css'
import Header from './Componants/jsx/Header.jsx'
import Footer from './Componants/jsx/Footer.jsx'
import Main from './Componants/jsx/Main.jsx'
import Image from './assets/images/cropped_circle_image.png'
import ClickSpark from '../ClickSpark/ClickSpark.jsx'
import * as Icon from "react-bootstrap-icons"
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
function App() {
  
  const [count, setCount] = useState(0)
  return (

      <ClickSpark
        sparkColor="#ff4c4c"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="red-grid-bg"></div>
        <Header />
        <div className="hero-section hero-animate">
          <div className="hero-left">
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-title">Shrikant Pawar</h1>
            <h2 className="hero-subtitle">Full Stack Developer & AI Enthusiast</h2>
            <div className="hero-buttons">
            
            <button className='download-btn'>Download CV</button>
            
            <button className="contact-btn">Contact Me</button>
            </div>
            <div className="hero-icons">
              <Icon.Github style={{color: 'white', fontSize: '20px'}}/>
              <Icon.Linkedin style={{color: 'white', fontSize: '20px'}}/>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image">
              <img src={Image} alt="Shrikant Pawar" />
            </div>
          </div>
        </div>
        <Main />
        <Footer />
      </ClickSpark>
  )
}

export default App
