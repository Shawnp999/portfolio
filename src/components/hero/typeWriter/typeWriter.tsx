import {useRef, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import './typeWriter.css';

const TypeWriter = () => {
    const {t, i18n} = useTranslation();
    const titleRef = useRef<HTMLHeadingElement>(null);
    const animationIntervalRef = useRef<number | null>(null);
    const animationTimeoutRef = useRef<number | null>(null);
    const languageRef = useRef<string>(i18n.language);

    const clearAnimations = () => {
        if (animationIntervalRef.current) {
            clearInterval(animationIntervalRef.current);
            animationIntervalRef.current = null;
        }
        if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current);
            animationTimeoutRef.current = null;
        }
    };

    useEffect(() => {
        function startTypingAnimation() {
            if (!titleRef.current) return;

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

                        clearAnimations();

                        animationTimeoutRef.current = window.setTimeout(() => {
                            animationIntervalRef.current = window.setInterval(typeWriter, 100);
                        }, 100);

                        return;
                    }
                } else {
                    titleRef.current.textContent = currentPhrase.substring(0, charIndex + 1);
                    charIndex++;

                    if (charIndex === currentPhrase.length) {
                        // if it's last phrase, keep it displayed
                        if (currentPhraseIndex === phrases.length - 1) {
                            clearAnimations();
                            return;
                        }

                        isDeleting = true;

                        // pause before deleting
                        clearAnimations();

                        animationTimeoutRef.current = window.setTimeout(() => {
                            animationIntervalRef.current = window.setInterval(typeWriter, 50);
                        }, 200);

                        return;
                    }
                }
            };

            animationIntervalRef.current = window.setInterval(typeWriter, 100);
        }

        // check if language changed
        if (languageRef.current !== i18n.language) {
            languageRef.current = i18n.language;

            // clear animation if running
            clearAnimations();

            if (titleRef.current) {
                titleRef.current.classList.add('restarting');
                titleRef.current.textContent = "";

                animationTimeoutRef.current = setTimeout(() => {
                    if (titleRef.current) {
                        titleRef.current.classList.remove('restarting');
                        startTypingAnimation();
                    }
                }, 300);
            }
        } else if (!animationIntervalRef.current && titleRef.current) {
            startTypingAnimation();
        }

        return () => {
            clearAnimations();
        };
    }, [i18n.language, t]);

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