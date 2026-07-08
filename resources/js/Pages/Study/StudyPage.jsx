import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import SubPageLayout from "../../components/SubPageLayout";
import { Head, Link } from "@inertiajs/react";
import PageHeader from "../../components/PageHeader";
import { studyPageData } from "../../data/studyPageData";
import * as Icons from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { FaUniversity, FaGraduationCap, FaBook } from "react-icons/fa";

const iconMap = {
    FaUniversity: FaUniversity,
    FaGraduationCap: FaGraduationCap,
    FaBook: FaBook,
    FaBriefcase: Icons.FaBriefcase,
    FaAward: Icons.FaAward,
    FaIdCard: Icons.FaIdCard,
    FaPencilAlt: Icons.FaPencilAlt,
    FaBuilding: Icons.FaBuilding,
    FaHandshake: Icons.FaHandshake,
    FaWallet: Icons.FaWallet,
    FaFileAlt: Icons.FaFileAlt,
    FaPassport: Icons.FaPassport,
    FaTools: Icons.FaTools,
    FaClock: Icons.FaClock,
    FaFlask: Icons.FaFlask,
    FaUserTie: Icons.FaUserTie,
    FaShieldAlt: Icons.FaShieldAlt,
    FaPiggyBank: Icons.FaPiggyBank,
    FaCogs: Icons.FaCogs,
    FaSearch: Icons.FaSearch,
    FaStar: Icons.FaStar,
    FaPalette: Icons.FaPalette,
    FaEuroSign: Icons.FaEuroSign,
    FaLaptopCode: Icons.FaLaptopCode,
    FaLanguage: Icons.FaLanguage,
    FaCalendarCheck: Icons.FaCalendarCheck,
    FaRocket: Icons.FaRocket,
    FaLeaf: Icons.FaLeaf,
    FaDraftingCompass: Icons.FaDraftingCompass,
    FaGlobeEurope: Icons.FaGlobeEurope,
    FaHotel: Icons.FaHotel,
    FaStethoscope: Icons.FaStethoscope,
    FaMoneyBillWave: Icons.FaMoneyBillWave,
    FaPlane: Icons.FaPlane,
    FaMicroscope: Icons.FaMicroscope,
    FaHeart: Icons.FaHeart,
    FaLightbulb: Icons.FaLightbulb,
    FaWind: Icons.FaWind,
    FaSmile: Icons.FaSmile,
    FaGlobe: Icons.FaGlobe,
    FaChartLine: Icons.FaChartLine,
};

// Generic data for individual study sub-pages
const fallbackSubPageData = {
    header: {
        title: "Study Abroad",
        subtitle: "Your gateway to global education.",
    },
    overview: {
        label: "Overview",
        title: "World-Class Education",
        description:
            "Explore academic programs, scholarships, and student life at top universities around the world.",
    },
    sections: {
        types: {
            label: "Programs",
            title: "Available Programs",
            description: "Comprehensive study programs.",
            items: [
                { title: "Undergraduate", icon: "FaBook" },
                { title: "Postgraduate", icon: "FaGraduationCap" },
                { title: "Research", icon: "FaUniversity" },
            ],
        },
    },
};

const StudyPage = ({ visaType }) => {
    if (visaType) {
        // Find matching section from studyPageData
        const section = studyPageData.sections.find(
            (s) => s.href === `/study/${visaType}`
        );

        const data = section
            ? {
                  header: {
                      title: section.title,
                      subtitle: section.subtitle,
                      description: section.description,
                  },
                  overview: {
                      title: section.title,
                      description: section.description,
                  },
                  sections: {
                      types: {
                          label: "Highlights",
                          title: "Why Study Here?",
                          description:
                              "Top reasons to choose this destination for your academic goals.",
                          items: section.items,
                      },
                      whyChoose: {
                          label: "Objectives",
                          title: "Our Support Services",
                          items: [
                              {
                                  title: "University Selection",
                                  text: "We help you find the best fit based on your academic profile and career aspirations.",
                              },
                              {
                                  title: "Visa Assistance",
                                  text: "End-to-end support for your student visa application, ensuring high success rates.",
                              },
                          ],
                      },
                  },
              }
            : fallbackSubPageData;

        return (
            <SubPageLayout
                data={data}
                iconMap={iconMap}
                breadcrumbs={[
                    { text: "Study", href: "/study" },
                    {
                        text: data.header.title,
                        href: null,
                    },
                ]}
                title={data.header.title}
            />
        );
    }

    // Render the premium overview page for /study
    return (
        <GuestLayout>
            <Head title="Study Abroad - Horizon Success Bridge" />

            <PageHeader
                title={studyPageData.header.title}
                description={studyPageData.header.description}
                breadcrumbs={[{ text: "Study", href: null }]}
            />

            {studyPageData.sections.map((section, index) => (
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
                                        const Icon =
                                            Icons[item.icon] || Icons.FaBook;
                                        return (
                                            <div
                                                key={i}
                                                className="group flex gap-5 p-5 rounded-3xl border border-gray-100 bg-white hover:border-secondary/20 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500"
                                            >
                                                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-500">
                                                    <Icon className="text-xl text-primary group-hover:text-white transition-colors duration-500" />
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
                            <div className="lg:w-1/2 relative w-full">
                                <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary to-secondary opacity-5 absolute -inset-4 blur-3xl"></div>
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <img
                                        src={`https://images.unsplash.com/photo-${
                                            [
                                                "1513635269975-59663e0ac1ad", // UK - London
                                                "1496442226666-8d4d0e62e6e9", // USA - NYC
                                                "1518684079-3c830dcef090", // UAE - Dubai
                                                "1517935706615-2717063c2225", // Canada
                                                "1523482580672-f109ba8cb9be", // Australia
                                                "1702736310801-d89342db8435", // New Zealand
                                                "1467269204594-9661b134dd2b", // Germany
                                                "1502602898657-3e91760cbb34", // France
                                                "1590089415225-401ed6f9db8e", // Ireland
                                                "1701708706435-79b26327864b", // Sweden
                                                "1515542622106-78bda8ba0e5b", // Italy
                                                "1661442196003-f2f6eb54bd94", // Spain
                                                "1719882609851-95ec7c0dbf38", // Poland
                                                "1570097658726-ed3c922a1bc9", // Finland
                                                "1513622790541-eaa84d356909", // Denmark
                                                "1534351590666-13e3e96b5017", // Netherlands
                                            ][index % 16]
                                        }?q=80&w=1000&auto=format&fit=crop`}
                                        alt={section.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 right-10">
                                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                                            <p className="text-white font-bold text-lg">
                                                "Education is the most powerful
                                                weapon which you can use to
                                                change the world."
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

export default StudyPage;
