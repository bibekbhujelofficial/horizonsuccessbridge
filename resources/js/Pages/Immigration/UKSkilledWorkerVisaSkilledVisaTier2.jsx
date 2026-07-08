import SubPageLayout from "../../components/SubPageLayout";
import { ukSkilledWorkerTier2Data } from "../../data/data";
import {
    FaBriefcase,
    FaPoundSign,
    FaUsers,
    FaHospital,
    FaMapMarkedAlt,
    FaGlobe,
} from "react-icons/fa";

const iconMap = {
    FaBriefcase: FaBriefcase,
    FaPoundSign: FaPoundSign,
    FaUsers: FaUsers,
    FaHospital: FaHospital,
    FaMapMarkedAlt: FaMapMarkedAlt,
    FaGlobe: FaGlobe,
};

const UKSkilledWorkerTier2Visa = () => {
    return (
        <SubPageLayout
            data={ukSkilledWorkerTier2Data}
            iconMap={iconMap}
            activeLink="/uk-immigration/skilled-worker-visa/skilled-visa"
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                {
                    text: "Skilled Worker Visa",
                    href: "/uk-immigration/skilled-worker-visa",
                },
                { text: "Tier 2", href: null },
            ]}
        />
    );
};

export default UKSkilledWorkerVisaSkilledVisaTier2;
