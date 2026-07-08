import React, { useEffect, useState, useRef } from "react";

const stats = [
    { id: 1, value: 6, suffix: "+", label: "Offices Worldwide" },
    { id: 2, value: 12, suffix: "k+", label: "Successful Visas" },
    { id: 3, value: 100, suffix: "+", label: "Global Partners" },
    { id: 4, value: 99, suffix: "%", label: "Client Satisfaction" },
];

const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 },
        );

        if (countRef.current) observer.observe(countRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const end = parseInt(value);
            if (start === end) return;

            // Ease out calculation
            const duration = 2000; // 2 seconds
            let startTime = null;

            const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1,
                );

                setCount(Math.floor(easeOutQuart(progress) * end));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [isVisible, value]);

    return (
        <span ref={countRef}>
            {count}
            {suffix}
        </span>
    );
};

const StatsSection = () => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden shadow-inner">
            {/* Deep Rich Blue Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-darkest"></div>

            {/* Rich Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            ></div>

            {/* Elegant Cinematic Glows */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[150px] translate-y-1/2 pointer-events-none mix-blend-screen"></div>

            <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-12 divide-white/10 lg:divide-x">
                    {stats.map((stat, idx) => (
                        <div
                            key={stat.id}
                            className="text-center px-4 relative"
                        >
                            {/* Mobile Vertical Divider (for 2x2 grid) */}
                            {idx % 2 === 0 && (
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10 lg:hidden"></div>
                            )}
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter flex justify-center items-center mb-3 drop-shadow-sm">
                                <Counter
                                    value={stat.value}
                                    suffix={stat.suffix}
                                />
                            </h3>
                            <div className="text-white/60 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
