import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './ShootingStars.css';

interface ShootingStar {
    id: number;
    startX: number; // Starting x position (vw)
    endX: number; // Ending x position (vw)
    startY: number; // Starting y position (vh)
    endY: number; // Ending y position (vh)
    duration: number; // Animation duration (ms)
    delay: number; // Delay before animation starts (ms)
    brightness: number; // Opacity (0.7-1.0)
    size: number; // Star head size (px)
    direction: 'left-to-right' | 'right-to-left'; // Add direction
}

const ShootingStars: React.FC = () => {
    const [stars, setStars] = useState<ShootingStar[]>([]);

    // Detect if the device is mobile (width <= 768px)
    const isMobile = window.innerWidth <= 768;

    // Function to generate a single random shooting star
    const generateStar = (id: number): ShootingStar => {
        const fromLeft = Math.random() > 0.5; // Randomly start from left or right

        // Adjust starting and ending positions for mobile (further off-screen)
        const startX = fromLeft ? (isMobile ? -40 : -10) : (isMobile ? 120 : 110); // Start further off-screen on mobile
        const endX = fromLeft ? (isMobile ? 120 : 110) : (isMobile ? -20 : -10); // End further off-screen on mobile
        const direction = fromLeft ? 'left-to-right' : 'right-to-left'; // Determine direction
        const startY = 5 + Math.random() * 80;

        // Adjust vertical shift for mobile (half the range: 0-75px instead of 0-150px)
        const maxVerticalShift = isMobile ? 75 : 150; // 75px on mobile, 150px on desktop
        const vhPerPixel = 100 / window.innerHeight; // 1px in vh units
        const randomVerticalShift = (Math.random() * maxVerticalShift) * (Math.random() > 0.5 ? 1 : -1); // Random -max to +max px
        const verticalShiftVh = randomVerticalShift * vhPerPixel; // Convert to vh
        const endY = startY + verticalShiftVh; // Apply the shift to the starting position

        // Adjust duration for mobile (1.5x faster, i.e., duration / 1.5)
        const baseDuration = 800 + Math.random() * 2500; // 0.8-3.3s
        const duration = isMobile ? baseDuration / 1.5 : baseDuration; // 1.5x faster on mobile

        // Adjust delay for mobile (shorter delay to start animation sooner)
        const maxDelay = isMobile ? 3000 : 7000; // 0-3s on mobile, 0-7s on desktop
        const delay = Math.random() * maxDelay;

        const brightness = 0.7 + Math.random() * 0.6; // 0.7-1.2
        const size = 3 + Math.random() * 2; // 1-4px star head

        return { id, startX, endX, startY, endY, duration, delay, brightness, size, direction };
    };

    // Initialize stars and set up interval for new stars
    useEffect(() => {
        // Create initial stars
        const initialStars: ShootingStar[] = Array.from({ length: 5 }, (_, i) =>
            generateStar(Date.now() + i)
        );
        setStars(initialStars);

        // Add new stars periodically
        const interval = setInterval(() => {
            setStars((prevStars) => {
                // Filter out stars that have completed (based on duration + delay)
                const activeStars = prevStars.filter(
                    (star) => Date.now() - star.id < star.duration + star.delay + 1000
                );
                // Add a new star
                return [...activeStars, generateStar(Date.now())];
            });
        }, 3000); // New star every 2 seconds

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

// Individual shooting star component with animation
const ShootingStar: React.FC<{ star: ShootingStar }> = ({ star }) => {
    const props = useSpring({
        from: {
            x: star.startX,
            y: star.startY,
            opacity: star.brightness,
        },
        to: {
            x: star.endX,
            y: star.endY,
            opacity: 0,
        },
        config: {
            duration: star.duration,
        },
        delay: star.delay,
    });

    return (
        <animated.div
            className={`shooting-star ${star.direction}`} // Add direction class
            style={{
                top: 0, // Reset top to 0 since we're animating y position
                transform: props.x.to((x) => `translateX(${x}vw)`), // Horizontal movement
                transformOrigin: 'center', // Ensure smooth transformation
                y: props.y.to((y) => `${y}vh`), // Vertical movement
                opacity: props.opacity,
                // @ts-ignore
                '--star-size': `${star.size}px`,
            }}
        />
    );
};

export default ShootingStars;