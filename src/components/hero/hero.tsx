import { useEffect, useRef } from 'react';
import '../../css/hero/hero.css';
import {HeroProps} from "../../types/types.ts";


const Hero = ({ scrollToSection, projectsRef, contactRef }: HeroProps) => {

    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {

        const titleElement = titleRef.current;
        if (!titleElement) return;

        titleElement.textContent = "";

        const text = "Hi, I'm Shawn";
        let i = 0;

        let typingInterval: number | undefined;

        const typeWriter = () => {
            if (i < text.length) {

                titleElement.textContent = text.substring(0, i + 1);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        };

        setTimeout(() => {
            typingInterval = window.setInterval(typeWriter, 200);
        }, 500);

        return () => {
            if (typingInterval) clearInterval(typingInterval);
        };
    }, []);

    return (
        <section id="hero-section">
            <div className="hero-content">
                <h1 style={{ height: '200px', minHeight: '1.2em' }} ref={titleRef}></h1>
                <h2 className="subtitle">Frontend Developer</h2>
                <p className="description">
                    Nunc ac elit consectetur, fermentum eros ac, finibus justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum,
                    leo nec tincidunt sollicitudin, odio dui ultricies ipsum, et feugiat justo quam nec ante. Interdum et malesuada fames ac ante ipsum primis
                    in faucibus. Nam dignissim eu mauris dictum facilisis. Quisque dui tellus, tristique ac pharetra ac, volutpat vitae justo. Suspendisse in
                    magna metus. Sed molestie, leo et consequat faucibus, felis quam vulputate elit, eget mollis ante risus consequat metus. Donec vulputate,
                    tortor quis placerat egestas, lectus nisi suscipit tellus, non placerat mi risus sed ipsum.
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