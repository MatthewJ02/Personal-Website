import { useState } from 'react'
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

  const [expandedProj, setExpandedProj] = useState(null);
  
  const handleExpand = (id) => {
    setExpandedProj(expandedProj === id ? null : id);
  }

  const projects = [
    {id: 1, name: 'Airplane Passenger Satisfaction Model'},
    {id: 2, name: 'F1 Driver Database'},
    {id: 3, name: 'Portfolio Website'}
  ]

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
          {projects.map((project) => (
            <ProjectCard key={project.id} name={project.name} width={expandedProj === project.id ? '1000px' : expandedProj === null ? '300px' : '0px'} height={expandedProj === project.id ? '500px' : '400px'} onClick={() => handleExpand(project.id)}/>
          ))}
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
        <div className='experience-card'>
          <h2>B.S. Computer Science</h2>
          <div className='experience-line'> 
            <p>The University of Texas at Austin</p>
            <p>Aug 2024 - May 2028</p>
          </div>
          <p>Courses</p>
          <p>Organizations</p>
        </div>
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
