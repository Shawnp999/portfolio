import { useEffect, useRef } from 'react';
import '../../css/hero/hero.css';
import {HeroProps} from "../../types/types.ts";
import {useTranslation} from "react-i18next";


const Hero = ({ scrollToSection, projectsRef, contactRef }: HeroProps) => {

    const titleRef = useRef<HTMLHeadingElement>(null);
    const {t} = useTranslation();

    useEffect(() => {
        const titleElement = titleRef.current;
        if (!titleElement) return;

        titleElement.textContent = "";

        const phrases = [
            t('hero.title1'),
            t('hero.title2'),
            t('hero.title3'),
            t('hero.title4')
        ];

        let currentPhraseIndex = 0;
        let i = 0;
        let isDeleting = false;
        let typingInterval: number | undefined;

        const typeWriter = () => {
            const currentPhrase = phrases[currentPhraseIndex];

            if (isDeleting) {
                // Deleting text
                titleElement.textContent = currentPhrase.substring(0, i);
                i--;

                // If all text is deleted
                if (i < 0) {
                    isDeleting = false;
                    currentPhraseIndex++;

                    // last phrase
                    if (currentPhraseIndex === phrases.length - 1) {
                        i = 0;
                        isDeleting = false;
                    } else if (currentPhraseIndex < phrases.length) {

                        i = 0;
                        setTimeout(() => {
                            typingInterval = window.setInterval(typeWriter, 100);
                        }, 500);

                        clearInterval(typingInterval);
                        return;
                    }
                }
            } else {
                titleElement.textContent = currentPhrase.substring(0, i + 1);
                i++;

                // If phrase is fully typed
                if (i === currentPhrase.length) {
                    // If it's the last phrase, keep it and stop
                    if (currentPhraseIndex === phrases.length - 1) {
                        clearInterval(typingInterval);
                        return;
                    }

                    isDeleting = true;

                    const pauseTime = currentPhraseIndex === 2 ? 100 : 500;

                    setTimeout(() => {
                        typingInterval = window.setInterval(typeWriter, 50);
                    }, pauseTime);

                    clearInterval(typingInterval);
                    return;
                }
            }
        };

        setTimeout(() => {
            typingInterval = window.setInterval(typeWriter, 100);
        }, 500);

        return () => {
            if (typingInterval) clearInterval(typingInterval);
        };
    }, [t]); // Added t to the dependency array

    return (
        <section id="hero-section">
            <div className="hero-content">
                <div style={{height: '150px', minHeight: '150px'}}>
                    <h1
                        ref={titleRef}
                        style={{
                            fontSize: '60px',
                            fontWeight: 'bold',
                            color: 'white'
                        }}
                    ></h1>
                </div>
                <div>{t('hero.test')}</div>
                <p className="description">
                    {t('hero.description1')}
                    <br/><br/>
                    {t('hero.description2')}
                    <br/><br/>
                    {t('hero.description3')}
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