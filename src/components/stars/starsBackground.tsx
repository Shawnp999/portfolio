import { memo, useMemo } from 'react';
import '../../css/stars/starBackground.css';

const createStars = (
    count: number,
    sizeRange: [number, number],
    opacityRange: [number, number],
    durationRange: [number, number],
    color: string
) => {
    return Array.from({ length: count }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]),
        opacity: opacityRange[0] + Math.random() * (opacityRange[1] - opacityRange[0]),
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * (durationRange[1] - durationRange[0]) + durationRange[0]}s`,
        color
    }));
};

const StarBackground = () => {

    const isMobile = window.innerWidth <= 768;
    const smallStarsCount = isMobile ? 8 : 15;
    const mediumStarsCount = isMobile ? 5 : 10;
    const largeStarsCount = isMobile ? 3 : 6;

    const allStars = useMemo(() => {
        const smallStars = createStars(
            smallStarsCount,
            [1, 2],
            [0.5, 0.8],
            [8, 13],
            'rgba(255, 255, 255, 1)'
        );

        const mediumStars = createStars(
            mediumStarsCount,
            [2, 3.5],
            [0.7, 1],
            [7, 11],
            'rgba(210, 230, 255, 1)'
        );

        const largeStars = createStars(
            largeStarsCount,
            [3.5, 5],
            [0.8, 1],
            [10, 16],
            'rgba(255, 240, 210, 1)'
        );

        return [...smallStars, ...mediumStars, ...largeStars];
    }, [smallStarsCount, mediumStarsCount, largeStarsCount]); // Add the dependencies

    const starElements = useMemo(() => {

        return allStars.map((star, index) => (
            <div
                key={`star-${index}`}
                className="bg-star twinkle"
                style={{
                    position: 'absolute',
                    top: star.top,
                    left: star.left,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    backgroundColor: star.color,
                    boxShadow: `0 0 ${star.size * 1.5}px ${star.color}`,
                    borderRadius: '50%',
                    opacity: star.opacity,
                    animationDelay: star.animationDelay,
                    animationDuration: star.animationDuration,
                    willChange: 'transform, opacity'
                }}
            />
        ));
    }, [allStars]);

    const containerStyle = {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden' as const,
        zIndex: -1,
        pointerEvents: 'none' as const
    };

    return (
        <div className="star-field-container" style={containerStyle}>
            {starElements}
        </div>
    );
};

export default memo(StarBackground);