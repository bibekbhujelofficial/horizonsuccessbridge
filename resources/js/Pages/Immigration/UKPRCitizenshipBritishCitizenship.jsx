import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { ukBritishCitizenshipData } from "../../data/data";
import {
    FaGlobe,
    FaPassport,
    FaShieldAlt,
    FaCheckCircle,
    FaFlagCheckered,
    FaAward,
    FaUniversity,
    FaMapMarkedAlt,
    FaCalendar,
    FaClock,
} from "react-icons/fa";

const iconMap = {
    FaGlobe: FaGlobe,
    FaPassport: FaPassport,
    FaShieldAlt: FaShieldAlt,
    FaCheckCircle: FaCheckCircle,
    FaFlagCheckered: FaFlagCheckered,
    FaAward: FaAward,
    FaUniversity: FaUniversity,
    FaMapMarkedAlt: FaMapMarkedAlt,
    FaCalendar: FaCalendar,
    FaClock: FaClock,
};

const UKPRCitizenshipBritishCitizenship = () => {
    return (
        <SubPageLayout
            data={ukBritishCitizenshipData}
            iconMap={iconMap}
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                { text: "PR & Citizenship", href: "/uk-immigration/pr-citizenship" },
                { text: "British Citizenship", href: null },
            ]}
            title={ukBritishCitizenshipData.header.title}
        />
    );
};

export default UKPRCitizenshipBritishCitizenship;
