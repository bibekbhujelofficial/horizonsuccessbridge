import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { heroData } from "../data/data";
import { FaChevronLeft, FaChevronRight, FaPaperPlane } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
    });

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const typewriterWords = [
        "Immigration Partner",
        "HR Partner",
        "Education Partner",
        "Travel Partner",
        "Coaching Partner",
    ];

    useEffect(() => {
        let timer;
        const currentWord = typewriterWords[currentWordIndex];

        if (isDeleting) {
            timer = setTimeout(() => {
                setCurrentText((prev) => prev.slice(0, -1));
                if (currentText.length === 0) {
                    setIsDeleting(false);
                    setCurrentWordIndex(
                        (prev) => (prev + 1) % typewriterWords.length,
                    );
                }
            }, 60); // Deleting speed
        } else {
            timer = setTimeout(() => {
                setCurrentText(currentWord.slice(0, currentText.length + 1));
                if (currentText.length === currentWord.length) {
                    timer = setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
                }
            }, 120); // Typing speed
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex]);

    if (!Array.isArray(heroData) || heroData.length <= 0) {
        return null;
    }

    const slide = heroData[0]; // Focusing on the core purpose banner

    return (
        <section className="relative h-auto min-h-screen lg:h-[calc(100vh-120px)] lg:min-h-[600px] w-full overflow-hidden bg-primary">
            {/* Background Visual Layers */}
            <div className="absolute inset-0 z-0">
                <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover scale-105 select-none"
                    style={{ filter: "brightness(0.35) contrast(1.1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>

                <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/30 rounded-full blur-[100px]"></div>
            </div>

            {/* Main Content Area */}
            <div className="relative z-20 h-full max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center pt-32 pb-20 lg:py-0">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left: Brand Card */}
                    <div className="lg:col-span-7 space-y-6 animate-in fade-in slide-in-from-left-10 duration-1000 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            <div className="flex items-center gap-2 bg-secondary/10 px-3 py-1 lg:py-0 rounded-full lg:rounded-none border lg:border-none border-secondary/20 lg:bg-transparent">
                                <span className="hidden lg:block h-[2px] w-12 bg-secondary"></span>
                                <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] lg:tracking-[0.4em] text-secondary whitespace-nowrap">
                                    Top Rated Migration Agency
                                </span>
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                            {slide.title}
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 italic flex items-center justify-center lg:justify-start min-h-[1.2em]">
                                {currentText}
                                <span className="inline-block w-[3px] md:w-1 h-[30px] sm:h-[40px] md:h-[60px] bg-secondary ml-2 animate-pulse rounded-full"></span>
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-white/80 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 border-l-4 lg:border-l-4 border-secondary/40 pl-6 text-left">
                            {slide.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                            <Link
                                href={slide.ctaLink}
                                className="group relative w-full sm:w-auto px-10 py-4 bg-secondary text-white font-black text-xs uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-300 shadow-xl shadow-secondary/20"
                            >
                                <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    {slide.ctaText}
                                    <BsArrowRight className="text-lg group-hover:translate-x-2 transition-transform" />
                                </span>
                            </Link>

                            <Link
                                href="/find-jobs"
                                className="group relative w-full sm:w-auto px-10 py-4 bg-white text-primary font-black text-xs uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-300 shadow-xl shadow-white/10 border border-white"
                            >
                                <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                                <span className="relative z-10 block group-hover:text-white transition-colors duration-500 text-center">
                                    Find Jobs
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Compact Consultation Form */}
                    <div className="lg:col-span-5 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
                        <div className="rounded-[2.5rem] shadow-2xl relative overflow-hidden max-w-[420px] mx-auto lg:mx-0">
                            {/* Navy Header - matches WhatsApp chat header */}
                            <div className="bg-primary px-8 md:px-10 pt-8 pb-6 relative overflow-hidden">
                                <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-white/5 rounded-full"></div>
                                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2 break-words relative z-10">
                                    Get A Free Assessment
                                </h3>
                                <p className="text-white/50 text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2 relative z-10">
                                    <span className="w-6 h-[1px] bg-secondary"></span>
                                    Get Started Today
                                </p>
                            </div>

                            {/* White Form Body */}
                            <div className="bg-white/95 backdrop-blur-xl px-8 md:px-10 pt-6 pb-8">
                                <form className="space-y-4">
                                    <div className="space-y-3">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 text-gray-900 text-sm placeholder:text-gray-400 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all duration-300"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 text-gray-900 text-sm placeholder:text-gray-400 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all duration-300"
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 text-gray-900 text-sm placeholder:text-gray-400 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all duration-300"
                                        />
                                        <div className="relative group">
                                            <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 text-gray-600 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary focus:bg-white appearance-none cursor-pointer transition-all">
                                                <option value="">
                                                    Target Destination
                                                </option>
                                                <option value="uk">
                                                    United Kingdom
                                                </option>
                                                <option value="canada">
                                                    Canada
                                                </option>
                                                <option value="australia">
                                                    Australia
                                                </option>
                                                <option value="usa">USA</option>
                                                <option value="europe">
                                                    Europe
                                                </option>
                                            </select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                <svg
                                                    className="w-4 h-4 text-gray-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M19 9l-7 7-7-7"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="group relative w-full bg-secondary text-white font-black text-xs uppercase tracking-[0.2em] py-4.5 rounded-full overflow-hidden transition-all duration-300 shadow-xl shadow-secondary/20 flex items-center justify-center gap-3 mt-2">
                                        <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                                        <span className="relative z-10 flex items-center gap-3">
                                            Send Request
                                            <FaPaperPlane className="text-[10px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </span>
                                    </button>
                                </form>

                                <p className="mt-6 text-center text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                                    Reliable • Secure • Professional
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-3">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">
                    Scroll
                </span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent opacity-20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary animate-infinite-scroll"></div>
                </div>
            </div>

            {/* Side Branding Overlay */}
            <div className="absolute bottom-20 right-[-140px] rotate-90 hidden 2xl:block opacity-10">
                <span className="text-[120px] font-black tracking-tighter text-white uppercase select-none">
                    ELITEO.CO.UK{" "}
                </span>
            </div>
        </section>
    );
};

export default Hero;
