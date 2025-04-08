import './skills.css';

const Skills = () => {
    const skills = [
        { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Responsive Design'] },
        { category: 'UI/UX', items: ['Figma', 'Tailwind CSS', 'Material UI', 'Styled Components'] },
        { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Firebase'] },
        { category: 'Tools', items: ['Git', 'Webpack', 'Vite', 'Jest', 'GitHub Actions'] }
    ];

    return (
        <section id="about-section">
            <div className="about-container">


                <div className="skills-container">
                    <h3>Skills & Technologies</h3>

                    <div className="skills-grid">
                        {skills.map((skillGroup, index) => (
                            <div className="skill-category" key={index}>
                                <h4>{skillGroup.category}</h4>
                                <ul className="skill-list">
                                    {skillGroup.items.map((skill, i) => (
                                        <li key={i} className="skill-item">
                                            <span className="skill-bullet">▹</span> {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>


                </div>
            </div>

            {/* Background decoration */}
            <div className="about-bg-decoration">
                <div className="code-block">
                    <div className="code-line"><span className="code-keyword">const</span> developer = {'{'}</div>
                    <div className="code-line">  name: <span className="code-string">'Your Name'</span>,</div>
                    <div className="code-line">  role: <span className="code-string">'Frontend Developer'</span>,</div>
                    <div className="code-line">  loves: [<span className="code-string">'React'</span>, <span className="code-string">'TypeScript'</span>, <span className="code-string">'Design'</span>]</div>
                    <div className="code-line">{'}'}</div>
                </div>
            </div>
        </section>
    );
};

export default Skills;