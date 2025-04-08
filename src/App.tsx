import { useRef, useEffect } from 'react';
import './App.css';
import SideBar from "./components/sidebar/sideBar.tsx";
import Hero from "./components/hero/hero.tsx";
import About from './components/about/about';
import Projects from "./components/projects/projects.tsx";
import Contact from './components/contact/contact.tsx';
import Footer from "./components/footer/footer.tsx";
import Education from "./components/education/education.tsx";
import Skills from "./components/skills/skills.tsx";

function App() {

    //for scroll to section
    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const educationAndExperienceRef = useRef<HTMLDivElement>(null);
    const skillsref = useRef<HTMLDivElement>(null);

    const navItems = [

        { id: 'hero', label: 'Home', ref: heroRef },
        { id: 'about', label: 'About', ref: aboutRef },
        { id: 'projects', label: 'Projects', ref: projectsRef },
        { id: 'contact', label: 'Contact', ref: contactRef },
        { id: 'educationAndExperienceRef', label: 'Education', ref: educationAndExperienceRef },
        { id: 'skillsref', label: 'skills', ref: skillsref },
    ];

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const stars = Array.from({ length: 150 }, () => ({

        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2,
        opacity: Math.random() * 0.7 + 0.3,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 5 + 5}s`
    }));

    const shapes = Array.from({ length: 10 }, (_, index) => ({

        id: index,
        size: 100 + Math.random() * 300,
        top: `${Math.random() * 120 - 10}%`,
        left: `${Math.random() * 120 - 10}%`,
        opacity: 0.02 + Math.random() * 0.04,
        animationDuration: `${20 + Math.random() * 40}s`,
        animationDelay: `${Math.random() * 20}s`,
    }));

    return (
        <div className="app">

            <div className="star-field-container">

                {stars.map((star, index) => (
                    <div
                        key={`star-${index}`}
                        className="bg-star"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            opacity: star.opacity,
                            animationDelay: star.animationDelay,
                            animationDuration: star.animationDuration
                        }}
                    />
                ))}
            </div>

            <div className="floating-shapes-container">

                {shapes.map((shape) => (
                    <div
                        key={`shape-${shape.id}`}
                        className="floating-shape"
                        style={{
                            width: `${shape.size}px`,
                            height: `${shape.size}px`,
                            top: shape.top,
                            left: shape.left,
                            opacity: shape.opacity,
                            animationDuration: shape.animationDuration,
                            animationDelay: shape.animationDelay
                        }}
                    />
                ))}
            </div>

            <main className="content">
                <div ref={heroRef} id="hero">
                    <Hero/>
                </div>
                <br/>
                <br/>
                <div ref={aboutRef} id="about">
                    <About/>
                </div>
                <br/>
                <br/>
                <div ref={educationAndExperienceRef} id="educationAndExperienceRef">
                    <Education/>
                </div>
                <br/>
                <br/>
                <div ref={projectsRef} id="projects">
                    <Projects/>
                </div>
                <br/>
                <br/>
                <div ref={skillsref} id="skillsref">
                    <Skills/>
                </div>
                <br/>
                <br/>
                <div ref={contactRef} id="contact">
                    <Contact/>
                </div>
                <br/>
                <br/>
                <Footer/>
            </main>

            <SideBar navItems={navItems} scrollToSection={scrollToSection}/>
        </div>
    );
}

export default App;