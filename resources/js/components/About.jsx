import React from "react";
import { aboutSectionData } from "../data/data";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
    return (
        <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNCkiLz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>
            
            <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    
                    {/* Left: Image Showcase (5 columns) */}
                    <div className="lg:col-span-5 relative order-2 lg:order-1">
                        <div className="relative group">
                            {/* Main Image Frame */}
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={aboutSectionData.image}
                                    alt="Horizon Success Bridge Team"
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                            </div>

                            
                        </div>

                        {/* Decorative Background Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 rounded-full blur-[100px] -z-10"></div>
                    </div>

                    {/* Right: Content (7 columns) */}
                    <div className="lg:col-span-7 space-y-10 order-1 lg:order-2 text-center lg:text-left">
                        <div className="space-y-6">
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <span className="h-[2px] w-8 bg-secondary"></span>
                                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-secondary">
                                    {aboutSectionData.header.subtitle}
                                </span>
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.1] tracking-tighter mx-auto lg:mx-0 max-w-2xl break-words">
                                {aboutSectionData.header.title.split(' ').map((word, i, arr) => (
                                    <span key={i} className={i === arr.length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary" : ""}>
                                        {word}{" "}
                                    </span>
                                ))}
                            </h2>

                            <p className="text-gray-500 text-lg md:text-xl text-justify font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                {aboutSectionData.description}
                            </p>
                        </div>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {aboutSectionData.features.map((feature, index) => (
                                <div 
                                    key={index}
                                    className="px-6 py-3 bg-gray-50 border border-gray-100 rounded-full flex items-center gap-3 group hover:bg-white hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                                        <FaCheckCircle className="text-secondary text-[10px] group-hover:text-white" />
                                    </div>
                                    <span className="text-primary font-bold text-xs uppercase tracking-wider">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-100">
                            {aboutSectionData.stats.map((stat, index) => (
                                <div key={index} className="space-y-1 group">
                                    <h4 className="text-3xl md:text-4xl font-black text-primary tracking-tighter transition-colors group-hover:text-secondary">
                                        {stat.value}
                                    </h4>
                                    <p className="text-[9px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-400">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
