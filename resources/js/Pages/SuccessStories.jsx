import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import PageHeader from "../components/PageHeader";
import { FaStar, FaQuoteRight, FaCheckCircle } from "react-icons/fa";

const successStories = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Software Engineer, UK",
        content: "Horizon Success Bridge has been absolutely instrumental in my journey. Their deep understanding of the UK Skilled Worker Visa process made the entire transition flawless and stress-free for my family. From documentation to final approval, they were with me every step of the way.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=44",
        category: "Immigration",
        destination: "United Kingdom"
    },
    {
        id: 2,
        name: "Ahmed Al-Fayed",
        role: "Graduate Student, USA",
        content: "The academic counselors didn't just help me apply; they helped me build an elite profile. I secured admissions into two Ivy League universities thanks to their rigorous coaching and strategic application planning. My dream of studying in America is now a reality.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=11",
        category: "Study Abroad",
        destination: "United States"
    },
    {
        id: 3,
        name: "Maria Gonzalez",
        role: "Registered Nurse, Australia",
        content: "From my initial IELTS coaching right through to the PR application, the team was incredibly thorough. Their meticulous approach saved me months of processing time and ensured that my nursing credentials were recognized without any complications.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=5",
        category: "Coaching & PR",
        destination: "Australia"
    },
    {
        id: 4,
        name: "David Chen",
        role: "Business Investor, Canada",
        content: "Navigating startup visas can be a nightmare, but Horizon Success Bridge provided a crystal-clear pathway. Their legal partners and business consultants are top-tier professionals who understand the nuances of the Canadian investment landscape.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=53",
        category: "Business Migration",
        destination: "Canada"
    },
    {
        id: 5,
        name: "Priya Sharma",
        role: "Data Scientist, Germany",
        content: "I was worried about the language barrier and the EU Blue Card requirements, but Horizon Success Bridge's German desk handled everything perfectly. They even assisted with local registration and finding my first apartment in Berlin. Exceptional service!",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=32",
        category: "Immigration",
        destination: "Germany"
    },
    {
        id: 6,
        name: "Liam O'Connor",
        role: "Hospitality Manager, UAE",
        content: "The speed at which they processed my UAE work permit was astounding. I had my residency visa within 10 days of arriving in Dubai. Their local knowledge of the Gulf recruitment market is unmatched.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=12",
        category: "Work Permit",
        destination: "UAE"
    }
];

export default function SuccessStories() {
    return (
        <GuestLayout>
            <Head title="Success Stories - Horizon Success Bridge" />

            <PageHeader
                title="Global Stories of Triumph"
                description="Join over 10,000+ individuals who have successfully transformed their lives through our expert immigration and education services."
                breadcrumbs={[{ text: "Success Stories", href: null }]}
            />

            <section className="py-24 md:py-32 bg-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>

                <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {successStories.map((story) => (
                            <div 
                                key={story.id} 
                                className="group relative bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(12,46,111,0.08)] transition-all duration-500 overflow-hidden"
                            >
                                {/* Category Tag */}
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="px-3 py-1 bg-gray-50 text-[10px] font-black tracking-widest uppercase text-primary rounded-full border border-gray-100">
                                        {story.category}
                                    </span>
                                    <div className="h-[1px] flex-grow bg-gray-100"></div>
                                    <FaCheckCircle className="text-primary text-sm opacity-20" />
                                </div>

                                {/* Quote Icon background */}
                                <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                                    <FaQuoteRight className="text-8xl" />
                                </div>

                                <div className="flex flex-col h-full relative z-10">
                                    {/* Content */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(story.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-secondary text-[10px]" />
                                        ))}
                                    </div>
                                    
                                    <p className="text-gray-600 text-lg font-medium leading-relaxed mb-6">
                                        "{story.content}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4 pt-6 border-t border-gray-50/50">
                                        <div className="relative">
                                            <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-gray-50 border border-white shadow-sm bg-gray-100 transition-transform duration-300 group-hover:scale-110">
                                                <img 
                                                    src={story.image} 
                                                    alt={story.name} 
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                                                <FaCheckCircle className="text-white text-[8px]" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-[15px] font-black text-primary leading-tight">
                                                {story.name}
                                            </h4>
                                            <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-0.5">
                                                {story.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
