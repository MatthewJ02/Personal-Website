function ProjectCard({name, width, height, onClick, skills}) {
    return (
        <div className="project-card" onClick={onClick} 
        style={{width: width, height: height, transition: '0.3s ease', overflow: 'hidden', opacity: width === '0px' ? '0' : '1', whiteSpace: 'nowrap', flexShrink: '0'}}>
            <h2>{name}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="project-skills">
                {skills.map((skill) => (
                   <div className="skill">{skill}</div>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard