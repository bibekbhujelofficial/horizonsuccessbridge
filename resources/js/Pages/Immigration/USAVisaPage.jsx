import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { Link } from "@inertiajs/react";
import {
    FaMoneyBill,
    FaBriefcase,
    FaCheckCircle,
    FaUsers,
    FaChartLine,
    FaGlobe,
    FaStar,
    FaHeart,
    FaUserTie,
    FaBuilding,
    FaHospital,
    FaUniversity,
    FaDollarSign,
    FaClock,
    FaMapMarkedAlt,
    FaGlobeAmericas,
    FaHeartbeat,
} from "react-icons/fa";
import {
    usaImmigrationData,
    usaH1BData,
    usaL1VisaData,
    usaO1VisaData,
    usaEB1VisaData,
    usaEB2VisaData,
    usaEB3VisaData,
    usaEB4VisaData,
    usaE2VisaData,
    usaEB5VisaData,
    usaK1VisaData,
    usaIR1VisaData,
    usaParentVisaData,
    usaTemporaryWorkVisaData,
    usaPermanentWorkVisaData,
    usaBusinessInvestmentVisaData,
    usaFamilySpouseVisaData,
} from "../../data/usaData";

const iconMap = {
    FaMoneyBill: FaMoneyBill,
    FaBriefcase: FaBriefcase,
    FaCheckCircle: FaCheckCircle,
    FaUsers: FaUsers,
    FaChartLine: FaChartLine,
    FaGlobe: FaGlobe,
    FaStar: FaStar,
    FaHeart: FaHeart,
    FaUserTie: FaUserTie,
    FaBuilding: FaBuilding,
    FaHospital: FaHospital,
    FaUniversity: FaUniversity,
    FaDollarSign: FaDollarSign,
    FaClock: FaClock,
    FaMapMarkedAlt: FaMapMarkedAlt,
    FaGlobeAmericas: FaGlobeAmericas,
    FaHeartbeat: FaHeartbeat,
};

const dataMap = {
    main: usaImmigrationData,
    "h-1b": usaH1BData,
    "l-1": usaL1VisaData,
    "o-1": usaO1VisaData,
    "eb-1": usaEB1VisaData,
    "eb-2": usaEB2VisaData,
    "eb-3": usaEB3VisaData,
    "eb-4": usaEB4VisaData,
    "e-2": usaE2VisaData,
    "eb-5": usaEB5VisaData,
    "k-1": usaK1VisaData,
    "ir-1": usaIR1VisaData,
    "parent-sibling": usaParentVisaData,
    "temporary-work": usaTemporaryWorkVisaData,
    "permanent-work": usaPermanentWorkVisaData,
    "business-investment": usaBusinessInvestmentVisaData,
    "family-spouse": usaFamilySpouseVisaData,
};

const USAVisaPage = ({ visaType }) => {
    const data = dataMap[visaType];
    if (!data)
        return (
            <div className="py-20 text-center text-gray-500 font-light">
                Visa type "{visaType}" not found.
            </div>
        );

    const { header } = data;
    const pageTitle = visaType === "main" ? "USA Immigration" : header.title;

    return (
        <SubPageLayout
            data={data}
            iconMap={iconMap}
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                {
                    text: "USA Immigration",
                    href: visaType === "main" ? null : "/usa-immigration",
                },
                { text: header.title, href: null },
            ].filter(
                (b) => b.text !== "USA Immigration" || visaType !== "main"
            )}
            title={pageTitle}
        />
    );
};

export default USAVisaPage;
