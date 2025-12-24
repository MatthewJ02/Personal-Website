//import { useState } from 'react'
import { useRef } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/NavBar.jsx'
import ProjectCard from './components/ProjectCard.jsx'

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
  

  return (
    <>
      {/*<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}

      {/* Bare bones layout test */}
      <NavBar name={"Matthew Johnson"} scrollRefs={scrollRefs}>
      </NavBar>
      <section ref={aboutRef}>
        <h1>About</h1>
        {/* Temp styling for testing*/}
        <div style={{display: 'flex', justifyContent: 'space-evenly', gap: '50px'}}>
          <p style={{width: '200px', height: '200px', backgroundColor: 'Black'}}>Add picture</p>
          <p style={{width: '600px', height: '200px', backgroundColor: 'Black'}}>Desc about me here</p>
        </div>
      </section>   
      <section ref={projectRef}>
        <h1>Projects</h1>
        <div className='section-content'>
          <ProjectCard name={"Portfolio Website"}/>
          <ProjectCard name={"Airplane Passenger Satisfaction Model"}/>
          <ProjectCard name={"F1 Driver Database"}/>
        </div>
      </section>
      <section ref={expRef}>
        <h1>Experience</h1>
        <div className='experience-card'>
          <h2>Apple Support College Program Advisor</h2>
          <div className='experience-line'> 
            <p>Apple</p>
            <p>May 2025 - Present</p>
          </div>
          <p>Job Description</p>
          <div className="project-skills">
            <div className="skill">Skill</div>
            <div className="skill">Skill</div>
            <div className="skill">Skill</div>
          </div>
        </div>
      </section>
      <section ref={eduRef}>
        <h1>Education</h1>
        <p>UT Austin</p>
        <p>Coursework</p>
        <p>Campus Involvement</p>
      </section>
      <section ref={skillRef}>
        <h1>Skills & Certifications</h1>
      </section>
      <section ref={contactRef}>
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
