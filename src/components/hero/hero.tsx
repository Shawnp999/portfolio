import { useEffect, useRef } from 'react';
import './Hero.css';

interface HeroProps {
    scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
    projectsRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
}

const Hero = ({ scrollToSection, projectsRef, contactRef }: HeroProps) => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    // little animation
    useEffect(() => {
        const titleElement = titleRef.current;
        if (!titleElement) return;

        // can make fixed height, so doesnt look like its jumping
        const text = "Hi, I'm Shawn";
        titleElement.textContent = "";

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                titleElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 200);
            }
        };

        setTimeout(() => {
            typeWriter();
        }, 500);
    }, []);

    return (
        <section id="hero-section">
            <div className="hero-content">
                <h1 style={{ height: 200 }} ref={titleRef}> </h1>
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