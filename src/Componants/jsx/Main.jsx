import React, { useState } from 'react';
import ClickSpark from '../../../ClickSpark/ClickSpark.jsx';
import ShinyText from '../../../ClickSpark/ShinyText/ShinyText.jsx';
import * as Icons from 'react-bootstrap-icons';
import '../css/Main.css';
import '../../index.css';
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

  const skills = [
    { image: 'https://i.postimg.cc/W3FJpBSb/html.png', name: 'HTML', alt: 'HTML' },
    { image: 'https://i.postimg.cc/wThLmdz1/css-alt.png', name: 'CSS', alt: 'CSS' },
    { image: 'https://i.postimg.cc/FRMkYTnb/javascript.png', name: 'JavaScript', alt: 'JavaScript' },
    { image: 'https://i.postimg.cc/9QL4dmnQ/react.png', name: 'React', alt: 'React' },
    { image: 'https://i.postimg.cc/Mp6MfMtL/node-js.png', name: 'Node.js', alt: 'Node.js' },
    { image: 'https://i.postimg.cc/HnbcXbfq/java.png', name: 'Java', alt: 'Java' },
    { image: 'https://i.postimg.cc/zXSHfSwW/python.png', name: 'Python', alt: 'Python' },
    { image: 'https://i.postimg.cc/jqnzR7kQ/android-studio.png', name: 'Android Studio', alt: 'Android Studio' },
    { image: 'https://i.postimg.cc/x15m6ycY/flutter.png', name: 'Flutter', alt: 'Flutter' },
    { image: 'https://i.postimg.cc/6ptRV16Y/aws.png', name: 'AWS', alt: 'AWS' },
    { image: 'https://i.postimg.cc/fT4YyRG4/docker.png', name: 'Docker', alt: 'Docker' },
    { image: 'https://i.postimg.cc/GpSyCLF5/git.png', name: 'Git', alt: 'Git' },
    { image: 'https://i.postimg.cc/Lss1wY1P/firebase.png', name: 'Firebase', alt: 'Firebase' },
    { image: 'https://i.postimg.cc/J7XBfWGp/mongodb.png', name: 'MongoDB', alt: 'MongoDB' },
    { image: 'https://i.postimg.cc/RVzn9bt4/mysql.png', name: 'MySQL', alt: 'MySQL' }
  ];
  const certifications = [
    {
      image: "https://i.postimg.cc/yd3xF0MV/Geeks-for-Geeks-Mango-DB-Certificate-page-0001.jpg",
      alt: "MongoDB Certificate",
      title: "MongoDB Certificate",
      provider: "Geeks for Geeks",
      date: "2023"
    },
    {
      image: "https://i.postimg.cc/6qs3zyKC/Geeks-For-Geeks-Full-Stack-Devloper-page-0001.jpg",
      alt: "Full Stack Developer Certificate",
      title: "Full Stack Developer",
      provider: "Geeks for Geeks",
      date: "2023"
    },
    {
      image: "https://i.postimg.cc/FFc1zgbp/LUEJSNOV124130-page-0001.jpg",
      alt: "Certificate 3",
      title: "JavaScript Essentials",
      provider: "LinkedIn Learning",
      date: "2022"
    },
    {
      image: "https://i.postimg.cc/VvjNhmsp/LUENJSDEC124604-page-0001.jpg",
      alt: "Certificate 4",
      title: "React Developer",
      provider: "LinkedIn Learning",
      date: "2022"
    },
    {
      image: "https://i.postimg.cc/ZKxRFbMy/Oracle-Java-Fundamentals-Certificate-page-0001.jpg",
      alt: "Oracle Java Fundamentals Certificate",
      title: "Java Fundamentals",
      provider: "Oracle",
      date: "2021"
    },
    {
      image: "https://i.postimg.cc/xdc12KTK/Python-Certificate-page-0001.jpg",
      alt: "Python Certificate",
      title: "Python Programming",
      provider: "Coursera",
      date: "2021"
    }
  ];
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
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
    <section id='Internships' className="experience-section">
  <h2><b style={{color: 'var(--text-color)'}}>Professional</b> Experience</h2>

  <p className="experience-subtitle">
    My professional experience and growth in the tech industry. 
  </p>
  <div className="timeline-container">
    <div className="experience-card">
      <div className="company">
        <span role="img" aria-label="briefcase">💼</span> Innovate Corp
      </div>
      <div className="role">Software Engineer Intern</div>
      <div className="meta">
        <span>📅 Jun 2022 - Aug 2022</span>
        <span>🌐 Remote</span>
      </div>
      <div className="description">
        Worked on the core platform, contributing to both front-end and back-end services. Developed new features, fixed bugs, and participated in the full...
      </div>
      <a className="details-btn" href="#"><ShinyText text="View Details ↗" disabled={false} speed={3} className='custom-class' /></a>
    </div>
    <div className="timeline">
      <div className="timeline-dot"></div>
      <div className="timeline-dot timeline-dot-2"></div>
    </div>
    <div className="experience-card experience-card-2">
      <div className="company">
        <span role="img" aria-label="briefcase">💼</span> Innovate Corp
      </div>
      <div className="role">Software Engineer Intern</div>
      <div className="meta">
        <span>📅 Jun 2022 - Aug 2022</span>
        <span>🌐 Remote</span>
      </div>
      <div className="description">
        Worked on the core platform, contributing to both front-end and back-end services. Developed new features, fixed bugs, and participated in the full...
      </div>
      <a className="details-btn" href="#"><ShinyText text="View Details ↗" disabled={false} speed={3} className='custom-class' /></a>
    </div>
  </div>
</section>
  );

  const Education = () => (
    <section id="Education" className="education-section">
      <div className="section--container">
        <div className="section--tittle">
          <h2><b style={{color: 'var(--text-color)'}}>My</b> Education</h2>
        </div>
        <p className="education-subtitle">
          My academic journey and qualifications.
        </p>
        <div className="education-cards">
          <div className="education-card">
            <div className="education-icon">
              <span role="img" aria-label="graduation cap">🎓</span>
            </div>
            <div className="education-content">
              <h3 className="institution">Sanjivani University</h3>
              <p className="qualification">Bachelor of Technology in Computer Science</p>
              <div className="education-grade">
               
                
              </div>
              <div className="education-separator"></div>
              <div className="education-dates">
                <div className="edu-left"><span role="img" aria-label="calendar">📅</span>
                <span>2024 - 2027</span></div>
                <div className="edu-right">
                <span className="grade-label">Grade: </span>
                <span className="grade-value"> A+ </span>
                <span className="percentage"> (8.2 CGPA) </span> </div>
              </div>
            </div>
          </div>
          
          <div className="education-card">
            <div className="education-icon">
            <span role="img" aria-label="graduation cap">🎓</span>
            </div>
            <div className="education-content">
              <h3 className="institution">Gautam Polytechnic and Institute </h3>
              <p className="qualification">Diploma in Computer Engineering</p>
              <div className="education-grade">
                

              </div>
              <div className="education-separator"></div>
              <div className="education-dates">
                <div className="edu-left"><span role="img" aria-label="calendar">📅</span>
                <span>2021 - 2024</span></div>
                <div className="edu-right">
                <span className="grade-label">Percentage: </span>
                <span className="grade-value"> A </span> 
                <span className="percentage"> (78%) </span> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Certifications = () => (
    <section id="Certifications" className="certifications-section">
      <div className="section--container">
        <div className="section--tittle">
          <h2><b style={{color: 'var(--text-color)'}}>Certifications</b> & Awards</h2>
        </div>
        <p className="certifications-subtitle">
          Recognitions of my skills and dedication to continuous learning.
        </p>
        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div className="certification-card" key={idx}>
              <div className="certification-image">
                <img src={cert.image} alt={cert.alt} style={{width: "100%", borderRadius: "8px"}} />
              </div>
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-provider">{cert.provider}</p>
                <div className="certification-date">
                  <span role="img" aria-label="calendar">📅</span> {cert.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Skills = () => (
    <section id="Skills" className="skills-section">
      <div className="section--container">
        <div className="section--tittle">
          <h2><b style={{color: 'var(--text-color)'}}>Tech</b> Skills</h2>
        </div>
        <p className="skills-subtitle">
          Technologies and tools I work with to bring ideas to life.
        </p>
        <div className="skills-grid">
          <div className="skills-row skills-row-1">
            {skills.slice(0, 7).map((skill, idx) => (
              <div key={idx} className="skill-card">
                <img src={skill.image} alt={skill.alt} />
              </div>
            ))}
          </div>
          <div className="skills-row skills-row-2">
            {skills.slice(7, 12).map((skill, idx) => (
              <div key={idx + 7} className="skill-card">
                <img src={skill.image} alt={skill.alt} />
              </div>
            ))}
          </div>
          <div className="skills-row skills-row-3">
            {skills.slice(12, 15).map((skill, idx) => (
              <div key={idx + 12} className="skill-card">
                <img src={skill.image} alt={skill.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const Contact = () => (
    <section id="Contact" className="contact-section">
      <div className="section--container">
        <div className="section--tittle">
          <h2>
            <b style={{ color: 'var(--text-color)' }}>Get In</b>
            <span style={{ color: 'var(--primary-color)' }}> Touch</span>
          </h2>
        </div>
        <p className="contact-subtitle">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </p>
        <form className="contact-form">
          <div className="contact-row">
            <div className="contact-field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" autoComplete="off" required />
            </div>
            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" autoComplete="off" required />
            </div>
          </div>
          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} required />
          </div>
          <button type="submit" className="contact-btn" onClick={handleSubmit} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
            Send Message <Icons.SendFill />
          </button>
        </form>
      </div>
    </section>
  );

  return (
      <ClickSpark
        sparkColor="#ff4c4c"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* <div className='red-grid-bg-1'> */}
        <About />
        {/* </div> */}
        <div className='red-grid-bg-2'>
        <Projects />
        </div>
        {/* <div className='red-grid-bg-3'> */}
        <Internships />
        {/* </div> */}
        <div className='red-grid-bg-4'>
        <Skills />
        </div>
        {/* <div className='red-grid-bg-5'> */}
        <Education />
        {/* </div> */}
        {/* <div className='red-grid-bg-6'> */}
        <Certifications />
        {/* </div> */}
        <div className='red-grid-bg-7'>
        <Contact />
        </div>
      </ClickSpark>
  );
}
