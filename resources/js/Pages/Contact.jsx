import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import PageHeader from "../components/PageHeader";
import { contactPageData } from "../data/data";
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaWhatsapp,
    FaClock,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

export default function ContactPage() {
    const iconMap = {
        FaMapMarkerAlt: FaMapMarkerAlt,
        FaPhone: FaPhone,
        FaEnvelope: FaEnvelope,
        FaWhatsapp: FaWhatsapp,
        FaClock: FaClock,
    };

    return (
        <GuestLayout>
            <Head title="Contact Us" />

            <PageHeader
                title={contactPageData.header.title}
                description={contactPageData.header.description}
                breadcrumbs={[{ text: "Contact", href: null }]}
            />

            <section className="pb-24 bg-gray-50 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#086144_1px,transparent_1px)] [background-size:20px_20px]"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 mt-24">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-3">
                        {/* Left: Form */}
                        <div className="lg:col-span-2 p-10 md:p-16">
                            <h2 className="text-3xl font-bold text-primary mb-2">
                                {contactPageData.form.title}
                            </h2>
                            <p className="text-gray-500 mb-10">
                                {contactPageData.form.subtitle}
                            </p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-gray-500 focus:ring-0 transition-all bg-gray-50 focus:bg-white outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-gray-500 focus:ring-0 transition-all bg-gray-50 focus:bg-white outline-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-gray-500 focus:ring-0 transition-all bg-gray-50 focus:bg-white outline-none"
                                            placeholder="+977 98XXXXXXXX"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-gray-500 focus:ring-0 transition-all bg-gray-50 focus:bg-white outline-none"
                                            placeholder="Visa Inquiry"
                                        />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-0 transition-all bg-gray-50 focus:bg-white outline-none resize-none"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="group relative w-full overflow-hidden bg-secondary text-white text-lg font-bold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-900/30 block cursor-pointer"
                                >
                                    <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        <span>Send Message</span>
                                        <BsArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </button>
                            </form>
                        </div>

                        {/* Right: Contact Info (Red Panel) */}
                        <div className="bg-secondary p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
                            {/* Pattern */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-8 border-b border-white/20 pb-4">
                                    Contact Information
                                </h3>
                                <div className="space-y-8">
                                    {contactPageData.contactInfo.map(
                                        (info, index) => {
                                            const Icon = iconMap[info.icon];
                                            return (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-4 group"
                                                >
                                                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-xl shrink-0 group-hover:bg-white group-hover:text-secondary transition-colors duration-300">
                                                        <Icon />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-[#fff] text-lg mb-1">
                                                            {info.title}
                                                        </h4>
                                                        <p className="text-white/80 text-sm mb-2 leading-relaxed">
                                                            {info.text}
                                                        </p>
                                                        {info.href && (
                                                            <a
                                                                href={info.href}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-xs font-bold uppercase tracking-widest hover:text-white/100 text-white/70 transition-colors border-b border-white/30 pb-0.5 hover:border-white"
                                                            >
                                                                {info.action}
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full Width Map */}
                    <div className="mt-12 h-96 lg:h-128 w-full bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                        <iframe
                            src={contactPageData.map.src}
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "100%" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
