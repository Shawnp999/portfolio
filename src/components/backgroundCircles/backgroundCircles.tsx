import React, { useMemo } from 'react';
import './BackgroundCircles.css';

interface BackgroundCirclesProps {
    count: number;
    sectionId: string;
}

const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({ count, sectionId }) => {

    const circles = useMemo(() => {
        const circlesArray = [];

        for (let i = 0; i < count; i++) {
            const size = 80 + Math.random() * 120;

            const radius = size / 2;

            const safeTopMin = radius / 5; // Convert radius to % of parent container height
            const safeTopMax = 100 - (radius / 5);

            const safeLeftMin = radius / 8; // Convert radius to % of parent container width
            const safeLeftMax = 100 - (radius / 8);

            //safety margins
            const top = safeTopMin + (Math.random() * (safeTopMax - safeTopMin));
            const left = safeLeftMin + (Math.random() * (safeLeftMax - safeLeftMin));

            circlesArray.push({
                id: `${sectionId}-circle-${i}`,
                size: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                opacity: 0.02 + (Math.random() * 0.03),
            });
        }

        return circlesArray;
    }, [count, sectionId]);

    return (
        <div className="section-background-circles">
            {circles.map((circle) => (
                <div
                    key={circle.id}
                    className="section-circle"
                    style={{
                        width: circle.size,
                        height: circle.size,
                        top: circle.top,
                        left: circle.left,
                        opacity: circle.opacity,
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundCircles;