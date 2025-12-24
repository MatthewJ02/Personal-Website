function NavBar({name, scrollRefs}) {
    return (
        <nav style={{left: '0', display: 'flex', width: '100%', justifyContent: 'space-evenly', position: 'fixed', top: '0', backgroundColor: 'Black', zIndex:'1000', alignItems: 'center'}}>
            <p>
                {name}
            </p>
            <button onClick={() => scrollRefs.about.current?.scrollIntoView()}>
                About
            </button>
            <button onClick={() => scrollRefs.project.current?.scrollIntoView()}>
                Projects
            </button>
            <button onClick={() => scrollRefs.exp.current?.scrollIntoView()}>
                Experience
            </button>
            <button onClick={() => scrollRefs.edu.current?.scrollIntoView()}>
                Education
            </button>
            <button onClick={() => scrollRefs.skill.current?.scrollIntoView()}>
                Skills & Certifications
            </button>
            <button onClick={() => scrollRefs.contact.current?.scrollIntoView()}>
                Contact
            </button>
        </nav>
    )
}

export default NavBar