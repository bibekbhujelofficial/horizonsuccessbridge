import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { ukSpouseVisaData } from "../../data/data";
import {
    FaUserFriends,
    FaPassport,
    FaHome,
    FaGlobe,
    FaBriefcase,
    FaHandsHelping,
    FaUserTie,
    FaBaby,
    FaCheckCircle,
    FaPoundSign,
    FaHospital,
    FaMapMarkedAlt,
} from "react-icons/fa";

const iconMap = {
    FaUserFriends: FaUserFriends,
    FaPassport: FaPassport,
    FaHome: FaHome,
    FaGlobe: FaGlobe,
    FaBriefcase: FaBriefcase,
    FaHandsHelping: FaHandsHelping,
    FaUserTie: FaUserTie,
    FaBaby: FaBaby,
    FaCheckCircle: FaCheckCircle,
    FaPoundSign: FaPoundSign,
    FaHospital: FaHospital,
    FaMapMarkedAlt: FaMapMarkedAlt,
};

const UKFamilyDependentVisaSpouseVisa = () => {
    return (
        <SubPageLayout
            data={ukSpouseVisaData}
            iconMap={iconMap}
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                {
                    text: "Family Visa",
                    href: "/uk-immigration/family-dependent-visa",
                },
                { text: "Spouse Visa", href: null },
            ]}
            title={ukSpouseVisaData.header.title}
        />
    );
};

export default UKFamilyDependentVisaSpouseVisa;
