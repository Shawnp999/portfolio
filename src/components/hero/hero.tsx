import '../../css/hero/hero.css';
import {HeroProps} from "../../types/types.ts";
import {useTranslation} from "react-i18next";
import TypeWriter from "./typeWriter/typeWriter.tsx";
import {memo, useCallback} from "react";

const Hero = memo(({ scrollToSection, projectsRef, contactRef }: HeroProps) => {

    const {t} = useTranslation();

    const handleViewWorkClick = useCallback(() => {
        scrollToSection(projectsRef);
    }, [scrollToSection, projectsRef]);

    const handleContactClick = useCallback(() => {
        scrollToSection(contactRef);
    }, [scrollToSection, contactRef]);

    return (
        <section id="hero-section" className="d-flex align-items-center position-relative overflow-hidden">
            <div className="hero-content position-relative">
                <div className="typewriter-container">
                    <TypeWriter/>
                </div>

                <p className="description text-white">
                    {t('hero.description1')}
                    <br/><br/>
                    {t('hero.description2')}
                    <br/><br/>
                    {t('hero.description4')}
                </p>

                <div className="button-container d-flex flex-wrap mt-4 pb-3">
                    <div className="btn-row d-flex flex-wrap w-100">
                        <button
                            className="btn-hero btn-primary"
                            onClick={handleViewWorkClick}
                        >
                            {t('hero.viewWork')}
                        </button>

                        <button
                            className="btn-hero btn-secondary mx-md-3"
                            onClick={handleContactClick}
                        >
                            {t('hero.getInTouch')}
                        </button>

                        <a href="../../assets/files/Shawn%20Pantzlaff's%20Resume%20Updated.docx.pdf"
                           download="shawn-pantzlaff-resume.pdf"
                           className="resume-link"
                        >
                            <button className="btn-hero btn-secondary">Download Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Hero;