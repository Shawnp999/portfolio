import './skills.css';
import Marquee from "./marqeeComp.tsx";

const Skills = () => {

    const allSkills = [
        'React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'React Native',
        'Next.js','Node.js', 'Express', 'Firebase', 'Git',
        'Vite', 'Jest', 'GitHub', 'Figma', 'Tailwind CSS',
        'Material UI', 'Design System', 'Zustand', 'Django', 'React reanimated', 'Web Development'
    ];

    // const skillGroups = [
    //
    //     { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Responsive Design'] },
    //     { category: 'UI/UX', items: ['Figma', 'Tailwind CSS', 'Material UI', 'Styled Components', 'Bootstrap'] },
    //     { category: 'Backend', items: ['Node.js', 'Express', 'Firebase'] },
    //     { category: 'Frameworks', items: ['Next.js', 'React', 'React Native', 'Django'] },
    //     { category: 'Tools', items: ['Git', 'Vite', 'GitHub Actions', 'Zustand'] },
    // ];

    return (
        <section id="skills-section">
            <div className="skills-container">
                {/*<h3>Skills & Technologies</h3>*/}

                <div className="marquee-container">
                    <Marquee
                        items={allSkills}
                        speed={40}
                        direction="left"
                        className="marquee-top"
                    />

                </div>

                {/*<div className="skills-categories">*/}
                {/*    {skillGroups.map((skillGroup, index) => (*/}
                {/*        <div className="skill-category" key={index}>*/}
                {/*            <h4>{skillGroup.category}</h4>*/}
                {/*            <ul className="skill-list">*/}
                {/*                {skillGroup.items.map((skill, i) => (*/}
                {/*                    <li key={i} className="skill-item">*/}
                {/*                        <span className="skill-bullet">▹</span> {skill}*/}
                {/*                    </li>*/}
                {/*                ))}*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>

            {/*little background idea*/}
            {/*<div className="about-bg-decoration">*/}
            {/*    <div className="code-block">*/}
            {/*        <div className="code-line"><span className="code-keyword">const</span> developer = {'{'}</div>*/}
            {/*        <div className="code-line">  name: <span className="code-string">'Your Name'</span>,</div>*/}
            {/*        <div className="code-line">  role: <span className="code-string">'Frontend Developer'</span>,</div>*/}
            {/*        <div className="code-line">  loves: [<span className="code-string">'React'</span>, <span className="code-string">'TypeScript'</span>, <span className="code-string">'Design'</span>]</div>*/}
            {/*        <div className="code-line">{'}'}</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    );
};

export default Skills;