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
    australiaImmigrationData,
    australiaSkilledMigrationData,
    australiaEmployerSponsoredData,
    australiaBusinessVisaData,
    australiaRegionalVisasData,
    australiaFamilyPartnerData,
    australiaSubclass189Data,
    australiaSubclass190Data,
    australiaSubclass491Data,
    australiaSubclass482Data,
    australiaSubclass186Data,
    australiaSubclass494Data,
    australiaSubclass188Data,
    australiaSubclass888Data,
    australiaSubclass891Data,
    australiaSubclass858Data,
    australiaPartnerVisaData,
    australiaParentVisaData,
    australiaChildVisaData,
    australiaVICData,
    australiaNSWData,
    australiaQLDData,
    australiaSAData,
    australiaWAData,
    australiaTASData,
    australiaNTData,
    australiaACTData,
} from "../../data/australiaData";

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
    main: australiaImmigrationData,
    skilled: australiaSkilledMigrationData,
    employer: australiaEmployerSponsoredData,
    business: australiaBusinessVisaData,
    regional: australiaRegionalVisasData,
    family: australiaFamilyPartnerData,
    "subclass-189": australiaSubclass189Data,
    "subclass-190": australiaSubclass190Data,
    "subclass-491": australiaSubclass491Data,
    "subclass-482": australiaSubclass482Data,
    "subclass-186": australiaSubclass186Data,
    "subclass-494": australiaSubclass494Data,
    "subclass-188": australiaSubclass188Data,
    "subclass-888": australiaSubclass888Data,
    "subclass-891": australiaSubclass891Data,
    "subclass-858": australiaSubclass858Data,
    "subclass-820-801": australiaPartnerVisaData,
    "subclass-309-100": australiaPartnerVisaData,
    "subclass-103-143": australiaParentVisaData,
    "subclass-101": australiaChildVisaData,
    victoria: australiaVICData,
    "new-south-wales": australiaNSWData,
    queensland: australiaQLDData,
    "south-australia": australiaSAData,
    "western-australia": australiaWAData,
    tasmania: australiaTASData,
    "northern-territory": australiaNTData,
    "australian-capital-territory": australiaACTData,
};

const AustraliaVisaPage = ({ visaType }) => {
    const data = dataMap[visaType];
    if (!data)
        return (
            <div className="py-20 text-center text-gray-500 font-light">
                Visa type "{visaType}" not found for Australia.
            </div>
        );

    const { header } = data;
    const pageTitle =
        visaType === "main" ? "Australia Immigration" : header.title;

    return (
        <SubPageLayout
            data={data}
            iconMap={iconMap}
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                {
                    text: "Australia Immigration",
                    href: visaType === "main" ? null : "/australia-immigration",
                },
                { text: header.title, href: null },
            ].filter(
                (b) => b.text !== "Australia Immigration" || visaType !== "main"
            )}
            title={pageTitle}
        />
    );
};

export default AustraliaVisaPage;
