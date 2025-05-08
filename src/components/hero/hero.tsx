import '../../css/hero/hero.css';
import {HeroProps} from "../../types/types.ts";
import {useTranslation} from "react-i18next";
import TypeWriter from "./typeWriter/typeWriter.tsx";

const Hero = ({scrollToSection, projectsRef, contactRef}: HeroProps) => {

    const {t} = useTranslation();

    return (
        <section id="hero-section">
            <div className="hero-content">

                <div className="typewriter-container">
                    <TypeWriter/>
                </div>

                {/*<div>{t('hero.test')}</div>*/}

                <p className="description">
                    {t('hero.description1')}
                    <br/><br/>
                    {t('hero.description2')}
                    {/*<br/><br/>*/}
                    {/*{t('hero.description3')}*/}
                    <br/><br/>
                    {t('hero.description4')}
                </p>

                <div className="cta-buttons">
                    <button
                        className="btn primary"
                        onClick={() => scrollToSection(projectsRef)}
                    >
                        {t('hero.viewWork')}
                    </button>

                    <button
                        className="btn secondary"
                        onClick={() => scrollToSection(contactRef)}
                    >
                        {t('hero.getInTouch')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;