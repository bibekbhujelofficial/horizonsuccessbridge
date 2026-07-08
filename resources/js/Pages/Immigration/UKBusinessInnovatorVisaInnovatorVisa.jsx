import SubPageLayout from "../../components/SubPageLayout";
import { ukInnovatorVisaData } from "../../data/data";
import {
    FaLightbulb,
    FaBriefcase,
    FaPoundSign,
    FaChartLine,
    FaGlobe,
    FaUsers,
} from "react-icons/fa";

const iconMap = {
    FaLightbulb: FaLightbulb,
    FaBriefcase: FaBriefcase,
    FaPoundSign: FaPoundSign,
    FaChartLine: FaChartLine,
    FaGlobe: FaGlobe,
    FaUsers: FaUsers,
};

const UKBusinessInnovatorVisaInnovatorVisa = () => {
    return (
        <SubPageLayout
            data={ukInnovatorVisaData}
            iconMap={iconMap}
            activeLink="/uk-immigration/business-innovator-visa/innovator-visa"
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                {
                    text: "Business & Innovator Visa",
                    href: "/uk-immigration/business-innovator-visa",
                },
                { text: "Innovator Visa", href: null },
            ]}
        />
    );
};

export default UKBusinessInnovatorVisaInnovatorVisa;
