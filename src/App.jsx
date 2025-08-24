import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ShinyText from '../ClickSpark/ShinyText/ShinyText.jsx';
import './App.css'
import Header from './Componants/jsx/Header.jsx'
import Footer from './Componants/jsx/Footer.jsx'
import Main from './Componants/jsx/Main.jsx'
import GoToTop from './Componants/jsx/GoToTop.jsx'
import Image from './assets/images/cropped_circle_image.png'
import ClickSpark from '../ClickSpark/ClickSpark.jsx'
import * as Icon from "react-bootstrap-icons";
import { fetchProfile } from './services/profile.js';
import { fetchContact } from './services/contact.js';
import ShimmerHero from './Componants/jsx/ShimmerHero.jsx';

function App() {
  const [profileData, setProfileData] = useState(null);
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const profile = await fetchProfile();
        const contact = await fetchContact();

        if (!profile || !contact) {
          throw new Error('Failed to fetch data. Please check Firestore collections and document IDs.');
        }

        setProfileData(profile);
        setContactData(contact);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
      <div className='red-grid-bg'>
        <div className='theme-transition-overlay'></div>
        <ClickSpark sparkColor="#ff4c4c" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
          <Header />
          <div className="hero-section-container">
            <div className="hero-section hero-animate">
            {loading && (
              <div className="hero-content">
                <ShimmerHero />
              </div>
            )}
              {error && <div className="hero-error">Error: {error}</div>}
              {!loading && !error && profileData && contactData && (
                <div className="hero-content">
                  <div className="hero-left">
                    {/** Temporary defensive fix: correct common role misspelling until DB is updated */}
                    {(() => null)()}
                    <motion.span
                      className="hero-greeting"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                      Hello, I'm
                    </motion.span>
                    <motion.h1
                      className="hero-title"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    >
                      {`${profileData.firstName} ${profileData.lastName}`}
                    </motion.h1>
                    <motion.h2
                      className="hero-subtitle"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    >
                      {(() => {
                        const displayRole = String(profileData.role || '')
                          .replace(/soffwaer/ig, 'Software')
                          .trim();
                        return <ShinyText text={displayRole} disabled={false} speed={3} className='custom-class' />;
                      })()}
                    </motion.h2>
                    <motion.div
                      className="hero-buttons"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                    >
                      <button className='download-btnl' onClick={() => {
                        window.open('https://drive.google.com/drive/folders/15XtNNYMIyCpgjRth769IV9PZAuRZYU4f?usp=sharing', '_blank');
                      }}>Download CV</button>
                      <button className="contact-btnl" onClick={() => {
                        window.open(`mailto:${contactData.email}`, '_blank');
                      }}>Contact Me</button>
                    </motion.div>
                    <motion.div
                      className="hero-icons"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                    >
                      <a href={contactData.github} target='_blank' rel="noopener noreferrer"><Icon.Github style={{color: 'var(--black-white-color)', fontSize: '20px',cursor: 'pointer'}}/></a>
                      <a href={contactData.linkedin} target='_blank' rel="noopener noreferrer"><Icon.Linkedin style={{color: 'var(--black-white-color)', fontSize: '20px',cursor: 'pointer'}}/></a>
                    </motion.div>
                  </div>
                  <div className="hero-right">
                    <div className="hero-image">
                    <img src={profileData.avatar || Image} alt={`${profileData.firstName} ${profileData.lastName}`} />
                    </div>
                  </div>
                </div>
              )}
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
      <GoToTop />
    </>
  );
}

export default App;
