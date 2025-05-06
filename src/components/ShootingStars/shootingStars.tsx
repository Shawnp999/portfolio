// src/components/ShootingStars/shootingStars.tsx
import React, {useEffect, useState, useRef} from 'react';
import {useSpring, animated} from '@react-spring/web';
import '../../css/shootingStars/shootingStars.css';
import type {ShootingStar} from '../../types/types.ts'

const ShootingStars: React.FC = () => {
    const [stars, setStars] = useState<ShootingStar[]>([]);
    const isMobile = window.innerWidth <= 768;
    const maxPossibleDuration = useRef(4000);

    const intervalRef = useRef<number | null>(null);

    const generateStar = (id: number): ShootingStar => {
        const fromLeft = Math.random() > 0.5;

        const startX = fromLeft ? -80 : 180;
        const endX = fromLeft ? 180 : -80;
        const direction = fromLeft ? 'left-to-right' : 'right-to-left';

        const startY = 10 + Math.random() * 50;
        const verticalShift = (Math.random() * 50) * (Math.random() > 0.5 ? 1 : -1);
        const endY = startY + verticalShift;

        const minDuration = 2600;
        const maxDuration = 5200;

        const baseDuration = minDuration + Math.random() * (maxDuration - minDuration);
        const duration = isMobile ? baseDuration / 1.2 : baseDuration;

        // Update the max duration tracking
        if (duration > maxPossibleDuration.current) {
            maxPossibleDuration.current = duration;
        }

        const maxDelay = isMobile ? 3000 : 7000;
        const delay = Math.random() * maxDelay;

        const brightness = 0.7 + Math.random() * 0.6;
        const size = 3 + Math.random() * 5;

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
    };

    useEffect(() => {
        const initialStarsCount = isMobile ? 3 : 5;

        const initialStars: ShootingStar[] = Array.from(
            {length: initialStarsCount},
            (_, i) => generateStar(Date.now() + i)
        );
        setStars(initialStars);

        intervalRef.current = window.setInterval(() => {
            setStars((prevStars) => {
                const bufferTime = maxPossibleDuration.current + 2000;
                const now = Date.now();

                const activeStars = prevStars.filter(
                    (star) => now - star.id < star.duration + star.delay + bufferTime
                );

                const maxStars = isMobile ? 3 : 4;

                if (activeStars.length < maxStars) {
                    return [...activeStars, generateStar(now)];
                }

                return activeStars;
            });
        }, isMobile ? 4000 : 3000);

        return () => {
            if (intervalRef.current !== null) {
                window.clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isMobile]);

    return (
        <div className="shooting-stars-container">
            {stars.map((star) => (
                <ShootingStar key={star.id} star={star}/>
            ))}
        </div>
    );
};

const ShootingStar: React.FC<{ star: ShootingStar }> = ({star}) => {

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
        delay: star.delay,
    });

    return (
        <div style={{position: 'absolute', width: '100%', height: '100%'}}>
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
        </div>
    );
};

export default ShootingStars;