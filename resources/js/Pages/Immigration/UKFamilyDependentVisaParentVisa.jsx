import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { ukParentVisaData } from "../../data/data";
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
};

const UKFamilyDependentVisaParentVisa = () => {
    return (
        <SubPageLayout
            data={ukParentVisaData}
            iconMap={iconMap}
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                {
                    text: "Family Visa",
                    href: "/uk-immigration/family-dependent-visa",
                },
                { text: "Parent Visa", href: null },
            ]}
            title={ukParentVisaData.header.title}
        />
    );
};

export default UKFamilyDependentVisaParentVisa;
