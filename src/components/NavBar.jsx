function NavBar({name, scrollRefs, activeSection }) {
    console.log(`Button about is active: ${activeSection === 'about'}`);
    const styleHelper = (id) => ({
        backgroundColor: activeSection === id ? 'white' : '#1a1a1a',
        color: activeSection === id ? 'black' : 'white',
        transition: 'all 0.3s ease'
    });

    return (
        <nav style={{left: '0', display: 'flex', width: '100%', justifyContent: 'space-evenly', position: 'fixed', top: '0', backgroundColor: 'Black', zIndex:'1000', alignItems: 'center'}}>
            <p>
                {name}
            </p>
            <button onClick={() => scrollRefs.about.current?.scrollIntoView()} style={styleHelper('about')}>
                About
            </button>
            <button onClick={() => scrollRefs.project.current?.scrollIntoView()} style={styleHelper('project')}>
                Projects
            </button>
            <button onClick={() => scrollRefs.exp.current?.scrollIntoView()} style={styleHelper('exp')}>
                Experience
            </button>
            <button onClick={() => scrollRefs.edu.current?.scrollIntoView()} style={styleHelper('edu')}>
                Education
            </button>
            <button onClick={() => scrollRefs.skill.current?.scrollIntoView()} style={styleHelper('skill')}>
                Skills & Certifications
            </button>
            <button onClick={() => scrollRefs.contact.current?.scrollIntoView()} style={styleHelper('contact')}>
                Contact
            </button>
        </nav>
    )
}

export default NavBar