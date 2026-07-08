import React from "react";
import { Link } from "@inertiajs/react";
import { FaChevronRight, FaHome, FaPaperPlane } from "react-icons/fa";
import { heroData } from "../data/data";

const PageHeader = ({ title, description, breadcrumbs }) => {
    const slide = heroData && heroData.length > 0 ? heroData[0] : null;

    return (
        <div className="relative bg-primary min-h-[400px] lg:min-h-[550px] flex items-center pt-32 lg:pt-24 pb-16 lg:pb-20 overflow-hidden border-b border-primary-light">
            {/* Exactly Matching Hero Background */}
            <div className="absolute inset-0 z-0">
                {slide && slide.image && (
                    <img
                        src={slide.image}
                        alt="Background"
                        className="w-full h-full object-cover scale-105 select-none"
                        style={{ filter: "brightness(0.35) contrast(1.1)" }}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>

                <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/30 rounded-full blur-[100px]"></div>
            </div>

            {/* Content Container */}
            <div className="max-w-screen-2xl w-full mx-auto px-6 md:px-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Content */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-in fade-in slide-in-from-left-10 duration-1000">
                        {breadcrumbs && breadcrumbs.length > 0 && (
                            <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs md:text-sm text-gray-400 mb-4 uppercase tracking-widest font-medium">
                                <Link
                                    href="/"
                                    className="hover:text-red-500 transition-colors flex items-center gap-1"
                                >
                                    <FaHome className="mb-0.5" />
                                </Link>
                                {breadcrumbs.map((crumb, index) => (
                                    <React.Fragment key={index}>
                                        <FaChevronRight className="text-[8px] text-gray-600" />
                                        {crumb.href ? (
                                            <Link
                                                href={crumb.href}
                                                className="hover:text-red-500 transition-colors"
                                            >
                                                {crumb.text}
                                            </Link>
                                        ) : (
                                            <span className="text-red-500">
                                                {crumb.text}
                                            </span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </nav>
                        )}

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter drop-shadow-2xl break-words">
                            {title.split(" ").map((word, i, arr) => (
                                <span
                                    key={i}
                                    className={
                                        i === arr.length - 1
                                            ? "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary"
                                            : ""
                                    }
                                >
                                    {word}{" "}
                                </span>
                            ))}
                        </h1>

                        {description && (
                            <p className="text-base md:text-lg text-white/80 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 border-l-4 lg:border-l-4 border-secondary/40 pl-6 text-left">
                                {description}
                            </p>
                        )}
                    </div>

                    {/* Right: Compact Consultation Form */}
                    <div className="lg:col-span-5 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
                        <div className="rounded-[2.5rem] shadow-2xl relative overflow-hidden max-w-[420px] mx-auto lg:mx-0">
                            {/* Navy Header - matches WhatsApp chat header */}
                            <div className="bg-primary px-8 md:px-10 pt-8 pb-6 relative overflow-hidden">
                                <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-white/5 rounded-full"></div>
                                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2 relative z-10">
                                    Get A Free Assessment
                                </h3>
                                <p className="text-white/50 text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2 relative z-10">
                                    <span className="w-6 h-[1px] bg-secondary"></span>
                                    Get Started Today
                                </p>
                            </div>

                            {/* White Form Body */}
                            <div className="bg-white/95 backdrop-blur-xl px-8 md:px-10 pt-6 pb-8">
                            <form
                                className="space-y-4"
                                onSubmit={(e) => e.preventDefault()}
                            >
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

                                <button
                                    className="group relative w-full bg-secondary text-white font-black text-xs uppercase tracking-[0.2em] py-4.5 rounded-full overflow-hidden transition-all duration-300 shadow-xl shadow-secondary/20 flex items-center justify-center gap-3 mt-2"
                                    style={{
                                        paddingTop: "1.125rem",
                                        paddingBottom: "1.125rem",
                                    }}
                                >
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
        </div>
    );
};

export default PageHeader;
