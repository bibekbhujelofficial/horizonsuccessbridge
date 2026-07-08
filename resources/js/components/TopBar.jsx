import React from "react";
import { Link } from "@inertiajs/react";
import { FaEnvelope, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { topBarData, footerData } from "../data/data";

const TopBar = () => {
    const emailInfo =
        topBarData.contactInfo.find((i) => i.type === "email") ||
        topBarData.contactInfo[0];
    const locationInfo =
        topBarData.contactInfo.find((i) => i.type === "location") ||
        topBarData.contactInfo[2];

    return (
        <div className="w-full bg-gradient-to-r from-primary-dark via-primary to-primary-darkest text-white py-2 lg:py-2.5 shadow-sm relative z-10">
            <div className="flex flex-row justify-between items-center w-full max-w-screen-2xl mx-auto px-8">
                {/* Left Side: Desktop Detail */}
                <div className="hidden lg:flex items-center gap-8 text-[13px]">
                        <div className="flex items-center gap-2.5 text-white/90 font-bold tracking-tight">
                            <FaMapMarkerAlt className="text-white/80" />
                            <span>{locationInfo.text}</span>
                        </div>
                        <a
                            href={emailInfo.href}
                            className="flex items-center gap-2.5 hover:text-red-400 transition-all duration-300 font-bold tracking-tight group"
                        >
                            <FaEnvelope className="text-white/80 group-hover:scale-110 transition-transform" />
                            <span>{emailInfo.text}</span>
                        </a>
                </div>

                {/* Right: Quick Links */}
                <div className="flex items-center justify-around lg:justify-end w-full lg:w-auto lg:gap-8 font-black uppercase tracking-[0.05em] lg:tracking-[0.15em] text-[9px] lg:text-[11px] shrink-0">
                    <Link
                        href="/hr-solutions"
                        className="hover:text-red-400 transition-colors py-1"
                    >
                        HR Solutions
                    </Link>
                    <Link
                        href="/find-jobs"
                        className="hover:text-red-400 transition-colors py-1 whitespace-nowrap"
                    >
                        Find Jobs
                    </Link>
                    <Link
                        href="/events"
                        className="hover:text-red-400 transition-colors py-1"
                    >
                        Events
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
