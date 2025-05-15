import '../../css/hero/hero.css';
import {HeroProps} from "../../types/types.ts";
import {useTranslation} from "react-i18next";
import TypeWriter from "./typeWriter/typeWriter.tsx";
import {memo, useCallback} from "react";
import ResumeFile from '../../../public/files/ResumeFile.pdf'

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

                        <a href={ResumeFile}
                           download="shawn-pantzlaff-resume.pdf"
                           className="resume-link"
                        >
                            <button className="btn-hero btn-secondary">{t('hero.downloadResume')}</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Hero;