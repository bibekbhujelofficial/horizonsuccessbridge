import {
    FaGlobeEurope,
    FaPassport,
    FaBriefcase,
    FaGraduationCap,
    FaUserFriends,
    FaHandshake,
    FaClock,
    FaCheckCircle,
    FaUniversity,
    FaHeartbeat,
} from "react-icons/fa";

export const schengenImmigrationData = {
    header: {
        title: "Schengen Visa & European Migration",
        subtitle: "Your gateway to over 27 European countries.",
    },
    overview: {
        label: "Overview",
        title: "Explore the Horizon of Europe",
        description:
            "The Schengen Area comprises 29 European countries that have officially abolished all passport and all other types of border control at their mutual borders. Being a part of the Schengen zone allows for greater freedom of movement and opportunities for work, study, and tourism. Our European immigration experts help you navigate the various visa types—from short-stay tourist visas to long-stay national visas for work and residence—ensuring your journey to Europe is smooth and compliant with legal requirements.",
    },
    sections: {
        whatIs: {
            label: "I. Context",
            title: "What is a Schengen Visa?",
            content:
                "A Schengen visa is a short-stay visa that allows a person to travel to any members of the Schengen Area, for stays up to 90 days for tourism or business purposes. It is the most common visa for Europe. For those looking to stay longer, individual European nations offer National Visas (Type D) for employment, education, or family reunification. These visas often provide a pathway to temporary residency and, eventually, permanent settlement in the European Union.",
        },
        whyChoose: {
            label: "II. Benefits",
            title: "Why Migrate to Europe?",
            description:
                "Europe offers a unique blend of heritage, economic stability, and high social standards. From world-class healthcare to subsidized education, the benefits of living in a Schengen country are numerous.",
            items: [
                {
                    title: "Border-Free Travel",
                    text: "Move freely across 29 Schengen member states without internal border checks.",
                    icon: "FaGlobeEurope",
                },
                {
                    title: "Economic Stability",
                    text: "Access to one of the world's most robust and diverse economic markets.",
                    icon: "FaChartLine",
                },
                {
                    title: "Quality of Life",
                    text: "Exceptional public infrastructure, safety, and cultural richness.",
                    icon: "FaHeart",
                },
                {
                    title: "Education & Research",
                    text: "Home to some of the world's oldest and most prestigious universities.",
                    icon: "FaUniversity",
                },
                {
                    title: "Healthcare Systems",
                    text: "Universal healthcare standards that are among the highest globally.",
                    icon: "FaHeartbeat",
                },
                {
                    title: "Cultural Diversity",
                    text: "Experience a mosaic of languages, traditions, and history in a compact area.",
                    icon: "FaUsers",
                },
            ],
        },
        types: {
            label: "III. Visa Types",
            title: "Common European Visa Categories",
            description:
                "Depending on your purpose of travel and intended length of stay, we assist with several European visa programs:",
            items: [
                {
                    title: "Short-Stay Visa (Type C)",
                    icon: "FaPassport",
                    items: [
                        "Tourism & Leisure",
                        "Business Meetings",
                        "Family Visits",
                        "Short-term Training",
                    ],
                },
                {
                    title: "Work & Employment",
                    icon: "FaBriefcase",
                    items: [
                        "EU Blue Card",
                        "National Work Permits",
                        "Intra-Corporate Transfers",
                        "Seasonal Work",
                    ],
                },
                {
                    title: "Study & Research",
                    icon: "FaGraduationCap",
                    items: [
                        "University Enrollment",
                        "Research Fellowships",
                        "Vocational Training",
                        "Language Courses",
                    ],
                },
                {
                    title: "Family Reunion",
                    icon: "FaUserFriends",
                    items: [
                        "Spouse/Partner Joining",
                        "Dependent Children",
                        "Dependent Parents",
                    ],
                },
            ],
        },
        whyAustin: {
            label: "IV. Our Advantage",
            title: "Why Horizon Success Bridge for Europe?",
            description:
                "European immigration rules vary significantly between countries like Germany, France, and Malta. We provide the localized expertise you need to succeed in your application.",
            steps: [
                {
                    number: "01",
                    title: "Country Selection",
                    description:
                        "We help you choose the European country that best fits your profile and goals.",
                },
                {
                    number: "02",
                    title: "Document Legalization",
                    description:
                        "Assistance with apostilles, translations, and authentication for European authorities.",
                },
                {
                    number: "03",
                    title: "Premium Processing",
                    description:
                        "Expert preparation to ensure high approval rates and minimize delays.",
                },
                {
                    number: "04",
                    title: "Interview Coaching",
                    description:
                        "Mock interviews to prepare you for consulate or embassy appointments.",
                },
            ],
        },
    },
    sidebar: {
        title: "European Visas",
        items: [
            {
                title: "Schengen Visit Visa",
                href: "/migrate/schengen/visit",
                description: "Short-term travel for tourism or business.",
            },
            {
                title: "Work Permits",
                href: "/migrate/schengen/work",
                description: "Employment opportunities in EU nations.",
            },
            {
                title: "Study in Europe",
                href: "/study/study-in-denmark", // Linking to existing study pages
                description: "Access world-class European education.",
            },
            {
                title: "EU Blue Card",
                href: "/migrate/schengen/blue-card",
                description: "For highly qualified non-EU professionals.",
            },
        ],
    },
};
