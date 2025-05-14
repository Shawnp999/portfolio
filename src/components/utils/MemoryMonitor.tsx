import React, { useState, useEffect, useRef } from 'react';
import './memoryMonitor.css';

const MemoryMonitor: React.FC = () => {

    const [memoryUsage, setMemoryUsage] = useState<number | null>(null);
    const [peakMemory, setPeakMemory] = useState<number>(0);
    const [initialMemory, setInitialMemory] = useState<number | null>(null);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {

        const checkMemory = () => {

            if ('performance' in window && 'memory' in (performance as any)) {
                const memory = (performance as any).memory;
                const usedHeapSize = Math.round(memory.usedJSHeapSize / (1024 * 1024));

                setMemoryUsage(usedHeapSize);

                if (initialMemory === null) {
                    setInitialMemory(usedHeapSize);
                }

                // Update peak memory if current usage is higher
                if (usedHeapSize > peakMemory) {
                    setPeakMemory(usedHeapSize);
                }
            }
        };

        // Check immediately
        checkMemory();

        // Then set up interval, storing reference for cleanup
        intervalRef.current = window.setInterval(checkMemory, 2000);

        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [peakMemory, initialMemory]);

    if (memoryUsage === null) return null;

    // Memory growth percentage
    const growthPercentage = initialMemory
        ? Math.round(((memoryUsage - initialMemory) / initialMemory) * 100)
        : 0;

    const memoryStatusClass =
        memoryUsage > 300 ? 'memory-high' :
            memoryUsage > 150 ? 'memory-medium' :
                'memory-normal';

    const growthStatusClass =
        growthPercentage > 50 ? 'memory-high' :
            growthPercentage > 20 ? 'memory-medium' :
                'memory-normal';

    return (
        <div className="memory-monitor-container">
            <div className={`memory-item ${memoryStatusClass}`}>Current: {memoryUsage} MB</div>
            <div className="memory-item">Peak: {peakMemory} MB</div>
            {initialMemory !== null && (
                <div className={`memory-item ${growthStatusClass}`}>
                    Growth: {growthPercentage}%
                </div>
            )}
        </div>
    );
};

export default MemoryMonitor;