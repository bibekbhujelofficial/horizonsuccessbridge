import React from "react";
import { Link } from "@inertiajs/react";
import { BsArrowRight } from "react-icons/bs";
import {
    FaGlobeAmericas,
    FaBriefcase,
    FaPlaneDeparture,
    FaGraduationCap,
    FaChalkboardTeacher,
    FaUsers,
} from "react-icons/fa";

const services = [
    {
        id: "migrate",
        title: "Migrate",
        description:
            "Seamless permanent residency and migration pathways for you and your family.",
        icon: FaGlobeAmericas,
        href: "/migrate",
        color: "bg-primary",
        lightColor: "bg-primary/5",
        colSpan: "md:col-span-2 lg:col-span-2",
        delay: "0",
    },
    {
        id: "study",
        title: "Study",
        description:
            "Gain access to top-tier universities and global educational institutions.",
        icon: FaGraduationCap,
        href: "/study",
        color: "bg-secondary",
        lightColor: "bg-secondary/5",
        colSpan: "lg:col-span-1",
        delay: "100",
    },
    {
        id: "work",
        title: "Work",
        description:
            "Unlock global career opportunities with skilled worker and business visas.",
        icon: FaBriefcase,
        href: "/work",
        color: "bg-primary-light",
        lightColor: "bg-primary-light/5",
        colSpan: "lg:col-span-1",
        delay: "200",
    },
    {
        id: "visit",
        title: "Visit",
        description:
            "Travel the world for tourism, business, or joining family abroad.",
        icon: FaPlaneDeparture,
        href: "/visit",
        color: "bg-primary",
        lightColor: "bg-primary/5",
        colSpan: "lg:col-span-1",
        delay: "300",
    },
    {
        id: "coaching",
        title: "Coaching",
        description:
            "Achieve the highest scores in IELTS, PTE, and premium language tests.",
        icon: FaChalkboardTeacher,
        href: "/coaching",
        color: "bg-secondary",
        lightColor: "bg-secondary/5",
        colSpan: "lg:col-span-1",
        delay: "400",
    },
];

const ServicesSection = () => {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNCkiLz48L3N2Zz4=')] opacity-50"></div>

            {/* Aesthetic Blurs */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="h-[2px] w-8 bg-secondary"></span>
                            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-secondary">
                                Our Expertise
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-primary leading-[1.1] tracking-tighter">
                            Comprehensive Global{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">
                                Pathways For You
                            </span>
                        </h2>
                    </div>
                    <div className="max-w-sm md:text-right hidden md:block">
                        <p className="text-gray-500 font-medium leading-relaxed">
                            Discover tailored immigration, academic, and career
                            solutions designed to make your global aspirations a
                            reality.
                        </p>
                    </div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:auto-rows-[300px] gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={service.id}
                                href={service.href}
                                className={`group relative rounded-[2rem] p-10 overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100 hover:border-transparent flex flex-col justify-between ${service.colSpan} hover:-translate-y-1`}
                            >
                                {/* Slide-up Color Background (matching WhyChooseUs) */}
                                <div
                                    className={`absolute inset-0 ${service.color} translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0`}
                                ></div>

                                {/* Icon & Top Area */}
                                <div className="relative z-10 flex justify-between items-start">
                                    <div
                                        className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white/20 transition-all duration-500`}
                                    >
                                        <Icon className="text-3xl" />
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50 group-hover:bg-white/20 group-hover:border-white/30 transition-colors duration-500 overflow-hidden relative">
                                        <BsArrowRight className="text-gray-400 group-hover:text-white absolute transition-transform duration-500 group-hover:translate-x-[200%] text-lg" />
                                        <BsArrowRight
                                            className={`text-white absolute -translate-x-[200%] transition-transform duration-500 group-hover:translate-x-0 text-lg`}
                                        />
                                    </div>
                                </div>

                                {/* Bottom Content */}
                                <div className="relative z-10 mt-auto pt-8">
                                    <h3 className="text-2xl md:text-3xl font-black text-primary mb-3 tracking-tighter group-hover:text-white transition-colors duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 font-medium leading-relaxed max-w-sm group-hover:text-white/80 transition-colors duration-500">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Abstract Geometric Decoration */}
                                <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none transform group-hover:scale-110">
                                    <Icon className="text-[180px] text-primary group-hover:text-white" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
