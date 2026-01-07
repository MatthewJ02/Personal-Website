function ProjectCard({name, width, height, onClick, skills, desc}) {
    return (
        <div className="project-card" onClick={onClick} 
        style={{width: width, height: height, transition: '0.3s ease', overflow: 'hidden', opacity: width === '0px' ? '0' : '1', whiteSpace: 'nowrap', flexShrink: '0'}}>
            <h2>{name}</h2>
            <p>{desc}</p>
            <div className="project-skills">
                {skills.map((skill) => (
                   <div className="skill">{skill}</div>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard