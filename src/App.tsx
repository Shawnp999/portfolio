import { useRef, lazy, Suspense } from 'react';
import './App.css';
import SideBar from "./components/sidebar/sideBar.tsx";
import Hero from "./components/hero/hero.tsx";
import About from './components/about/about';
import Footer from "./components/footer/footer.tsx";
import Education from "./components/education/education.tsx";
import BackgroundCircles from "./components/backgroundCircles/backgroundCircles.tsx";
import StarsBackground from "./components/stars/starsBackground.tsx";
import './css/globalCSS.css';
import ShootingStars from "./components/ShootingStars/shootingStars.tsx";
import { DevelopmentProvider } from "./components/utils/inDev/developmentContext.tsx";
import Contact from "./components/contact/contact.tsx";
import MemoryMonitor from "./components/utils/MemoryMonitor.tsx";
import { Analytics } from "@vercel/analytics/react"


const Projects = lazy(() => import("./components/projects/projects.tsx"));
// const Skills = lazy(() => import("./components/skills/skills.tsx"));

const LoadingPlaceholder = () => (
    <div className="lazy-loading-placeholder">
        <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);

// eslint-disable-next-line react-refresh/only-export-components
export const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
};

function App() {

    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const educationAndExperienceRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    // const skillsRef = useRef<HTMLDivElement>(null);

    // sidebar nav
    const navItems = [
        {id: 'hero', label: 'Home', ref: heroRef},
        {id: 'about', label: 'About', ref: aboutRef},
        {id: 'educationAndExperienceRef', label: 'Education', ref: educationAndExperienceRef},
        {id: 'projects', label: 'Projects', ref: projectsRef},
        {id: 'contact', label: 'Contact', ref: contactRef},
        // {id: 'skillsRef', label: 'Skills', ref: skillsRef},
    ];

    return (
        <DevelopmentProvider>
            <div className="app">
                <Analytics/>
                <StarsBackground/>
                <BackgroundCircles count={10} sectionId="hero"/>
                <ShootingStars/>

                <main className="content">

                    {process.env.NODE_ENV === 'development' && <MemoryMonitor />}

                    <div ref={heroRef} id="hero" className="section-container">
                        <Hero
                            scrollToSection={scrollToSection}
                            projectsRef={projectsRef}
                            contactRef={contactRef}
                        />
                    </div>

                    <div ref={aboutRef} id="about" className="section-container">
                        <About/>
                    </div>

                    <div ref={educationAndExperienceRef} id="educationAndExperienceRef" className="section-container">
                        <Education/>
                    </div>

                    <div ref={projectsRef} id="projects" className="section-container">
                        <Suspense fallback={<LoadingPlaceholder />}>
                            <Projects />
                        </Suspense>
                    </div>

                    {/*<div ref={skillsRef} id="skillsRef" className="section-container">*/}
                    {/*    <Suspense fallback={<LoadingPlaceholder />}>*/}
                    {/*        <Skills />*/}
                    {/*    </Suspense>*/}
                    {/*</div>*/}

                    <div ref={contactRef} id="contact" className="section-container">
                        <Contact/>
                    </div>

                    <Footer/>
                </main>

                <SideBar navItems={navItems} scrollToSection={scrollToSection}/>
            </div>
        </DevelopmentProvider>
    );
}


export default App;