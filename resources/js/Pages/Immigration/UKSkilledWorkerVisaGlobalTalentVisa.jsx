import SubPageLayout from "../../components/SubPageLayout";
import { ukGlobalTalentData } from "../../data/data";
import {
    FaStar,
    FaFlask,
    FaMicrophone,
    FaLaptopCode,
    FaBriefcase,
    FaGlobe,
} from "react-icons/fa";

const iconMap = {
    FaStar: FaStar,
    FaFlask: FaFlask,
    FaMicrophone: FaMicrophone,
    FaLaptopCode: FaLaptopCode,
    FaBriefcase: FaBriefcase,
    FaGlobe: FaGlobe,
};

const UKGlobalTalentVisa = () => {
    return (
        <SubPageLayout
            data={ukGlobalTalentData}
            iconMap={iconMap}
            activeLink="/uk-immigration/skilled-worker-visa/global-talent-visa"
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                {
                    text: "Skilled Worker Visa",
                    href: "/uk-immigration/skilled-worker-visa",
                },
                { text: "Global Talent Visa", href: null },
            ]}
        />
    );
};

export default UKSkilledWorkerVisaGlobalTalentVisa;
