import SubPageLayout from "../../components/SubPageLayout";
import { ukStartUpVisaData } from "../../data/data";
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

const UKBusinessInnovatorVisaStartUpVisa = () => {
    return (
        <SubPageLayout
            data={ukStartUpVisaData}
            iconMap={iconMap}
            activeLink="/uk-immigration/business-innovator-visa/start-up-visa"
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                {
                    text: "Business & Innovator Visa",
                    href: "/uk-immigration/business-innovator-visa",
                },
                { text: "Start-Up Visa", href: null },
            ]}
        />
    );
};

export default UKBusinessInnovatorVisaStartUpVisa;
