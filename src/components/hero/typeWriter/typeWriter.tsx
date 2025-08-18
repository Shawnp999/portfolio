import { useRef, useEffect, useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import './typeWriter.css';

const TypeWriter = memo(() => {
    const { t, i18n } = useTranslation();
    const titleRef = useRef<HTMLDivElement>(null);

    const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const animationIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const languageRef = useRef<string>(i18n.language);

    const clearAnimations = useCallback(() => {
        if (animationIntervalRef.current) {
            clearInterval(animationIntervalRef.current);
            animationIntervalRef.current = null;
        }
        if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current);
            animationTimeoutRef.current = null;
        }
    }, []);

    const startTypingAnimation = useCallback(() => {
        if (!titleRef.current) return;

        const text = t('hero.title1'); // only one phrase now
        let charIndex = 0;

        const typeWriter = () => {
            if (!titleRef.current) return;

            titleRef.current.textContent = text.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === text.length) {
                clearAnimations(); // stop when fully typed
                return;
            }
        };

        animationIntervalRef.current = setInterval(typeWriter, 100);
    }, [t, clearAnimations]);

    useEffect(() => {
        if (languageRef.current !== i18n.language) {
            languageRef.current = i18n.language;
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

        return clearAnimations;
    }, [i18n.language, startTypingAnimation, clearAnimations]);

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
});

export default TypeWriter;
