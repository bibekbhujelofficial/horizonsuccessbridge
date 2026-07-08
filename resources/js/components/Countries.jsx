import React from "react";
import { Link } from "@inertiajs/react";
import { countriesData } from "../data/data";
import { BsArrowRight } from "react-icons/bs";

const Countries = () => {
    return (
        <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
            {/* Elegant Background Texture */}
            <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            
            <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                {/* Header Row */}
                <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="h-[2px] w-8 bg-secondary"></span>
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-secondary">
                            {countriesData.header.subtitle}
                        </span>
                        <span className="h-[2px] w-8 bg-secondary"></span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-primary leading-[1.1] tracking-tighter">
                        {countriesData.header.title.split(' ').map((word, i, arr) => (
                            <span key={i} className={i === arr.length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary" : ""}>
                                {word}{" "}
                            </span>
                        ))}
                    </h2>
                </div>

                {/* Cinematic Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {countriesData.items.map((country, idx) => (
                        <Link
                            href={`/${country.name.toLowerCase().replace(' ', '-')}-immigration`}
                            key={country.id}
                            className="group relative h-[420px] lg:h-[480px] rounded-3xl overflow-hidden block shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Background Image */}
                            <img
                                src={country.image}
                                alt={country.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                            />
                            
                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700"></div>
                            
                            {/* Subtle Border */}
                            <div className="absolute inset-0 border-[1px] border-white/10 rounded-3xl z-10 pointer-events-none"></div>

                            {/* Number Tag */}
                            <div className="absolute top-6 right-6 z-20">
                                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black tracking-widest px-4 py-2 rounded-full">
                                    0{idx + 1}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                                <div className="transform transition-transform duration-700 ease-out group-hover:-translate-y-4">
                                    <span className="text-secondary text-[10px] font-black tracking-[0.3em] uppercase mb-3 block opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                                        Explore Pathway
                                    </span>
                                    
                                    <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4 drop-shadow-md">
                                        {country.name}
                                    </h3>
                                    
                                    <div className="flex items-center gap-4 text-white/90">
                                        <span className="text-sm font-light italic leading-snug max-w-[200px]">
                                            {country.description}
                                        </span>
                                        <span className="h-[1px] flex-1 bg-white/20 relative overflow-hidden">
                                            <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></span>
                                        </span>
                                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:border-secondary transition-colors duration-500 shadow-xl relative overflow-hidden">
                                            <BsArrowRight className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-700 relative z-10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Countries;
