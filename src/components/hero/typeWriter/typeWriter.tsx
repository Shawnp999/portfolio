import {useRef, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import './typeWriter.css';

const TypeWriter = () => {
    const {t, i18n} = useTranslation();
    const titleRef = useRef<HTMLHeadingElement>(null);
    const animationRef = useRef<number | null>(null);
    const languageRef = useRef<string>(i18n.language);

    useEffect(() => {

        // check if language changed
        if (languageRef.current !== i18n.language) {
            languageRef.current = i18n.language;

            // clear animation if running
            if (animationRef.current) {
                clearInterval(animationRef.current);
                animationRef.current = null;
            }

            if (titleRef.current) {
                titleRef.current.classList.add('restarting');
                titleRef.current.textContent = "";

                setTimeout(() => {
                    if (titleRef.current) {
                        titleRef.current.classList.remove('restarting');
                        startTypingAnimation();
                    }
                }, 300);
            }
        } else if (!animationRef.current && titleRef.current) {
            startTypingAnimation();
        }

        // cleanup
        return () => {
            if (animationRef.current) {
                clearInterval(animationRef.current);
                animationRef.current = null;
            }
        };
    }, [i18n.language, t]);

    function startTypingAnimation() {

        const phrases = [
            t('hero.title1'),
            t('hero.title2'),
            t('hero.title4')
        ];

        let currentPhraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeWriter = () => {

            if (!titleRef.current) return;

            const currentPhrase = phrases[currentPhraseIndex];

            if (isDeleting) {
                // deleting text
                titleRef.current.textContent = currentPhrase.substring(0, charIndex);
                charIndex--;

                if (charIndex < 0) {
                    isDeleting = false;
                    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                    charIndex = 0;

                    if (currentPhraseIndex === 0) {
                        return;
                    }

                    clearInterval(animationRef.current!);
                    animationRef.current = window.setTimeout(() => {
                        animationRef.current = window.setInterval(typeWriter, 100);
                    }, 100) as unknown as number;
                    return;
                }
            } else {
                titleRef.current.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentPhrase.length) {
                    // if it's last phrase, keep it displayed
                    if (currentPhraseIndex === phrases.length - 1) {
                        clearInterval(animationRef.current!);

                        animationRef.current = null;
                        return;
                    }

                    isDeleting = true;

                    // pause before deleting
                    clearInterval(animationRef.current!);

                    animationRef.current = window.setTimeout(() => {
                        animationRef.current = window.setInterval(typeWriter, 50);
                    }, 200) as unknown as number;
                    return;
                }
            }
        };

        animationRef.current = window.setInterval(typeWriter, 100);
    }

    return (
        <div
            ref={titleRef}
            className="typewriter"
            style={{
                fontWeight: 'bold',
                color: 'white'
            }}
            aria-live="polite"
            data-language={i18n.language}
        ></div>
    );
};

export default TypeWriter;