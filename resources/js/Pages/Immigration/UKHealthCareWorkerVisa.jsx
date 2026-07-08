import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { ukHealthCareWorkerData } from "../../data/data";
import {
    FaHospital,
    FaClock,
    FaPoundSign,
    FaBriefcase,
    FaUsers,
    FaGlobe,
} from "react-icons/fa";

const iconMap = {
    FaHospital: FaHospital,
    FaClock: FaClock,
    FaPoundSign: FaPoundSign,
    FaBriefcase: FaBriefcase,
    FaUsers: FaUsers,
    FaGlobe: FaGlobe,
};

const UKHealthCareWorkerVisa = () => {
    return (
        <SubPageLayout
            data={ukHealthCareWorkerData}
            iconMap={iconMap}
            activeLink="/uk-immigration/skilled-worker-visa/health-and-care-worker-visa"
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                { text: "Health & Care Visa", href: null },
            ]}
        />
    );
};

export default UKHealthCareWorkerVisa;
