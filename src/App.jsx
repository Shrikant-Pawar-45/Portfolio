import { useState } from 'react'
import ShinyText from '../ClickSpark/ShinyText/ShinyText.jsx';
import './App.css'
import Header from './Componants/jsx/Header.jsx'
import Footer from './Componants/jsx/Footer.jsx'
import Main from './Componants/jsx/Main.jsx'
import Image from './assets/images/cropped_circle_image.png'
import ClickSpark from '../ClickSpark/ClickSpark.jsx'
import * as Icon from "react-bootstrap-icons"
function App() {
  
  const [count, setCount] = useState(0)
  return (
<>
        <div className='red-grid-bg '>
        <ClickSpark
          sparkColor="#ff4c4c"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
              
          <Header />
          <div className="hero-section-container">
          <div className="hero-section hero-animate">
            <div className="hero-left">
              <span className="hero-greeting">Hello, I'm</span>
              <h1 className="hero-title">Shrikant Pawar</h1>
              <h2 className="hero-subtitle"><ShinyText text="Full Stack Developer & AI Enthusiast" disabled={false} speed={3} className='custom-class' /></h2>
              <div className="hero-buttons">
              
              <button className='download-btnl' onClick={() => {
                window.open('https://drive.google.com/file/d/1-0000000000000000000000000000000000000000/view?usp=sharing', '_blank');
              }}>Download CV</button>
              
              <button className="contact-btnl" onClick={() => {
                window.open('mailto:shrikantpawar493@gmail.com', '_blank');
              }}>Contact Me</button>
              </div>
              <div className="hero-icons">
                <a href="https://github.com/Shrikant-Pawar-45" target='_blank'><Icon.Github style={{color: 'var(--black-white-color)', fontSize: '20px'}}/></a>
                <a href="https://www.linkedin.com/in/shrikant-pawar-89200823b/" target='_blank'><Icon.Linkedin style={{color: 'var(--black-white-color)', fontSize: '20px'}}/></a>
              </div>
            </div>
            
            <div className="hero-right">
              <div className="hero-image">
                <img src={Image} alt="Shrikant Pawar" />
              </div>
            </div>
          </div>
          <div
    className="scroll-mouse-indicator"
    onClick={() => {
      document.getElementById('About').scrollIntoView({ behavior: 'smooth' });
    }}
  >
    <div className="mouse-shape">
      <div className="mouse-arrow">
        <svg width="28" height="48" viewBox="0 0 28 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="24" height="44" rx="12" stroke="var(--black-white-color)" strokeWidth="4" fill="none"/>
          <g>
            <line x1="14" y1="16" x2="14" y2="30" stroke="var(--black-white-color)" strokeWidth="4" strokeLinecap="round"/>
            <polygon points="14,38 8,30 20,30" fill="var(--black-white-color)"/>
          </g>
        </svg>
      </div>
    </div>
  </div>
  </div>
        
          </ClickSpark>
          </div>
          <Main />
          <Footer />
        </>
  )
}

export default App
