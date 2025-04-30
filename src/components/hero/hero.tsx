import { useEffect, useRef } from 'react';
import '../../css/hero/hero.css';
import {HeroProps} from "../../types/types.ts";


const Hero = ({ scrollToSection, projectsRef, contactRef }: HeroProps) => {

    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const titleElement = titleRef.current;
        if (!titleElement) return;

        titleElement.textContent = "";

        const phrases = [
            "Hi, I'm Shawn Pantzlaff",
            "I'm a front-end developer",
            "Son of a b",
            "I like making cool things"
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
    }, []);

    return (
        <section id="hero-section">
            <div className="hero-content">

                <h1 style={{ height: '150px', minHeight: '150px' }} ref={titleRef}></h1>

                <p className="description">
                    I'm a Frontend Developer passionate about building user-focused React/React Native applications.
                    Thrown into a fast-paced environment early on, I quickly adapted alongside mentors and joined
                    startup projects that taught me to embrace challenges and deliver solutions despite evolving
                    requirements.
                    <br/><br/>
                    Growing up between Minnesota and Latvia before attending Ontario Hockey Academy gave me diverse
                    perspectives and fluency in English, German, and Russian—skills that enhance my collaborative
                    approach to problem-solving.
                    <br/><br/>
                    I'm driven by technology's constant evolution, progressing from HTML/CSS through JavaScript to
                    React, SharePoint, SPFx, Django, and React Native. I believe in code's limitless potential—if you
                    can imagine it, it can be built, refined, and perfected.
                    <br/><br/>
                    Off-screen, I'm on the ice, boxing, traveling, or unwinding with friends. This balance refreshes my
                    creativity and brings new perspectives to my development work.
                </p>

                <div className="cta-buttons">

                    <button
                        className="btn primary"
                        onClick={() => scrollToSection(projectsRef)}
                    >
                        View My Work
                    </button>

                    <button
                        className="btn secondary"
                        onClick={() => scrollToSection(contactRef)}
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;