import React, { Component } from 'react'
import '../css/Main.css'
export class Main extends Component {
  render() {
    return (
      <div className='main'>
        <About />
        <Projects />
        <Internships />
        <Education />
        <Certifications />
        <Contact />
      </div>
    )
  }
}
const About = () => {
    return (
        <>
        <section id="About">
            <div className="section--container">
                <div className="section--tittle">
                    <h2>About Me</h2>
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
                    <h2>Projects</h2>
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
                    <h2>Internships</h2>
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
                    <h2>Education</h2>
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
                    <h2>Certifications</h2>
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
                    <h2>Contact</h2>
                </div>
            </div>
        </section>
    )
};
export default Main
