import { useRef } from 'react';
import './App.css';
import SideBar from "./components/sidebar/sideBar.tsx";
import Hero from "./components/hero/hero.tsx";
import About from './components/about/about';
import Projects from "./components/projects/projects.tsx";
import Contact from './components/contact/contact.tsx';
import Footer from "./components/footer/footer.tsx";
import Education from "./components/education/education.tsx";
import Skills from "./components/skills/skills.tsx";
import BackgroundCircles from "./components/backgroundCircles/backgroundCircles.tsx";
import StarsBackground from "./components/stars/starsBackground.tsx";


// eslint-disable-next-line react-refresh/only-export-components
export const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
};

function App() {

    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const educationAndExperienceRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);

    // sidebar nav
    const navItems = [
        { id: 'hero', label: 'Home', ref: heroRef },
        { id: 'about', label: 'About', ref: aboutRef },
        { id: 'educationAndExperienceRef', label: 'Education', ref: educationAndExperienceRef },
        { id: 'projects', label: 'Projects', ref: projectsRef },
        { id: 'skillsRef', label: 'Skills', ref: skillsRef },
        { id: 'contact', label: 'Contact', ref: contactRef },
    ];


    return (
        <div className="app">

            <StarsBackground/>

            <main className="content">

                <div ref={heroRef} id="hero" className="section-container">

                    <BackgroundCircles count={4} sectionId="hero" />
                    <Hero
                        scrollToSection={scrollToSection}
                        projectsRef={projectsRef}
                        contactRef={contactRef}
                    />
                </div>

                <div ref={aboutRef} id="about" className="section-container">
                    <BackgroundCircles count={5} sectionId="about" />
                    <About/>
                </div>

                <div ref={educationAndExperienceRef} id="educationAndExperienceRef" className="section-container">
                    <BackgroundCircles count={4} sectionId="education" />
                    <Education/>
                </div>

                <div ref={projectsRef} id="projects" className="section-container">
                    <BackgroundCircles count={5} sectionId="projects" />
                    <Projects/>
                </div>

                <div ref={skillsRef} id="skillsRef" className="section-container">
                    <BackgroundCircles count={4} sectionId="skillsRef" />
                    <Skills/>
                </div>

                <div ref={contactRef} id="contact" className="section-container">
                    <BackgroundCircles count={3} sectionId="contact" />
                    <Contact/>
                </div>

                <Footer/>

            </main>

            <SideBar navItems={navItems} scrollToSection={scrollToSection}/>
        </div>
    );
}

export default App;