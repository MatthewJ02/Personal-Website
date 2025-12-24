function ProjectCard({name}) {
    return (
        <div className="project-card">
            <h2>{name}</h2>
            <p>Desc</p>
            <a href="https://github.com/MatthewJ02" target="_blank">Source Code</a>
            <div className="project-skills">
                <div className="skill">Skill</div>
                <div className="skill">Skill</div>
                <div className="skill">Skill</div>
            </div>
        </div>
    )
}

export default ProjectCard