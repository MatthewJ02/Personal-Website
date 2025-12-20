//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

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
      <div>
        Header on top with sections
      </div>
      <div>
        <h1>Matthew Johnson</h1>
        <p>Add picture</p>
        <p>Desc about me here</p>
      </div>    
      <div>
        <h1>Projects</h1>
        <p>Airplane Satisfaction Model (include link)</p>
        <p>F1 Database (include link)</p>
      </div>
      <div>
        <h1>Experience</h1>
        <p>Apple - Apple Support College Program Advisor</p>
        <p>Job description, dates, etc.</p>
      </div>
      <div>
        <h1>Education</h1>
        <p>UT Austin</p>
        <p>Coursework</p>
        <p>Campus Involvement</p>
      </div>
      <div>
        <h1>Skills & Certifications</h1>
      </div>
      <div>
        <h1>Contact</h1>
        <a href="mailto:mattjohnson0@hotmail.com">Email</a>
        <a href="https://www.linkedin.com/in/mj315/" target="_blank">Linkedin</a>
        <a href="https://github.com/MatthewJ02" target="_blank">GitHub</a>
        <p>Resume</p>
      </div>
    </>
  )
}

export default App
