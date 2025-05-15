import { useEffect, useState, useRef, memo, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../../css/shootingStars/shootingStars.css';
import type { ShootingStar } from '../../types/types.ts'

const ShootingStarItem = memo(({ star }: { star: ShootingStar }) => {

    const styles = useSpring({
        from: {
            transform: `translate(${star.startX}vw, ${star.startY}vh)`,
            opacity: star.brightness,
        },
        to: {
            transform: `translate(${star.endX}vw, ${star.endY}vh)`,
            opacity: 0,
        },
        config: {
            duration: star.duration,
        },
        delay: star.delay
    });

    return (
        <animated.div
            style={{
                ...styles,
                position: 'absolute',
                width: `calc(${star.size}px * 30)`,
                height: `${star.size}px`,
                background: star.direction === 'left-to-right'
                    ? 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 80%, rgba(255, 255, 255, 1) 100%)'
                    : 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 80%, rgba(255, 255, 255, 1) 100%)',
                borderRadius: `${star.size}px`,
                zIndex: 10,
                willChange: 'transform, opacity',
            }}
        />
    );
});


const ShootingStars = memo(() => {

    const [stars, setStars] = useState<ShootingStar[]>([]);

    const isMobileRef = useRef(window.innerWidth <= 768);
    const maxPossibleDuration = useRef(4000);
    const intervalRef = useRef<number | null>(null);
    const cleanupIntervalRef = useRef<number | null>(null);

    const generateStar = useCallback((id: number): ShootingStar => {
        const fromLeft = Math.random() > 0.5;
        const isMobile = isMobileRef.current;

        const startX = fromLeft ? -80 : 180;
        const endX = fromLeft ? 180 : -80;
        const direction = fromLeft ? 'left-to-right' : 'right-to-left';

        const startY = 10 + Math.random() * 50;
        const verticalShift = Math.random() * 30 * (Math.random() > 0.5 ? 1 : -1);
        const endY = startY + verticalShift;

        const minDuration = 3500;
        const maxDuration = 6500;

        const duration = minDuration + Math.random() * (maxDuration - minDuration);

        if (duration > maxPossibleDuration.current) {
            maxPossibleDuration.current = duration;
        }

        const maxDelay = isMobile ? 3000 : 5000;
        const delay = Math.random() * maxDelay;

        const brightness = 0.6 + Math.random() * 0.2;
        const size = isMobile ? 2 : 3;

        return {
            id,
            startX,
            endX,
            startY,
            endY,
            duration,
            delay,
            brightness,
            size,
            direction,
            active: true
        };
    }, []);

    const cleanupStars = useCallback(() => {
        setStars(prevStars => {
            const bufferTime = maxPossibleDuration.current + 2000;
            const now = Date.now();

            return prevStars.filter(star =>
                now - star.id < star.duration + star.delay + bufferTime
            );
        });
    }, []);

    const handleResize = useCallback(() => {
        isMobileRef.current = window.innerWidth <= 768;
    }, []);

    useEffect(() => {

        window.addEventListener('resize', handleResize);

        const initialDelay = setTimeout(() => {
            const initialStarsCount = isMobileRef.current ? 1 : 2;

            const initialStars: ShootingStar[] = Array.from(
                {length: initialStarsCount},
                (_, i) => generateStar(Date.now() + i)
            );

            setStars(initialStars);

            const createNewStar = () => {
                setStars(prevStars => {
                    const bufferTime = maxPossibleDuration.current + 2000;
                    const now = Date.now();

                    const activeStars = prevStars.filter(star =>
                        now - star.id < star.duration + star.delay + bufferTime
                    );

                    const maxStars = isMobileRef.current ? 2 : 3;

                    if (activeStars.length < maxStars) {
                        return [...activeStars, generateStar(now)];
                    }

                    return activeStars;
                });
            };

            intervalRef.current = window.setInterval(
                createNewStar,
                isMobileRef.current ? 5000 : 4000
            );

            cleanupIntervalRef.current = window.setInterval(cleanupStars, 5000);
        }, 1000);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(initialDelay);

            if (intervalRef.current !== null) {
                window.clearInterval(intervalRef.current);
                intervalRef.current = null;
            }

            if (cleanupIntervalRef.current !== null) {
                window.clearInterval(cleanupIntervalRef.current);
                cleanupIntervalRef.current = null;
            }
        };
    }, [generateStar, cleanupStars, handleResize]);

    return (
        <div className="shooting-stars-container">
            {stars.map(star => (
                <ShootingStarItem key={star.id} star={star} />
            ))}
        </div>
    );
});


export default ShootingStars;