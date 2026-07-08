import React from "react";
import { Link } from "@inertiajs/react";
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaPhoneAlt,
} from "react-icons/fa";
import { footerData } from "../data/data";

const iconMap = {
    FaFacebookF: FaFacebookF,
    FaInstagram: FaInstagram,
    FaWhatsapp: FaWhatsapp,
    FaYoutube: FaYoutube,
    FaLinkedin: FaLinkedin,
    FaTwitter: FaTwitter,
    FaEnvelope: FaEnvelope,
    FaMapMarkerAlt: FaMapMarkerAlt,
    FaClock: FaClock,
};

const Footer = () => {
    return (
        <footer className="relative text-white pt-24 pb-12 overflow-hidden">
            {/* Deep Rich Blue Gradient (same as Stats) */}
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

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                {/* Global Offices Area
                <div className="pb-16 border-b border-white/10 mb-20">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                        <div className="space-y-3">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">
                                Our Global Presence
                            </h3>
                            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                Connect with our experts{" "}
                                <br className="hidden md:block" /> across the
                                world.
                            </h2>
                        </div>
                        <p className="text-white/40 text-[11px] font-medium max-w-xs lg:text-right">
                            Our dedicated teams are ready to support your
                            aspirations from six key global locations.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-8">
                        {footerData.globalOffices.map((office, idx) => (
                            <div key={idx} className="space-y-6 group mb-4">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                        <h4 className="text-sm font-black uppercase tracking-wider text-white">
                                            {office.country}
                                        </h4>
                                    </div>
                                    <div className="h-px w-full bg-white/5 group-hover:bg-secondary/30 transition-colors"></div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-2.5 text-[11px] font-bold text-white/60 leading-relaxed">
                                        <FaMapMarkerAlt size={12} className="text-secondary mt-0.5 shrink-0" />
                                        <span>{office.address}</span>
                                    </div>
                                    <a
                                        href={`tel:${office.phone.replace(/\s+/g, "")}`}
                                        className="flex items-center gap-2.5 text-[11px] font-bold text-white/70 hover:text-white transition-colors"
                                    >
                                        <FaPhoneAlt
                                            size={10}
                                            className="text-secondary"
                                        />
                                        {office.phone}
                                    </a>
                                    <a
                                        href={`mailto:${office.email}`}
                                        className="flex items-center gap-2.5 text-[11px] font-bold text-white/70 hover:text-white transition-colors break-all"
                                    >
                                        <FaEnvelope
                                            size={12}
                                            className="text-secondary"
                                        />
                                        {office.email}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                */}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Brand Section (Wider Column) */}
                    <div className="lg:col-span-3 space-y-8 text-center lg:text-left">
                        <Link
                            href="/"
                            className="inline-block transform hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={footerData.companyInfo.logo}
                                alt="Horizon Success Bridge"
                                className="h-14 w-auto object-contain brightness-0 invert mx-auto lg:mx-0"
                            />
                        </Link>
                        <p className="text-white/80 text-[15px] leading-7 font-medium italic opacity-90 mx-auto lg:mx-0">
                            "{footerData.companyInfo.description}"
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            {footerData.socialLinks.map((social, index) => {
                                const Icon =
                                    iconMap[social.icon] || FaFacebookF;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 bg-white/5 text-white hover:bg-white hover:text-primary flex items-center justify-center rounded-xl transition-all duration-300 border border-white/10"
                                    >
                                        <Icon size={16} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Columns (Span 9) */}
                    <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
                        {footerData.columns.slice(0, 6).map((col, index) => (
                            <div key={index}>
                                <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white mb-8 pb-3 border-b border-white/10 relative">
                                    {col.title}
                                    <span className="absolute bottom-[-1px] left-0 w-6 h-[1px] bg-secondary"></span>
                                </h3>
                                <ul className="space-y-4">
                                    {col.links.map((link, idx) => (
                                        <li key={idx}>
                                            <Link
                                                href={link.href}
                                                className="text-white/60 hover:text-white text-[12px] font-bold transition-all duration-300 flex items-center gap-2.5 group"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-secondary/40 group-hover:bg-secondary group-hover:scale-125 transition-all"></span>
                                                <span className="leading-tight">
                                                    {link.text}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Copyright Area */}
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/50 text-[11px] font-black uppercase tracking-[0.2em]">
                        &copy; {new Date().getFullYear()} {footerData.copyright}
                    </p>
                    <div className="flex items-center gap-10">
                        <Link
                            href="/privacy-policy"
                            className="text-white/50 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms-and-conditions"
                            className="text-white/50 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
