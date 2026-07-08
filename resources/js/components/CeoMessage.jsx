import React from "react";
import { ceoMessageData } from "../data/data";
import { FaQuoteLeft } from "react-icons/fa";

const CeoMessage = () => {
    return (
        <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
            {/* Background Texture & Ambient Glows */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNCkiLz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-0 pointer-events-none"></div>

            <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-x-20 items-start">
                    
                    {/* 1. Header (Subtitle & Title) - 1st on Mobile, Top Right on Desktop */}
                    <div className="lg:col-span-7 lg:col-start-6 order-1 space-y-6 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            <span className="h-[2px] w-8 bg-secondary"></span>
                            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-secondary">
                                {ceoMessageData.header.subtitle}
                            </span>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.1] tracking-tighter mx-auto lg:mx-0 max-w-2xl break-words">
                            {ceoMessageData.header.title.split(' ').map((word, i, arr) => (
                                <span key={i} className={i === arr.length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary" : ""}>
                                    {word}{" "}
                                </span>
                            ))}
                        </h2>
                    </div>

                    {/* 2. CEO Image Showcase - 2nd on Mobile, Left Column on Desktop */}
                    <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:row-span-3 order-2 lg:order-none relative">
                        <div className="relative group">
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border border-gray-100 rounded-[3rem] -z-10 group-hover:border-secondary/20 transition-colors duration-700"></div>
                            
                            {/* main image */}
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] aspect-[4/5] transform transition-all duration-1000 group-hover:scale-[1.01]">
                                <img
                                    src={ceoMessageData.ceo.image}
                                    alt={ceoMessageData.ceo.name}
                                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60"></div>
                                
                                {/* CEO Bio */}
                                <div className="absolute bottom-10 left-10 flex items-center gap-6 z-20 group/bio">
                                    <div className="h-12 md:h-16 w-1 bg-secondary rounded-full transform transition-transform duration-500 group-hover/bio:scale-y-110"></div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-2xl">
                                            {ceoMessageData.ceo.name}
                                        </h3>
                                        <p className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mt-1 drop-shadow-xl">
                                            {ceoMessageData.ceo.position}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Quote Icon Overlay */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center text-secondary border border-gray-50 z-20 animate-bounce-slow hidden md:flex">
                                <FaQuoteLeft size={30} />
                            </div>
                        </div>
                    </div>

                    {/* 3. Signature (Endorsed by) - 3rd on Mobile, Bottom Right on Desktop */}
                    <div className="lg:col-span-7 lg:col-start-6 order-3 lg:order-12 mt-8 lg:mt-12 pt-10 lg:border-t border-gray-100">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="space-y-1 text-center md:text-left">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                                    Endorsed by
                                </p>
                                <div className="font-['Great_Vibes'] text-5xl md:text-6xl text-secondary drop-shadow-sm py-2">
                                    {ceoMessageData.ceo.signature}
                                </div>
                            </div>
                            <div className="h-20 w-px bg-gray-100 hidden md:block"></div>
                            <div className="max-w-[200px] text-center md:text-right">
                                <p className="text-[11px] font-bold text-gray-400 italic">
                                    "Commitment to excellence and integrity in every visa journey."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Message (Paragraphs) - 4th on Mobile, After Header on Desktop */}
                    <div className="lg:col-span-7 lg:col-start-6 order-4 lg:order-2 space-y-8 relative z-10 text-center lg:text-left pt-6 lg:pt-12">
                        {ceoMessageData.message.map((paragraph, index) => (
                            <p 
                                key={index} 
                                className={`text-gray-500 text-lg md:text-xl leading-relaxed mx-auto lg:mx-0 ${index === 0 ? "font-bold text-primary" : "font-medium"}`}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s ease-in-out infinite;
                }
            `}} />
        </section>
    );
};

export default CeoMessage;
