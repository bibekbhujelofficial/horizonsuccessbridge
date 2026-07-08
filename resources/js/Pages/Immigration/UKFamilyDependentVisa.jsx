import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { ukFamilyDependentVisaData } from "../../data/data";
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

const UKFamilyDependentVisa = () => {
    // Note: ukFamilyDependentVisaData.sections.whyAustin is used as process in the original file
    const data = {
        ...ukFamilyDependentVisaData,
        sections: {
            ...ukFamilyDependentVisaData.sections,
            process: ukFamilyDependentVisaData.sections.whyAustin,
        },
    };

    return (
        <SubPageLayout
            data={data}
            iconMap={iconMap}
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                { text: "Family & Dependent Visa", href: null },
            ]}
            title={data.header.title}
        />
    );
};

export default UKFamilyDependentVisa;
