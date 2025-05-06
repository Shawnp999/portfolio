import React, {useEffect, useRef, useState} from 'react';
import '../../css/skills/marqueeComp.css'
import {MarqueeProps} from "../../types/types.ts";

const Marquee: React.FC<MarqueeProps> = ({
                                             items,
                                             speed = 50,
                                             direction = 'left',
                                             pauseOnHover = true,
                                             className = '',
                                         }) => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    const displayItems = items.length >= 10
        ? items
        : [...items, ...items, ...items];

    useEffect(() => {
        if (!marqueeRef.current) return;

        const marqueeElement = marqueeRef.current;
        const firstChild = marqueeElement.firstElementChild as HTMLElement;

        if (!firstChild) return;

        const itemsWidth = firstChild.offsetWidth;

        const clone = firstChild.cloneNode(true) as HTMLElement;
        marqueeElement.appendChild(clone);

        const directionMultiplier = direction === 'left' ? -1 : 1;
        //const duration = (itemsWidth / speed) * 10; // adjusted for speed factor

        let animationFrameId: number;
        let startTime: number;
        let currentPosition = 0;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;

            // Don't animate if paused
            if (!isPaused) {

                const elapsed = timestamp - startTime;

                // calc how far we've moved
                currentPosition = (elapsed / 1000) * speed * directionMultiplier;

                // reset
                if (Math.abs(currentPosition) >= itemsWidth) {
                    startTime = timestamp;
                    currentPosition = 0;
                }

                marqueeElement.style.transform = `translateX(${currentPosition}px)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [direction, isPaused, speed, items]);

    return (
        <div
            className={`marquee-track ${className}`}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
            <div className="marquee-content" ref={marqueeRef}>
                <div className="marquee-items">
                    {displayItems.map((item, index) => (
                        <div className="marquee-item" key={`item-${index}`}>
                            <p className="tech-stack-item">{item}</p>
                            <span className="tech-stack-dot">•</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;