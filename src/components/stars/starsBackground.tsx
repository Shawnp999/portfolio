import React, {useMemo} from 'react';
import '../../css/stars/starBackground.css';

function StarBackground() {

    const allStars = useMemo(() => {

        const smallStars = Array.from({length: 100}, () => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: 1 + Math.random(),
            opacity: 0.5 + Math.random() * 0.3,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 5 + 8}s`,
            color: 'rgba(255, 255, 255, 1)'
        }));

        const mediumStars = Array.from({length: 50}, () => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: 2 + Math.random() * 1.5,
            opacity: 0.7 + Math.random() * 0.3,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 4 + 7}s`,
            color: 'rgba(210, 230, 255, 1)'
        }));

        const largeStars = Array.from({length: 15}, () => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: 3.5 + Math.random() * 1.5,
            opacity: 0.8 + Math.random() * 0.2,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 6 + 10}s`,
            color: 'rgba(255, 240, 210, 1)'
        }));

        return [...smallStars, ...mediumStars, ...largeStars];
    }, []);

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
                    animationDuration: star.animationDuration
                }}
            />
        ));
    }, [allStars]);

    return (
        <div className="star-field-container" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: -1,
            pointerEvents: 'none'
        }}>
            {starElements}
        </div>
    );
}

// Export a memoized version of the component
export default React.memo(StarBackground);