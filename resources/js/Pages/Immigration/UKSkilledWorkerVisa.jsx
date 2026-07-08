import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { ukSkilledWorkerData } from "../../data/data";
import {
    FaBriefcase,
    FaPoundSign,
    FaUsers,
    FaHospital,
    FaGlobe,
    FaMapMarkedAlt,
} from "react-icons/fa";

const iconMap = {
    FaBriefcase: FaBriefcase,
    FaPoundSign: FaPoundSign,
    FaUsers: FaUsers,
    FaHospital: FaHospital,
    FaGlobe: FaGlobe,
    FaMapMarkedAlt: FaMapMarkedAlt,
};

const UKSkilledWorkerVisa = () => {
    return (
        <SubPageLayout
            data={ukSkilledWorkerData}
            iconMap={iconMap}
            activeLink="/uk-immigration/skilled-worker-visa"
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                { text: "Skilled Worker Visa", href: null },
            ]}
        />
    );
};

export default UKSkilledWorkerVisa;
