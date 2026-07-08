import React from "react";
import { whyChooseUsData } from "../data/data";
import {
    FaGlobe,
    FaLightbulb,
    FaCogs,
    FaRocket,
    FaAward,
    FaHeadset,
} from "react-icons/fa";

const iconMap = {
    FaGlobe: FaGlobe,
    FaLightbulb: FaLightbulb,
    FaCogs: FaCogs,
    FaRocket: FaRocket,
    FaAward: FaAward,
    FaHeadset: FaHeadset,
};

const WhyChooseUs = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden shadow-inner">
            {/* Deep Rich Blue Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-darkest"></div>
            
            {/* Rich Background Pattern */}
            <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            {/* Elegant Cinematic Glows */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[150px] translate-y-1/2 pointer-events-none mix-blend-screen"></div>

            <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 text-center lg:text-left">
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                            <span className="h-[2px] w-8 bg-secondary"></span>
                            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-secondary">
                                {whyChooseUsData.header.subtitle}
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter">
                            {whyChooseUsData.header.title.split(' ').map((word, i, arr) => (
                                <span key={i} className={i === arr.length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary" : ""}>
                                    {word}{" "}
                                </span>
                            ))}
                        </h2>
                    </div>
                    <div className="max-w-sm mx-auto lg:mx-0 lg:text-right">
                        <p className="text-white/60 font-medium leading-relaxed">
                            Experience unparalleled service and commitment to your global success through our dedicated approach and proven expertise.
                        </p>
                    </div>
                </div>

                {/* Premium Glassmorphism Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {whyChooseUsData.items.map((item, index) => {
                        const IconComponent = iconMap[item.icon];
                        return (
                            <div
                                key={item.id}
                                className="group relative bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-10 border border-white/10 hover:border-white/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col h-full z-10"
                            >
                                {/* Slide-up White Background (matching hero button) */}
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"></div>
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon Area */}
                                    <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/10 mb-8 flex items-center justify-center text-white/40 group-hover:bg-secondary group-hover:border-secondary group-hover:text-white transition-all duration-500 group-hover:rotate-6 shadow-xl">
                                        {IconComponent && <IconComponent className="text-3xl" />}
                                    </div>

                                    {/* Text Content */}
                                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-primary mb-4 transition-colors duration-500 tracking-tight">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-white/50 leading-relaxed font-medium group-hover:text-gray-600 transition-colors duration-500">
                                        {item.description}
                                    </p>

                                    {/* Large Dynamic Watermark Icon */}
                                    <div className="absolute -bottom-12 -right-12 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 transform group-hover:scale-110 pointer-events-none z-0">
                                        {IconComponent && <IconComponent className="text-[180px] text-white group-hover:text-primary" />}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
