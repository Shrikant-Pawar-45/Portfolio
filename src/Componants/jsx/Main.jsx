import React, { useEffect, useState } from 'react';
import emailjs from "@emailjs/browser";
import ClickSpark from '../../../ClickSpark/ClickSpark.jsx';
import ShinyText from '../../../ClickSpark/ShinyText/ShinyText.jsx';
import { FiSend, FiBriefcase, FiCalendar, FiGlobe, FiAward, FiExternalLink } from 'react-icons/fi';
import '../css/Main.css';
import '../../index.css';
import * as Icons from 'react-icons/fi';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';
import { fetchProjects } from '../../services/projects.js';
import { fetchAbout } from '../../services/about.js';
import { fetchEducation } from '../../services/education.js';
import { fetchInternships } from '../../services/internships.js';
import { fetchCertifications } from '../../services/certifications.js';

export default function Main() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [about, setAbout] = useState(null);
  const [loadingAbout, setLoadingAbout] = useState(true);
  const [education, setEducation] = useState([]);
  const [loadingEducation, setLoadingEducation] = useState(true);
  const [internships, setInternships] = useState([]);
  const [loadingInternships, setLoadingInternships] = useState(true);
  const [certifications, setCertifications] = useState([]);
  const [loadingCertifications, setLoadingCertifications] = useState(true);

  const fallbackProjects = [
    {
      image: 'https://i.postimg.cc/ydR2Cj3g/Screenshot-2025-07-05-162808.png',
      title: 'XPrime Website',
      description: 'Xprime – A Prompt-to-Image Showcase Explore a visual gallery of AI-generated images, each paired with the prompt that created it',
      link: 'https://shrikant-pawar-45.github.io/Xprime/'
    },
    {
      image: 'https://i.postimg.cc/RZjvcT8P/Screenshot-2025-07-19-154741.png',
      title: 'Portfolio Website',
      description: 'This very portfolio website, designed to be dynamic and easily updatable through a custom admin panel.',
      link: '#'
    },
    {
      image: 'https://i.postimg.cc/446TFSNt/Screenshot-2025-05-13-113925.png',
      title: 'Online Bus Pass System',
      description: 'Android app to help pass holders renew or get a new pass anytime.',
      link: '#'
    },
    {
      image: 'https://i.postimg.cc/brCgBPGp/circuit-image-2.png',
      title: 'NPK Soil Nutrients Analysis (IoT)',
      description: 'Detects soil nutrients (NPK) to assist farmers in understanding soil conditions.',
      link: '#'
    },
  ];

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [projData, aboutData, eduData, internData, certData] = await Promise.all([
          fetchProjects().catch(() => null),
          fetchAbout().catch(() => null),
          fetchEducation().catch(() => null),
          fetchInternships().catch(() => null),
          fetchCertifications().catch(() => null),
        ]);
        if (!mounted) return;
        if (projData && projData.length) setProjects(projData);
        else setProjects(fallbackProjects);
        if (aboutData) setAbout(aboutData);
        if (eduData && eduData.length) setEducation(eduData);
        if (internData && internData.length) setInternships(internData);
        if (certData && certData.length) setCertifications(certData);
      } catch (e) {
        setProjects(fallbackProjects);
      } finally {
        if (mounted) setLoadingProjects(false);
        if (mounted) setLoadingAbout(false);
        if (mounted) setLoadingEducation(false);
        if (mounted) setLoadingInternships(false);
        if (mounted) setLoadingCertifications(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

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
  const handleOpenModal = (project) => {
    try {
      console.log('[Project View] Selected project:', project);
      console.log('[Project View] Fields ->', {
        title: project?.title,
        description: project?.description,
        objective: project?.objective,
        status: project?.status,
        type: project?.type,
        skills: project?.skills,
        image: project?.image,
        imageUrl: project?.imageUrl,
        start: project?.start,
        end: project?.end,
        link: project?.link,
      });
      if (typeof window !== 'undefined') window.__lastProject = project;
    } catch (_) {}
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
          {loadingAbout ? (
            <p style={{ color: 'var(--subtitle-color)' }}>Loading profile…</p>
          ) : (
            <>
              <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-color)'}}>Hi, I'm Shrikant</p>
              <p>{about?.description}</p>
              {(about?.skills?.title || about?.skills?.subtitle) && (
                <p>
                  <span style={{color: 'var(--blueviolet-color)'}}>{about?.skills?.title}</span>
                  {about?.skills?.subtitle ? (
                    <span> — {about.skills.subtitle}</span>
                  ) : null}
                </p>
              )}
              {about?.goals && (
                <p><b>Goals:</b> {about.goals}</p>
              )}
              {about?.experience && (
                <p><b>Experience:</b> {about.experience}</p>
              )}
            </>
          )}
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
      {loadingProjects ? (
        <p style={{ color: 'var(--subtitle-color)' }}>Loading projects…</p>
      ) : projects.length === 0 ? (
        <p style={{ color: 'var(--subtitle-color)' }}>No projects found.</p>
      ) : (
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              {...project}
              onViewDetails={() => handleOpenModal(project)}
            />
          ))}
        </div>
      )}
      <ProjectModal open={modalOpen} onClose={handleCloseModal} project={selectedProject} />
    </section>
  );

  const Internships = () => (
    <section id='Internships' className="experience-section">
  <h2><b style={{color: 'var(--text-color)'}}>Professional</b> Experience</h2>

  <p className="experience-subtitle">
    My professional experience and growth in the tech industry. 
  </p>
  <div className="timeline-container">
          {loadingInternships ? (
            <p style={{ color: 'var(--subtitle-color)' }}>Loading experience…</p>
          ) : internships.length === 0 ? (
            <p style={{ color: 'var(--subtitle-color)' }}>No experience added yet.</p>
          ) : (
            internships.map((it, idx) => (
              <div className="experience-card" key={idx}>
            
                <div className="exp-row exp-title">
                  <span className="company"><FiBriefcase className="icon" /> {it.company}</span>
                </div>
               
                {it.location ? (
                  <div className="exp-row exp-location">
                    <span><FiGlobe className="icon" /> {it.location}</span>
                  </div>
                ) : null}
             
                {(it.duration || it.start || it.end) ? (
                  <div className="exp-row exp-duration">
                    <span><FiCalendar className="icon" /> {it.duration ? it.duration : `${it.start}${it.end ? ` - ${it.end}` : ''}`}</span>
                  </div>
                ) : null}
              
                <div className="exp-row exp-position">
                  <div className="role">{it.role}</div>
                </div>
      
                {it.description && String(it.description).trim().toLowerCase() !== String(it.role || '').trim().toLowerCase() ? (
                  <div className="exp-row description">{it.description}</div>
                ) : null}
              </div>
            ))
    )}
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
          {loadingEducation ? (
            <p style={{ color: 'var(--subtitle-color)' }}>Loading education…</p>
          ) : education.length === 0 ? (
            <p style={{ color: 'var(--subtitle-color)' }}>No education added yet.</p>
          ) : (
            education.map((e, idx) => (
              <div className="education-card" key={idx}>
                <div className="education-icon">
                  <Icons.FiAward className="icon" />
                </div>
                <div className="education-content">
                  <h3 className="institution">{e.institution}</h3>
                  <p className="qualification">{e.qualification}</p>
                  <div className="education-separator"></div>
                  <div className="education-dates">
                    <div className="edu-left">
                      <Icons.FiCalendar className="icon" />
                      <span>{e.start}{e.end ? ` - ${e.end}` : ''}</span>
                    </div>
                    <div className="edu-right">
                      <span className="grade-label">{e.gradeLabel}:</span>
                      <span className="grade-value">{e.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
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
          {loadingCertifications ? (
            <p style={{ color: 'var(--subtitle-color)' }}>Loading certifications…</p>
          ) : certifications.length === 0 ? (
            <p style={{ color: 'var(--subtitle-color)' }}>No certifications added yet.</p>
          ) : (
            certifications.map((cert, idx) => (
              <div className="certification-card" key={idx}>
                <div className="certification-content">
                  <div className="certification-header">
                  <FiAward  size={20} style={{color: 'var(--primary-color)',marginBottom: '10px'}} />
                    <div className="certification-head-left">
                      
                      <h3 className="certification-title">{cert.title}</h3>
                      {cert.provider ? (
                        <p className="certification-provider">{cert.provider}</p>
                      ) : null}
                    </div>
                  </div>
                  {cert.date ? (
                    <div className="certification-meta">
                      <FiCalendar className="icon" />
                      <span>{cert.date}</span>
                    </div>
                  ) : null}
                  {cert.verifyUrl ? (
                    <div className="certification-actions">
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="verify-btn"
                        title="Verify Certificate"
                      >
                        <FiExternalLink />
                        <span>Verify</span>
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            ))
          )}
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

  const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
      const ServiceID = "service_vpm6alv";
      const TemplateID = "template_d7rdfvv";
      const PublicKey = "LqccQRoXqimL5q6Dy";
      e.preventDefault();
      console.log('Form submitted');
      const templateParams = {
        from_name: name,
        from_email: email,
        time: new Date().toISOString(),
        form_to: "Shrikant Pawar",
        message: message,
      };
      
      emailjs.send(ServiceID, TemplateID, templateParams, PublicKey)
      .then(() => {
        setName('');
        setEmail('');
        setMessage('');
        console.log('Email sent successfully');
      })
      .catch((err) => {
        console.error('Error sending email:', err);
      });
    };

    return (
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
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
              }
            }}
          >
            <div className="contact-row">
              <div className="contact-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" autoComplete="off" onChange={(e)=>setName(e.target.value)} value={name} required />
              </div>
              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} required />
              </div>
            </div>
            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} onChange={(e) => setMessage(e.target.value)} value={message} required />
            </div>
            <div className='contact-btn-container'>
            <button type="submit" className="contact-btn" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
              Send Message <FiSend />
            </button>
            </div>
          </form>
        </div>
      </section>
    );
  };

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
