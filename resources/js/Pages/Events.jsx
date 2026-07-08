import React, { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import PageHeader from "../components/PageHeader";
import { eventsPageData } from "../data/eventsPageData";
import * as Icons from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

const Events = () => {
    const [selectedCountry, setSelectedCountry] = useState("all");
    const [viewType, setViewType] = useState("upcoming"); // 'upcoming' or 'past'

    const currentEvents = viewType === "upcoming" 
        ? eventsPageData.upcomingEvents 
        : eventsPageData.pastEvents;

    const filteredEvents = selectedCountry === "all" 
        ? currentEvents 
        : currentEvents.filter(event => event.country === selectedCountry);

    return (
        <GuestLayout>
            <Head title="Global Events & Seminars - Horizon Success Bridge" />

            <PageHeader
                title={eventsPageData.header.title}
                description={eventsPageData.header.description}
                breadcrumbs={[
                    { text: "Events", href: null }
                ]}
            />

            {/* Events Explorer Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-[1450px] mx-auto px-6 lg:px-12">
                    {/* Filter Bar */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 pb-8 border-b border-gray-100">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-full w-fit">
                                <button 
                                    onClick={() => setViewType("upcoming")}
                                    className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${viewType === "upcoming" ? "bg-white text-secondary shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                                >
                                    Upcoming
                                </button>
                                <button 
                                    onClick={() => setViewType("past")}
                                    className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${viewType === "past" ? "bg-white text-secondary shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                                >
                                    Past Events
                                </button>
                            </div>
                            <h2 className="text-3xl font-black text-primary tracking-tight">
                                {viewType === "upcoming" ? (
                                    <>Our Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">Schedule</span></>
                                ) : (
                                    <>Memories from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">Past</span></>
                                )}
                            </h2>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {eventsPageData.countries.map((country) => (
                                <button
                                    key={country.id}
                                    onClick={() => setSelectedCountry(country.id)}
                                    className={`px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                                        selectedCountry === country.id 
                                        ? "bg-secondary text-white shadow-lg shadow-secondary/20" 
                                        : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                                    }`}
                                >
                                    {country.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Events Grid */}
                    {filteredEvents.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredEvents.map((event) => (
                                <div key={event.id} className="group relative bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 flex flex-col h-full">
                                    {/* Image Area */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img 
                                            src={event.image} 
                                            alt={event.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute top-6 left-6 flex gap-2">
                                            <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[9px] font-black uppercase tracking-widest">
                                                {event.category}
                                            </span>
                                            <span className={`px-4 py-1.5 rounded-full text-white text-[9px] font-black uppercase tracking-widest ${viewType === 'past' ? 'bg-gray-500' : 'bg-secondary'}`}>
                                                {event.status}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="flex items-center gap-2 text-white/90 text-[10px] font-bold uppercase tracking-widest">
                                                <HiOutlineLocationMarker className="text-secondary text-sm" />
                                                {event.city}, {event.country.toUpperCase()}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="mb-6">
                                            <Link href="/events/detail">
                                                <h3 className="text-xl font-black text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-1">
                                                    {event.title}
                                                </h3>
                                            </Link>
                                            <p className="text-gray-500 text-[13px] font-medium leading-relaxed line-clamp-2">
                                                {event.description}
                                            </p>
                                        </div>
                                        
                                        <div className="space-y-4 mb-8 pt-6 border-t border-gray-50">
                                            <div className="flex flex-wrap items-center gap-6 text-gray-500">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                                                        <HiOutlineCalendar className="text-lg text-primary" />
                                                    </div>
                                                    <div className="text-xs font-bold leading-tight">
                                                        <span className="block text-gray-400 uppercase tracking-widest text-[9px] mb-0.5">Date</span>
                                                        {event.date}
                                                    </div>
                                                </div>
                                                {event.time && (
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                                                            <HiOutlineClock className="text-lg text-primary" />
                                                        </div>
                                                        <div className="text-xs font-bold leading-tight">
                                                            <span className="block text-gray-400 uppercase tracking-widest text-[9px] mb-0.5">Time</span>
                                                            {event.time}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                                {event.location}
                                            </div>
                                            <Link 
                                                href="/events/detail"
                                                className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:rotate-[-45deg]"
                                            >
                                                <BsArrowRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Icons.FaCalendarTimes className="text-3xl text-gray-300" />
                            </div>
                            <h3 className="text-xl font-black text-primary mb-2">No Events Found</h3>
                            <p className="text-gray-500 text-sm font-medium">There are currently no scheduled events for this location.</p>
                        </div>
                    )}
                </div>
            </section>

        </GuestLayout>
    );
};

export default Events;

