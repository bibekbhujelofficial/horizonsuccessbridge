import React from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Software Engineer, UK",
        content: "Horizon Success Bridge has been absolutely instrumental in my journey. Their deep understanding of the UK Skilled Worker Visa process made the entire transition flawless and stress-free for my family.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=44",
    },
    {
        id: 2,
        name: "Ahmed Al-Fayed",
        role: "Graduate Student, USA",
        content: "The academic counselors didn't just help me apply; they helped me build an elite profile. I secured admissions into two Ivy League universities thanks to their rigorous coaching.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=11",
    },
    {
        id: 3,
        name: "Maria Gonzalez",
        role: "Registered Nurse, Australia",
        content: "From my initial IELTS coaching right through to the PR application, the team was incredibly thorough. Their meticulous approach saved me months of processing time.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=5",
    },
    {
        id: 4,
        name: "David Chen",
        role: "Business Investor, Canada",
        content: "Navigating startup visas can be a nightmare, but Horizon Success Bridge provided a crystal-clear pathway. Their legal partners and business consultants are top-tier professionals.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=53",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Ambient Lighting Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="h-[2px] w-8 bg-secondary"></span>
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-secondary">
                            Client Success
                        </span>
                        <span className="h-[2px] w-8 bg-secondary"></span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-primary leading-[1.1] tracking-tighter">
                        Global Stories of <span className="text-secondary">Excellence</span>
                    </h2>
                </div>

                {/* Elegant Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={testimonial.id}
                            className={`group relative bg-white rounded-3xl p-10 lg:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden ${
                                idx % 2 !== 0 ? 'lg:translate-y-12' : ''
                            }`}
                        >
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                            {/* Large Background Quote */}
                            <div className="absolute top-6 right-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 transform group-hover:scale-110 pointer-events-none z-0">
                                <FaQuoteRight className="text-[120px] text-primary" />
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Rating Stars */}
                                <div className="flex items-center gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-secondary text-sm" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed mb-10 tracking-tight">
                                    "{testimonial.content}"
                                </p>

                                {/* Author Profile */}
                                <div className="mt-auto flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary rounded-full border-2 border-white flex items-center justify-center">
                                            <FaQuoteRight className="text-white text-[8px]" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-black text-primary">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
