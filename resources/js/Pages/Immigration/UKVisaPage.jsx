import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { Link } from "@inertiajs/react";
import {
    FaBuilding,
    FaHospital,
    FaUniversity,
    FaMapMarkedAlt,
    FaCalendar,
    FaClock,
    FaShieldAlt,
    FaPlus,
    FaLightbulb,
    FaHeart,
    FaUserCheck,
    FaRocket,
    FaLeaf,
    FaGraduationCap,
    FaUserPlus,
    FaLanguage,
    FaHome,
    FaPassport,
    FaHandshake,
    FaHeartbeat,
    FaGlobe,
    FaBriefcase,
    FaPoundSign,
    FaUsers,
    FaChartLine,
    FaUserTie,
    FaSync,
    FaBolt,
    FaCheck,
    FaFlagCheckered,
    FaAward,
    FaPlane,
} from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";
import {
    ukImmigrationData,
    ukSkilledWorkerData,
    ukSkilledWorkerTier2Data,
    ukHealthCareWorkerData,
    ukExpansionWorkerData,
    ukGlobalTalentData,
    ukBusinessInnovatorData,
    ukInnovatorVisaData,
    ukStartUpVisaData,
    ukInvestorVisaData,
    ukFamilyDependentVisaData,
    ukSpouseVisaData,
    ukParentVisaData,
    ukDependentChildVisaData,
    ukPRCitizenshipData,
    ukILRData,
    ukBritishCitizenshipData,
    ukVisitVisaData,
    ukStudyVisaData,
} from "../../data/ukData";

const iconMap = {
    FaHospital,
    FaUniversity,
    FaMapMarkedAlt,
    FaCalendar,
    FaClock,
    FaShieldAlt,
    FaPlus,
    FaLightbulb,
    FaHeart,
    FaUserCheck,
    FaRocket,
    FaLeaf,
    FaGraduationCap,
    FaUserPlus,
    FaLanguage,
    FaHome,
    FaPassport,
    FaHandshake,
    FaHeartbeat,
    FaGlobe,
    FaBriefcase,
    FaPoundSign,
    FaUsers,
    FaChartLine,
    FaUserTie,
    FaSync,
    FaBolt,
    FaCheck,
    FaFlagCheckered,
    FaAward,
    FaPlane,
    MdWork,
    MdSchool,
};

const dataMap = {
    main: ukImmigrationData,
    "skilled-worker": ukSkilledWorkerData,
    "skilled-visa-tier-2": ukSkilledWorkerTier2Data,
    "health-care-worker": ukHealthCareWorkerData,
    "expansion-worker": ukExpansionWorkerData,
    "global-talent": ukGlobalTalentData,
    "business-innovator": ukBusinessInnovatorData,
    "innovator-visa": ukInnovatorVisaData,
    "start-up-visa": ukStartUpVisaData,
    "investor-visa": ukInvestorVisaData,
    "family-dependent": ukFamilyDependentVisaData,
    "spouse-visa": ukSpouseVisaData,
    "parent-visa": ukParentVisaData,
    "dependent-child-visa": ukDependentChildVisaData,
    "pr-citizenship": ukPRCitizenshipData,
    ilr: ukILRData,
    "british-citizenship": ukBritishCitizenshipData,
    "visit-visa": ukVisitVisaData,
    study: ukStudyVisaData,
};

const UKVisaPage = ({ visaType }) => {
    const data = dataMap[visaType];
    if (!data)
        return (
            <div className="py-20 text-center text-gray-500 font-light">
                Visa type "{visaType}" not found for UK.
            </div>
        );

    const { header } = data;
    const pageTitle = visaType === "main" ? "UK Immigration" : header.title;

    return (
        <SubPageLayout
            data={data}
            iconMap={iconMap}
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                {
                    text: "UK Immigration",
                    href: visaType === "main" ? null : "/uk-immigration",
                },
                { text: header.title, href: null },
            ].filter((b) => b.text !== "UK Immigration" || visaType !== "main")}
            title={pageTitle}
        />
    );
};

export default UKVisaPage;
