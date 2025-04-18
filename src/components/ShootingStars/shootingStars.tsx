import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './ShootingStars.css';

interface ShootingStar {
    id: number;
    startX: number;
    endX: number;
    startY: number;
    endY: number;
    duration: number;
    delay: number;
    brightness: number;
    size: number;
    direction: 'left-to-right' | 'right-to-left';
    active: boolean;
}

const ShootingStars: React.FC = () => {
    const [stars, setStars] = useState<ShootingStar[]>([]);
    const isMobile = window.innerWidth <= 768;

    const maxPossibleDuration = useRef(4000);

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

        const initialStars: ShootingStar[] = Array.from({ length: 5 }, (_, i) =>
            generateStar(Date.now() + i)
        );
        setStars(initialStars);

        const interval = setInterval(() => {
            setStars((prevStars) => {

                const bufferTime = maxPossibleDuration.current + 2000;

                const activeStars = prevStars.filter(
                    (star) => Date.now() - star.id < star.duration + star.delay + bufferTime
                );

                return [...activeStars, generateStar(Date.now())];
            });

        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="shooting-stars-container">
            {stars.map((star) => (
                <ShootingStar key={star.id} star={star} />
            ))}
        </div>
    );
};

const ShootingStar: React.FC<{ star: ShootingStar }> = ({ star }) => {

    const props = useSpring({
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

    // const style = {
    //     ...props,
    //     ['--star-size' as string]: `${star.size}px`,
    // };

    return (
        <animated.div
            className={`shooting-star ${star.direction}`}
            style={{
                ...props,
                '--star-size': `${star.size}px`,
            } as any}
        />
    );
};

export default ShootingStars;