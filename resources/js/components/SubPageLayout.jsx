import React from "react";
import ImmigrationPage from "./ImmigrationPage";
import { Link } from "@inertiajs/react";
import { BsArrowRight } from "react-icons/bs";

const STYLE = {
    sectionLabel:
        "text-[10px] font-black text-secondary uppercase tracking-[0.5em] mb-4 flex items-center gap-4",
    sectionTitle:
        "text-3xl md:text-4xl font-bold text-primary leading-[1.1] tracking-tighter mb-8",
    bodyText:
        "text-[15px] text-gray-400 leading-relaxed font-light italic text-left transition-all duration-700",
    gridItem:
        "p-10 md:p-14 transition-all duration-1000 group relative active:scale-[0.98]",
    accentBar:
        "h-[2px] w-6 bg-secondary transition-all duration-700 group-hover:w-12 group-hover:bg-primary",
    interactiveBorder:
        "before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-secondary before:transition-all before:duration-500 group-hover:before:w-[4px] before:z-20",
    stickyHeader: "lg:col-span-4 sticky top-40 h-fit mb-12 lg:mb-0",
};

const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const SubPageLayout = ({ data, iconMap, breadcrumbs, title }) => {
    const { header, sections, overview } = data;
    let sIdx = 0;

    return (
        <ImmigrationPage
            headerData={{
                title: title || header.title,
                description: header.subtitle || header.description,
            }}
            title={title || header.title}
            breadcrumbs={breadcrumbs}
            activeLink={window.location.pathname}
        >
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                <div className="space-y-32 py-20">
                    {/* 1. Header Intro (Premium Refactor) */}
                    <section className="animate-in fade-in duration-1000 slide-in-from-bottom-8">
                        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                            <div className="lg:col-span-5">
                                <span className={STYLE.sectionLabel}>
                                    <span className="w-8 h-[1px] bg-secondary"></span>
                                    {ROMAN[++sIdx]}. Overview
                                </span>
                                <h1 className={STYLE.sectionTitle}>
                                    {overview?.title ||
                                        sections.overview?.title ||
                                        header.title}
                                </h1>
                            </div>
                            <div className="lg:col-span-7 pt-4">
                                <p className="text-lg text-gray-400 leading-relaxed text-justify lg:text-justify font-light italic border-l-2 border-gray-50 pl-6 lg:pl-12 py-2">
                                    {overview?.description ||
                                        sections.overview?.content ||
                                        header.description}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Context Section (High Contrast) */}
                    {sections.whatIs && (
                        <section className="pt-20 group">
                            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                                <div className="lg:col-span-5 transform group-hover:-translate-y-1 transition-transform duration-700">
                                    <span className={STYLE.sectionLabel}>
                                        <span className="w-8 h-[1px] bg-secondary"></span>
                                        {ROMAN[++sIdx]}. Context
                                    </span>
                                    <h2 className={STYLE.sectionTitle}>
                                        {sections.whatIs.title}
                                    </h2>
                                </div>
                                <div className="lg:col-span-7 pt-4">
                                    <p className="text-lg text-gray-400 leading-relaxed text-justify lg:text-justify font-light italic border-l-2 border-gray-50 pl-6 lg:pl-12 py-2">
                                        {sections.whatIs.content}
                                    </p>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* 3. Strategic Objectives */}
                    {sections.whyChoose && (
                        <section className="pt-24">
                            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                                <div className={STYLE.stickyHeader}>
                                    <span className={STYLE.sectionLabel}>
                                        <span className="w-8 h-[1px] bg-secondary"></span>
                                        {ROMAN[++sIdx]}. Objectives
                                    </span>
                                    <h2 className={STYLE.sectionTitle}>
                                        {sections.whyChoose.title}
                                    </h2>
                                </div>
                                <div className="lg:col-span-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        {sections.whyChoose.items.map(
                                            (item, index) => (
                                                <div
                                                    key={index}
                                                    className={STYLE.gridItem}
                                                >
                                                    <div className="flex flex-col gap-8">
                                                        <div className="flex items-center transform group-hover:translate-x-3 transition-transform duration-700">
                                                            <div className="overflow-hidden w-0 group-hover:w-10 transition-all duration-700 shrink-0 group-hover:mr-2">
                                                                <span className="text-[12px] font-black tracking-[0.4em] text-secondary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                                                    0{index + 1}
                                                                </span>
                                                            </div>
                                                            <h4 className="text-xl font-bold text-primary tracking-tighter group-hover:text-secondary transition-colors duration-500">
                                                                {item.title}
                                                            </h4>
                                                        </div>
                                                        <p
                                                            className={
                                                                STYLE.bodyText
                                                            }
                                                        >
                                                            {item.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* 4. Service Ecosystem */}
                    {sections.types && (
                        <section className="pt-24">
                            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                                <div className={STYLE.stickyHeader}>
                                    <span className={STYLE.sectionLabel}>
                                        <span className="w-8 h-[1px] bg-secondary"></span>
                                        {ROMAN[++sIdx]}. Services
                                    </span>
                                    <h2 className={STYLE.sectionTitle}>
                                        {sections.types.title || "Service Ecosystem"}
                                    </h2>
                                </div>
                                <div className="lg:col-span-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        {(
                                            sections.types.items ||
                                            sections.types
                                        ).map((type, index) => {
                                            const Icon = iconMap[type.icon];
                                            const items =
                                                sections.types.items ||
                                                sections.types;
                                            return (
                                                <div
                                                    key={index}
                                                    className="p-10 md:p-14 group transition-all duration-1000"
                                                >
                                                    <div className="flex items-center transform group-hover:translate-x-3 transition-transform duration-700 mb-10">
                                                        <div className="overflow-hidden w-0 group-hover:w-10 transition-all duration-700 shrink-0 group-hover:mr-2">
                                                            <div className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                                                {Icon && (
                                                                    <Icon
                                                                        size={24}
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                        <h4 className="text-xl font-bold text-primary tracking-tighter group-hover:text-secondary transition-colors duration-500">
                                                            {type.title}
                                                        </h4>
                                                    </div>
                                                    <ul className="space-y-4">
                                                        {type.items.map(
                                                            (item, i) => {
                                                                const isObject = typeof item === 'object';
                                                                const title = isObject ? item.title : item;
                                                                const href = isObject ? item.href : "#";
                                                                
                                                                return (
                                                                    <li key={i}>
                                                                        <Link
                                                                            href={href}
                                                                            className="flex gap-4 text-sm text-gray-400 hover:text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all duration-500"
                                                                        >
                                                                            <span className="w-1 h-1 rounded-full bg-gray-100 mt-2 shrink-0 group-hover:bg-secondary group-hover:scale-150 transition-all"></span>
                                                                            <span className="font-light italic tracking-wide">
                                                                                {title}
                                                                            </span>
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            }
                                                        )}
                                                    </ul>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* 5. Execution Roadmap */}
                    {sections.process && (
                        <section className="pt-20">
                            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                                <div className="lg:col-span-4 sticky top-32 h-fit">
                                    <span className={STYLE.sectionLabel}>
                                        <span className="w-8 h-[1px] bg-secondary"></span>
                                        {ROMAN[++sIdx]}. Roadmap
                                    </span>
                                    <h2 className={STYLE.sectionTitle}>
                                        {sections.process.title}
                                    </h2>
                                </div>
                                <div className="lg:col-span-8">
                                    <div className="relative pl-12 ml-6 md:ml-0">
                                        {sections.process.steps.map(
                                            (step, index) => (
                                                <div
                                                    key={index}
                                                    className="relative pb-24 group last:pb-8"
                                                >
                                                    {/* Node with Halo */}
                                                    <div className="absolute -left-[49px] top-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[10px] font-black group-hover:text-secondary transition-all duration-700 shadow-sm z-10">
                                                        0{index + 1}
                                                        <div className="absolute inset-0 rounded-full border border-secondary animate-ping opacity-0 group-hover:opacity-10 scale-150 transition-opacity"></div>
                                                    </div>
                                                    {/* Content */}
                                                    <div className="transform group-hover:translate-x-6 transition-transform duration-700 ease-out">
                                                        <h4 className="text-xl font-bold text-primary mb-6 tracking-tighter group-hover:text-secondary transition-colors">
                                                            {step.title}
                                                        </h4>
                                                        <p className="text-[14px] text-gray-400 leading-[1.8] font-light italic text-justify max-w-2xl transition-all duration-700">
                                                            {step.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* 6. Strategic Advantage */}
                    {sections.whyAustin && (
                        <section className="pt-24">
                            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                                <div className={STYLE.stickyHeader}>
                                    <span className={STYLE.sectionLabel}>
                                        <span className="w-8 h-[1px] bg-secondary"></span>
                                        {ROMAN[++sIdx]}. Advantage
                                    </span>
                                    <h2 className={STYLE.sectionTitle}>
                                        {sections.whyAustin.title}
                                    </h2>
                                </div>
                                <div className="lg:col-span-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        {sections.whyAustin.steps.map(
                                            (step, index) => (
                                                <div
                                                    key={index}
                                                    className={STYLE.gridItem}
                                                >
                                                    <div className="flex flex-col gap-8">
                                                        <div className="flex items-center transform group-hover:translate-x-3 transition-transform duration-700">
                                                            <div className="h-[2px] w-0 bg-secondary transition-all duration-700 group-hover:w-8 group-hover:mr-6 shrink-0"></div>
                                                            <h4 className="text-xl font-bold text-primary tracking-tighter group-hover:text-secondary transition-colors duration-500">
                                                                {step.title}
                                                            </h4>
                                                        </div>
                                                        <p
                                                            className={
                                                                STYLE.bodyText
                                                            }
                                                        >
                                                            {step.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* 7. Pathways & Criteria (Combined Refined View) */}
                    {(sections.pathways || sections.requirements) && (
                        <div className="grid lg:grid-cols-2">
                            {/* Pathways */}
                            {sections.pathways && (
                                <section className="pt-24 lg:pr-16 group">
                                    <div className="flex items-center justify-between mb-12">
                                        <div>
                                            <span
                                                className={STYLE.sectionLabel}
                                            >
                                                {ROMAN[++sIdx]}. Routes
                                            </span>
                                            <h3 className={STYLE.sectionTitle}>
                                                {sections.pathways.title || "Migration Routes"}
                                            </h3>
                                        </div>
                                        <div className="h-[1px] w-24 bg-gray-50 hidden md:block"></div>
                                    </div>
                                    <div className="flex flex-col">
                                        {sections.pathways.items.map(
                                            (item, index) => (
                                                <Link
                                                    key={index}
                                                    href={item.href || "#"}
                                                    className="group/link flex items-center justify-between py-10 hover:pl-6 transition-all duration-700 ease-in-out"
                                                >
                                                    <div>
                                                        <h4 className="font-bold text-primary group-hover/link:text-secondary tracking-tight transition-colors">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-[11px] text-gray-400 font-light italic mt-2 uppercase tracking-widest opacity-60">
                                                            {item.desc ||
                                                                item.description}
                                                        </p>
                                                    </div>
                                                    <div className="w-10 h-10 rounded-full border border-gray-50 flex items-center justify-center group-hover/link:border-secondary group-hover/link:bg-secondary group-hover/link:text-white transition-all duration-500">
                                                        <BsArrowRight className="text-sm transform group-hover/link:scale-125 transition-transform" />
                                                    </div>
                                                </Link>
                                            ),
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* Requirements */}
                            {sections.requirements && (
                                <section className="pt-24 lg:pl-16 group">
                                    <div className="flex items-center justify-between mb-12">
                                        <div>
                                            <span
                                                className={STYLE.sectionLabel}
                                            >
                                                {ROMAN[++sIdx]}. Requirements
                                            </span>
                                            <h3 className={STYLE.sectionTitle}>
                                                {sections.requirements.title || "Standard Requirements"}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        {sections.requirements.items.map(
                                            (item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-col md:flex-row md:items-center justify-between py-8 group/item transition-all duration-500 hover:bg-gray-50/10 px-4 -mx-4"
                                                >
                                                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-3 md:mb-0 group-hover/item:text-secondary transition-colors">
                                                        {item.label}
                                                    </span>
                                                    <span className="text-sm text-gray-400 font-light italic text-right max-w-[240px] leading-relaxed">
                                                        {item.value}
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </section>
                            )}
                        </div>
                    )}

                    {/* 8. Process Options (Routes) */}
                    {sections.routes && (
                        <section className="pt-20">
                            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                                <div className="lg:col-span-4 sticky top-32 h-fit">
                                    <span className={STYLE.sectionLabel}>
                                        <span className="w-8 h-[1px] bg-secondary"></span>
                                        {ROMAN[++sIdx]}. Process
                                    </span>
                                    <h2 className={STYLE.sectionTitle}>
                                        {sections.routesTitle || "Strategic Options"}
                                    </h2>
                                </div>
                                <div className="lg:col-span-8">
                                    <div className="grid grid-cols-1 gap-16">
                                        {sections.routes.map((route, index) => {
                                            const Icon = iconMap[route.icon];
                                            return (
                                                <div
                                                    key={index}
                                                    className="group"
                                                >
                                                    <div className="flex items-center gap-6 mb-8 transform group-hover:translate-x-2 transition-transform duration-500">
                                                        <div className="text-secondary shrink-0">
                                                            {Icon && (
                                                                <Icon
                                                                    size={28}
                                                                />
                                                            )}
                                                        </div>
                                                        <h4 className="text-2xl font-bold text-primary tracking-tight">
                                                            {route.title}
                                                        </h4>
                                                    </div>
                                                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 pl-12">
                                                        {route.items.map(
                                                            (item, i) => (
                                                                <div
                                                                    key={i}
                                                                    className="flex gap-4 group/item"
                                                                >
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/10 mt-2 shrink-0 group-hover:bg-secondary transition-colors"></span>
                                                                    <p className="text-gray-400 group-hover:text-primary transition-colors duration-500 text-sm font-light italic leading-relaxed">
                                                                        {item}
                                                                    </p>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* 8. Global CTA Banner */}
                    {sections.cta && (
                        <section className="pt-20">
                            <div className="bg-secondary p-24 text-white rounded-sm flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden group">
                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.02] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>

                                <div className="max-w-xl relative z-10 text-center lg:text-left">
                                    <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter leading-none italic uppercase">
                                        {sections.cta.title ||
                                            "Ready to Start?"}
                                    </h2>
                                    <p className="text-white/80 text-xl font-light leading-relaxed">
                                        {sections.cta.description ||
                                            "Take the first step towards your new life today."}
                                    </p>
                                </div>
                                <Link
                                    href="/contact"
                                    className="relative z-10 bg-white text-secondary px-16 py-6 rounded-sm text-xs font-black uppercase tracking-[0.4em] hover:bg-primary hover:text-white transition-all duration-700 shadow-[20px_20px_60px_rgba(0,0,0,0.1)]"
                                >
                                    Consult Now
                                </Link>
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </ImmigrationPage>
    );
};

export default SubPageLayout;
