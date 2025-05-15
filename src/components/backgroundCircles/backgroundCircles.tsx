import { memo, useMemo } from 'react';
import '../../css/backgroundCircles/backgroundCircles.css';
import { BackgroundCirclesProps } from "../../types/types.ts";

const BackgroundCircles = memo(({ count, sectionId }: BackgroundCirclesProps) => {

    const circles = useMemo(() => {

        const isMobile = window.innerWidth < 768;
        const actualCount = isMobile ? Math.min(count, 5) : count;
        const maxSize = isMobile ? 120 : 200;

        const circlesArray = [];

        for (let i = 0; i < actualCount; i++) {
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
                        willChange: 'transform, opacity',
                    }}
                />
            ))}
        </div>
    );
});


export default BackgroundCircles;

