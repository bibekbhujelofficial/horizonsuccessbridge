import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import PageHeader from "../components/PageHeader";
import { hrPageData } from "../data/data";
import * as Icons from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const HRPage = () => {
    return (
        <GuestLayout>
            <Head title="Human Resources & Leadership Training - Horizon Success Bridge" />

            <PageHeader
                title={hrPageData.header.title}
                description={hrPageData.header.description}
                breadcrumbs={[{ text: "HR Solutions", href: null }]}
            />

            {hrPageData.sections.map((section, index) => (
                <section
                    key={section.id}
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
                                <p className="text-gray-500 text-lg font-medium leading-relaxed mb-12 max-w-xl">
                                    {section.description}
                                </p>

                                <div className="grid grid-cols-1 gap-8">
                                    {section.items.map((item, i) => {
                                        const Icon = Icons[item.icon];
                                        return (
                                            <div
                                                key={i}
                                                className="group flex gap-6 p-6 rounded-3xl border border-gray-100 bg-white hover:border-secondary/20 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500"
                                            >
                                                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-500">
                                                    {Icon && (
                                                        <Icon className="text-2xl text-primary group-hover:text-white transition-colors duration-500" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-black text-primary mb-2">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-gray-500 text-sm font-medium">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Decorative Side */}
                            <div className="lg:w-1/2 relative">
                                <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary to-secondary opacity-5 absolute -inset-4 blur-3xl"></div>
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <img
                                        src={`https://images.unsplash.com/photo-${
                                            [
                                                "1552664730-d307ca884978",
                                                "1521737711867-e3b97375f902",
                                                "1517245386807-bb43f82c33c4",
                                                "1768448808550-3148cce53a19",
                                                "1573164713988-8665fc963095",
                                                "1531482615713-2afd69097998",
                                            ][index % 6]
                                        }?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`}
                                        alt={section.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 right-10">
                                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                                            <p className="text-white font-bold text-lg">
                                                "Excellence is not a skill, it
                                                is an attitude."
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

export default HRPage;
