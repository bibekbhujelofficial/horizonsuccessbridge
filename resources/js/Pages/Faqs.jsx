import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import PageHeader from "@/components/PageHeader";
import { FiPlus, FiMinus, FiMail, FiMessageCircle } from "react-icons/fi";

const faqsData = [
    {
        category: "General",
        questions: [
            {
                q: "What services does Horizon Success Bridge provide?",
                a: "We offer comprehensive immigration, study abroad, visit visa processing, test preparation (IELTS/PTE), and HR solutions for countries like the UK, USA, Canada, Australia, and New Zealand.",
            },
            {
                q: "Where is your office located?",
                a: "Our global headquarters is at New Delhi – 110020, Delhi, India. We also have regional offices in Nepal, India, Canada, and Australia.",
            },
            {
                q: "How can I book a consultation?",
                a: "You can book a consultation by filling out the form on our Contact page or email us directly at info@eliteo.co.uk",
            },
            {
                q: "Is my personal information secure with Horizon Success Bridge?",
                a: "Absolutely. We employ industry-standard encryption and follow strict GDPR protocols to ensure all your personal and financial documentation is handled with the highest level of confidentiality.",
            },
        ],
    },
    {
        category: "Immigration & Visas",
        questions: [
            {
                q: "Which countries do you process visas for?",
                a: "We process a wide range of visas including Permanent Residency, Skilled Trades, and Family Sponsorships for Canada, Australia, the UK, the USA, New Zealand, and Schengen states.",
            },
            {
                q: "How long does a typical visa application take?",
                a: "Processing times vary significantly depending on the visa type, the destination country, and individual circumstances. Tourist visas may take 2-4 weeks, whereas Skilled Migrant or PR visas can take 6-12 months.",
            },
            {
                q: "Do you guarantee visa approval?",
                a: "While we boast a 98% success rate, visa approval is ultimately at the discretion of the respective country's immigration authorities. We guarantee expert, transparent, and dedicated service to make your case as strong as possible.",
            },
            {
                q: "What happens if my visa application is refused?",
                a: "In the rare event of a refusal, our legal team analyzes the refusal letter and provides expert advice on the feasibility of an appeal, administrative review, or a fresh application.",
            },
        ],
    },
    {
        category: "HR Solutions",
        questions: [
            {
                q: "What HR solutions do you provide for employers?",
                a: "We provide international recruitment, talent sourcing, payroll management, and compliance advisory for businesses looking to hire global talent across various sectors.",
            },
            {
                q: "Do you help with corporate visa sponsorship?",
                a: "Yes, we assist businesses in obtaining sponsorship licenses and manage the entire visa process for their international employees, ensuring full compliance with local labor laws.",
            },
            {
                q: "Can you help with staff relocation and orientation?",
                a: "Absolutely. Our relocation services cover visa processing, local orientation, housing assistance, and family support to ensure a smooth transition for your employees.",
            },
            {
                q: "Do you provide outsourcing for specific business functions?",
                a: "Yes, we offer specialized BPO and HR outsourcing services tailored to the needs of growing businesses, allowing you to focus on your core operations while we handle the talent.",
            },
        ],
    },
    {
        category: "Study Abroad & Test Prep",
        questions: [
            {
                q: "Do you help with university admissions?",
                a: "Yes! Our Study Abroad consultants assist with university selection, application processing, SOP writing, and securing student visas for top-tier destinations globally.",
            },
            {
                q: "What test preparation courses do you offer?",
                a: "We offer comprehensive coaching for IELTS, PTE, TOEFL, SAT, GRE, GMAT, and OET. Our classes include mock tests, expert guidance, and flexible schedules.",
            },
            {
                q: "Can you help with scholarship applications?",
                a: "Yes, our advisors identify suitable scholarship opportunities based on your academic profile and provide guidance on the application process to maximize your chances of success.",
            },
            {
                q: "Do you provide support after arrival in the host country?",
                a: "Yes, we offer pre-departure briefings and post-arrival support including airport picks, accommodation assistance, and guidance on local regulations for international students.",
            },
        ],
    },
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState("0-0");

    const toggleFaq = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <GuestLayout>
            <Head title="Frequently Asked Questions - Horizon Success Bridge" />

            {/* Page Header */}
            <PageHeader
                title="Frequently Asked Questions"
                subtitle="Find Answers"
                description="We've compiled some of the most common questions our global clients ask. If you require further assistance, our consultants are ready to help."
                image="https://images.unsplash.com/photo-1557425955-df376b5903c8?q=80&w=2670&auto=format&fit=crop"
            />

            <section className="py-24 bg-white relative">
                <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24 items-start">
                        {faqsData.map((category, catIndex) => (
                            <div key={catIndex}>
                                <div className="flex flex-col mb-12">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="h-[2px] w-8 bg-secondary"></span>
                                        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-secondary">
                                            Category
                                        </span>
                                    </div>
                                    <h2 className="text-3xl font-black text-primary uppercase tracking-wider">
                                        {category.category}
                                    </h2>
                                </div>

                                <div className="flex flex-col gap-6">
                                    {category.questions.map((faq, qIndex) => {
                                        const idx = `${catIndex}-${qIndex}`;
                                        const isOpen = openIndex === idx;

                                        return (
                                            <div
                                                key={qIndex}
                                                className={`border rounded-2xl transition-all duration-300 overflow-hidden h-fit ${
                                                    isOpen
                                                        ? "border-secondary shadow-lg shadow-secondary/5 bg-white scale-[1.02]"
                                                        : "border-gray-100 bg-gray-50 hover:border-gray-300"
                                                }`}
                                            >
                                                <button
                                                    onClick={() =>
                                                        toggleFaq(idx)
                                                    }
                                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                                >
                                                    <h3
                                                        className={`font-bold pr-8 transition-colors ${
                                                            isOpen
                                                                ? "text-secondary"
                                                                : "text-primary"
                                                        }`}
                                                    >
                                                        {faq.q}
                                                    </h3>
                                                    <div
                                                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                                                            isOpen
                                                                ? "bg-secondary text-white"
                                                                : "bg-white text-gray-500 shadow-sm"
                                                        }`}
                                                    >
                                                        {isOpen ? (
                                                            <FiMinus />
                                                        ) : (
                                                            <FiPlus />
                                                        )}
                                                    </div>
                                                </button>

                                                <div
                                                    className={`transition-all duration-500 ease-in-out ${
                                                        isOpen
                                                            ? "max-h-96 opacity-100"
                                                            : "max-h-0 opacity-0"
                                                    }`}
                                                >
                                                    <div className="p-6 pt-0 text-gray-500 text-sm leading-relaxed font-medium">
                                                        {faq.a}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Still Have Questions Section */}
                    <div className="mt-24 pt-20 border-t border-gray-100 relative">
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-0"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-0 leading-none opacity-40"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
                            <div className="lg:col-span-12 xl:col-span-5">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="h-[2px] w-8 bg-secondary"></span>
                                    <span className="text-[10px] font-black tracking-[0.5em] uppercase text-secondary">
                                        Expert Support
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-primary leading-[1.1] tracking-tighter mb-8">
                                    Still Have{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">
                                        Questions?
                                    </span>
                                </h2>
                                <p className="text-gray-500 font-medium leading-relaxed max-w-lg mb-8">
                                    Can't find the answer you're looking for?
                                    Our friendly team is here to help you
                                    navigate every step of your journey.
                                </p>

                                <div className="flex items-center gap-6">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-lg"
                                            >
                                                <img
                                                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                                                    alt="Support Team"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-primary font-black text-[12px] uppercase tracking-wider mb-0.5">
                                            Global Support Hub
                                        </p>
                                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest text-left">
                                            Available 24/7 Group
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                {/* Chat Support Card */}
                                <div className="group relative rounded-[2.5rem] p-10 bg-primary overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl"></div>

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 border border-white/20 transform group-hover:rotate-6 transition-transform">
                                            <FiMessageCircle className="text-3xl text-secondary" />
                                        </div>
                                        <h4 className="text-2xl font-black text-white mb-3 tracking-tight">
                                            Live Chat
                                        </h4>
                                        <p className="text-white/60 font-medium leading-relaxed mb-8 text-sm">
                                            Instant answers from our expert
                                            consultants via WhatsApp.
                                        </p>

                                        <a
                                            href=""
                                            target="_blank"
                                            className="mt-auto inline-flex items-center justify-center gap-4 bg-white text-primary px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-secondary hover:text-white transition-all duration-300 shadow-xl group/btn"
                                        >
                                            Chat with Us
                                            <FiPlus className="text-lg group-hover/btn:rotate-90 transition-transform" />
                                        </a>
                                    </div>
                                </div>

                                {/* Email Support Card */}
                                <div className="group relative rounded-[2.5rem] p-10 bg-white border border-gray-100 overflow-hidden shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-primary mb-6 border border-gray-100 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                                            <FiMail className="text-3xl" />
                                        </div>
                                        <h4 className="text-2xl font-black text-primary mb-3 tracking-tight">
                                            Email Support
                                        </h4>
                                        <p className="text-gray-500 font-medium leading-relaxed mb-8 text-sm">
                                            Send us your case details for a
                                            comprehensive review.
                                        </p>

                                        <a
                                            href="mailto:info@eliteoverseas.co.uk"
                                            className="mt-auto inline-flex items-center justify-center gap-4 border-2 border-secondary text-secondary px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-secondary hover:text-white transition-all duration-300 group/btn"
                                        >
                                            Send Email
                                            <FiMinus className="text-lg group-hover/btn:scale-110 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default Faqs;
