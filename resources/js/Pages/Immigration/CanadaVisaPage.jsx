import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { Link } from "@inertiajs/react";
import {
    FaHeartbeat,
    FaGlobeAmericas,
    FaBriefcase,
    FaUniversity,
    FaChartLine,
    FaGlobe,
    FaHospital,
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
} from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";
import {
    canadaImmigrationData,
    canadaExpressEntryData,
    canadaPNPData,
    canadaWorkPermitData,
    canadaBusinessVisaData,
    canadaFamilySponsorshipData,
    canadaPNPAlbertaData,
    canadaPNPBCData,
    canadaPNPOntarioData,
    canadaPNPSaskatchewanData,
    canadaPNPManitobaData,
    canadaPNPNewBrunswickData,
    canadaPNPNovaScotiaData,
    canadaPNPPEIData,
    canadaPNPYukonData,
    canadaPNPNewfoundlandAndLabradorData,
    canadaPNPNorthwestTerritoriesData,
    canadaFSWData,
    canadaFSTData,
    canadaCECData,
    canadaCRSData,
    canadaITAData,
    canadaDrawResultsData,
    canadaOpenWorkPermitData,
    canadaLMIAWorkPermitData,
    canadaEmployerSpecificWorkPermitData,
    canadaGlobalTalentStreamData,
    canadaEntrepreneurStreamsData,
    canadaSpousalSponsorshipData,
    canadaDependentChildSponsorshipData,
    canadaSuperVisaData,
} from "../../data/canadaData";

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
    FaGlobeAmericas,
    FaBriefcase,
    FaChartLine,
    FaGlobe,
    MdWork,
    MdSchool,
};

const dataMap = {
    main: canadaImmigrationData,
    "express-entry": canadaExpressEntryData,
    pnp: canadaPNPData,
    "work-permit": canadaWorkPermitData,
    business: canadaBusinessVisaData,
    family: canadaFamilySponsorshipData,
    "alberta-pnp": canadaPNPAlbertaData,
    "bc-pnp": canadaPNPBCData,
    "ontario-pnp": canadaPNPOntarioData,
    "saskatchewan-pnp": canadaPNPSaskatchewanData,
    "manitoba-pnp": canadaPNPManitobaData,
    "new-brunswick-pnp": canadaPNPNewBrunswickData,
    "nova-scotia-pnp": canadaPNPNovaScotiaData,
    "pei-pnp": canadaPNPPEIData,
    "yukon-pnp": canadaPNPYukonData,
    "newfoundland-labrador-pnp": canadaPNPNewfoundlandAndLabradorData,
    "northwest-territories-pnp": canadaPNPNorthwestTerritoriesData,
    "federal-skilled-worker": canadaFSWData,
    "federal-skilled-trades": canadaFSTData,
    "canadian-experience-class": canadaCECData,
    "crs-calculator": canadaCRSData,
    ita: canadaITAData,
    "draw-results": canadaDrawResultsData,
    "open-work-permit": canadaOpenWorkPermitData,
    "lmia-work-permit": canadaLMIAWorkPermitData,
    "employer-specific-work-permit": canadaEmployerSpecificWorkPermitData,
    "global-talent-stream": canadaGlobalTalentStreamData,
    "entrepreneur-streams": canadaEntrepreneurStreamsData,
    "spousal-sponsorship": canadaSpousalSponsorshipData,
    "dependent-child-sponsorship": canadaDependentChildSponsorshipData,
    "super-visa": canadaSuperVisaData,
};

const CanadaVisaPage = ({ visaType }) => {
    const data = dataMap[visaType];
    if (!data)
        return (
            <div className="py-20 text-center text-gray-500 font-light">
                Visa type "{visaType}" not found for Canada.
            </div>
        );

    const { header } = data;
    const pageTitle = visaType === "main" ? "Canada Immigration" : header.title;

    return (
        <SubPageLayout
            data={data}
            iconMap={iconMap}
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                {
                    text: "Canada Immigration",
                    href: visaType === "main" ? null : "/canada-immigration",
                },
                { text: header.title, href: null },
            ].filter(
                (b) => b.text !== "Canada Immigration" || visaType !== "main"
            )}
            title={pageTitle}
        />
    );
};

export default CanadaVisaPage;
