import React, { useState } from 'react';
import about from '../../assets/images/2025-03-06 22.27.06[1].jpg';
import ClickSpark from '../../../ClickSpark/ClickSpark.jsx';
import * as Icon from "react-bootstrap-icons";
import '../css/Main.css';
import ProjectModal from './ProjectModel.jsx';
import ProjectCard from './ProjectCard.jsx';

export default function Main() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image: 'https://i.postimg.cc/ydR2Cj3g/Screenshot-2025-07-05-162808.png',
      title: 'XPrime Website',
      description: 'Xprime – A Prompt-to-Image Showcase Explore a visual gallery of AI-generated images, each paired with the prompt that created it',
      objective: 'Showcase AI-generated images with their prompts.',
      techstack: 'React, JavaScript, CSS, GitHub Pages',
      link: 'https://shrikant-pawar-45.github.io/Xprime/'
    },
    {
      image: 'https://i.postimg.cc/RZjvcT8P/Screenshot-2025-07-19-154741.png',
      title: 'Portfolio Website',
      description: 'This very portfolio website, designed to be dynamic and easily updatable through a custom admin panel.',
      objective: 'Personal branding and project showcase.',
      techstack: 'React, Vite, CSS, JavaScript',
      link: '#'
    },
    {
      image: 'https://i.postimg.cc/446TFSNt/Screenshot-2025-05-13-113925.png',
      title: 'Developing and Designing Online Bus Pass System for Pass Holder',
      description: 'Now, we are developing an Android application for pass holders, which will help pass holders renew or get a new pass at any time',
      objective: 'Digitize and simplify bus pass management.',
      techstack: 'Android Studio, Java, Firebase',
      link: '#'
    },
    {
      image: 'https://i.postimg.cc/brCgBPGp/circuit-image-2.png',
      title: 'NPK Soil Nutrients Analysis System Using IOT',
      description: 'We have developed an NPK ( Nitrogen, Potassium, Phosphorus) soil analysis system. This project aims to detect nutrients from the soil, and the system helps farmers understand the soil condition.',
      objective: 'Assist farmers in analyzing soil nutrients.',
      techstack: 'IoT, Sensors, Embedded C, Circuit Design',
      link: '#'
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const About = () => (
    <section id="About" className='about-section'>
      <div className="section--container">
        <div className="section--tittle">
          <h2><b style={{color: 'var(--text-color)'}}>About</b> Me</h2>
        </div>
        <div className="section--content">
          <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-color)'}}>Hi, I'm Shrikant</p>
          <p>
            I'm a B.Tech Computer Science student at Sanjivani University, passionate about technology and innovation. I specialize in frontend development
            <span style={{color: 'var(--blueviolet-color)'}}> (HTML, CSS, JavaScript, ReactJS), </span>
            have experience with backend
            <span style={{color: 'var(--blueviolet-color)'}}> (Node.js, Java, Dart), </span>
            and am expanding into mobile app development
            <span style={{color: 'var(--blueviolet-color)'}}> (Android Studio, Flutter). </span>
            I also enjoy exploring machine learning and training models to solve real-world problems.
            <span style={{color: 'var(--blueviolet-color)'}}> (Machine Learning, Data Science, Python, TensorFlow, PyTorch) </span>
          </p>
          <p>
            Feel free to explore my work, and don’t hesitate to connect if you’re interested in collaborating on exciting opportunities!
          </p>
        </div>
      </div>
    </section>
  );

  const Projects = () => (
    <section id="Projects" className="projects-section">
       <h2><b style={{color: 'var(--text-color)'}}>My</b> Projects</h2>
      <p className="projects-subtitle">
        A selection of my work, showcasing my skills in design and development.
      </p>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            {...project}
            onViewDetails={() => handleOpenModal(project)}
          />
        ))}
      </div>
      {/* <ProjectModal open={modalOpen} onClose={handleCloseModal} project={selectedProject} /> */}
    </section>
  );

  const Internships = () => (
    <section id="Internships">
      <div className="section--container">
        <div className="section--tittle">
          <h2><b style={{color: 'var(--text-color)'}}>Professional</b> Experience</h2>
        </div>
      </div>
    </section>
  );

  const Education = () => (
    <section id="Education">
      <div className="section--container">
        <div className="section--tittle">
          <h2><b style={{color: 'var(--text-color)'}}>My</b> Education</h2>
        </div>
      </div>
    </section>
  );

  const Certifications = () => (
    <section id="Certifications">
      <div className="section--container">
        <div className="section--tittle">
          <h2><b style={{color: 'var(--text-color)'}}>Certifications</b> & Awards</h2>
        </div>
      </div>
    </section>
  );

  const Contact = () => (
    <section id="Contact">
      <div className="section--container">
        <div className="section--tittle">
          <h2><b style={{color: 'var(--text-color)'}}>Contact</b> Me </h2>
        </div>
      </div>
    </section>
  );

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
  );
}
