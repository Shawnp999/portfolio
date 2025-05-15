import { useRef, lazy, Suspense, memo, useMemo } from 'react';
import './App.css';
import SideBar from "./components/sidebar/sideBar.tsx";
import Hero from "./components/hero/hero.tsx";
import Education from "./components/education/education.tsx";
import BackgroundCircles from "./components/backgroundCircles/backgroundCircles.tsx";
import StarsBackground from "./components/stars/starsBackground.tsx";
import './css/globalCSS.css';
import ShootingStars from "./components/ShootingStars/shootingStars.tsx";
import { DevelopmentProvider } from "./components/utils/inDev/developmentContext.tsx";
import Contact from "./components/contact/contact.tsx";
import MemoryMonitor from "./components/utils/MemoryMonitor.tsx";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const Projects = lazy(() => import("./components/projects/projects.tsx"));

const LoadingPlaceholder = memo(() => (
    <div className="lazy-loading-placeholder">
        <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
));

LoadingPlaceholder.displayName = 'LoadingPlaceholder';

export const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
};

const App = memo(() => {

    const heroRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const educationAndExperienceRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    // Memoize navItems to prevent recreation on each render
    const navItems = useMemo(() => [
        {id: 'hero', label: 'Home', ref: heroRef},
        {id: 'projects', label: 'Projects', ref: projectsRef},
        {id: 'educationAndExperienceRef', label: 'Education', ref: educationAndExperienceRef},
        {id: 'contact', label: 'Contact', ref: contactRef},
    ], [heroRef, projectsRef, educationAndExperienceRef, contactRef]);

    const AnalyticsComponents = memo(() => (
        <Suspense fallback={null}>
            <Analytics />
            <SpeedInsights />
        </Suspense>
    ));


    return (
        <DevelopmentProvider>
            <div className="app">
                {/* Analytics provided by vercel */}
                {process.env.NODE_ENV === 'production' && <AnalyticsComponents />}

                <StarsBackground/>
                <BackgroundCircles count={10} sectionId="hero"/>
                <ShootingStars/>

                <main className="content">
                    {process.env.NODE_ENV === 'development' && <MemoryMonitor/>}

                    <div ref={heroRef} id="hero" className="section-container">
                        <Hero
                            scrollToSection={scrollToSection}
                            projectsRef={projectsRef}
                            contactRef={contactRef}
                        />
                    </div>

                    <div ref={projectsRef} id="projects" className="section-container">
                        <Suspense fallback={<LoadingPlaceholder/>}>
                            <Projects/>
                        </Suspense>
                    </div>

                    <div ref={educationAndExperienceRef} id="educationAndExperienceRef" className="section-container">
                        <Education/>
                    </div>

                    <div ref={contactRef} id="contact" className="section-container">
                        <Contact/>
                    </div>
                </main>

                <SideBar navItems={navItems} scrollToSection={scrollToSection}/>
            </div>
        </DevelopmentProvider>
    );
});


export default App;