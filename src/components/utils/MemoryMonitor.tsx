// src/components/utils/MemoryMonitor.tsx
import React, { useState, useEffect, useRef } from 'react';

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

                // Set initial memory on first measurement
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

        // Clean up interval on unmount
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

    return (
        <div
            style={{
                position: 'fixed',
                bottom: 10,
                left: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: memoryUsage > 300 ? '#ff6b6b' : memoryUsage > 150 ? '#ffa502' : '#2ed573',
                padding: '4px 8px',
                borderRadius: 4,
                fontSize: 12,
                zIndex: 9999,
                fontFamily: 'monospace',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
            }}
        >
            <div>Current: {memoryUsage} MB</div>
            <div>Peak: {peakMemory} MB</div>
            {initialMemory !== null && (
                <div style={{
                    color: growthPercentage > 50 ? '#ff6b6b' : growthPercentage > 20 ? '#ffa502' : '#2ed573'
                }}>
                    Growth: {growthPercentage}%
                </div>
            )}
        </div>
    );
};

export default MemoryMonitor;