import React, { useMemo } from 'react';
import './BackgroundCircles.css';

interface BackgroundCirclesProps {
    count: number;
    sectionId: string;
}

const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({ count, sectionId }) => {

    const circles = useMemo(() => {

        const circlesArray = [];
        const maxSize = window.innerWidth < 768 ? 120 : 200;

        for (let i = 0; i < count; i++) {

            const size = 60 + Math.random() * (maxSize - 60);

            const safeTopMin = 10;
            const safeTopMax = 90;
            const safeLeftMin = 10;
            const safeLeftMax = 90;

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