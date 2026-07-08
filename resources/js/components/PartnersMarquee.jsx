import React from "react";

const partners = [
    "BRITISH COUNCIL",
    "IELTS CERTIFIED",
    "PTE ACADEMIC",
    "OISC REGISTERED",
    "MARA CERTIFIED",
    "OET PARTNER",
    "CAMBRIDGE ENGLISH",
    "TOEFL iBT",
    "UKVI APPROVED",
];

const PartnersMarquee = () => {
    return (
        <div className="bg-white py-8 md:py-10 border-b border-gray-100 flex overflow-hidden relative z-40 w-full">
            <style>
                {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                    }
                `}
            </style>
            
            {/* Gradient Mask for fading edges */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll whitespace-nowrap w-max hover:[animation-play-state:paused] cursor-default">
                {/* We double the array so the marquee seamlessly loops when 50% translates */}
                {[...partners, ...partners].map((partner, idx) => (
                    <div key={idx} className="flex items-center px-8 md:px-16">
                        <span className="text-gray-300 hover:text-primary text-[10px] sm:text-sm md:text-base font-black tracking-[0.2em] md:tracking-[0.4em] uppercase transition-colors duration-500">
                            {partner}
                        </span>
                        {/* Dot Separator */}
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200 ml-16 md:ml-32 opacity-50"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartnersMarquee;
