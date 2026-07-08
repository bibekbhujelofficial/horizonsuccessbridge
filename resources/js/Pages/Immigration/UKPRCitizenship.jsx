import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { ukPRCitizenshipData } from "../../data/data";
import {
    FaPassport,
    FaVoteYea,
    FaHome,
    FaHospital,
    FaGlobe,
    FaBriefcase,
    FaCheckCircle,
    FaFlag,
    FaUserCheck,
} from "react-icons/fa";

const iconMap = {
    FaPassport: FaPassport,
    FaVoteYea: FaVoteYea,
    FaHome: FaHome,
    FaHospital: FaHospital,
    FaGlobe: FaGlobe,
    FaBriefcase: FaBriefcase,
    FaCheckCircle: FaCheckCircle,
    FaFlag: FaFlag,
    FaUserCheck: FaUserCheck,
};

const UKPRCitizenship = () => {
    return (
        <SubPageLayout
            data={ukPRCitizenshipData}
            iconMap={iconMap}
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/immigration/uk" },
                { text: "PR & Citizenship", href: null },
            ]}
        />
    );
};

export default UKPRCitizenship;
