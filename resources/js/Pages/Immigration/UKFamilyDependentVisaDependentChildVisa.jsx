import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { ukDependentChildVisaData } from "../../data/data";
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

const UKFamilyDependentVisaDependentChildVisa = () => {
    return (
        <SubPageLayout
            data={ukDependentChildVisaData}
            iconMap={iconMap}
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                {
                    text: "Family Visa",
                    href: "/uk-immigration/family-dependent-visa",
                },
                { text: "Dependent Child Visa", href: null },
            ]}
            title={ukDependentChildVisaData.header.title}
        />
    );
};

export default UKFamilyDependentVisaDependentChildVisa;
