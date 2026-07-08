import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { ukStudyVisaData } from "../../data/data";
import {
    FaGraduationCap,
    FaBook,
    FaUniversity,
    FaGlobe,
    FaBriefcase,
    FaCheckCircle,
    FaUserGraduate,
    FaLanguage,
} from "react-icons/fa";

const iconMap = {
    FaGraduationCap: FaGraduationCap,
    FaBook: FaBook,
    FaUniversity: FaUniversity,
    FaGlobe: FaGlobe,
    FaBriefcase: FaBriefcase,
    FaCheckCircle: FaCheckCircle,
    FaUserGraduate: FaUserGraduate,
    FaLanguage: FaLanguage,
};

const UKStudyVisa = () => {
    const data = {
        ...ukStudyVisaData,
        sections: {
            ...ukStudyVisaData.sections,
            process: ukStudyVisaData.sections.whyAustin,
        },
    };

    return (
        <SubPageLayout
            data={data}
            iconMap={iconMap}
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                { text: "Student Visa", href: null },
            ]}
            title={data.header.title}
        />
    );
};

export default UKStudyVisa;
