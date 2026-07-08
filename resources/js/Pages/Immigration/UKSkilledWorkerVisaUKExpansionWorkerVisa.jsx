import SubPageLayout from "../../components/SubPageLayout";
import { ukExpansionWorkerData } from "../../data/data";
import {
    FaGlobe,
    FaBuilding,
    FaPoundSign,
    FaUsers,
    FaUserShield,
    FaCalendarAlt,
} from "react-icons/fa";

const iconMap = {
    FaGlobe: FaGlobe,
    FaBuilding: FaBuilding,
    FaPoundSign: FaPoundSign,
    FaUsers: FaUsers,
    FaUserShield: FaUserShield,
    FaCalendarAlt: FaCalendarAlt,
};

const UKExpansionWorkerVisa = () => {
    return (
        <SubPageLayout
            data={ukExpansionWorkerData}
            iconMap={iconMap}
            activeLink="/uk-immigration/skilled-worker-visa/uk-expansion-worker-visa"
            breadcrumbs={[
                { text: "Migrate", href: "/migrate" },
                { text: "UK Immigration", href: "/uk-immigration" },
                {
                    text: "Skilled Worker Visa",
                    href: "/uk-immigration/skilled-worker-visa",
                },
                { text: "Expansion Worker Visa", href: null },
            ]}
        />
    );
};

export default UKSkilledWorkerVisaUKExpansionWorkerVisa;
