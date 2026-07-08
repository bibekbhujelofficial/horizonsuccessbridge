import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { ukILRData } from "../../data/data";
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
    FaClock,
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
    FaClock: FaClock,
};

const UKPRCitizenshipILR = () => {
    return (
        <SubPageLayout
            data={ukILRData}
            iconMap={iconMap}
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/immigration/uk" },
                {
                    text: "PR & Citizenship",
                    href: "/uk-immigration/pr-citizenship",
                },
                { text: "Indefinite Leave to Remain", href: null },
            ]}
        />
    );
};

export default UKPRCitizenshipILR;
