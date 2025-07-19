import React, { Component } from 'react'
import about from '../../assets/images/2025-03-06 22.27.06[1].jpg'
import ClickSpark from '../../../ClickSpark/ClickSpark.jsx'
import '../css/Main.css'
export class Main extends Component {
  render() {
    return (
      <div className='main'>
         <ClickSpark
        sparkColor="#ff4c4c"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <About />
        <Projects />
        <Internships />
        <Education />
        <Certifications />
        <Contact />
        </ClickSpark>
      </div>
    )
  }
}
const About = () => {
    return (
        <>
        <section id="About" className='about-section'>
            <div className="section--container">
                <div className="section--tittle">
                    <h2><b style={{color: 'var(--text-color)'}}>About</b> Me</h2>
                </div>
                <div className="section--content">
                  
                        <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-color)'}}>Hi, I'm Shrikant</p>
                        <p>
                        I'm a B.Tech Computer Science student at Sanjivani University, passionate about technology and innovation. I specialize in frontend development 
                        <text style={{color: 'var(--blueviolet-color)'}}> (HTML, CSS, JavaScript, ReactJS), </text> 
                        have experience with backend 
                        <text style={{color: 'var(--blueviolet-color)'}}> (Node.js, Java, Dart), </text> 
                        and am expanding into mobile app development 
                        <text style={{color: 'var(--blueviolet-color)'}}> (Android Studio, Flutter). </text> 
                        I also enjoy exploring machine learning and training models to solve real-world problems.
                        <text style={{color: 'var(--blueviolet-color)'}}> (Machine Learning, Data Science, Python, TensorFlow, PyTorch) </text>
                        </p>
                       
                        <p>
                        Feel free to explore my work, and don’t hesitate to connect if you’re interested in collaborating on exciting opportunities!
                        </p>
                </div>
            </div>
        </section>
        </>
    )
};
const Projects = () => {
    return (
        <section id="Projects">
            <div className="section--container">
                <div className="section--tittle">
                    <h2><b style={{color: 'var(--text-color)'}}>My</b> Projects</h2>
                </div>
            </div>
        </section>
    )
};
const Internships = () => {
    return (
        <section id="Internships">
            <div className="section--container">
                <div className="section--tittle">
                    <h2><b style={{color: 'var(--text-color)'}}>Professional</b> Experience</h2>
                </div>
            </div>
        </section>
    )
};
const Education = () => {
    return (
        <section id="Education">
            <div className="section--container">
                <div className="section--tittle">
                    <h2><b style={{color: 'var(--text-color)'}}>My</b> Education</h2>
                </div>
            </div>
        </section>
    )
};
const Certifications = () => {
    return (
        <section id="Certifications">
            <div className="section--container">
                <div className="section--tittle">
                    <h2><b style={{color: 'var(--text-color)'}}>Certifications</b> & Awards</h2>
                </div>
            </div>
        </section>
    )
};
const Contact = () => {
    return (
        <section id="Contact">
            <div className="section--container">
                <div className="section--tittle">
                    <h2><b style={{color: 'var(--text-color)'}}>Contact</b> Me </h2>
                </div>
            </div>
        </section>
    )
};
export default Main
