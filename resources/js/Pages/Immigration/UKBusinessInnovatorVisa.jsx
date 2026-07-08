import SubPageLayout from "../../components/SubPageLayout";
import { ukBusinessInnovatorData } from "../../data/data";
import {
    FaLightbulb,
    FaChartLine,
    FaBuilding,
    FaUsers,
    FaAward,
    FaGlobe,
    FaFlagCheckered,
    FaShieldAlt,
    FaTools,
} from "react-icons/fa";
import { IoMdCash } from "react-icons/io";

const iconMap = {
    FaLightbulb: FaLightbulb,
    FaChartLine: FaChartLine,
    FaBuilding: FaBuilding,
    FaUsers: FaUsers,
    FaAward: FaAward,
    FaGlobe: FaGlobe,
    FaFlagCheckered: FaFlagCheckered,
    IoMdCash: IoMdCash,
    FaShieldAlt: FaShieldAlt,
    FaTools: FaTools,
};

const UKBusinessInnovatorVisa = () => {
    return (
        <SubPageLayout
            data={ukBusinessInnovatorData}
            iconMap={iconMap}
            activeLink="/uk-immigration/business-innovator-visa"
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                { text: "Business & Innovator Visa", href: null },
            ]}
        />
    );
};

export default UKBusinessInnovatorVisa;
