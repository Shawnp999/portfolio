import React, { useEffect, useState } from 'react';
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
}

const ShootingStars: React.FC = () => {

    const [stars, setStars] = useState<ShootingStar[]>([]);
    const isMobile = window.innerWidth <= 768;

    const generateStar = (id: number): ShootingStar => {
        const fromLeft = Math.random() > 0.5;

        const startX = fromLeft ? -20 : 120;
        const endX = fromLeft ? 120 : -20;
        const direction = fromLeft ? 'left-to-right' : 'right-to-left';

        const startY = 10 + Math.random() * 50;

        const verticalShift = (Math.random() * 30) * (Math.random() > 0.5 ? 1 : -1); // -30 to +30 vh
        const endY = startY + verticalShift;

        const baseDuration = 1200 + Math.random() * 2000; // 1-3s
        const duration = isMobile ? baseDuration / 1.5 : baseDuration;

        const maxDelay = isMobile ? 3000 : 7000;
        const delay = Math.random() * maxDelay;

        const brightness = 0.7 + Math.random() * 0.6;
        const size = 3 + Math.random() * 2;

        return { id, startX, endX, startY, endY, duration, delay, brightness, size, direction };
    };

    useEffect(() => {

        const initialStars: ShootingStar[] = Array.from({ length: 5 }, (_, i) =>
            generateStar(Date.now() + i)
        );
        setStars(initialStars);

        const interval = setInterval(() => {

            setStars((prevStars) => {

                const activeStars = prevStars.filter(
                    (star) => Date.now() - star.id < star.duration + star.delay + 1000
                );

                return [...activeStars, generateStar(Date.now())];
            });
        }, 3000); //new star every 3 seconds

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