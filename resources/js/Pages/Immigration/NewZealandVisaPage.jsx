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
    FaGlobeAmericas,
} from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";
import {
    newZealandImmigrationData,
    nzSkilledMigrationData,
    nzSkilledMigrantData,
    nzEmploymentVisaData,
    nzBusinessVisaData,
    nzFamilyVisaData,
    nzGreenListData,
    nzWorkToResidenceData,
    nzAccreditedEmployerData,
    nzEssentialSkillsData,
    nzWorkingHolidayData,
    nzInvestorVisaDetailedData,
    nzEntrepreneurVisaData,
    nzGlobalImpactVisaData,
    nzPartnerVisaData,
    nzParentResidencyVisaData,
    nzDependentChildVisaData,
} from "../../data/newZealandData";

const iconMap = {
    FaHospital: FaHospital,
    FaUniversity: FaUniversity,
    FaMapMarkedAlt: FaMapMarkedAlt,
    FaCalendar: FaCalendar,
    FaClock: FaClock,
    FaShieldAlt: FaShieldAlt,
    FaPlus: FaPlus,
    FaLightbulb: FaLightbulb,
    FaHeart: FaHeart,
    FaUserCheck: FaUserCheck,
    FaRocket: FaRocket,
    FaLeaf: FaLeaf,
    FaGraduationCap: FaGraduationCap,
    FaUserPlus: FaUserPlus,
    FaLanguage: FaLanguage,
    FaHome: FaHome,
    FaPassport: FaPassport,
    FaHandshake: FaHandshake,
    FaHeartbeat: FaHeartbeat,
    FaGlobeAmericas: FaGlobeAmericas,
    MdWork: MdWork,
    MdSchool: MdSchool,
};

const dataMap = {
    main: newZealandImmigrationData,
    skilled: nzSkilledMigrationData,
    "skilled-migrant": nzSkilledMigrantData,
    employment: nzEmploymentVisaData,
    business: nzBusinessVisaData,
    family: nzFamilyVisaData,
    "green-list-occupations": nzGreenListData,
    "work-to-residence-visa": nzWorkToResidenceData,
    "accredited-employer-work-visa": nzAccreditedEmployerData,
    "essential-skills-work-visa": nzEssentialSkillsData,
    "working-holiday-visa": nzWorkingHolidayData,
    "investor-visa": nzInvestorVisaDetailedData,
    "entrepreneur-visa": nzEntrepreneurVisaData,
    "global-impact-visa": nzGlobalImpactVisaData,
    "partner-visa": nzPartnerVisaData,
    "parent-residency-visa": nzParentResidencyVisaData,
    "dependent-child-visa": nzDependentChildVisaData,
};

const NewZealandVisaPage = ({ visaType }) => {
    const data = dataMap[visaType];
    if (!data)
        return (
            <div className="py-20 text-center text-gray-500 font-light">
                Visa type "{visaType}" not found for New Zealand.
            </div>
        );

    const { header } = data;
    const pageTitle =
        visaType === "main" ? "New Zealand Immigration" : header.title;

    return (
        <SubPageLayout
            data={data}
            iconMap={iconMap}
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                {
                    text: "New Zealand Immigration",
                    href:
                        visaType === "main" ? null : "/new-zealand-immigration",
                },
                { text: header.title, href: null },
            ].filter(
                (b) =>
                    b.text !== "New Zealand Immigration" || visaType !== "main"
            )}
            title={pageTitle}
        />
    );
};

export default NewZealandVisaPage;
