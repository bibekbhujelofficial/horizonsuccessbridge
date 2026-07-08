import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { ukImmigrationData } from "../../data/ukData";
import {
    FaBriefcase,
    FaUniversity,
    FaMapMarkedAlt,
    FaChartLine,
    FaHospital,
    FaGlobe,
    FaCheckCircle,
    FaUsers,
    FaPassport,
    FaPlane,
    FaGraduationCap,
} from "react-icons/fa";

const iconMap = {
    FaBriefcase: FaBriefcase,
    FaUniversity: FaUniversity,
    FaMapMarkedAlt: FaMapMarkedAlt,
    FaChartLine: FaChartLine,
    FaHospital: FaHospital,
    FaGlobe: FaGlobe,
    FaCheckCircle: FaCheckCircle,
    FaUsers: FaUsers,
    FaPassport: FaPassport,
    FaPlane: FaPlane,
    FaGraduationCap: FaGraduationCap,
};

const UK = () => {
    return (
        <SubPageLayout
            data={ukImmigrationData}
            iconMap={iconMap}
            activeLink="/uk-immigration"
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "United Kingdom", href: null },
            ]}
            showSidebar={false}
        />
    );
};

export default UK;
