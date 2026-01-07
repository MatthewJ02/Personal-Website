import { useState, useRef, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/NavBar.jsx'
import ProjectCard from './components/ProjectCard.jsx'

import headshotImage from './assets/headshot.png';

function App() {

  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const expRef = useRef(null);
  const eduRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);

  const scrollRefs = {
    about: aboutRef,
    project: projectRef,
    exp: expRef,
    edu: eduRef,
    skill: skillRef,
    contact: contactRef
  }

  // Highlight current section in nav bar
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(()  => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      })
    }, {threshold: 0,
      rootMargin: '-25% 0px -75% 0px'
    });

    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  const projects = [
    {id: 1, name: 'Airplane Passenger Satisfaction Model', skills: ['Python', 'PyTorch', 'SageMaker', 'Jupyter'], link: 'https://github.com/MatthewJ02/Airplane-Passenger-Satisfaction-Model', desc: 'Multilayer perceptron which classifies passengers as either satisfied or dissatisfied. Handles data preprocessing as well as training and deployment of the machine learning model. Model deployed with 92% accuracy in classifying test data.'},
    {id: 2, name: 'F1 Driver Database', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'SQL', 'Node.js', 'Express.js'], link: 'https://github.com/MatthewJ02/F1-Database', desc: 'Allows users to query a database of Formula 1 statistics. Displays data in various formats according to user input.'},
    {id: 3, name: 'Portfolio Website', skills: ['HTML', 'CSS', 'JavaScript', 'React'], link: 'https://github.com/MatthewJ02/Personal-Website', desc: 'TBD'}
  ]

  //project v2 state
 /* const [activeButton, setActiveButton] = useState(1);
  const activeProj = projects.find(project => project.id === activeButton);

  const openSourceCode = () => {
    window.open(activeProj.link, '_blank', 'noopener,noreferrer');
  }*/

  const openLink = (project) => {
    window.open(project.link, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      {/* Bare bones layout test */}
      <NavBar name={"Matthew Johnson"} scrollRefs={scrollRefs} activeSection={activeSection}>
      </NavBar>
      <section id='about' ref={aboutRef}>
        <h1>About</h1>
        {/* Temp styling for testing*/}
        <div className='about-card'>
          <div className='about-desc'>
            <h2>Matthew Johnson</h2>
            <p>A bunch of text about who I am and what my aspirations are and so on will go here.</p>
          </div>
          <img className='headshot' alt='My beautiful face' src={headshotImage}></img>
        </div>
      </section>   
      <section id='project' ref={projectRef}>
        <h1>Projects</h1>
        <div className='section-content'>
          {projects.map((project) => (
            <ProjectCard key={project.id} name={project.name} skills={project.skills} width={'300px'} height={'400px'} onClick={() => openLink(project)} desc={project.desc}/>
          ))}
        </div>
      </section>
      {/*<section>
        <h1>Project v2</h1>
        <div className='project-window'>
          <h2>{activeProj.name}</h2>
          <div className='project-bottom'>
            <div className='project-select'>
              {projects.map((project) => (
                <div key={project.id} className={`project-button ${activeButton === project.id ? 'expanded' : ''}`} onClick={() => setActiveButton(project.id)}></div>
              ))}
            </div>
            <div className='project-code' onClick={openSourceCode}>View Source Code</div>
          </div>
        </div>
      </section>*/}
      <section id='exp' ref={expRef}>
        <h1>Experience</h1>
        <div className='experience-card'>
          <h2>Apple Support College Program Advisor</h2>
          <div className='experience-line'> 
            <p style={{fontWeight: '400'}}>Apple</p>
            <p style={{fontWeight: '400'}}>May 2025 - Present</p>
          </div>
          <ul>
            <li>Providing technical support over the phone for a wide range of Apple products and services</li>
            <li>Ensuring courteous and efficient resolution over more than a thousand customer calls</li>
            <li>Refining problem solving skills with regard to a variety of technical issues</li>
          </ul>
        </div>
      </section>
      <section id='edu' ref={eduRef}>
        <h1>Education</h1>
        <div className='experience-card'>
          <h2>B.S. Computer Science</h2>
          <div className='experience-line'> 
            <p style={{fontWeight: '400'}}>The University of Texas at Austin</p>
            <p style={{fontWeight: '400'}}>Aug 2024 - May 2028</p>
          </div>
          <ul>
            <li>Relevant Coursework</li>
            <li>Organizations</li>
          </ul>
        </div>
      </section>
      <section id='skill' ref={skillRef}>
        <h1>Skills & Certifications</h1>
      </section>
      <section id='contact' ref={contactRef}>
        <h1>Contact</h1>
        <a href="mailto:mattjohnson0@hotmail.com">Email</a>
        <a href="https://www.linkedin.com/in/mj315/" target="_blank">Linkedin</a>
        <a href="https://github.com/MatthewJ02" target="_blank">GitHub</a>
        <p>Resume</p>
      </section>
    </>
  )
}

export default App
