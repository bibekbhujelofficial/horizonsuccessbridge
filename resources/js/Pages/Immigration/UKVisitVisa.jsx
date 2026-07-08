import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { ukVisitVisaData } from "../../data/data";
import {
    FaBriefcase,
    FaPassport,
    FaGlobe,
    FaCheckCircle,
    FaPlane,
    FaBusinessTime,
    FaUserClock,
} from "react-icons/fa";

const iconMap = {
    FaPlane: FaPlane,
    FaBriefcase: FaBriefcase,
    FaUserClock: FaUserClock,
    FaPassport: FaPassport,
    FaGlobe: FaGlobe,
    FaBusinessTime: FaBusinessTime,
    FaCheckCircle: FaCheckCircle,
};

const UKVisitVisa = () => {
    const data = {
        ...ukVisitVisaData,
        sections: {
            ...ukVisitVisaData.sections,
            process: ukVisitVisaData.sections.whyAustin,
        },
    };

    return (
        <SubPageLayout
            data={data}
            iconMap={iconMap}
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                { text: "Visit Visa", href: null },
            ]}
            title={data.header.title}
        />
    );
};

export default UKVisitVisa;
