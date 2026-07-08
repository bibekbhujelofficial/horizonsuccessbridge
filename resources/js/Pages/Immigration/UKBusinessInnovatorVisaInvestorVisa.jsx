import SubPageLayout from "../../components/SubPageLayout";
import { ukInvestorVisaData } from "../../data/data";
import {
    FaPoundSign,
    FaGlobe,
    FaChartLine,
    FaUsers,
    FaBriefcase,
    FaMoneyBillWave,
} from "react-icons/fa";

const iconMap = {
    FaPoundSign: FaPoundSign,
    FaGlobe: FaGlobe,
    FaChartLine: FaChartLine,
    FaUsers: FaUsers,
    FaBriefcase: FaBriefcase,
    FaMoneyBillWave: FaMoneyBillWave,
};

const UKBusinessInnovatorVisaInvestorVisa = () => {
    return (
        <SubPageLayout
            data={ukInvestorVisaData}
            iconMap={iconMap}
            activeLink="/uk-immigration/business-innovator-visa/investor-visa"
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                {
                    text: "Business & Innovator Visa",
                    href: "/uk-immigration/business-innovator-visa",
                },
                { text: "Investor Visa", href: null },
            ]}
        />
    );
};

export default UKBusinessInnovatorVisaInvestorVisa;
