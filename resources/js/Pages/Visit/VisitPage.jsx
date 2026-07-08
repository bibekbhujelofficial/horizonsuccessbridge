import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import SubPageLayout from "../../components/SubPageLayout";
import { Head, Link } from "@inertiajs/react";
import PageHeader from "../../components/PageHeader";
import { visitPageData } from "../../data/visitData";
import * as Icons from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { FaGlobe, FaPlaneDeparture, FaPassport } from "react-icons/fa";

const iconMap = {
    FaGlobe: FaGlobe,
    FaPlaneDeparture: FaPlaneDeparture,
    FaPassport: FaPassport,
    FaMapMarkedAlt: Icons.FaMapMarkedAlt,
    FaBriefcase: Icons.FaBriefcase,
    FaHeartbeat: Icons.FaHeartbeat,
    FaUmbrellaBeach: Icons.FaUmbrellaBeach,
    FaHandshake: Icons.FaHandshake,
    FaUserCheck: Icons.FaUserCheck,
    FaHome: Icons.FaHome,
    FaCameraRetro: Icons.FaCameraRetro,
    FaLaptop: Icons.FaLaptop,
    FaFileContract: Icons.FaFileContract,
    FaGlobeEurope: Icons.FaGlobeEurope,
    FaUndo: Icons.FaUndo,
    FaMap: Icons.FaMap,
    FaMountain: Icons.FaMountain,
    FaBolt: Icons.FaBolt,
    FaUsers: Icons.FaUsers,
    FaCity: Icons.FaCity,
    FaRegIdCard: Icons.FaRegIdCard,
    FaPlane: Icons.FaPlane,
    FaStamp: Icons.FaStamp,
    FaCalendarAlt: Icons.FaCalendarAlt,
    FaHospital: Icons.FaHospital,
    FaFileImport: Icons.FaFileImport,
    FaCalendarPlus: Icons.FaCalendarPlus,
    FaLaptopCode: Icons.FaLaptopCode,
};

// Generic data structure for individual visa pages that use SubPageLayout
const fallbackSubPageData = {
    header: {
        title: "Visit Visa Details",
        subtitle: "Explore the world with ease.",
    },
    overview: {
        label: "Overview",
        title: "Your Journey Begins Here",
        description:
            "Experience the world with our simplified visit visa processes.",
    },
    sections: {
        types: {
            label: "Scope",
            title: "Visa Preparation",
            description: "Ensure you have the right documents for your travel.",
            items: [
                { title: "Valid Passport", icon: "FaPassport" },
                { title: "Travel Itinerary", icon: "FaPlaneDeparture" },
                { title: "Global Coverage", icon: "FaGlobe" },
            ],
        },
    },
};

const VisitPage = ({ visaType }) => {
    if (visaType) {
        // Find matching section from visitPageData
        const section = visitPageData.sections.find(
            (s) => s.href === `/visit/${visaType}`
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
                          label: "Services",
                          title: "Our Specialized Services",
                          description:
                              "We provide comprehensive support for all your travel needs.",
                          items: section.items,
                      },
                      whyChoose: {
                          label: "Objectives",
                          title: "Why Choose Us for Your Trip?",
                          items: [
                              {
                                  title: "Expert Guidance",
                                  text: "Our consultants have years of experience in processing visit visas for multiple destinations.",
                              },
                              {
                                  title: "Faster Processing",
                                  text: "We ensure all documentation is handled efficiently to avoid unnecessary delays.",
                              },
                          ],
                      },
                  },
              }
            : fallbackSubPageData;

        // Render the inner page for specific visa types
        return (
            <SubPageLayout
                data={data}
                iconMap={iconMap}
                breadcrumbs={[
                    { text: "Visit", href: "/visit" },
                    {
                        text: data.header.title,
                        href: null,
                    },
                ]}
                title={data.header.title}
            />
        );
    }

    // Render the HR-style Overview Page for /visit
    return (
        <GuestLayout>
            <Head title="Global Visit Visas & Tourism - Horizon Success Bridge" />

            <PageHeader
                title={
                    visaType
                        ? visaType
                              .replace(/-/g, " ")
                              .replace(/\b\w/g, (c) => c.toUpperCase())
                        : visitPageData.header.title
                }
                description={visitPageData.header.description}
                breadcrumbs={[
                    { text: "Visit Visas", href: visaType ? "/visit" : null },
                    visaType
                        ? {
                              text: visaType
                                  .replace(/-/g, " ")
                                  .replace(/\b\w/g, (c) => c.toUpperCase()),
                              href: null,
                          }
                        : null,
                ].filter(Boolean)}
            />

            {visitPageData.sections.map((section, index) => (
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
                                                "1513635269975-59663e0ac1ad", // UK
                                                "1496442226666-8d4d0e62e6e9", // USA
                                                "1588733103629-b77afe0425ce", // Canada
                                                "1523482580672-f109ba8cb9be", // Australia
                                                "1499856871958-5b9627545d1a", // Schengen
                                                "1507525428034-b723cf961d3e", // New Zealand
                                                "1512453979798-5ea266f8880c", // UAE
                                                "1494949360228-4e9bde560065", // Thailand
                                                "1597148543182-830ef7bbb904", // Malaysia
                                                "1516496636080-14fb876e029d", // Singapore
                                                "1537996194471-e657df975ab4", // Indonesia
                                            ][index % 11]
                                        }?q=80&w=1000&auto=format&fit=crop`}
                                        alt={section.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 right-10">
                                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                                            <p className="text-white font-bold text-lg">
                                                "Traveling – it leaves you
                                                speechless, then turns you into
                                                a storyteller."
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

export default VisitPage;
