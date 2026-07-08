import React, { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import PageHeader from "../components/PageHeader";
import EventPaymentAndVisa from "../components/EventPaymentAndVisa";
import { singleEventData as data } from "../data/singleEventData";
import {
    HiOutlineLocationMarker,
    HiOutlineCalendar,
    HiOutlineClock,
    HiOutlineUserGroup,
    HiOutlineGlobeAlt,
    HiOutlineCash,
    HiOutlineMail,
    HiOutlineIdentification,
    HiOutlineCheckCircle,
} from "react-icons/hi";
import {
    BsArrowRight,
    BsAward,
    BsCreditCard2Back,
    BsChatDots,
} from "react-icons/bs";
import * as Icons from "react-icons/fa";

const EventDetail = () => {
    const [activeDay, setActiveDay] = useState(1);

    return (
        <GuestLayout>
            <Head title={`${data.header.title} - Horizon Success Bridge`} />

            <PageHeader
                title={data.header.title}
                description={data.header.description}
                breadcrumbs={[
                    { text: "Events", href: "/events" },
                    { text: "Event Details", href: null },
                ]}
            />
            {/* Event Highlights Sticky Bar */}
            <div className="sticky top-[80px] z-50 bg-white/95 backdrop-blur-md shadow-xl shadow-gray-100/50 border-b border-gray-100 py-4 md:py-6">
                <div className="max-w-[1450px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12">
                    <div className="flex items-center justify-between md:justify-start gap-6 md:gap-10 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
                        <div className="flex items-center gap-3 shrink-0">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                                <HiOutlineLocationMarker className="text-secondary text-xl" />
                            </div>
                            <div className="text-xs font-black uppercase tracking-widest text-primary">
                                <span className="block text-gray-400 text-[9px] mb-0.5">
                                    Venue
                                </span>
                                {data.header.venue}
                            </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                                <HiOutlineUserGroup className="text-secondary text-xl" />
                            </div>
                            <div className="text-xs font-black uppercase tracking-widest text-primary">
                                <span className="block text-gray-400 text-[9px] mb-0.5">
                                    Event Host
                                </span>
                                {data.header.host}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto shrink-0 border-t border-gray-100 md:border-t-0 pt-4 md:pt-0">
                        <span className="px-5 py-2 rounded-full bg-secondary/10 text-secondary text-[9px] font-black uppercase tracking-widest border border-secondary/20">
                            {data.header.status}
                        </span>
                        <Link
                            href="#register"
                            className="group relative bg-secondary text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 shadow-xl shadow-secondary/20 inline-block"
                        >
                            <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                            <span className="relative z-10 flex items-center gap-2">
                                Register & Pay{" "}
                                <BsArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* About & Featured Image */}
            <section className="py-24 bg-white">
                <div className="max-w-[1450px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="h-[2px] w-12 bg-secondary"></span>
                                <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] text-secondary">
                                    About The Event
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black text-primary tracking-tighter leading-[1.2] mb-8">
                                {data.about.title
                                    .split(" ")
                                    .map((word, i, arr) => (
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
                            </h2>
                            <p className="text-gray-500 font-medium leading-relaxed mb-10 text-lg italic">
                                "{data.about.description}"
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {data.about.points.map((point, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 text-sm font-bold text-gray-700"
                                    >
                                        <HiOutlineCheckCircle className="text-secondary text-xl shrink-0" />
                                        {point}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-secondary/5 rounded-[4rem] group-hover:rotate-0 rotate-2 transition-transform duration-700"></div>
                            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1540575861501-7ad0582373f3?q=80&w=1200&auto=format&fit=crop"
                                    alt="Global Conference"
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent flex items-end p-10">
                                    <div className="text-white">
                                        <p className="text-[10px] font-black uppercase tracking-widest mb-2 text-secondary">
                                            Live Experience
                                        </p>
                                        <h4 className="text-2xl font-black tracking-tight leading-tight">
                                            Horizon Success Bridge Networking & Strategy Summit
                                            2026
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Can Attend - ELITE PERSONA BENTO */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-[1450px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-12 pb-12 border-b border-gray-100">
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <span className="h-[2px] w-12 bg-secondary"></span>
                                <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] text-secondary">
                                    Target Audience
                                </span>
                                <span className="h-[2px] w-12 bg-secondary"></span>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black text-primary tracking-tighter leading-[1.2] mb-6">
                                {data.attendees.title
                                    .split(" ")
                                    .map((word, i, arr) => (
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
                            </h2>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] leading-loose">
                                {data.attendees.description}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.attendees.groups.map((group, i) => (
                            <div
                                key={i}
                                className="group relative rounded-[2.5rem] p-10 overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100 hover:border-transparent flex flex-col justify-between hover:-translate-y-1 h-[340px]"
                            >
                                {/* Slide-up Color Background (matching Services) */}
                                <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"></div>

                                {/* Icon & Top Area */}
                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shadow-sm transform group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white/20 group-hover:text-white group-hover:shadow-lg transition-all duration-500">
                                        {React.createElement(
                                            Icons[group.icon] ||
                                                Icons.FaHandshake,
                                            {
                                                className: "text-3xl",
                                            },
                                        )}
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50 group-hover:bg-white/20 group-hover:border-white/30 transition-colors duration-500 overflow-hidden relative">
                                        <BsArrowRight className="text-gray-400 group-hover:text-white absolute transition-transform duration-500 group-hover:translate-x-[200%] text-lg" />
                                        <BsArrowRight className="text-white absolute -translate-x-[200%] transition-transform duration-500 group-hover:translate-x-0 text-lg" />
                                    </div>
                                </div>

                                {/* Bottom Content */}
                                <div className="relative z-10 mt-auto pt-8">
                                    <h4 className="text-xl font-black text-primary mb-3 tracking-tighter group-hover:text-white transition-colors duration-500">
                                        {group.name}
                                    </h4>
                                    <div className="h-[2px] w-8 bg-secondary mb-4 group-hover:bg-white/30 transition-colors duration-500"></div>
                                    <p className="text-gray-500 font-medium leading-relaxed group-hover:text-white/80 transition-colors duration-500 text-sm">
                                        {group.description}
                                    </p>
                                </div>

                                {/* Abstract Geometric Decoration */}
                                <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none transform group-hover:scale-110">
                                    {React.createElement(
                                        Icons[group.icon] || Icons.FaHandshake,
                                        {
                                            className:
                                                "text-[150px] text-primary group-hover:text-white",
                                        },
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Speakers Section */}
            <section className="py-24 bg-primary-darker relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 rounded-bl-[10rem]"></div>
                <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <span className="h-[2px] w-12 bg-secondary"></span>
                            <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] text-secondary">
                                World Class Experts
                            </span>
                            <span className="h-[2px] w-12 bg-secondary"></span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter leading-[1.2]">
                            Expert Speakers{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">
                                Lineup
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {data.speakers.map((speaker) => (
                            <div key={speaker.id} className="group relative">
                                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-darker/90 via-primary-darker/20 to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 right-10">
                                        <span className="text-secondary text-[9px] font-black uppercase tracking-widest mb-2 block">
                                            {speaker.specialty}
                                        </span>
                                        <h4 className="text-2xl font-black text-white tracking-tight mb-2">
                                            {speaker.name}
                                        </h4>
                                        <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
                                            {speaker.title} | {speaker.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Protocol / Schedule */}
            <section className="py-24 bg-white relative">
                <div className="max-w-[1450px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-20 pb-10 border-b border-gray-100">
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <span className="h-[2px] w-12 bg-secondary"></span>
                                <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] text-secondary">
                                    Event Itinerary
                                </span>
                                <span className="h-[2px] w-12 bg-secondary"></span>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black text-primary tracking-tighter leading-[1.2]">
                                Conference{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">Protocol</span>
                            </h2>
                        </div>

                        <div className="flex flex-wrap gap-2 items-center p-2 bg-gray-50 rounded-full w-fit">
                            {data.schedule.map((day) => (
                                <button
                                    key={day.day}
                                    onClick={() => setActiveDay(day.day)}
                                    className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${
                                        activeDay === day.day
                                            ? "bg-secondary text-white shadow-xl shadow-secondary/20"
                                            : "text-gray-400 hover:text-primary hover:bg-white"
                                    }`}
                                >
                                    Day {day.day}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <h4 className="text-2xl font-black text-primary mb-12 flex items-center gap-4">
                            <span className="text-secondary opacity-20 text-5xl">
                                0{activeDay}
                            </span>
                            <div>
                                <span className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">
                                    {
                                        data.schedule.find(
                                            (d) => d.day === activeDay,
                                        ).date
                                    }
                                </span>
                                {
                                    data.schedule.find(
                                        (d) => d.day === activeDay,
                                    ).title
                                }
                            </div>
                        </h4>

                        <div className="space-y-12">
                            {data.schedule
                                .find((d) => d.day === activeDay)
                                .items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="relative pl-12 group"
                                    >
                                        <div className="absolute left-0 top-4 w-0 group-hover:w-8 h-[2px] bg-secondary transition-all duration-300"></div>

                                        <div className="flex flex-col md:flex-row md:items-start gap-8">
                                            <div className="text-secondary text-xs font-black uppercase tracking-widest shrink-0 pt-1">
                                                {item.time}
                                            </div>
                                            <div>
                                                <h5 className="text-xl font-black text-primary mb-3 tracking-tight group-hover:text-secondary transition-colors">
                                                    {item.title}
                                                </h5>
                                                <p className="text-gray-500 font-medium leading-relaxed italic">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration & ELITE PRICING PROTOCOLS */}
            <section
                id="register"
                className="py-32 bg-gray-50 border-t border-gray-100 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-[120px]"></div>

                <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <span className="h-[2px] w-12 bg-secondary"></span>
                            <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] text-secondary">
                                Investment Roadmap
                            </span>
                            <span className="h-[2px] w-12 bg-secondary"></span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black text-primary tracking-tighter mb-6 leading-[1.2]">
                            Investment{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">
                                Protocols
                            </span>
                        </h2>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
                            {data.pricing.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {data.pricing.options.map((option, i) => (
                            <div
                                key={i}
                                className={`group relative flex flex-col rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl overflow-hidden ${
                                    i === 1
                                        ? "bg-primary border-transparent shadow-2xl xl:scale-105 z-10 lg:-mx-2"
                                        : "bg-white border-gray-100 hover:shadow-primary/10 hover:border-transparent"
                                }`}
                            >
                                {i === 1 && (
                                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-[80px]"></div>
                                )}
                                {i === 1 && (
                                    <div className="bg-secondary text-white text-[9px] font-black uppercase py-3 text-center tracking-[0.4em] relative z-20">
                                        Most Popular Protocol
                                    </div>
                                )}

                                <div
                                    className={`p-10 lg:p-12 flex-1 flex flex-col relative z-10 ${i === 1 ? "pt-12" : ""}`}
                                >
                                    <div className="mb-10">
                                        <h4 className={`text-[10px] font-black uppercase tracking-[0.5em] mb-4 ${i === 1 ? "text-white/80" : "text-secondary"}`}>
                                            {option.name}
                                        </h4>
                                        <div className="flex items-baseline gap-1">
                                            <span className={`text-2xl font-black ${i === 1 ? "text-white" : "text-primary"}`}>
                                                $
                                            </span>
                                            <span className={`text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-none ${i === 1 ? "text-white" : "text-primary"}`}>
                                                {option.price}
                                            </span>
                                            <span className={`text-[10px] font-bold uppercase tracking-widest ml-1 ${i === 1 ? "text-white/60" : "text-gray-300"}`}>
                                                USD
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-6 mb-12 flex-1">
                                        {option.benefits.map((benefit, b) => (
                                            <div
                                                key={b}
                                                className="flex items-start gap-4 group/benefit"
                                            >
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${i === 1 ? "bg-white/10 group-hover/benefit:bg-white" : "bg-secondary/5 group-hover/benefit:bg-secondary"}`}>
                                                    <HiOutlineCheckCircle className={`text-sm transition-colors ${i === 1 ? "text-white group-hover/benefit:text-primary" : "text-secondary group-hover/benefit:text-white"}`} />
                                                </div>
                                                <span className={`text-[11px] font-black uppercase tracking-wider leading-tight transition-colors ${i === 1 ? "text-white/80 group-hover/benefit:text-white" : "text-gray-600 group-hover/benefit:text-primary"}`}>
                                                    {benefit}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        className={`group/btn relative w-full py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 shadow-xl ${
                                            i === 1 
                                            ? "bg-white text-primary shadow-white/10" 
                                            : "bg-secondary text-white shadow-secondary/20"
                                        }`}
                                    >
                                        <span className={`absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out ${
                                            i === 1 ? "bg-gray-100" : "bg-secondary"
                                        }`}></span>
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Confirm Access <BsArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modular Payment & Visa Information Component */}
            <EventPaymentAndVisa data={data} />
        </GuestLayout>
    );
};

export default EventDetail;
