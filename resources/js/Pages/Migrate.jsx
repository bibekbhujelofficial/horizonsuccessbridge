import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import PageHeader from "../components/PageHeader";
import { migratePageData } from "../data/migrateData";
import * as Icons from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Migrate = () => {
    return (
        <GuestLayout>
            <Head title="Global Migration & PR - Horizon Success Bridge" />

            <PageHeader
                title={migratePageData.header.title}
                description={migratePageData.header.description}
                breadcrumbs={[{ text: "Migrate", href: null }]}
            />

            {migratePageData.sections.map((section, index) => (
                <section
                    key={section.id}
                    id={section.id}
                    className={`py-24 lg:py-32 relative overflow-hidden ${index % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
                >
                    <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                        <div
                            className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                        >
                            {/* Content Side */}
                            <div className="lg:w-1/2">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="h-[2px] w-8 bg-secondary"></span>
                                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-secondary">
                                        {section.subtitle}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black text-primary leading-[1.1] mb-8 tracking-tighter">
                                    {section.title}
                                </h2>
                                <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10 max-w-xl">
                                    {section.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                    {section.items.map((item, i) => {
                                        const Icon =
                                            Icons[item.icon] ||
                                            Icons.FaCheckCircle;
                                        return (
                                            <div
                                                key={i}
                                                className="group flex gap-4 p-5 rounded-3xl border border-gray-100 bg-white hover:border-secondary/20 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500"
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-500">
                                                    <Icon className="text-lg text-primary group-hover:text-white transition-colors duration-500" />
                                                </div>
                                                <div>
                                                    <h4 className="text-md font-black text-primary mb-1 leading-tight">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-gray-500 text-xs font-medium leading-relaxed">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <Link
                                    href={section.href}
                                    className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em] text-gray-900 hover:text-secondary transition-colors group"
                                >
                                    Explore {section.title}
                                    <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary text-gray-400 group-hover:text-white transition-all shadow-sm">
                                        <BsArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform" />
                                    </div>
                                </Link>
                            </div>

                            {/* Decorative Side */}
                            <div className="lg:w-1/2 relative w-full">
                                <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary to-secondary opacity-5 absolute -inset-4 blur-3xl"></div>
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <img
                                        src={`https://images.unsplash.com/photo-${
                                            [
                                                "1513635269975-59663e0ac1ad", // UK
                                                "1496442226666-8d4d0e62e6e9", // USA
                                                "1588733103629-b77afe0425ce", // Canada
                                                "1523482580672-f109ba8cb9be", // Australia
                                                "1595125989588-36d745a2a828", // New Zealand
                                            ][index % 5]
                                        }?q=80&w=1000&auto=format&fit=crop`}
                                        alt={section.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 right-10">
                                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                                            <p className="text-white font-bold text-lg">
                                                "Your dreams of a global future
                                                start with the right preparation
                                                today."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </GuestLayout>
    );
};

export default Migrate;
