import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import SubPageLayout from "../../components/SubPageLayout";
import { Head, Link } from "@inertiajs/react";
import PageHeader from "../../components/PageHeader";
import { coachingPageData, coachingSubPageData } from "../../data/coachingData";
import * as Icons from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { 
    FaBook, 
    FaPencilAlt, 
    FaChalkboardTeacher, 
    FaHeadphones, 
    FaBookOpen, 
    FaPenFancy, 
    FaMicrophone,
    FaRobot,
    FaSearch,
    FaHeadset,
    FaUniversity,
    FaCalculator,
    FaEdit
} from "react-icons/fa";

const iconMap = {
    FaBook: FaBook,
    FaPencilAlt: FaPencilAlt,
    FaChalkboardTeacher: FaChalkboardTeacher,
    FaHeadphones: FaHeadphones,
    FaBookOpen: FaBookOpen,
    FaPenFancy: FaPenFancy,
    FaMicrophone: FaMicrophone,
    FaRobot: FaRobot,
    FaSearch: FaSearch,
    FaHeadset: FaHeadset,
    FaUniversity: FaUniversity,
    FaCalculator: FaCalculator,
    FaEdit: FaEdit,
};

// Generic data structure for individual coaching pages that use SubPageLayout
const fallbackSubPageData = {
    header: { title: "Test Preparation", subtitle: "Excel in your exams." },
    overview: {
        label: "Overview",
        title: "Prepare for Success",
        description:
            "Expert coaching and study resources to help you achieve your desired score.",
    },
    sections: {
        types: {
            label: "Modules",
            title: "Course Curriculum",
            description: "Comprehensive coverage of all test sections.",
            items: [
                { title: "Study Materials", icon: "FaBook" },
                { title: "Practice Tests", icon: "FaPencilAlt" },
                { title: "Expert Guidance", icon: "FaChalkboardTeacher" },
            ],
        },
    },
};

const CoachingPage = ({ visaType }) => {
    if (visaType) {
        const subPageData = coachingSubPageData[visaType] || fallbackSubPageData;
        
        // Render the inner page for specific coaching types
        return (
            <SubPageLayout
                data={subPageData}
                iconMap={iconMap}
                breadcrumbs={[
                    { text: "Coaching", href: "/coaching" },
                    {
                        text: visaType
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (c) => c.toUpperCase()),
                        href: null,
                    },
                ]}
                title={visaType
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
            />
        );
    }

    // Render the premium HR-style Overview Page for /coaching
    return (
        <GuestLayout>
            <Head title="Test & Language Coaching - Horizon Success Bridge" />

            <PageHeader
                title={coachingPageData.header.title}
                description={coachingPageData.header.description}
                breadcrumbs={[{ text: "Coaching", href: null }]}
            />

            {coachingPageData.sections.map((section, index) => (
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

                                <div className="grid grid-cols-1 gap-6 mb-10">
                                    {section.items.map((item, i) => {
                                        const Icon = Icons[item.icon];
                                        return (
                                            <div
                                                key={i}
                                                className="group flex gap-5 p-5 rounded-3xl border border-gray-100 bg-white hover:border-secondary/20 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500"
                                            >
                                                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-500">
                                                    {Icon && (
                                                        <Icon className="text-xl text-primary group-hover:text-white transition-colors duration-500" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-black text-primary mb-1">
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
                            <div className="lg:w-1/2 relative">
                                <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary to-secondary opacity-5 absolute -inset-4 blur-3xl"></div>
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <img
                                        src={`https://images.unsplash.com/photo-${
                                            [
                                                "1434030216411-0b793f4b4173", // IELTS (Writing/Studying)
                                                "1516321318423-f06f85e504b3", // PTE (Computers/Typing)
                                                "1535957998253-26ae1ef29506", // TOEFL (University/Library)
                                                "1454165804606-c3d57bc86b40", // SAT (Studying/Pens)
                                                "1532012197267-da84d127e765", // GRE (Math/Books)
                                                "1486312338219-ce68d2c6f44d", // GMAT (Macbook)
                                                "1593698054469-2bb6fdf4b512", // OET (Medical)
                                                "1544531586-fde5298cdd40", // CELPIP (Canada context)
                                            ][index % 8]
                                        }?q=80&w=1000&auto=format&fit=crop`}
                                        alt={section.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 right-10">
                                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                                            <p className="text-white font-bold text-lg">
                                                "Education is the passport to
                                                the future, for tomorrow belongs
                                                to those who prepare for it
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

export default CoachingPage;
