import '../../css/hero/hero.css';
import {HeroProps} from "../../types/types.ts";
import {useTranslation} from "react-i18next";
import TypeWriter from "./typeWriter/typeWriter.tsx";
import {useCallback} from "react";

const Hero = ({scrollToSection, projectsRef, contactRef}: HeroProps) => {
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

                <div className="d-flex gap-3 mt-4 ps-1 pb-1" style={{width: '99%'}}>

                    <button
                        className="btn-hero btn-primary"
                        onClick={handleViewWorkClick}
                    >
                        {t('hero.viewWork')}
                    </button>

                    <button
                        className="btn-hero btn-secondary"
                        onClick={handleContactClick}
                    >
                        {t('hero.getInTouch')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;