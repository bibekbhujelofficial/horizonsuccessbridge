import React from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import SubPageLayout from "../../components/SubPageLayout";
import {
    FaGlobeEurope,
    FaPassport,
    FaBriefcase,
    FaGraduationCap,
    FaUserFriends,
    FaHandshake,
    FaClock,
    FaCheckCircle,
    FaUniversity,
    FaHeartbeat,
    FaChartLine,
    FaHeart,
    FaUsers,
} from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";
import { schengenImmigrationData } from "../../data/schengenData";

const iconMap = {
    FaGlobeEurope: FaGlobeEurope,
    FaPassport: FaPassport,
    FaBriefcase: FaBriefcase,
    FaGraduationCap: FaGraduationCap,
    FaUserFriends: FaUserFriends,
    FaHandshake: FaHandshake,
    FaClock: FaClock,
    FaCheckCircle: FaCheckCircle,
    FaUniversity: FaUniversity,
    FaHeartbeat: FaHeartbeat,
    FaChartLine: FaChartLine,
    FaHeart: FaHeart,
    FaUsers: FaUsers,
};

const dataMap = {
    main: schengenImmigrationData,
    visit: {
        ...schengenImmigrationData,
        header: {
            ...schengenImmigrationData.header,
            title: "Schengen Visit Visa",
            description: "Short-stay visa for tourism, business, and family visits across Europe.",
        }
    },
    work: {
        ...schengenImmigrationData,
        header: {
            ...schengenImmigrationData.header,
            title: "European Work Permits",
            description: "Employment opportunities and residency pathways in major EU economies.",
        }
    },
    "blue-card": {
        ...schengenImmigrationData,
        icon: "FaPassport",
        header: {
            ...schengenImmigrationData.header,
            title: "EU Blue Card",
            description: "A work- and residence permit for highly qualified non-EU citizens to live and work in an EU country.",
        }
    },
};

const SchengenVisaPage = ({ visaType }) => {
    const data = dataMap[visaType] || schengenImmigrationData;

    const breadcrumbs = [
        { text: "Migrate", href: "/migrate" },
        { text: "Schengen", href: null },
    ];

    return (
        <SubPageLayout
            data={data}
            iconMap={iconMap}
            breadcrumbs={breadcrumbs}
            title={data.header.title}
        />
    );
};

export default SchengenVisaPage;
