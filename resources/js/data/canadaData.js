import {
    FaCalendar,
    FaCheckCircle,
    FaHome,
    FaLightbulb,
    FaUsers,
    FaUserTie,
    FaLanguage,
    FaRocket,
    FaLeaf,
    FaGraduationCap,
    FaUserPlus,
    FaClock,
    FaArrowRight,
    FaPassport,
    FaHandshake,
    FaHeartbeat,
    FaGlobeAmericas,
} from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";

export const canadaImmigrationData = {
    header: {
        title: "Canada Immigration",
        subtitle: "Simplified pathways to Canadian Permanent Residency.",
    },
    overview: {
        label: "Overview",
        title: "Your Pathway to a New Future in Canada",
        description:
            "Canada is one of the most welcoming and immigrant-friendly countries in the world, offering excellent opportunities for skilled professionals, students, entrepreneurs, and families looking to settle in a stable and thriving environment. Whether you want to work, study, invest, or become a permanent resident, navigating Canada's immigration process can be complex. Our Canada Immigration Services provide expert guidance and end-to-end support to help you successfully apply for your visa and build a bright future in Canada.",
    },
    sections: {
        whatIs: {
            label: "I. Context",
            title: "What is Canada Immigration?",
            content:
                "Canada Immigration refers to the legal process of entering and settling in Canada for various purposes such as work, study, business, family reunification, or permanent residency. Canada is one of the most immigrant-friendly countries, offering numerous visa programs to attract skilled professionals, entrepreneurs, students, and families from around the world. \n\nThe Canadian immigration system is designed to support economic growth and diversity, providing pathways to temporary and permanent residency, with many leading to Canadian citizenship. The government of Canada, through Immigration, Refugees and Citizenship Canada (IRCC), manages immigration programs, ensuring fair and structured entry processes for eligible applicants.",
        },
        whyChoose: {
            label: "II. Objectives",
            title: "What Makes Canada the Perfect Destination?",
            description:
                "Canada is one of the most immigrant-friendly countries, offering exceptional opportunities for career advancement, education, business, and a high quality of life.",
            items: [
                {
                    title: "Strong Job Market",
                    text: "High demand for skilled workers in Healthcare, IT, Engineering, Finance, and more.",
                    icon: "FaBriefcase",
                },
                {
                    title: "World-Class Education",
                    text: "Home to top universities such as the University of Toronto, McGill, and UBC.",
                    icon: "FaUniversity",
                },
                {
                    title: "Pathway to Permanent Residency",
                    text: "Multiple programs leading to Canadian Permanent Residency (PR) and eventual citizenship.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Business & Investment Opportunities",
                    text: "A stable economy and government support for entrepreneurs and investors.",
                    icon: "FaChartLine",
                },
                {
                    title: "Social Security & Benefits",
                    text: "Access to free healthcare, child benefits, pension plans, and unemployment support.",
                    icon: "FaHospital",
                },
                {
                    title: "High Quality of Life",
                    text: "A safe, diverse, and inclusive society with universal healthcare and excellent public services.",
                    icon: "FaGlobe",
                },
            ],
        },
        types: {
            label: "III. Scope",
            title: "Our Canada Immigration Services",
            description:
                "We offer end-to-end support for a wide range of Canada visa programs, ensuring a seamless and stress-free immigration process. Whether you're applying for a skilled visa, study permit, business immigration, or permanent residency, our expert team provides personalized guidance.",
            items: [
                {
                    title: "Express Entry Program",
                    icon: "FaBolt",
                    items: [
                        "Federal Skilled Worker",
                        "Federal Skilled Trades",
                        "Canadian Experience Class",
                    ],
                },
                {
                    title: "PNP Program",
                    icon: "FaMap",
                    items: [
                        "Skilled Workers & Express Entry",
                        "Entrepreneurs & Investors",
                        "Regional & Critical Workers",
                    ],
                },
                {
                    title: "Business & Investment",
                    icon: "FaChartBar",
                    items: [
                        "Investor Visa",
                        "Start-Up Visa",
                        "Entrepreneur Streams",
                    ],
                },
                {
                    title: "Family Sponsorship",
                    icon: "FaUsers",
                    items: [
                        "Spousal Sponsorship",
                        "Dependent Child Sponsorship",
                        "Parent & Grandparent Super Visa",
                    ],
                },
                {
                    title: "Work Permits",
                    icon: "FaTools",
                    items: [
                        "Open Work Permit",
                        "LMIA Work Permit",
                        "Global Talent Stream",
                        "Employer-Specific",
                    ],
                },
                {
                    title: "Study & Visit",
                    icon: "FaPlane",
                    items: [
                        "Study Permit",
                        "Student Direct Stream",
                        "Single/Multiple-Entry Visa",
                        "Super Visa",
                    ],
                },
            ],
        },
        whyAustin: {
            label: "IV. Methodology",
            title: "Why Choose Horizon Success Bridge for Canada Immigration?",
            description:
                "Navigating the Canada immigration process can be complex, with various visa categories, legal requirements, and changing policies. Our expert team provides comprehensive, step-by-step assistance.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canada immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your career, education, or business needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
    },
    sidebar: {
        title: "Canada Immigration",
        items: [
            {
                title: "Express Entry Program",
                href: "/canada-immigration/express-entry-program",
                description:
                    "Fast-track PR for skilled workers through a points-based system.",
            },
            {
                title: "Provincial Nominee Program",
                href: "/canada-immigration/provincial-nominee-program",
                description:
                    "Get PR through a province's nomination based on labor needs.",
            },
            {
                title: "Business & Investment Visa",
                href: "/canada-immigration/business-investment-visa",
                description:
                    "For entrepreneurs investing in or starting a business in Canada.",
            },
            {
                title: "Family Sponsorship",
                href: "/canada-immigration/family-sponsorship",
                description: "Sponsor family members for Canadian residency.",
            },
            {
                title: "Work Permits",
                href: "/canada-immigration/work-permits",
                description:
                    "Legal work authorization for foreign nationals in Canada.",
            },
            {
                title: "Study Visa",
                href: "/study/study-in-canada",
                description:
                    "Study in Canada with work eligibility at approved institutions.",
            },
            {
                title: "Visit Visa",
                href: "/visit/canada-visit-visa",
                description:
                    "Short-term visa for tourism, family visits, or business.",
            },
        ],
    },
};

export const canadaExpressEntryData = {
    header: {
        label: "Direct Pathway to Canada PR",
        title: "Your Pathway to Canada: Express Entry Program",
        description:
            "Fast-track your Canadian PR through the points-based Express Entry immigration system.",
    },
    sections: {
        whatIs: {
            title: "What is the Express Entry Program?",
            content:
                "The Express Entry program is an online system used by the Canadian government to manage applications for permanent residency from skilled workers. It includes three main streams: the Federal Skilled Worker Program (FSW), the Federal Skilled Trades Program (FST), and the Canadian Experience Class (CEC). Candidates are ranked using the Comprehensive Ranking System (CRS), and the highest-ranking candidates are invited to apply for permanent residency.\n\nThe Express Entry program is one of the fastest ways to immigrate to Canada, with processing times as short as six months for successful applicants.",
        },
        whyChoose: {
            title: "Why Choose the Express Entry Program?",
            items: [
                {
                    title: "Fast Processing",
                    text: "Most job applications are typically processed within approximately six months.",
                    icon: "FaClock",
                },
                {
                    title: "No Job Offer Required",
                    text: "Candidates can apply without a job offer, though additional points are awarded for one.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Pathway to Citizenship",
                    text: "Successful applicants can apply for Canadian citizenship after meeting residency requirements.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Flexibility",
                    text: "Candidates can boost their CRS score by gaining experience, improving language skills, or securing a job offer.",
                    icon: "FaChartLine",
                },
                {
                    title: "Family Inclusion",
                    text: "Include your spouse, elderly parents, and dependent children in your application.",
                    icon: "FaUserTie",
                },
                {
                    title: "Global Opportunities",
                    text: "Live and work in a country renowned for its quality of life, healthcare, and education.",
                    icon: "FaFlagCheckered",
                },
            ],
        },
        types: {
            title: "Types of Express Entry Programs",
            description:
                "The Express Entry program includes three main streams, each designed for different types of skilled workers. Below are the details of each stream:",
            items: [
                {
                    title: "Federal Skilled Worker (FSW)",
                    icon: "FaBriefcase",
                    list: [
                        {
                            icon: "FaUserTie",
                            text: "For skilled workers with foreign work experience.",
                        },
                        {
                            icon: "FaClock",
                            text: "Requires at least one year of continuous full-time work experience in a skilled occupation.",
                        },
                        {
                            icon: "FaChartLine",
                            text: "Points awarded for education, language skills, and adaptability.",
                        },
                        {
                            icon: "FaFlagCheckered",
                            text: "No job offer required, but additional points are awarded for one.",
                        },
                    ],
                },
                {
                    title: "Federal Skilled Trades (FST)",
                    icon: "FaBriefcase",
                    list: [
                        {
                            icon: "FaUserTie",
                            text: "For skilled tradespeople with experience in eligible trades.",
                        },
                        {
                            icon: "FaClock",
                            text: "Requires at least two years of full-time work experience in a skilled trade.",
                        },
                        {
                            icon: "FaChartLine",
                            text: "Must meet language requirements and have a valid job offer or certificate of qualification.",
                        },
                    ],
                },
                {
                    title: "Canadian Experience Class (CEC)",
                    icon: "FaBriefcase",
                    list: [
                        {
                            icon: "FaUserTie",
                            text: "For individuals with at least one year of skilled work experience in Canada.",
                        },
                        {
                            icon: "FaClock",
                            text: "Must have gained experience while on a valid work permit.",
                        },
                        {
                            icon: "FaChartLine",
                            text: "No job offer required, but additional points are awarded for one.",
                        },
                    ],
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for Express Entry",
            description:
                "To qualify for the Express Entry program, applicants must meet specific eligibility requirements. These vary depending on the stream but generally include the following:",
            items: [
                {
                    title: "Work Experience",
                    text: "At least one year of skilled work experience (FSW and CEC) or two years in a skilled trade (FST).",
                },
                {
                    title: "Language Proficiency",
                    text: "Minimum language scores in English or French (CLB 7 for FSW and CEC; CLB 5 for FST).",
                },
                {
                    title: "Education",
                    text: "A post-secondary degree, diploma, or certificate (FSW and CEC).",
                },
                {
                    title: "CRS Score",
                    text: "Meet the minimum Comprehensive Ranking System (CRS) score requirement.",
                },
                {
                    title: "Job Offer",
                    text: "Not mandatory but provides additional CRS points.",
                },
                {
                    title: "Proof of Funds",
                    text: "Demonstrate sufficient funds to support yourself and your family (FSW only).",
                },
                {
                    title: "Health & Security Checks",
                    text: "Pass medical and security checks.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Express Entry Program?",
            description:
                "Navigating the Canada immigration process can be complex, with various visa categories, legal requirements, and changing policies. Our expert team provides comprehensive, step-by-step assistance to ensure your application is accurate, well-prepared, and aligned with immigration regulations. With our professional guidance, efficient processing, and tailored solutions, we help make your Canada immigration journey smooth and stress-free.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canada immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your career, education, or business needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
    },
};

export const canadaPNPData = {
    header: {
        label: "Provincial Nominee Program (PNP)",
        title: "Your Pathway to PR Through Provincial Program",
        description:
            "Canada’s Provincial Nominee Program (PNP) allows provinces and territories to nominate individuals who wish to immigrate to Canada and settle in a specific province. Each province has its own immigration streams tailored to meet local labor market needs and economic goals. Whether you are a skilled worker, entrepreneur, or international graduate, the PNP offers a pathway to permanent residency in Canada.",
    },
    sections: {
        whatIs: {
            title: "What is the Provincial Nominee Program?",
            content:
                "The Provincial Nominee Program (PNP) is a Canadian immigration program that enables provinces and territories to nominate individuals who meet their specific economic and labor market needs. Nominated individuals can apply for permanent residency through Immigration, Refugees and Citizenship Canada (IRCC). Each province has unique streams and criteria, making the PNP a flexible and accessible immigration pathway.",
        },
        whyChoose: {
            title: "Why Choose the Provincial Nominee Program?",
            description:
                "The Provincial Nominee Program is an excellent option for individuals who want to settle in a specific Canadian province. It offers tailored immigration pathways, faster processing times, and opportunities to contribute to the local economy. With the PNP, you can build a future in a province that aligns with your skills, experience, and lifestyle preferences.",
            items: [
                {
                    title: "Tailored Immigration Pathways",
                    text: "Each province offers streams aligned with local labor market needs.",
                    icon: "FaMapMarkerAlt",
                },
                {
                    title: "Faster Processing Times",
                    text: "Many PNP streams have quicker processing times compared to federal programs.",
                    icon: "FaFlagCheckered",
                },
                {
                    title: "Pathway to Permanent Residency",
                    text: "Nominees can apply for permanent residency through IRCC.",
                    icon: "FaHome",
                },
                {
                    title: "Job Opportunities",
                    text: "Access to in-demand jobs and career growth in your chosen province.",
                    icon: "FaBuilding",
                },
                {
                    title: "Family Inclusion",
                    text: "Bring your family and dependents to settle and start a new life with you in Canada.",
                    icon: "FaUsers",
                },
                {
                    title: "Diverse Communities",
                    text: "Experience Canada’s multicultural society and welcoming communities.",
                    icon: "FaGlobe",
                },
            ],
        },
        types: {
            title: "Types of Provincial Nominee Programs",
            description:
                "Canada’s Provincial Nominee Program includes multiple streams across various provinces and territories. Each program is designed to address specific economic and labor market needs, offering unique opportunities for skilled workers, entrepreneurs, and international graduates.",
            items: [
                {
                    title: "Alberta PNP",
                    icon: "FaMapMarkerAlt",
                    lists: [
                        "For skilled workers, international graduates, and entrepreneurs.",
                        "Streams include Alberta Opportunity Stream and Alberta Express Entry Stream.",
                        "Focuses on in-demand occupations in Alberta.",
                        "Processing time varies by stream.",
                    ],
                },
                {
                    title: "Ontario PNP (OINP)",
                    icon: "FaMapMarkerAlt",
                    lists: [
                        "For skilled workers, international students, and entrepreneurs.",
                        "Streams include Human Capital Priorities Stream and Employer Job Offer Stream.",
                        "Focuses on Ontario’s labor market needs.",
                        "Processing time varies by stream.",
                    ],
                },
                {
                    title: "British Columbia PNP (BC PNP)",
                    icon: "FaMapMarkerAlt",
                    lists: [
                        "For skilled workers, international graduates, and entrepreneurs.",
                        "Streams include Skills Immigration and Express Entry BC.",
                        "Focuses on in-demand occupations in British Columbia.",
                        "Processing time varies by stream.",
                    ],
                },
                {
                    title: "Saskatchewan PNP (SINP)",
                    icon: "FaMapMarkerAlt",
                    lists: [
                        "For skilled workers, international graduates, and entrepreneurs.",
                        "Streams include International Skilled Worker and Entrepreneur Stream.",
                        "Focuses on Saskatchewan’s labor market needs.",
                        "Processing time varies by stream.",
                    ],
                },
                {
                    title: "Manitoba PNP (MPNP)",
                    icon: "FaMapMarkerAlt",
                    lists: [
                        "For skilled workers, international graduates, and entrepreneurs.",
                        "Streams include Skilled Worker Overseas and Business Investor Stream.",
                        "Focuses on Manitoba’s labor market needs.",
                        "Processing time varies by stream.",
                    ],
                },
                {
                    title: "Nova Scotia PNP (NSNP)",
                    icon: "FaMapMarkerAlt",
                    lists: [
                        "For skilled workers, international graduates, and entrepreneurs.",
                        "Streams include Nova Scotia Demand and Labour Market Priorities.",
                        "Focuses on Nova Scotia’s labor market needs.",
                        "Processing time varies by stream.",
                    ],
                },
                {
                    title: "New Brunswick PNP",
                    icon: "FaMapMarkerAlt",
                    lists: [
                        "For skilled workers, international graduates, and entrepreneurs.",
                        "Streams include Express Entry and Skilled Worker Stream.",
                        "Focuses on New Brunswick’s labor market needs.",
                        "Processing time varies by stream.",
                    ],
                },
                {
                    title: "Prince Edward Island PNP",
                    icon: "FaMapMarkerAlt",
                    lists: [
                        "For skilled workers, international graduates, and entrepreneurs.",
                        "Streams include Labour Impact and Business Impact.",
                        "Focuses on Prince Edward Island’s labor market needs.",
                        "Processing time varies by stream.",
                    ],
                },
                {
                    title: "Newfoundland & Labrador PNP",
                    icon: "FaMapMarkerAlt",
                    lists: [
                        "For skilled workers, international graduates, and entrepreneurs.",
                        "Streams include Express Entry Skilled Worker and International Entrepreneur.",
                        "Focuses on Newfoundland & Labrador’s labor market needs.",
                        "Processing time varies by stream.",
                    ],
                },
                {
                    title: "Northwest Territories PNP",
                    icon: "FaMapMarkerAlt",
                    lists: [
                        "For skilled workers, international graduates, and entrepreneurs.",
                        "Streams include Employer-Driven and Business Stream.",
                        "Focuses on Northwest Territories’ labor market needs.",
                        "Processing time varies by stream.",
                    ],
                },
                {
                    title: "Yukon PNP",
                    icon: "FaMapMarkerAlt",
                    lists: [
                        "For skilled workers, international graduates, and entrepreneurs.",
                        "Streams include Yukon Express Entry and Business Nominee.",
                        "Focuses on Yukon’s labor market needs.",
                        "Processing time varies by stream.",
                    ],
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for Provincial Nominee Program",
            description:
                "To qualify for a Provincial Nominee Program, applicants must meet specific requirements set by the province or territory. Common criteria include:",
            items: [
                {
                    title: "Job Offer",
                    text: "A valid job offer from a provincial employer (required for most streams).",
                },
                {
                    title: "Work Experience",
                    text: "Relevant work experience in an in-demand occupation.",
                },
                {
                    title: "Education",
                    text: "Minimum education requirements, often including a post-secondary degree.",
                },
                {
                    title: "Language Proficiency",
                    text: "Proof of English or French language proficiency (e.g., IELTS, CELPIP).",
                },
                {
                    title: "Settlement Funds",
                    text: "Sufficient funds to support yourself and your family in Canada.",
                },
                {
                    title: "Provincial Connection",
                    text: "A connection to the province, such as prior work or study experience.",
                },
                {
                    title: "Health & Security Checks",
                    text: "Medical examination and background checks are mandatory.",
                },
                {
                    title: "Application Fees",
                    text: "Payment of required government processing fees.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Provincial Nominee Program?",
            description:
                "Navigating the Provincial Nominee Program can be complex, with varying requirements across provinces and territories. Our expert team provides comprehensive, step-by-step assistance to ensure your application is accurate, complete, and aligned with provincial immigration laws. With our professional guidance, you can secure your nomination and permanent residency faster and with greater confidence.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest PNP requirements and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your skills and provincial preferences.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
        pathways: {
            title: "Explore Provincial Programs",
            description:
                "Select a province or territory to learn more about its specific nomination programs, eligibility criteria, and application process.",
            items: [
                {
                    title: "Alberta PNP",
                    desc: "Tailored streams for skilled workers and entrepreneurs in Alberta.",
                    href: "/canada-immigration/provincial-nominee-program/alberta-pnp",
                },
                {
                    title: "British Columbia PNP",
                    desc: "Pathways for workers and graduates in BC's diverse economy.",
                    href: "/canada-immigration/provincial-nominee-program/british-columbia-pnp",
                },
                {
                    title: "Ontario PNP (OINP)",
                    desc: "Immigration opportunities in Canada's most populous province.",
                    href: "/canada-immigration/provincial-nominee-program/ontario-pnp",
                },
                {
                    title: "Saskatchewan PNP (SINP)",
                    desc: "Programs for skilled workers and entrepreneurs in Saskatchewan.",
                    href: "/canada-immigration/provincial-nominee-program/saskatchewan-pnp",
                },
                {
                    title: "Manitoba PNP (MPNP)",
                    desc: "Nomination streams based on Manitoba's labor market needs.",
                    href: "/canada-immigration/provincial-nominee-program/manitoba-pnp",
                },
                {
                    title: "New Brunswick PNP",
                    desc: "Pathways for skilled workers and business people in New Brunswick.",
                    href: "/canada-immigration/provincial-nominee-program/new-brunswick-pnp",
                },
                {
                    title: "Nova Scotia PNP",
                    desc: "Streams for workers, entrepreneurs, and graduates in Nova Scotia.",
                    href: "/canada-immigration/provincial-nominee-program/nova-scotia-pnp",
                },
                {
                    title: "Prince Edward Island PNP",
                    desc: "Immigration options for the island province's economy.",
                    href: "/canada-immigration/provincial-nominee-program/prince-edward-island-pnp",
                },
                {
                    title: "Newfoundland & Labrador PNP",
                    desc: "Nomination programs for Newfoundland & Labrador.",
                    href: "/canada-immigration/provincial-nominee-program/newfoundland-labrador-pnp",
                },
                {
                    title: "Northwest Territories PNP",
                    desc: "Pathways for skilled and semi-skilled workers in the North.",
                    href: "/canada-immigration/provincial-nominee-program/northwest-territories-pnp",
                },
                {
                    title: "Yukon PNP",
                    desc: "Streams for skilled workers and entrepreneurs in Yukon.",
                    href: "/canada-immigration/provincial-nominee-program/yukon-pnp",
                },
            ],
        },
    },
};

export const canadaWorkPermitData = {
    header: {
        label: "Work and Live in Canada",
        title: "Your Pathway to Work in Canada: Work Permits",
        description:
            "Canada offers a variety of work permit options for individuals who want to work temporarily in the country. Whether you are a skilled professional, an international graduate, or a temporary worker, Canada's work permit programs provide opportunities to gain valuable work experience, contribute to the Canadian economy, and potentially transition to permanent residency.",
    },
    sections: {
        whatIs: {
            title: "What is a Work Permit?",
            content:
                "A work permit is a legal document that allows foreign nationals to work in Canada for a specific period. Work permits are typically employer-specific or open, depending on the type of permit. Some work permits require a Labor Market Impact Assessment (LMIA), while others are exempt. Canada's work permit programs are designed to address labor market needs and attract global talent.\n\nWork permits are an excellent way to gain Canadian work experience, which can improve your eligibility for permanent residency programs like Express Entry or Provincial Nominee Programs (PNPs).",
        },
        whyChoose: {
            title: "Why Choose a Work Permit?",
            description:
                "Canada's work permit programs offer numerous benefits for foreign workers, including the opportunity to gain international work experience, access to Canada's thriving job market, and a potential pathway to permanent residency. Below are some of the key benefits of obtaining a work permit in Canada:",
            items: [
                {
                    title: "Work in Canada",
                    text: "Gain valuable work experience in one of the world's strongest economies.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Pathway to PR",
                    text: "Canadian work experience can improve your eligibility for permanent residency programs.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Family Inclusion",
                    text: "Bring your spouse and dependent children to Canada with you.",
                    icon: "FaUsers",
                },
                {
                    title: "Global Opportunities",
                    text: "Work in a diverse and multicultural environment.",
                    icon: "FaGlobeAmericas",
                },
                {
                    title: "Flexibility",
                    text: "Choose from employer-specific or open work permits.",
                    icon: "FaHandshake",
                },
                {
                    title: "High Salaries",
                    text: "Earn competitive wages and benefits in Canada's job market.",
                    icon: "FaMoneyCheck",
                },
            ],
        },
        types: {
            title: "Types of Work Permits",
            description:
                "Canada offers several types of work permits to suit different needs and circumstances. Below are the main categories:",
            items: [
                {
                    title: "Open Work Permit",
                    text: "Allows individuals to work for any employer in Canada. No job offer or LMIA required. Ideal for international graduates, spouses of skilled workers, and participants in specific programs.",
                    icon: "FaBriefcase",
                },
                {
                    title: "LMIA Work Permit",
                    text: "Requires a Labor Market Impact Assessment (LMIA) from the employer. Job offer must meet specific criteria. Ensures that hiring a foreign worker will not negatively impact the Canadian labor market.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Global Talent Stream",
                    text: "For highly skilled workers in tech and other in-demand industries. Fast-track processing for eligible applicants. Helps Canadian employers fill labor shortages quickly.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Employer-Specific Work Permit",
                    text: "Allows individuals to work for a specific employer. Job offer must meet specific criteria. May require an LMIA, depending on the job and employer.",
                    icon: "FaBriefcase",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for Work Permits",
            description:
                "To qualify for a work permit in Canada, applicants must meet specific eligibility requirements. These vary depending on the type of work permit but generally include the following:",
            items: [
                {
                    title: "Job Offer",
                    text: "A valid job offer from a Canadian employer (for employer-specific permits).",
                },
                {
                    title: "LMIA",
                    text: "Labor Market Impact Assessment (LMIA) may be required for certain permits.",
                },
                {
                    title: "Work Experience",
                    text: "Relevant work experience for the job being offered.",
                },
                {
                    title: "Language Proficiency",
                    text: "Minimum language scores in English or French, depending on the job.",
                },
                {
                    title: "Proof of Funds",
                    text: "Demonstrate sufficient funds to support yourself and your family.",
                },
                {
                    title: "Health & Security Checks",
                    text: "Pass medical and security checks.",
                },
                {
                    title: "Temporary Intent",
                    text: "Demonstrate that you intend to leave Canada after your work permit expires.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Work Permits?",
            description:
                "Navigating the Canadian immigration process for family sponsorship can be complex, with specific documentation and eligibility requirements. Our expert team provides comprehensive, step-by-step assistance to ensure your application is accurate, complete, and aligned with Canadian immigration laws. With our professional guidance, you can reunite with your loved ones faster and with greater confidence.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canadian immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your family’s unique needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
    },
};

export const canadaBusinessVisaData = {
    header: {
        label: "Business & Investment Visa",
        title: "Your Pathway to Business Success in Canada",
        description:
            "Canada offers a range of business and investment visa options for entrepreneurs, investors, and business professionals looking to contribute to the Canadian economy. These programs are designed to attract skilled individuals who can drive innovation, create jobs, and invest in Canada’s future.",
    },
    sections: {
        whatIs: {
            title: "What is the Business & Investment Visa?",
            content:
                "The Business & Investment Visa category is tailored for individuals who want to invest, start a business, or contribute to Canada’s economy. It includes visas like the Investor Visa, Start-Up Visa, and Entrepreneur Streams, each catering to different investment levels and entrepreneurial goals.",
        },
        whyChoose: {
            title: "Why Choose a Business & Investment Visa?",
            description:
                "The Business & Investment Visa category is ideal for individuals seeking to establish or expand their business ventures in Canada. With access to a thriving economy, world-class resources, and a pathway to permanent residency, these visas provide a unique opportunity to build a successful future in Canada.",
            items: [
                {
                    title: "Entrepreneurial Opportunities",
                    text: "Start or expand innovative businesses with support from Canadian institutions.",
                    icon: "FaLightbulb",
                },
                {
                    title: "Investor-Friendly Environment",
                    text: "Invest in Canada’s economy and gain permanent residency.",
                    icon: "FaChartLine",
                },
                {
                    title: "Pathway to Permanent Residency",
                    text: "Apply for permanent residency after meeting program requirements.",
                    icon: "FaFlagCheckered",
                },
                {
                    title: "Access to Global Markets",
                    text: "Build connections and scale your business in a stable and prosperous economy.",
                    icon: "FaGlobe",
                },
                {
                    title: "Family Inclusion",
                    text: "Bring your spouse, children, and other eligible dependents to join you and start a new life in Canada.",
                    icon: "FaUsers",
                },
                {
                    title: "World-Class Support",
                    text: "Benefit from Canada’s business-friendly policies and innovation hubs.",
                    icon: "FaAward",
                },
            ],
        },
        types: {
            title: "Types of Business & Investment Visa",
            description:
                "The Business & Investment Visa category includes multiple pathways for entrepreneurs, investors, and business professionals. Each type caters to specific needs, ensuring flexibility and opportunities for a wide range of applicants.",
            items: [
                {
                    title: "Investor Visa",
                    text: "For high-net-worth individuals willing to invest in Canada’s economy. Requires a significant investment in a government-approved fund or business. Provides a pathway to permanent residency. Ideal for passive investors seeking long-term returns.",
                    icon: "FaChartLine",
                },
                {
                    title: "Start-Up Visa",
                    text: "For entrepreneurs with innovative business ideas that can create jobs and compete globally. Requires support from a designated Canadian venture capital fund, angel investor group, or business incubator. Provides permanent residency for successful applicants.",
                    icon: "FaLightbulb",
                },
                {
                    title: "Entrepreneur Streams",
                    text: "For experienced business owners or managers who want to establish or purchase a business in Canada. Requires a business plan and commitment to actively manage the business. Available through provincial nominee programs (PNPs).",
                    icon: "FaChartLine",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for Business & Investment Visa",
            description:
                "To qualify for a Business & Investment Visa, applicants must meet specific requirements based on the program. Common criteria include:",
            items: [
                {
                    title: "Net Worth",
                    text: "Minimum net worth requirements vary by program (e.g., Investor Visa, Entrepreneur Streams).",
                },
                {
                    title: "Investment Amount",
                    text: "Minimum investment in a Canadian business or government-approved fund.",
                },
                {
                    title: "Business Experience",
                    text: "Proven experience in managing or owning a business (for Entrepreneur Streams).",
                },
                {
                    title: "Innovative Business Idea",
                    text: "For Start-Up Visa, a viable and innovative business idea supported by a designated organization.",
                },
                {
                    title: "Language Proficiency",
                    text: "Proof of English or French language proficiency (varies by program).",
                },
                {
                    title: "Settlement Funds",
                    text: "Sufficient funds to support yourself and your family in Canada.",
                },
                {
                    title: "Health & Security Checks",
                    text: "Medical examination and background checks are mandatory.",
                },
                {
                    title: "Business Plan",
                    text: "A detailed business plan outlining your proposed business activities in Canada.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Business & Investment Visa?",
            description:
                "Navigating the Canadian immigration process for business visas can be complex, with specific requirements and documentation. Our expert team provides comprehensive, step-by-step assistance to ensure your application is accurate, complete, and aligned with Canadian immigration laws. With our professional guidance, you can secure your Canadian visa faster and with greater confidence.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canadian immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your business goals and investment needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
    },
};

export const canadaFamilySponsorshipData = {
    header: {
        label: "Family Sponsorship",
        title: "Your Pathway to Reunite with Family in Canada",
        description:
            "Canada’s Family Sponsorship program allows Canadian citizens and permanent residents to sponsor their loved ones to live, work, and study in Canada. Whether you want to bring your spouse, dependent children, or parents and grandparents, Canada offers flexible and inclusive immigration pathways to reunite families.",
    },
    sections: {
        whatIs: {
            title: "What is Family Sponsorship?",
            content:
                "Family Sponsorship is a Canadian immigration program that enables eligible individuals to sponsor their family members for permanent residency or temporary stays in Canada. It includes programs like Spousal Sponsorship, Dependent Child Sponsorship, and the Parent & Grandparent Super Visa, each designed to strengthen family bonds and support reunification.",
        },
        whyChoose: {
            title: "Why Choose Family Sponsorship?",
            description:
                "Family Sponsorship is an excellent way to reunite with your loved ones in Canada. With a welcoming immigration system, world-class healthcare, and a high quality of life, Canada ensures that families can build a future together in a safe and prosperous environment.",
            items: [
                {
                    title: "Reunite with Loved Ones",
                    text: "Bring your spouse, children, or parents to live with you in Canada.",
                    icon: "FaHeart",
                },
                {
                    title: "Permanent Residency",
                    text: "Sponsored family members can obtain permanent residency and enjoy the benefits of living in Canada.",
                    icon: "FaFlagCheckered",
                },
                {
                    title: "Access to Healthcare",
                    text: "Sponsored family members gain access to Canada’s world-class healthcare system.",
                    icon: "FaHandHoldingHeart",
                },
                {
                    title: "Work and Study Opportunities",
                    text: "Sponsored family members can work or study in Canada while building a future together.",
                    icon: "FaGlobe",
                },
                {
                    title: "Inclusive Immigration Policies",
                    text: "Canada prioritizes family reunification and offers flexible pathways for sponsorship.",
                    icon: "FaUsers",
                },
                {
                    title: "Pathway to Citizenship",
                    text: "Sponsored family members can apply for Canadian citizenship after meeting residency requirements.",
                    icon: "FaHome",
                },
            ],
        },
        types: {
            title: "Types of Family Sponsorship",
            description:
                "Canada’s Family Sponsorship program includes multiple pathways to reunite families. Each type caters to specific relationships, ensuring that families can stay together in Canada.",
            items: [
                {
                    title: "Spousal Sponsorship",
                    icon: "FaHeart",
                    lists: [
                        "For Canadian citizens or permanent residents to sponsor their spouse or common-law partner.",
                        "Requires proof of a genuine relationship (e.g., marriage certificate, photos, joint accounts).",
                        "Sponsored spouse can work and study in Canada while their application is being processed.",
                        "Pathway to permanent residency for the sponsored spouse.",
                        "Processing time typically ranges from 12 to 18 months.",
                    ],
                },
                {
                    title: "Dependent Child Sponsorship",
                    icon: "FaChild",
                    lists: [
                        "For Canadian citizens or permanent residents to sponsor their dependent children (under 22 years old).",
                        "Includes biological or adopted children, as well as children under legal guardianship.",
                        "Sponsored children can study in Canada and access public education.",
                        "Pathway to permanent residency for the sponsored child.",
                        "Processing time typically ranges from 12 to 24 months.",
                    ],
                },
                {
                    title: "Parent & Grandparent Super Visa",
                    icon: "FaUsers",
                    lists: [
                        "For Canadian citizens or permanent residents to sponsor their parents or grandparents for temporary stays in Canada.",
                        "Super Visa allows multiple entries and stays of up to 2 years per visit.",
                        "Requires proof of financial support and medical insurance coverage.",
                        "Ideal for parents and grandparents who want to visit their families in Canada for extended periods.",
                        "Processing time typically ranges from 3 to 6 months.",
                    ],
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for Family Sponsorship",
            description:
                "To qualify for Family Sponsorship, both the sponsor and the sponsored family member must meet specific requirements. Common criteria include:",
            items: [
                {
                    title: "Sponsor Eligibility",
                    text: "Must be a Canadian citizen or permanent resident aged 18+.",
                },
                {
                    title: "Financial Proof",
                    text: "Sponsor must demonstrate sufficient income to support the sponsored family member.",
                },
                {
                    title: "Genuine Relationship",
                    text: "Proof of a genuine relationship for spousal sponsorship (e.g., marriage certificate, photos).",
                },
                {
                    title: "Dependent Child Age",
                    text: "Dependent children must be under 22 years old (exceptions apply).",
                },
                {
                    title: "Medical Insurance",
                    text: "For Super Visa, proof of medical insurance coverage for at least 1 year.",
                },
                {
                    title: "Health & Security Checks",
                    text: "Sponsored family members must pass medical and background checks.",
                },
                {
                    title: "Application Fees",
                    text: "Payment of required government processing fees.",
                },
                {
                    title: "Commitment to Support",
                    text: "Sponsor must sign an undertaking to financially support the sponsored family member.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Family Sponsorship?",
            description:
                "Navigating the Canadian immigration process for family sponsorship can be complex, with specific documentation and eligibility requirements. Our expert team provides comprehensive, step-by-step assistance to ensure your application is accurate, complete, and aligned with Canadian immigration laws. With our professional guidance, you can reunite with your loved ones faster and with greater confidence.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canadian immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your family’s unique needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
        pathways: {
            title: "Sponsorship Streams",
            items: [
                {
                    title: "Spousal Sponsorship",
                    desc: "Sponsor your partner.",
                    href: "/canada-immigration/family-sponsorship/spousal-sponsorship",
                },
                {
                    title: "Dependent Child",
                    desc: "Bring your children.",
                    href: "/canada-immigration/family-sponsorship/dependent-child-sponsorship",
                },
                {
                    title: "Parent & Grandparent Super Visa",
                    desc: "Long-term visit visa.",
                    href: "/canada-immigration/family-sponsorship/super-visa",
                },
            ],
        },
    },
};

export const canadaPNPAlbertaData = {
    header: {
        label: "Alberta PNP",
        title: "Your Pathway to Canadian PR with Alberta PNP",
        description:
            "Alberta’s Provincial Nominee Program (PNP) offers a streamlined route to Canadian permanent residency for skilled workers and entrepreneurs who wish to make Alberta their home.",
    },
    sections: {
        overview: {
            title: "What is Alberta PNP?",
            content:
                "The Alberta Provincial Nominee Program (PNP) is designed for individuals who have the skills and experience to contribute to Alberta’s economy. It provides a pathway to permanent residency by nominating candidates who help meet the province’s labor market needs.",
            items: [
                {
                    title: "Thriving Economic Landscape",
                    text: "Benefit from Alberta’s robust energy, technology, and agriculture sectors.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Cost-Effective Living",
                    text: "Enjoy a high quality of life with a lower cost of living and greater financial freedom.",
                    icon: "FaChartLine",
                },
                {
                    title: "Provincial Support Programs",
                    text: "Access tailored newcomer support and settlement services.",
                    icon: "FaGlobe",
                },
                {
                    title: "Streamlined Immigration Process",
                    text: "Experience an efficient nomination process designed for speed and clarity.",
                    icon: "FaUsers",
                },
                {
                    title: "Direct Pathway to PR",
                    text: "Secure a straightforward and reliable route to Canadian permanent residency.",
                    icon: "FaLightbulb",
                },
                {
                    title: "Dynamic Community & Lifestyle",
                    text: "Thrive in a welcoming community that values innovation and diversity.",
                    icon: "FaHome",
                },
            ],
        },
        types: [
            {
                title: "Streams for Workers",
                icon: "FaBriefcase",
                items: [
                    "Alberta Opportunity Stream: For skilled workers currently employed in eligible occupations in Alberta.",
                    "Alberta General Express Entry Stream: For candidates in the federal Express Entry system.",
                    "Alberta Accelerated Tech Pathway: Open to applicants working in Alberta's tech industry.",
                    "Rural Renewal Stream: For candidates with a job offer from an Alberta employer in a rural community.",
                ],
            },
            {
                title: "Streams for Entrepreneurs",
                icon: "FaLightbulb",
                items: [
                    "Farm Stream: For those wishing to operate a farming business in Alberta.",
                    "Graduate Entrepreneur Stream: For international graduates of designated Alberta institutions.",
                    "Foreign Graduate Entrepreneur Stream: For foreign nationals who graduated from outside Canada.",
                    "Rural Entrepreneur Stream: For entrepreneurs looking to start a business in rural Alberta.",
                ],
            },
        ],
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Begin with a consultation to evaluate your eligibility for the Alberta PNP.",
                },
                {
                    number: "02",
                    title: "Documentation & Profile Submission",
                    description:
                        "Gather all necessary documents and submit your profile through the Alberta PNP system.",
                },
                {
                    number: "03",
                    title: "Invitation to Apply (ITA)",
                    description:
                        "If selected, you will receive an Invitation to Apply for provincial nomination.",
                },
                {
                    number: "04",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your full application along with the required fees through our secure portal.",
                },
                {
                    number: "05",
                    title: "Review & Nomination Decision",
                    description:
                        "Your application will be reviewed by Alberta authorities, and a nomination decision will be communicated.",
                },
            ],
        },
    },
};

export const canadaPNPBCData = {
    header: {
        label: "British Columbia PNP",
        title: "Your Pathway to Canadian PR with British Columbia PNP",
        description:
            "British Columbia’s Provincial Nominee Program (BC PNP) offers a direct route to Canadian permanent residency for skilled professionals and entrepreneurs looking to build their future in BC.",
    },
    sections: {
        overview: {
            title: "What is British Columbia PNP?",
            content:
                "The British Columbia Provincial Nominee Program (BC PNP) is designed to attract skilled workers who can help drive BC’s economic growth. By nominating qualified candidates, the province meets its labor market demands.",
            items: [
                {
                    title: "Robust Economy",
                    text: "Leverage BC’s diverse sectors such as tech, film, and natural resources.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Quality of Life",
                    text: "Enjoy a vibrant urban lifestyle paired with convenient access to stunning nature.",
                    icon: "FaChartLine",
                },
                {
                    title: "Comprehensive Support",
                    text: "Benefit from extensive newcomer services and local resources.",
                    icon: "FaGlobe",
                },
                {
                    title: "Efficient Processing",
                    text: "Experience a fast, hassle-free, and transparent streamlined nomination process.",
                    icon: "FaUsers",
                },
                {
                    title: "Direct Path to PR",
                    text: "Secure a clear path toward Canadian permanent residency.",
                    icon: "FaLightbulb",
                },
                {
                    title: "Inclusive Communities",
                    text: "Join diverse and welcoming communities across BC.",
                    icon: "FaHome",
                },
            ],
        },
        types: [
            {
                title: "Skills Immigration Stream",
                icon: "FaBriefcase",
                items: [
                    "For skilled workers with a valid job offer from a B.C. employer.",
                    "Requires a valid work permit and proven work experience.",
                    "Must meet salary and occupation criteria.",
                    "Demonstrate language proficiency in English or French.",
                ],
            },
            {
                title: "Express Entry British Columbia Stream",
                icon: "FaRocket",
                items: [
                    "For candidates already in the federal Express Entry pool.",
                    "Requires a competitive CRS score and provincial eligibility.",
                    "Fast-tracked processing for eligible applicants.",
                    "Must meet language proficiency standards.",
                ],
            },
            {
                title: "Entrepreneur Immigration",
                icon: "FaUsers",
                items: [
                    "For business investors with a viable business plan.",
                    "Requires proven entrepreneurial experience and capital investment.",
                    "Must demonstrate financial stability.",
                    "Offers opportunities to establish or acquire a business.",
                ],
            },
        ],
        eligibility: {
            title: "Eligibility Criteria",
            description:
                "To qualify for the BC PNP, you should meet these criteria:",
            items: [
                {
                    title: "Skilled Work Experience",
                    text: "Have relevant experience in an in‑demand occupation in British Columbia.",
                },
                {
                    title: "Educational Qualifications",
                    text: "Possess the required educational credentials for your field.",
                },
                {
                    title: "Language Proficiency",
                    text: "Prove proficiency in English or French via standardized tests.",
                },
                {
                    title: "Adaptability",
                    text: "Show your readiness to integrate into BC’s workforce and community.",
                },
                {
                    title: "Financial Stability",
                    text: "Demonstrate sufficient funds to support yourself and your family.",
                },
            ],
        },
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Start with a consultation to assess your eligibility for BC PNP.",
                },
                {
                    number: "02",
                    title: "Documentation & Profile Submission",
                    description:
                        "Collect all required documents and submit your profile through the BC PNP portal.",
                },
                {
                    number: "03",
                    title: "Invitation to Apply (ITA)",
                    description:
                        "Upon selection, you will receive an Invitation to Apply for nomination.",
                },
                {
                    number: "04",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your complete application along with the necessary fees using our secure system.",
                },
                {
                    number: "05",
                    title: "Review & Nomination Decision",
                    description:
                        "Your application will be reviewed by BC authorities, and you will receive a nomination decision.",
                },
            ],
        },
    },
};

export const canadaPNPOntarioData = {
    header: {
        label: "Your Pathway to Canadian PR with Ontario PNP",
        title: "Ontario Provincial Nominee Program",
        description:
            "Ontario’s Provincial Nominee Program offers a streamlined route to Canadian permanent residency for skilled workers and entrepreneurs who wish to make Ontario their home.",
    },
    sections: {
        overview: {
            title: "What is Ontario PNP?",
            content:
                "The Ontario Provincial Nominee Program is designed for individuals who have the skills and experience to contribute to Ontario’s economy. It provides a pathway to permanent residency by nominating candidates who help meet the province’s labor market needs.",
            items: [
                {
                    title: "Thriving Economic Landscape",
                    text: "Benefit from Ontario’s diverse sectors including finance, technology, and manufacturing.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Cost-Effective Living",
                    text: "Enjoy a high quality of life with surprisingly competitive living costs and benefits.",
                    icon: "FaChartLine",
                },
                {
                    title: "Provincial Support Programs",
                    text: "Access tailored newcomer support and settlement services.",
                    icon: "FaGlobe",
                },
                {
                    title: "Streamlined Immigration Process",
                    text: "Experience an efficient nomination process designed for clarity and speed.",
                    icon: "FaUsers",
                },
                {
                    title: "Direct Pathway to PR",
                    text: "Secure a straightforward and reliable route to Canadian permanent residency.",
                    icon: "FaLightbulb",
                },
                {
                    title: "Dynamic Community & Lifestyle",
                    text: "Thrive in a welcoming community that values diversity and innovation.",
                    icon: "FaHome",
                },
            ],
        },
        types: [
            {
                title: "Ontario Express Entry Stream",
                icon: "FaRocket",
                items: [
                    "For candidates already in the federal Express Entry pool.",
                    "Requires a competitive Comprehensive Ranking System (CRS) score.",
                    "Fast-tracked processing for eligible applicants.",
                    "Must demonstrate proficiency in English or French.",
                ],
            },
            {
                title: "Ontario Masters/PhD Stream",
                icon: "FaGraduationCap",
                items: [
                    "For international graduates with a Masters or PhD from a recognized Ontario university.",
                    "Must hold an eligible degree and meet academic criteria.",
                    "Designed to attract high-skilled international graduates.",
                    "Requires proof of language proficiency.",
                ],
            },
            {
                title: "Ontario Employer Job Offer Stream",
                icon: "FaBriefcase",
                items: [
                    "For professionals with a valid job offer from an Ontario employer.",
                    "Requires a full-time, permanent position.",
                    "Must meet salary and experience criteria.",
                    "Demonstrated language proficiency is essential.",
                ],
            },
        ],
        eligibility: {
            title: "Eligibility Criteria",
            description:
                "To qualify for the Ontario PNP, ensure you meet the following criteria:",
            items: [
                {
                    title: "Skilled Work Experience",
                    text: "Possess relevant work experience in an in‑demand occupation in Ontario.",
                },
                {
                    title: "Educational Qualifications",
                    text: "Hold the necessary educational credentials to support your application.",
                },
                {
                    title: "Language Proficiency",
                    text: "Demonstrate proficiency in English or French through recognized tests.",
                },
                {
                    title: "Adaptability",
                    text: "Show your ability to integrate into Ontario’s community and workforce.",
                },
                {
                    title: "Financial Stability",
                    text: "Provide proof of funds to support yourself and your dependents upon arrival.",
                },
            ],
        },
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Begin with a consultation to evaluate your eligibility for the Ontario PNP.",
                },
                {
                    number: "02",
                    title: "Documentation & Profile Submission",
                    description:
                        "Gather all necessary documents and submit your profile through the Ontario PNP system.",
                },
                {
                    number: "03",
                    title: "Invitation to Apply (ITA)",
                    description:
                        "If selected, you will receive an Invitation to Apply for provincial nomination.",
                },
                {
                    number: "04",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your full application along with the required fees through our secure portal.",
                },
                {
                    number: "05",
                    title: "Review & Nomination Decision",
                    description:
                        "Your application will be reviewed by Ontario authorities, and a nomination decision will be communicated.",
                },
            ],
        },
    },
};

export const canadaPNPSaskatchewanData = {
    header: {
        label: "Your Pathway to Canadian PR with Saskatchewan PNP",
        title: "Saskatchewan Provincial Nominee Program",
        description:
            "Saskatchewan’s Provincial Nominee Program (PNP) offers a streamlined route to Canadian permanent residency for skilled workers and entrepreneurs who wish to make Saskatchewan their home.",
    },
    sections: {
        overview: {
            title: "What is Saskatchewan PNP?",
            content:
                "The Saskatchewan PNP is designed for individuals with the skills and experience to contribute to Saskatchewan’s economy. It provides a pathway to permanent residency by nominating candidates who meet the province’s labor market needs.",
            items: [
                {
                    title: "Thriving Economic Landscape",
                    text: "Benefit from Saskatchewan’s growing industries and robust agriculture.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Cost-Effective Living",
                    text: "Enjoy a high quality of life with affordable and sustainable living costs.",
                    icon: "FaChartLine",
                },
                {
                    title: "Provincial Support Programs",
                    text: "Access tailored newcomer support and settlement services.",
                    icon: "FaGlobe",
                },
                {
                    title: "Streamlined Immigration Process",
                    text: "Experience an efficient and hassle-free nomination process.",
                    icon: "FaUsers",
                },
                {
                    title: "Direct Pathway to PR",
                    text: "Secure a fast and reliable route to permanent residency in Canada.",
                    icon: "FaLightbulb",
                },
                {
                    title: "Dynamic Community & Lifestyle",
                    text: "Thrive in a welcoming community that values diversity.",
                    icon: "FaHome",
                },
            ],
        },
        types: [
            {
                title: "International Skilled Worker Category",
                icon: "FaBriefcase",
                items: [
                    "For skilled workers applying from outside Canada.",
                    "Requires proof of work experience in an eligible occupation.",
                    "Must meet language proficiency requirements.",
                    "Provides a pathway to permanent residency.",
                ],
            },
            {
                title: "Saskatchewan Experience Category",
                icon: "FaRocket",
                items: [
                    "For applicants already working in Saskatchewan.",
                    "Requires a valid work permit and relevant local work experience.",
                    "Focuses on meeting Saskatchewan’s labor market needs.",
                    "Offers a direct route to permanent residency.",
                ],
            },
            {
                title: "Entrepreneur and Farm Category",
                icon: "FaLeaf",
                items: [
                    "For entrepreneurs and experienced farmers.",
                    "Requires a viable business or farm plan with sufficient investment.",
                    "Must demonstrate financial stability.",
                    "Provides a pathway to permanent residency through business success.",
                ],
            },
            {
                title: "International Graduate Entrepreneur Category",
                icon: "FaGraduationCap",
                items: [
                    "For international graduates with entrepreneurial potential.",
                    "Must hold an eligible degree and meet academic criteria.",
                    "Offers opportunities to launch a business in Saskatchewan.",
                    "Requires proof of language proficiency.",
                ],
            },
        ],
        eligibility: {
            title: "Eligibility Criteria",
            description:
                "To qualify for the Saskatchewan PNP, ensure you meet the following criteria:",
            items: [
                {
                    title: "Skilled Work Experience",
                    text: "Relevant work experience in an in‑demand occupation in Saskatchewan.",
                },
                {
                    title: "Educational Qualifications",
                    text: "Hold the necessary credentials to support your application.",
                },
                {
                    title: "Language Proficiency",
                    text: "Demonstrate proficiency in English or French through recognized tests.",
                },
                {
                    title: "Adaptability",
                    text: "Show your ability to integrate into Saskatchewan’s community.",
                },
                {
                    title: "Financial Stability",
                    text: "Provide proof of funds for you and your dependents upon arrival.",
                },
            ],
        },
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Begin with a consultation to evaluate your eligibility for the Saskatchewan PNP.",
                },
                {
                    number: "02",
                    title: "Documentation & Profile Submission",
                    description:
                        "Gather all necessary documents and submit your profile through the Saskatchewan PNP system.",
                },
                {
                    number: "03",
                    title: "Invitation to Apply (ITA)",
                    description:
                        "If selected, you will receive an Invitation to Apply for provincial nomination.",
                },
                {
                    number: "04",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your full application along with the required fees through our secure portal.",
                },
                {
                    number: "05",
                    title: "Review & Nomination Decision",
                    description:
                        "Your application will be reviewed by Saskatchewan authorities, and a nomination decision will be communicated.",
                },
            ],
        },
    },
};

export const canadaPNPManitobaData = {
    header: {
        label: "Your Pathway to Canadian PR with Manitoba PNP",
        title: "Manitoba Provincial Nominee Program",
        description:
            "Manitoba’s Provincial Nominee Program (PNP) offers a streamlined route to Canadian permanent residency for skilled workers and entrepreneurs looking to make Manitoba their home.",
    },
    sections: {
        overview: {
            title: "What is Manitoba PNP?",
            content:
                "The Manitoba PNP is designed for individuals with the skills and experience needed to contribute to Manitoba’s diverse economy. It provides a pathway to permanent residency by nominating candidates who meet the province’s labor market demands.",
            items: [
                {
                    title: "Thriving Economic Opportunities",
                    text: "Benefit from diverse industries and agriculture.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Cost-Effective Living",
                    text: "Enjoy a balanced lifestyle with affordable living costs.",
                    icon: "FaChartLine",
                },
                {
                    title: "Provincial Support Programs",
                    text: "Access newcomer support and settlement services.",
                    icon: "FaGlobe",
                },
                {
                    title: "Efficient Immigration Process",
                    text: "Experience a streamlined nomination process.",
                    icon: "FaUsers",
                },
                {
                    title: "Direct Pathway to PR",
                    text: "Secure a straightforward route to permanent residency.",
                    icon: "FaLightbulb",
                },
                {
                    title: "Vibrant Community & Lifestyle",
                    text: "Thrive in a diverse, friendly, and supportive community with rich culture.",
                    icon: "FaHome",
                },
            ],
        },
        types: [
            {
                title: "Skilled Worker in Manitoba Stream",
                icon: "FaBriefcase",
                items: [
                    "For skilled workers already residing in Manitoba with a valid job offer.",
                    "Requires relevant work experience and a valid work permit.",
                    "Must meet language proficiency standards.",
                    "Provides a direct pathway to permanent residency.",
                ],
            },
            {
                title: "Skilled Worker Overseas Stream",
                icon: "FaRocket",
                items: [
                    "For skilled workers applying from outside Canada.",
                    "Requires job experience in an eligible occupation.",
                    "Competitive selection criteria based on skills and experience.",
                    "Proof of language proficiency is essential.",
                ],
            },
            {
                title: "Manitoba Business Investor Stream",
                icon: "FaDollarSign",
                items: [
                    "For entrepreneurs with experience in business management.",
                    "Requires a viable business plan and investment capital.",
                    "Must demonstrate financial stability.",
                    "Offers a pathway to permanent residency through business investment.",
                ],
            },
            {
                title: "International Education Stream",
                icon: "FaGraduationCap",
                items: [
                    "For international graduates from Manitoba institutions.",
                    "Requires completion of an eligible academic program.",
                    "Designed to transition students to permanent residency.",
                    "Must meet language proficiency requirements.",
                ],
            },
            {
                title: "Morden Community Driven Initiative",
                icon: "FaUsers",
                items: [
                    "For candidates with strong ties to the Morden community.",
                    "Requires a job offer or community sponsorship from local employers.",
                    "Emphasizes local integration and community support.",
                    "Must satisfy language and settlement criteria.",
                ],
            },
        ],
        eligibility: {
            title: "Eligibility Criteria",
            description:
                "To qualify for Manitoba PNP, ensure you meet the following criteria:",
            items: [
                {
                    title: "Skilled Work Experience",
                    text: "Relevant work experience in an in‑demand occupation in Manitoba.",
                },
                {
                    title: "Educational Qualifications",
                    text: "Hold the necessary credentials to support your application.",
                },
                {
                    title: "Language Proficiency",
                    text: "Demonstrate proficiency in English or French through recognized tests.",
                },
                {
                    title: "Adaptability",
                    text: "Show your ability to integrate into Manitoba’s community.",
                },
                {
                    title: "Financial Stability",
                    text: "Provide proof of funds for you and your dependents.",
                },
            ],
        },
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Start with a consultation to evaluate your eligibility for Manitoba PNP.",
                },
                {
                    number: "02",
                    title: "Documentation & Profile Submission",
                    description:
                        "Gather necessary documents and submit your profile through the Manitoba PNP system.",
                },
                {
                    number: "03",
                    title: "Invitation to Apply (ITA)",
                    description:
                        "If selected, receive an Invitation to Apply for provincial nomination.",
                },
                {
                    number: "04",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your full application and required fees via our secure portal.",
                },
                {
                    number: "05",
                    title: "Review & Nomination Decision",
                    description:
                        "Your application is reviewed by Manitoba authorities and a nomination decision is communicated.",
                },
            ],
        },
    },
};

export const canadaPNPNewBrunswickData = {
    header: {
        label: "Unlock Your Pathway to Canadian PR with New Brunswick PNP",
        title: "New Brunswick Provincial Nominee Program",
        description:
            "New Brunswick’s Provincial Nominee Program offers a streamlined route to Canadian permanent residency for skilled workers and entrepreneurs wishing to make New Brunswick their home.",
    },
    sections: {
        overview: {
            title: "What is New Brunswick PNP?",
            content:
                "The New Brunswick PNP is designed for individuals who have the skills and experience to contribute to the province’s economy. It provides a pathway to permanent residency by nominating candidates based on labor market requirements.",
            items: [
                {
                    title: "Growing Economic Sectors",
                    text: "Benefit from emerging industries.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Affordable Living",
                    text: "Enjoy a balanced lifestyle with lower living costs.",
                    icon: "FaChartLine",
                },
                {
                    title: "Provincial Support Programs",
                    text: "Access comprehensive newcomer services.",
                    icon: "FaGlobe",
                },
                {
                    title: "Streamlined Immigration Process",
                    text: "Experience an efficient nomination system.",
                    icon: "FaUsers",
                },
                {
                    title: "Direct Pathway to PR",
                    text: "Secure a reliable route to permanent residency.",
                    icon: "FaLightbulb",
                },
                {
                    title: "Welcoming Community & Lifestyle",
                    text: "Thrive in a supportive environment.",
                    icon: "FaHome",
                },
            ],
        },
        types: [
            {
                title: "Skilled Workers Stream",
                icon: "FaBriefcase",
                items: [
                    "For skilled professionals with work experience in eligible occupations.",
                    "Requires a valid job offer from a New Brunswick employer.",
                    "Must meet language proficiency standards.",
                    "Offers a direct route to permanent residency.",
                ],
            },
            {
                title: "Business Immigration Stream",
                icon: "FaDollarSign",
                items: [
                    "For entrepreneurs with experience in business management.",
                    "Requires a viable business plan and sufficient investment capital.",
                    "Must demonstrate financial stability.",
                    "Provides a pathway to permanent residency through business investment.",
                ],
            },
            {
                title: "Strategic Initiative Stream",
                icon: "FaGlobe",
                items: [
                    "For candidates with skills aligned to New Brunswick's strategic priorities.",
                    "Requires expertise in high-demand occupations.",
                    "Offers accelerated processing for eligible applicants.",
                    "Language proficiency is mandatory.",
                ],
            },
            {
                title: "Critical Worker Pilot",
                icon: "FaUsers",
                items: [
                    "Designed for essential workers in critical sectors.",
                    "Requires employment in an in-demand occupation.",
                    "Features a streamlined application process.",
                    "Provides a pathway to permanent residency for essential workers.",
                ],
            },
            {
                title: "Atlantic Immigration Program",
                icon: "FaShip",
                items: [
                    "For skilled workers and international graduates.",
                    "Requires a valid job offer from a designated employer in New Brunswick.",
                    "Must meet language proficiency requirements.",
                    "Offers a streamlined route to permanent residency.",
                ],
            },
        ],
        eligibility: {
            title: "Eligibility Criteria",
            description:
                "To qualify for New Brunswick PNP, ensure you meet the following criteria:",
            items: [
                {
                    title: "Skilled Work Experience",
                    text: "Relevant work experience in an in‑demand occupation in New Brunswick.",
                },
                {
                    title: "Educational Qualifications",
                    text: "Hold the necessary credentials to support your application.",
                },
                {
                    title: "Language Proficiency",
                    text: "Demonstrate proficiency in English or French through recognized tests.",
                },
                {
                    title: "Adaptability",
                    text: "Show your ability to integrate into New Brunswick’s community.",
                },
                {
                    title: "Financial Stability",
                    text: "Provide proof of funds for you and your dependents.",
                },
            ],
        },
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Begin with a consultation to evaluate your eligibility for New Brunswick PNP.",
                },
                {
                    number: "02",
                    title: "Documentation & Profile Submission",
                    description:
                        "Gather all necessary documents and submit your profile through the system.",
                },
                {
                    number: "03",
                    title: "Invitation to Apply (ITA)",
                    description:
                        "If selected, you will receive an Invitation to Apply for provincial nomination.",
                },
                {
                    number: "04",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your complete application along with the required fees via our secure portal.",
                },
                {
                    number: "05",
                    title: "Review & Nomination Decision",
                    description:
                        "Your application is reviewed by New Brunswick authorities, and a nomination decision is made.",
                },
            ],
        },
    },
};

export const canadaPNPNovaScotiaData = {
    header: {
        label: "Your Pathway to Canadian PR with Nova Scotia PNP",
        title: "Nova Scotia Provincial Nominee Program",
        description:
            "Nova Scotia’s Provincial Nominee Program (NSNP) offers a streamlined route to Canadian permanent residency for skilled workers and entrepreneurs aiming to make Nova Scotia their home.",
    },
    sections: {
        overview: {
            title: "What is Nova Scotia PNP?",
            content:
                "The Nova Scotia PNP is designed for individuals with the skills and experience to contribute to Nova Scotia’s growing economy. It provides a pathway to permanent residency by nominating candidates who meet the province’s labor market needs.",
            items: [
                {
                    title: "Emerging Economic Opportunities",
                    text: "Benefit from expanding industries.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Quality of Life",
                    text: "Enjoy affordable living and a balanced lifestyle.",
                    icon: "FaChartLine",
                },
                {
                    title: "Provincial Support Programs",
                    text: "Access comprehensive newcomer services.",
                    icon: "FaGlobe",
                },
                {
                    title: "Efficient Immigration Process",
                    text: "Experience a streamlined nomination system.",
                    icon: "FaUsers",
                },
                {
                    title: "Direct Pathway to PR",
                    text: "Secure a reliable route to permanent residency.",
                    icon: "FaLightbulb",
                },
                {
                    title: "Vibrant Community & Lifestyle",
                    text: "Thrive in a diverse and supportive community.",
                    icon: "FaHome",
                },
            ],
        },
        types: [
            {
                title: "Nova Scotia Experience: Express Entry",
                icon: "FaRocket",
                items: [
                    "For candidates already in the Express Entry pool with Nova Scotia work experience.",
                    "Requires proof of employment in eligible occupations in Nova Scotia.",
                    "Competitive CRS scores boost your application.",
                    "Must demonstrate language proficiency in English or French.",
                ],
            },
            {
                title: "Nova Scotia Labour Market Priorities",
                icon: "FaBriefcase",
                items: [
                    "For candidates in high-demand occupations.",
                    "Requires relevant work experience in prioritized sectors.",
                    "Streamlined processing for qualified applicants.",
                    "Must meet language proficiency standards.",
                ],
            },
            {
                title: "Nova Scotia Labour Market Priorities for Physicians",
                icon: "FaStethoscope",
                items: [
                    "Specifically for physicians in high-demand specialties.",
                    "Requires valid certification and licensure in Nova Scotia.",
                    "Prioritizes experienced healthcare professionals.",
                    "Must demonstrate proficiency in English or French.",
                ],
            },
        ],
        eligibility: {
            title: "Eligibility Criteria",
            description:
                "To qualify for Nova Scotia PNP, ensure you meet the following criteria:",
            items: [
                {
                    title: "Skilled Work Experience",
                    text: "Relevant experience in an in‑demand occupation in Nova Scotia.",
                },
                {
                    title: "Educational Qualifications",
                    text: "Hold the necessary credentials to support your application.",
                },
                {
                    title: "Language Proficiency",
                    text: "Demonstrate proficiency in English or French with recognized tests.",
                },
                {
                    title: "Adaptability",
                    text: "Show your ability to integrate into Nova Scotia’s community.",
                },
                {
                    title: "Financial Stability",
                    text: "Provide proof of funds for yourself and dependents.",
                },
            ],
        },
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Begin with a consultation to assess your eligibility for Nova Scotia PNP.",
                },
                {
                    number: "02",
                    title: "Documentation & Profile Submission",
                    description:
                        "Collect and submit all necessary documents through the Nova Scotia PNP system.",
                },
                {
                    number: "03",
                    title: "Invitation to Apply (ITA)",
                    description:
                        "If selected, receive an Invitation to Apply for provincial nomination.",
                },
                {
                    number: "04",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your complete application along with the required fees via our secure portal.",
                },
                {
                    number: "05",
                    title: "Review & Nomination Decision",
                    description:
                        "Your application is reviewed by Nova Scotia authorities, and a nomination decision is made.",
                },
            ],
        },
    },
};

export const canadaPNPPEIData = {
    header: {
        label: "Your Pathway to Canadian PR with Prince Edward Island PNP",
        title: "Prince Edward Island Provincial Nominee Program",
        description:
            "Prince Edward Island’s Provincial Nominee Program offers a streamlined route to Canadian permanent residency for skilled workers and entrepreneurs looking to make the island their home.",
    },
    sections: {
        overview: {
            title: "What is Prince Edward Island PNP?",
            content:
                "The PEI PNP is designed for individuals with the skills and experience to contribute to the island’s economy. It provides a pathway to permanent residency by nominating candidates who meet the province’s labor market needs.",
            items: [
                {
                    title: "Scenic & Sustainable Economy",
                    text: "Benefit from a unique blend of natural beauty and economic opportunities.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Affordable Living",
                    text: "Enjoy a comfortable and relaxed lifestyle with low and competitive living costs.",
                    icon: "FaChartLine",
                },
                {
                    title: "Provincial Support Programs",
                    text: "Access dedicated newcomer support and community services.",
                    icon: "FaGlobe",
                },
                {
                    title: "Streamlined Immigration Process",
                    text: "Experience an efficient, straightforward, and expedited nomination process.",
                    icon: "FaUsers",
                },
                {
                    title: "Direct Pathway to PR",
                    text: "Secure a reliable route to permanent residency.",
                    icon: "FaLightbulb",
                },
                {
                    title: "Welcoming Community & Lifestyle",
                    text: "Thrive in a friendly and supportive environment.",
                    icon: "FaHome",
                },
            ],
        },
        types: [
            {
                title: "PEI PNP Express Entry",
                icon: "FaRocket",
                items: [
                    "For candidates already in the federal Express Entry pool.",
                    "Requires a competitive Comprehensive Ranking System (CRS) score.",
                    "Must have relevant work experience in eligible occupations.",
                    "Must demonstrate proficiency in English or French.",
                ],
            },
            {
                title: "Labour Impact Category",
                icon: "FaUsers",
                items: [
                    "For skilled workers with job offers in high-demand sectors in PEI.",
                    "Requires valid work experience and a designated job offer.",
                    "Must meet specific labour market criteria.",
                    "Language proficiency and qualifications are essential.",
                ],
            },
            {
                title: "Business Impact Category",
                icon: "FaBriefcase",
                items: [
                    "For entrepreneurs and investors looking to start or acquire a business in PEI.",
                    "Requires a viable business plan and sufficient financial investment.",
                    "Must demonstrate the ability to generate local employment and economic growth.",
                    "Offers a clear pathway to permanent residency through business success.",
                ],
            },
        ],
        eligibility: {
            title: "Eligibility Criteria",
            description:
                "To qualify for the Prince Edward Island PNP, ensure you meet the following criteria:",
            items: [
                {
                    title: "Skilled Work Experience",
                    text: "Relevant work experience in an in‑demand occupation in PEI.",
                },
                {
                    title: "Educational Qualifications",
                    text: "Hold the necessary credentials to support your application.",
                },
                {
                    title: "Language Proficiency",
                    text: "Demonstrate proficiency in English or French through recognized tests.",
                },
                {
                    title: "Adaptability",
                    text: "Show your ability to integrate into PEI’s community.",
                },
                {
                    title: "Financial Stability",
                    text: "Provide proof of funds for yourself and your dependents.",
                },
            ],
        },
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Begin with a consultation to evaluate your eligibility for PEI PNP.",
                },
                {
                    number: "02",
                    title: "Documentation & Profile Submission",
                    description:
                        "Gather and submit all necessary documents through the PEI PNP system.",
                },
                {
                    number: "03",
                    title: "Invitation to Apply (ITA)",
                    description:
                        "If selected, receive an Invitation to Apply for provincial nomination.",
                },
                {
                    number: "04",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your complete application and fees via our secure portal.",
                },
                {
                    number: "05",
                    title: "Review & Nomination Decision",
                    description:
                        "Your application is reviewed by PEI authorities and a nomination decision is made.",
                },
            ],
        },
    },
};

export const canadaPNPYukonData = {
    header: {
        label: "Unlock Your Pathway to Canadian PR with Yukon PNP",
        title: "Yukon Provincial Nominee Program",
        description:
            "Yukon’s Provincial Nominee Program offers a streamlined route to Canadian permanent residency for skilled workers and entrepreneurs wishing to make Yukon their home.",
    },
    sections: {
        overview: {
            title: "What is Yukon PNP?",
            content:
                "The Yukon PNP is designed for individuals with the skills and experience to contribute to Yukon’s unique economy. It provides a pathway to permanent residency by nominating candidates who meet the territory’s labor market needs.",
            items: [
                {
                    title: "Emerging Economic Sectors",
                    text: "Benefit from Yukon’s growing industries.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Quality of Life",
                    text: "Enjoy a unique lifestyle with pristine nature.",
                    icon: "FaChartLine",
                },
                {
                    title: "Provincial Support Programs",
                    text: "Access comprehensive newcomer services.",
                    icon: "FaGlobe",
                },
                {
                    title: "Efficient Immigration Process",
                    text: "Experience a streamlined nomination system.",
                    icon: "FaUsers",
                },
                {
                    title: "Direct Pathway to PR",
                    text: "Secure a reliable route to permanent residency.",
                    icon: "FaLightbulb",
                },
                {
                    title: "Vibrant Community & Lifestyle",
                    text: "Thrive in a welcoming community.",
                    icon: "FaHome",
                },
            ],
        },
        types: [
            {
                title: "Yukon Express Entry (YEE)",
                icon: "FaRocket",
                items: [
                    "For candidates in the federal Express Entry pool with strong profiles.",
                    "Requires a competitive CRS score.",
                    "Must meet language proficiency requirements.",
                    "Provides an expedited route to permanent residency.",
                ],
            },
            {
                title: "Skilled Worker",
                icon: "FaUserTie",
                items: [
                    "For skilled workers with experience in in-demand occupations in Yukon.",
                    "Requires valid work experience and possibly a job offer.",
                    "Must meet language proficiency standards.",
                    "Offers a clear pathway to permanent residency.",
                ],
            },
            {
                title: "Critical Impact Worker",
                icon: "FaUsers",
                items: [
                    "For workers in sectors critical to Yukon's economy.",
                    "Requires employment in an in-demand occupation.",
                    "Emphasizes expedited processing for essential skills.",
                    "Must meet minimum language proficiency requirements.",
                ],
            },
            {
                title: "Business Nominee",
                icon: "FaBriefcase",
                items: [
                    "For entrepreneurs and business investors in Yukon.",
                    "Requires a viable business plan and sufficient investment.",
                    "Must demonstrate financial stability.",
                    "Provides a pathway to permanent residency through business success.",
                ],
            },
            {
                title: "Yukon Community Pilot",
                icon: "FaGlobe",
                items: [
                    "For applicants with strong ties to Yukon communities.",
                    "Requires local support or community sponsorship.",
                    "Emphasizes community integration and regional development.",
                    "Offers a unique route to permanent residency.",
                ],
            },
        ],
        eligibility: {
            title: "Eligibility Criteria",
            description:
                "To qualify for Yukon PNP, ensure you meet the following criteria:",
            items: [
                {
                    title: "Skilled Work Experience",
                    text: "Relevant work experience in an in‑demand occupation in Yukon.",
                },
                {
                    title: "Educational Qualifications",
                    text: "Hold the necessary credentials to support your application.",
                },
                {
                    title: "Language Proficiency",
                    text: "Demonstrate proficiency in English or French via recognized tests.",
                },
                {
                    title: "Adaptability",
                    text: "Show your ability to integrate into Yukon’s community.",
                },
                {
                    title: "Financial Stability",
                    text: "Provide proof of funds for you and your dependents.",
                },
            ],
        },
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Begin with a consultation to assess your eligibility for Yukon PNP.",
                },
                {
                    number: "02",
                    title: "Documentation & Profile Submission",
                    description:
                        "Gather and submit all necessary documents through the Yukon PNP system.",
                },
                {
                    number: "03",
                    title: "Invitation to Apply (ITA)",
                    description:
                        "If selected, you will receive an Invitation to Apply for provincial nomination.",
                },
                {
                    number: "04",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your complete application and fees via our secure portal.",
                },
                {
                    number: "05",
                    title: "Review & Nomination Decision",
                    description:
                        "Your application is reviewed by Yukon authorities, and a decision is communicated.",
                },
            ],
        },
    },
};

export const canadaPNPNewfoundlandAndLabradorData = {
    header: {
        label: "Your Pathway to Canadian PR with Newfoundland & Labrador PNP",
        title: "Newfoundland & Labrador Provincial Nominee Program",
        description:
            "Newfoundland & Labrador’s Provincial Nominee Program offers a streamlined route to Canadian permanent residency for skilled workers and entrepreneurs wishing to make the province their home.",
    },
    sections: {
        overview: {
            title: "What is Newfoundland & Labrador PNP?",
            content:
                "The Newfoundland & Labrador PNP is designed for individuals with the skills and experience to contribute to the province’s economy. It provides a pathway to permanent residency by nominating candidates who meet labor market needs.",
            items: [
                {
                    title: "Robust Economic Sectors",
                    text: "Benefit from key industries in the province.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Cost-Effective Living",
                    text: "Enjoy a balanced lifestyle with affordable costs.",
                    icon: "FaChartLine",
                },
                {
                    title: "Provincial Support Programs",
                    text: "Access comprehensive newcomer support.",
                    icon: "FaGlobe",
                },
                {
                    title: "Streamlined Immigration Process",
                    text: "Experience an efficient nomination process.",
                    icon: "FaUsers",
                },
                {
                    title: "Direct Pathway to PR",
                    text: "Secure a reliable route to permanent residency.",
                    icon: "FaLightbulb",
                },
                {
                    title: "Community & Lifestyle",
                    text: "Thrive in a close-knit and welcoming community.",
                    icon: "FaHome",
                },
            ],
        },
        types: [
            {
                title: "Newfoundland and Labrador Express Entry Skilled Worker",
                icon: "FaRocket",
                items: [
                    "For candidates in the federal Express Entry pool with relevant work experience in Newfoundland and Labrador.",
                    "Requires a competitive CRS score and proof of employment in an eligible occupation.",
                    "Must demonstrate proficiency in English or French.",
                    "Offers an expedited route to permanent residency.",
                ],
            },
            {
                title: "Skilled Worker Category",
                icon: "FaUserTie",
                items: [
                    "For skilled workers with experience in eligible occupations.",
                    "Requires relevant work experience and, in some cases, a job offer.",
                    "Must meet established language proficiency requirements.",
                    "Provides a clear pathway to permanent residency.",
                ],
            },
            {
                title: "International Graduate Category",
                icon: "FaGraduationCap",
                items: [
                    "For international graduates from Newfoundland and Labrador institutions.",
                    "Requires completion of an eligible post‑secondary program.",
                    "Must demonstrate proficiency in English or French.",
                    "Creates a pathway to permanent residency.",
                ],
            },
            {
                title: "International Entrepreneur Category",
                icon: "FaBriefcase",
                items: [
                    "For entrepreneurs with a robust business plan.",
                    "Requires proven business experience and sufficient investment capital.",
                    "Must demonstrate financial stability.",
                    "Offers a direct route to permanent residency through business success.",
                ],
            },
            {
                title: "International Graduate Entrepreneur Category",
                icon: "FaUserPlus",
                items: [
                    "For international graduates aiming to launch a business in Newfoundland and Labrador.",
                    "Requires an eligible degree and entrepreneurial potential.",
                    "Must demonstrate financial and business acumen.",
                    "Provides a clear pathway to permanent residency through entrepreneurial innovation.",
                ],
            },
        ],
        eligibility: {
            title: "Eligibility Criteria",
            description:
                "To qualify for the Newfoundland & Labrador PNP, ensure you meet the following criteria:",
            items: [
                {
                    title: "Skilled Work Experience",
                    text: "Relevant work experience in an in‑demand occupation.",
                },
                {
                    title: "Educational Qualifications",
                    text: "Hold the necessary credentials to support your application.",
                },
                {
                    title: "Language Proficiency",
                    text: "Prove proficiency in English or French via recognized tests.",
                },
                {
                    title: "Adaptability",
                    text: "Show your ability to integrate into the province’s community.",
                },
                {
                    title: "Financial Stability",
                    text: "Provide proof of funds for yourself and your dependents.",
                },
            ],
        },
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Begin with a consultation to evaluate your eligibility.",
                },
                {
                    number: "02",
                    title: "Documentation & Profile Submission",
                    description:
                        "Gather and submit necessary documents through the system.",
                },
                {
                    number: "03",
                    title: "Invitation to Apply (ITA)",
                    description:
                        "If selected, receive an Invitation to Apply for provincial nomination.",
                },
                {
                    number: "04",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your complete application and fees via our secure portal.",
                },
                {
                    number: "05",
                    title: "Review & Nomination Decision",
                    description:
                        "Your application is reviewed by Newfoundland & Labrador authorities, and a decision is communicated.",
                },
            ],
        },
    },
};

export const canadaPNPNorthwestTerritoriesData = {
    header: {
        label: "Your Pathway to Canadian PR with Northwest Territories PNP",
        title: "Northwest Territories Provincial Nominee Program",
        description:
            "The Northwest Territories’ PNP offers a streamlined route to Canadian permanent residency for skilled workers and entrepreneurs seeking to make the territory their home.",
    },
    sections: {
        overview: {
            title: "What is Northwest Territories PNP?",
            content:
                "The Northwest Territories PNP is designed for individuals with the skills and experience to contribute to the territory’s unique economy. It provides a pathway to permanent residency by nominating candidates who meet labor market needs.",
            items: [
                {
                    title: "Unique Economic Opportunities",
                    text: "Benefit from emerging industries.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Quality of Life",
                    text: "Enjoy a lifestyle focused on community and nature.",
                    icon: "FaChartLine",
                },
                {
                    title: "Provincial Support Programs",
                    text: "Access tailored newcomer services.",
                    icon: "FaGlobe",
                },
                {
                    title: "Efficient Immigration Process",
                    text: "Experience a streamlined nomination process.",
                    icon: "FaUsers",
                },
                {
                    title: "Direct Pathway to PR",
                    text: "Secure a straightforward route to permanent residency.",
                    icon: "FaLightbulb",
                },
                {
                    title: "Community & Lifestyle",
                    text: "Thrive in a welcoming, close-knit, and supportive community.",
                    icon: "FaHome",
                },
            ],
        },
        types: [
            {
                title: "Express Entry System for Skilled Workers",
                icon: "FaRocket",
                items: [
                    "For candidates already in the federal Express Entry pool with relevant work experience.",
                    "Requires a competitive CRS score and employment in eligible occupations.",
                    "Must meet language proficiency requirements.",
                    "Offers an expedited route to permanent residency.",
                ],
            },
            {
                title: "Skilled Worker",
                icon: "FaBriefcase",
                items: [
                    "For experienced professionals in high-demand occupations.",
                    "Requires proven work experience and, in some cases, a valid job offer.",
                    "Must demonstrate adequate language proficiency.",
                    "Provides a clear pathway to permanent residency.",
                ],
            },
            {
                title: "Entry Level/Semi-Skilled Occupations",
                icon: "FaUsers",
                items: [
                    "Designed for applicants with entry level or semi-skilled work experience.",
                    "Requires proof of experience in eligible semi-skilled occupations.",
                    "Lower CRS score thresholds may apply.",
                    "Must meet minimum language proficiency standards.",
                ],
            },
            {
                title: "Business Stream",
                icon: "FaBriefcase",
                items: [
                    "For entrepreneurs and business owners with a viable business plan.",
                    "Requires proven business experience and sufficient investment capital.",
                    "Must demonstrate financial stability and commitment to local economic growth.",
                    "Provides a pathway to permanent residency through business success.",
                ],
            },
        ],
        eligibility: {
            title: "Eligibility Criteria",
            description:
                "To qualify for the Northwest Territories PNP, ensure you meet the following criteria:",
            items: [
                {
                    title: "Skilled Work Experience",
                    text: "Relevant experience in an in‑demand occupation in the Northwest Territories.",
                },
                {
                    title: "Educational Qualifications",
                    text: "Hold the necessary credentials to support your application.",
                },
                {
                    title: "Language Proficiency",
                    text: "Prove proficiency in English or French via recognized tests.",
                },
                {
                    title: "Adaptability",
                    text: "Show your ability to integrate into the territory’s community.",
                },
                {
                    title: "Financial Stability",
                    text: "Provide proof of funds for you and your dependents.",
                },
            ],
        },
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Begin with a consultation to evaluate your eligibility.",
                },
                {
                    number: "02",
                    title: "Documentation & Profile Submission",
                    description:
                        "Gather and submit necessary documents through the system.",
                },
                {
                    number: "03",
                    title: "Invitation to Apply (ITA)",
                    description:
                        "If selected, receive an Invitation to Apply for provincial nomination.",
                },
                {
                    number: "04",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your complete application and fees via our secure portal.",
                },
                {
                    number: "05",
                    title: "Review & Nomination Decision",
                    description:
                        "Your application is reviewed and a nomination decision is communicated.",
                },
            ],
        },
    },
};

export const canadaFSWData = {
    header: {
        label: "Express Entry Stream",
        title: "Achieve Your Canadian Dream with FSWP",
        description:
            "Step into a promising future in Canada by leveraging the Federal Skilled Worker Program. Designed for skilled professionals, this pathway offers an opportunity to build a thriving career while contributing to Canada’s dynamic economy.",
    },
    sections: {
        whatIs: {
            title: "What is the FSWP?",
            content:
                "The Federal Skilled Worker (FSW) Program is a key component of Canada’s Express Entry system. It is tailored for skilled professionals with foreign work experience who wish to settle in Canada and contribute to its economic growth.",
        },
        whyChoose: {
            title: "Why Choose the FSWP?",
            items: [
                {
                    title: "Diverse Opportunities",
                    text: "Access a wide range of career prospects across Canada.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Competitive Salaries",
                    text: "Benefit from attractive compensation packages.",
                    icon: "FaPoundSign",
                },
                {
                    title: "Permanent Residency Path",
                    text: "Secure a stable future with a route to permanent residency.",
                    icon: "FaUsers",
                },
                {
                    title: "Quality Healthcare",
                    text: "Enjoy access to Canada’s world-class healthcare system effortlessly.",
                    icon: "FaHospital",
                },
                {
                    title: "Work-Life Balance",
                    text: "Experience a harmonious blend of work and personal life.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Cultural Diversity",
                    text: "Thrive in a multicultural environment.",
                    icon: "FaGlobe",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for the FSWP",
            description:
                "Ensure you meet these essential criteria to qualify for the FSW Program:",
            items: [
                {
                    title: "Work Experience",
                    text: "Minimum one year of continuous full-time work experience in a skilled occupation.",
                },
                {
                    title: "Language Proficiency",
                    text: "Achieve the required language scores in English or French through recognized tests.",
                },
                {
                    title: "Educational Credentials",
                    text: "Have your foreign education assessed and recognized by Canadian standards.",
                },
                {
                    title: "Proof of Funds",
                    text: "Demonstrate sufficient funds to support yourself and your family upon arrival.",
                },
                {
                    title: "Age Requirement",
                    text: "Applicants typically need to be within an age range that maximizes points.",
                },
                {
                    title: "Adaptability",
                    text: "Factors such as previous work or study in Canada can add to your eligibility.",
                },
                {
                    title: "Valid Work Offer (Optional)",
                    text: "A job offer can enhance your application, though it is not mandatory.",
                },
                {
                    title: "Comprehensive Ranking System (CRS)",
                    text: "Meet the minimum CRS score required under the Express Entry system.",
                },
                {
                    title: "Medical & Security Clearance",
                    text: "Pass health and background checks as required by Canadian immigration.",
                },
            ],
        },
        process: {
            title: "Application Process for the FSWP",
            description:
                "Navigating the FSW application process is streamlined to help you take the next step towards Canadian permanent residency. Our dedicated team will guide you through every phase, from initial consultation to final approval.",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Schedule an initial consultation to evaluate your work experience, language proficiency, and educational credentials. Our experts will help you determine your eligibility and identify areas for improvement. This foundational step sets the stage for a successful application.",
                },
                {
                    number: "02",
                    title: "Document Preparation & Credential Assessment",
                    description:
                        "Gather and verify all necessary documents, including language test results, educational assessments, and work experience records. Proper documentation is crucial for validating your application. Our team ensures that every document meets Canadian standards.",
                },
                {
                    number: "03",
                    title: "Express Entry Profile Creation",
                    description:
                        "Create your Express Entry profile by entering your personal, educational, and professional details. We assist you in optimizing your profile to maximize your CRS score. This step makes your application visible to Canadian employers and immigration authorities.",
                },
                {
                    number: "04",
                    title: "Invitation to Apply (ITA) & Application Submission",
                    description:
                        "If your profile meets the CRS threshold, you may receive an Invitation to Apply (ITA). Complete and submit your application along with the required fees. This step officially begins the processing of your FSW application.",
                },
                {
                    number: "05",
                    title: "Medical & Security Checks",
                    description:
                        "Undergo mandatory medical examinations and security checks to ensure you meet Canadian health and safety standards. These evaluations are essential for finalizing your application.",
                },
                {
                    number: "06",
                    title: "Final Decision & Permanent Residency Approval",
                    description:
                        "Upon review, you will receive a decision on your application. Successful candidates are granted permanent residency, opening the door to a new life in Canada. This final step marks the culmination of your journey towards Canadian permanent residency.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for the FSWP?",
            description:
                "At Horizon Success Bridge, our expertise in Canadian immigration ensures that your FSW application is comprehensive and compelling. We provide end-to-end support, helping you secure a brighter future in Canada.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest immigration policies and requirements.",
                },
                {
                    number: "02",
                    title: "Tailored Solutions",
                    description:
                        "Receive personalized strategies to enhance your CRS score.",
                },
                {
                    number: "03",
                    title: "Document Verification",
                    description:
                        "Ensure all your documents meet the strict Canadian standards.",
                },
                {
                    number: "04",
                    title: "Efficient Processing",
                    description:
                        "Minimize delays with our streamlined application procedures.",
                },
                {
                    number: "05",
                    title: "High Success Rates",
                    description:
                        "Benefit from our proven track record of successful applications.",
                },
                {
                    number: "06",
                    title: "Post-Approval Support",
                    description:
                        "Get assistance with settlement and integration into Canadian society.",
                },
            ],
        },
    },
};

export const canadaFSTData = {
    header: {
        label: "Express Entry Stream",
        title: "Advance Your Career with the FSTP",
        description:
            "Explore new horizons in Canada through the Federal Skilled Trades Program. Tailored for skilled tradespeople, this program provides a direct pathway to permanent residency, ensuring your expertise is recognized and valued.",
    },
    sections: {
        whatIs: {
            title: "What is the FSTP?",
            content:
                "The Federal Skilled Trades (FST) Program is designed for individuals with qualifications in specific trades. It offers a streamlined process for skilled tradespeople to secure permanent residency in Canada and contribute to the nation’s workforce.",
        },
        whyChoose: {
            title: "Why Choose the FSTP?",
            items: [
                {
                    title: "Industry Recognition",
                    text: "Your trade skills are highly valued.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Attractive Earnings",
                    text: "Benefit from competitive wages in Canada.",
                    icon: "FaPoundSign",
                },
                {
                    title: "Direct Path to Residency",
                    text: "A streamlined route to permanent residency.",
                    icon: "FaUsers",
                },
                {
                    title: "Quality Benefits",
                    text: "Access Canada’s excellent healthcare and social services.",
                    icon: "FaHospital",
                },
                {
                    title: "Work-Life Balance",
                    text: "Enjoy a balanced lifestyle in a supportive environment.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Cultural Integration",
                    text: "Thrive in Canada’s diverse and welcoming society.",
                    icon: "FaGlobe",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for the FSTP",
            description:
                "Verify that you meet the following criteria to qualify for the FSTP:",
            items: [
                {
                    title: "Trade Certification",
                    text: "Must hold a valid certification or license in a recognized trade.",
                },
                {
                    title: "Work Experience",
                    text: "Require a minimum of two years of full-time work experience in your trade.",
                },
                {
                    title: "Language Proficiency",
                    text: "Achieve the necessary language scores in English or French through standardized tests.",
                },
                {
                    title: "Proof of Funds",
                    text: "Demonstrate adequate financial resources to support your settlement in Canada.",
                },
                {
                    title: "Job Offer (Optional)",
                    text: "A valid job offer can boost your application, though it is not mandatory.",
                },
                {
                    title: "Adaptability",
                    text: "Previous work or training in Canada can enhance your eligibility.",
                },
                {
                    title: "Health Clearance",
                    text: "Pass the required medical examinations as mandated by Canadian immigration.",
                },
                {
                    title: "Security Checks",
                    text: "Undergo background and security checks to ensure compliance with Canadian standards.",
                },
                {
                    title: "CRS Score",
                    text: "Meet the minimum CRS score to remain competitive in the Express Entry pool.",
                },
            ],
        },
        process: {
            title: "Application Process for the FSTP",
            description:
                "The application process for the FST Program is straightforward and designed to help you transition smoothly to permanent residency in Canada. Our experienced team guides you through every step.",
            steps: [
                {
                    number: "01",
                    title: "Initial Consultation & Trade Assessment",
                    description:
                        "Begin with a consultation to review your trade qualifications, work experience, and language proficiency. Our experts assess your eligibility and advise on improvements. This step lays the groundwork for a robust application.",
                },
                {
                    number: "02",
                    title: "Document Compilation & Verification",
                    description:
                        "Gather all necessary documents including trade certifications, employment records, language test scores, and proof of funds. Ensuring accuracy is crucial for success. Our team assists in verifying that all documentation meets Canadian requirements.",
                },
                {
                    number: "03",
                    title: "Express Entry Profile Submission",
                    description:
                        "Create and submit your Express Entry profile, detailing your trade experience and qualifications. Optimize your profile to enhance your CRS score. This step positions your application for an Invitation to Apply (ITA).",
                },
                {
                    number: "04",
                    title: "Invitation to Apply (ITA) & Application Filing",
                    description:
                        "Upon receiving an ITA, complete your full application and submit it along with the required fees. Our experts ensure that your submission is thorough and accurate. This formal step initiates the official processing of your application.",
                },
                {
                    number: "05",
                    title: "Medical & Security Evaluations",
                    description:
                        "Attend mandatory medical examinations and undergo security background checks to verify your eligibility. These evaluations are critical to ensure compliance with Canadian standards.",
                },
                {
                    number: "06",
                    title: "Final Review & Permanent Residency Confirmation",
                    description:
                        "After a comprehensive review, you will receive a final decision on your application. Successful candidates are granted permanent residency in Canada. This final step marks the achievement of your Canadian career goals.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for the FSTP?",
            description:
                "At Horizon Success Bridge, we are committed to helping skilled tradespeople achieve their Canadian dreams. Our comprehensive support and industry expertise ensure a smooth transition to permanent residency.",
            steps: [
                {
                    number: "01",
                    title: "Specialized Expertise",
                    description:
                        "Our team understands the unique requirements of the trades industry.",
                },
                {
                    number: "02",
                    title: "Personalized Strategy",
                    description:
                        "Receive tailored advice to boost your Express Entry profile.",
                },
                {
                    number: "03",
                    title: "Document Accuracy",
                    description:
                        "We ensure your application is complete and compliant.",
                },
                {
                    number: "04",
                    title: "Efficient Processing",
                    description:
                        "Our streamlined process minimizes delays and complications.",
                },
                {
                    number: "05",
                    title: "High Success Rates",
                    description:
                        "Benefit from our proven track record in securing permanent residency.",
                },
                {
                    number: "06",
                    title: "Comprehensive Support",
                    description:
                        "From initial consultation to final approval, we’re with you every step of the way.",
                },
            ],
        },
    },
};

export const canadaCECData = {
    header: {
        label: "Express Entry Stream",
        title: "Maximize Your Canadian Experience with the CEC",
        description:
            "Transform your Canadian work experience into a pathway to permanent residency. The Canadian Experience Class (CEC) is designed for skilled workers who have already proven their ability to contribute to Canada’s economy.",
    },
    sections: {
        whatIs: {
            title: "What is the CEC?",
            content:
                "The Canadian Experience Class (CEC) is an Express Entry program aimed at individuals with recent Canadian work experience. It provides a straightforward route for skilled workers to transition to permanent residency by leveraging their local experience.",
        },
        whyChoose: {
            title: "Why Choose the CEC?",
            items: [
                {
                    title: "Local Experience",
                    text: "Leverage your proven track record in Canada.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Streamlined Process",
                    text: "Benefit from a simplified pathway to permanent residency.",
                    icon: "FaPoundSign",
                },
                {
                    title: "Career Growth",
                    text: "Enhance your prospects with Canadian work experience.",
                    icon: "FaUsers",
                },
                {
                    title: "Quality Healthcare",
                    text: "Access Canada’s world-class healthcare system.",
                    icon: "FaHospital",
                },
                {
                    title: "Stable Living Environment",
                    text: "Enjoy the benefits of Canadian social services.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Cultural Integration",
                    text: "Immerse yourself in Canada’s diverse community.",
                    icon: "FaGlobe",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for the CEC",
            description:
                "To qualify for the CEC program, ensure you meet the following criteria:",
            items: [
                {
                    title: "Canadian Work Experience",
                    text: "One year of skilled work in Canada within the last three years.",
                },
                {
                    title: "Language Proficiency",
                    text: "Meet required English or French test scores.",
                },
                {
                    title: "Valid Work Permit",
                    text: "Hold a valid work permit during employment.",
                },
                {
                    title: "Education",
                    text: "Post-secondary education boosts your application (not mandatory).",
                },
                {
                    title: "Good Character",
                    text: "No serious criminal record; follow legal requirements.",
                },
                {
                    title: "Adaptability",
                    text: "Living in Canada can improve your CRS score.",
                },
                {
                    title: "Proof of Funds",
                    text: "Show enough funds to support yourself and family.",
                },
                {
                    title: "Medical & Security",
                    text: "Pass health exams and background checks.",
                },
                {
                    title: "CRS Score",
                    text: "Meet the minimum Express Entry CRS threshold.",
                },
            ],
        },
        process: {
            title: "Application Process for the CEC",
            description:
                "The CEC application process is designed to be efficient and straightforward, allowing you to capitalize on your Canadian work experience and transition to permanent residency.",
            steps: [
                {
                    number: "01",
                    title: "Initial Consultation & Experience Assessment",
                    description:
                        "Start by scheduling a consultation to review your Canadian work history and assess your eligibility for the CEC program. Our experts provide personalized advice based on your experience. This initial step is critical to set the stage for your application.",
                },
                {
                    number: "02",
                    title: "Document Compilation & Language Verification",
                    description:
                        "Gather all necessary documents, including employment records, language test results, and work permits. Ensuring all documentation is complete and accurate is essential for success. Our team helps verify that your documents meet Canadian standards.",
                },
                {
                    number: "03",
                    title: "Express Entry Profile Submission",
                    description:
                        "Create your Express Entry profile, highlighting your Canadian work experience and language proficiency. We assist in optimizing your profile to maximize your CRS score. This step is key to entering the pool of candidates for permanent residency.",
                },
                {
                    number: "04",
                    title: "Invitation to Apply (ITA) & Full Application",
                    description:
                        "If your profile meets the required CRS threshold, you will receive an Invitation to Apply (ITA). Complete your application and submit it along with the necessary fees. This step officially triggers the processing of your CEC application.",
                },
                {
                    number: "05",
                    title: "Medical & Security Screening",
                    description:
                        "Undergo the required medical examinations and security checks to ensure you meet all health and safety standards as mandated by Canadian immigration. These screenings are mandatory for final approval.",
                },
                {
                    number: "06",
                    title: "Final Review & Permanent Residency Approval",
                    description:
                        "Your application will undergo a final review by immigration authorities. Upon approval, you will be granted permanent residency, paving the way for your future in Canada. This final step marks the successful completion of your journey under the CEC program.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for the CEC?",
            description:
                "At Horizon Success Bridge, we specialize in maximizing the value of your Canadian work experience. Our expert guidance ensures that your CEC application is robust, accurate, and positioned for success.",
            steps: [
                {
                    number: "01",
                    title: "Tailored Consultation",
                    description:
                        "Receive personalized advice based on your unique Canadian work experience.",
                },
                {
                    number: "02",
                    title: "Document Optimization",
                    description:
                        "Ensure your records and language results meet all regulatory standards.",
                },
                {
                    number: "03",
                    title: "Profile Enhancement",
                    description:
                        "Optimize your Express Entry profile to boost your CRS score.",
                },
                {
                    number: "04",
                    title: "Streamlined Processing",
                    description:
                        "Experience efficient application processing with our expert support.",
                },
                {
                    number: "05",
                    title: "High Success Rates",
                    description:
                        "Benefit from our proven track record in securing permanent residency.",
                },
                {
                    number: "06",
                    title: "Post-Approval Guidance",
                    description:
                        "Get comprehensive support as you transition to permanent residency.",
                },
            ],
        },
    },
};

export const canadaCRSData = {
    header: {
        label: "Express Entry Ranking",
        title: "Understand the CRS Score for Canada",
        description:
            "Discover the key to navigating Canada’s Express Entry system by mastering your Comprehensive Ranking System (CRS) Score. Your CRS score is your gateway to permanent residency, revealing how competitive your profile is among thousands of candidates.",
    },
    sections: {
        whatIs: {
            title: "What is the CRS Score?",
            content:
                "The CRS Score is a points-based system used by Immigration, Refugees and Citizenship Canada (IRCC) to rank candidates in the Express Entry pool. It evaluates factors such as age, education, work experience, language proficiency, and additional criteria to determine your overall competitiveness.",
        },
        whyChoose: {
            title: "Key Factors Influencing Your CRS Score",
            items: [
                {
                    title: "Age",
                    text: "Younger candidates generally earn higher scores.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Education",
                    text: "Advanced degrees and recognized credentials boost your score.",
                    icon: "FaPoundSign",
                },
                {
                    title: "Work Experience",
                    text: "Both Canadian and international experience contribute.",
                    icon: "FaUsers",
                },
                {
                    title: "Language Proficiency",
                    text: "High scores in English or French tests are crucial.",
                    icon: "FaHospital",
                },
                {
                    title: "Additional Factors",
                    text: "A valid job offer, provincial nomination, or Canadian education can add extra points.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Adaptability",
                    text: "Prior ties to Canada, work experience, and family connections enhance your ranking.",
                    icon: "FaGlobe",
                },
            ],
        },
        breakdown: {
            title: "CRS Score Breakdown",
            description:
                "The maximum possible score is 1,200 points, which is distributed across different categories. Below is the breakdown of each category:",
            categories: [
                {
                    title: "Core Human Capital Factors (Maximum 500 Points)",
                    icon: "FaUserGraduate",
                    table: {
                        headers: [
                            "Factor",
                            "With a Spouse (Max Points)",
                            "Without a Spouse (Max Points)",
                        ],
                        rows: [
                            {
                                factor: "Age",
                                spouse: "100",
                                noSpouse: "110",
                            },
                            {
                                factor: "Education Level",
                                spouse: "140",
                                noSpouse: "150",
                            },
                            {
                                factor: "Official Language Proficiency (English/French)",
                                spouse: "150",
                                noSpouse: "160",
                            },
                            {
                                factor: "Canadian Work Experience",
                                spouse: "70",
                                noSpouse: "80",
                            },
                            {
                                factor: "Total Maximum",
                                spouse: "460",
                                noSpouse: "500",
                            },
                        ],
                    },
                    notes: [
                        {
                            icon: "FaCalendarAlt",
                            text: "The highest points for age (100/110) are given for candidates aged 20-29.",
                        },
                        {
                            icon: "FaLanguage",
                            text: "Language proficiency is based on Canadian Language Benchmark (CLB) levels.",
                        },
                        {
                            icon: "FaBriefcase",
                            text: "Canadian work experience matters more than foreign experience.",
                        },
                    ],
                },
                {
                    title: "Spouse or Common-Law Partner Factors (Maximum 40 Points)",
                    icon: "FaUsers",
                    table: {
                        headers: ["Factor", "Maximum Points"],
                        rows: [
                            { factor: "Spouse’s Education", points: "10" },
                            {
                                factor: "Spouse’s Language Proficiency",
                                points: "20",
                            },
                            {
                                factor: "Spouse’s Canadian Work Experience",
                                points: "10",
                            },
                            { factor: "Total Maximum", points: "40" },
                        ],
                    },
                    notes: [
                        {
                            icon: "FaUserPlus",
                            text: "If applying without a spouse, these points are added to Core Human Capital Factors.",
                        },
                        {
                            icon: "FaLanguage",
                            text: "Spouse’s language skills (English/French) are the most important factor.",
                        },
                    ],
                },
                {
                    title: "Skill Transferability Factors (Maximum 100 Points)",
                    icon: "FaChartLine",
                    table: {
                        headers: ["Combination Factors", "Maximum Points"],
                        rows: [
                            {
                                factor: "Education + Strong Language Skills",
                                points: "50",
                            },
                            {
                                factor: "Education + Canadian Work Experience",
                                points: "50",
                            },
                            {
                                factor: "Foreign Work Experience + Strong Language Skills",
                                points: "50",
                            },
                            {
                                factor: "Foreign Work Experience + Canadian Work Experience",
                                points: "50",
                            },
                            {
                                factor: "Certificate of Qualification in a Trade",
                                points: "50",
                            },
                            { factor: "Total Maximum", points: "100" },
                        ],
                    },
                    notes: [
                        {
                            icon: "FaLevelUpAlt",
                            text: "A higher CLB level (especially CLB 9 and above) increases points significantly.",
                        },
                        {
                            icon: "FaGlobe",
                            text: "Foreign work experience is more valuable when combined with Canadian experience.",
                        },
                    ],
                },
                {
                    title: "Additional Factors (Maximum 600 Points)",
                    icon: "FaStar",
                    table: {
                        headers: ["Factor", "Maximum Points"],
                        rows: [
                            {
                                factor: "Provincial Nomination (PNP)",
                                points: "600",
                            },
                            {
                                factor: "Arranged Employment in Canada (LMIA Approved)",
                                points: "50 or 200",
                            },
                            {
                                factor: "Canadian Study Experience",
                                points: "15 or 30",
                            },
                            {
                                factor: "French Language Proficiency (High CLB)",
                                points: "25 or 50",
                            },
                            {
                                factor: "Sibling in Canada (PR or Citizen)",
                                points: "15",
                            },
                        ],
                    },
                    notes: [
                        {
                            icon: "FaBuilding",
                            text: "Provincial Nominee Program (PNP) nomination gives 600 extra points, virtually guaranteeing an ITA.",
                        },
                        {
                            icon: "FaHandshake",
                            text: "Job offers in Canada provide 50 to 200 points depending on the role (high-level positions get more).",
                        },
                        {
                            icon: "FaFlag",
                            text: "French language skills significantly boost CRS scores, especially in combination with English proficiency.",
                        },
                    ],
                },
            ],
        },
    },
};

export const canadaITAData = {
    header: {
        label: "Express Entry Milestone",
        title: "Your Gateway to Canadian Permanent Residency",
        description:
            "When your Express Entry profile meets the required CRS cut-off, you may receive an Invitation to Apply (ITA) for permanent residency. Our expert team is here to help you optimize your profile and guide you through the ITA process for a smooth transition to Canadian life.",
    },
    sections: {
        whatIs: {
            title: "What is the Invitation to Apply (ITA)?",
            content:
                "An Invitation to Apply (ITA) is a formal notification issued by Immigration, Refugees and Citizenship Canada (IRCC) that you have been selected from the Express Entry pool to apply for permanent residency. Receiving an ITA means your profile has met or exceeded the current CRS cut-off score in a specific draw, and you are now eligible to submit a complete application for permanent residency.",
        },
        howTo: {
            title: "How to Obtain Your ITA?",
            content:
                "Only candidates who meet Canada’s rigorous economic immigration standards enter the Express Entry pool. Here, your profile is evaluated using the Comprehensive Ranking System (CRS), which awards up to 1,200 points based on factors such as age, education, work experience, and language proficiency.\n\nAdditional bonus points are granted for provincial nominations, job offers, Canadian education, familial ties, or French proficiency. When your CRS score reaches the dynamic cut-off in a draw, you receive an Invitation to Apply (ITA) for permanent residency.",
            items: [
                {
                    title: "Rigorous Entry Standards",
                    text: "Only those who satisfy strict federal criteria are admitted to the Express Entry pool.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Holistic Evaluation",
                    text: "Your profile is assessed across key dimensions such as age, education, work history, and language skills.",
                    icon: "FaChartLine",
                },
                {
                    title: "Bonus Advantages",
                    text: "Earn extra points via provincial nominations, job offers, Canadian study, family ties, or French skills.",
                    icon: "FaUsers",
                },
                {
                    title: "Adaptive Cut-Offs",
                    text: "CRS thresholds adjust with each draw, ensuring that only top-ranking candidates receive an ITA.",
                    icon: "FaGlobe",
                },
                {
                    title: "Optimized Scoring",
                    text: "Fine-tune your profile to capture maximum points across all categories.",
                    icon: "FaPoundSign",
                },
                {
                    title: "Instant ITA Notification",
                    text: "Once you meet the threshold, you're promptly notified, opening the door to Canadian PR.",
                    icon: "FaMapMarkedAlt",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for Receiving the ITA",
            description:
                "Make sure your Express Entry profile meets these essential criteria to improve your chances of receiving an ITA:",
            items: [
                {
                    title: "Competitive CRS Score",
                    text: "Achieve a CRS score that meets or exceeds the cut-off for your draw.",
                },
                {
                    title: "Relevant Work Experience",
                    text: "Demonstrate substantial work experience in your field.",
                },
                {
                    title: "Language Proficiency",
                    text: "Meet the required language test scores in English or French.",
                },
                {
                    title: "Educational Credentials",
                    text: "Possess a recognized educational credential assessed by designated organizations.",
                },
                {
                    title: "Adaptability Factors",
                    text: "Additional factors like Canadian work or study experience can boost your score.",
                },
            ],
        },
        process: {
            title: "Application Process After Receiving the ITA",
            description:
                "Once you receive an ITA, follow our step-by-step process to submit a robust application for Canadian permanent residency:",
            steps: [
                {
                    number: "01",
                    title: "Profile Optimization & Pre-ITA Preparation",
                    description:
                        "We review your Express Entry profile and suggest improvements to boost your CRS score prior to each draw. This proactive approach increases your likelihood of receiving an ITA.",
                },
                {
                    number: "02",
                    title: "Document Compilation & Verification",
                    description:
                        "Gather all required documents—such as work experience records, educational credentials, language test results, and financial proofs—and ensure they meet IRCC standards. Our team assists in verifying that everything is in order.",
                },
                {
                    number: "03",
                    title: "ITA Submission & Application Filing",
                    description:
                        "Upon receiving an ITA, complete your permanent residency application accurately and submit it along with the necessary fees. This critical step marks the formal initiation of your residency process.",
                },
                {
                    number: "04",
                    title: "Medical & Security Evaluations",
                    description:
                        "Attend mandatory medical examinations and provide any additional information required for security and background checks. These evaluations are vital for finalizing your application.",
                },
                {
                    number: "05",
                    title: "Application Review & Final Decision",
                    description:
                        "Your complete application is reviewed by IRCC. We remain available to address any follow-up requests or clarifications to keep your process on track. Timely responses are essential for a successful outcome.",
                },
                {
                    number: "06",
                    title: "Confirmation & Post-Approval Assistance",
                    description:
                        "Once approved, you will receive confirmation of your permanent residency. Our post-approval support helps you with settlement and integration into Canadian society. We’re here to support you beyond the application stage.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Your ITA Application?",
            description:
                "At Horizon Success Bridge, we specialize in optimizing your Express Entry profile and guiding you through the ITA process. Our expert team ensures that every detail is managed with precision—from profile assessment to document preparation—maximizing your chances of a successful permanent residency application.",
            steps: [
                {
                    number: "01",
                    title: "Expert Profile Assessment",
                    description:
                        "Receive personalized feedback and strategies to enhance your CRS score.",
                },
                {
                    number: "02",
                    title: "Comprehensive Documentation",
                    description:
                        "We ensure all your documents are accurate, complete, and compliant with IRCC standards.",
                },
                {
                    number: "03",
                    title: "Timely Notifications",
                    description:
                        "Stay updated with real-time alerts on ITA rounds and CRS cut-off changes.",
                },
                {
                    number: "04",
                    title: "Efficient Application Process",
                    description:
                        "Our streamlined procedures minimize delays and optimize your submission.",
                },
                {
                    number: "05",
                    title: "High Success Rates",
                    description:
                        "Leverage our proven track record to maximize your chances of receiving an ITA.",
                },
                {
                    number: "06",
                    title: "Ongoing Support",
                    description:
                        "From pre-application consultation to post-approval settlement, we’re with you every step of the way.",
                },
            ],
        },
    },
};

export const canadaDrawResultsData = {
    header: {
        label: "Express Entry Updates",
        title: "Understand the Express Entry Draw for Canada",
        description:
            "Express Entry draws are a key component of Canada’s immigration process. In these draws, Immigration, Refugees and Citizenship Canada (IRCC) selects the highest-ranking candidates from the Express Entry pool based on their Comprehensive Ranking System (CRS) scores.\n\nThese draws are conducted on a regular basis and serve as the primary mechanism for inviting skilled workers to apply for permanent residency.",
    },
    sections: {
        whatIs: {
            title: "What is Express Entry Draw?",
            content:
                "Express Entry draw refer to the scheduled events in which IRCC reviews the profiles of registered candidates and issues Invitations to Apply (ITA) for permanent residency to those meeting or exceeding the CRS score threshold.\n\nThis system ensures that the most qualified candidates—those with strong education, work experience, language skills, and other factors—are given the opportunity to settle in Canada.",
        },
        process: {
            title: "How the Express Entry Draw Process Work?",
            content:
                "The draw process begins when candidates create an Express Entry profile and are assigned a CRS score based on factors such as age, education, work experience, and language proficiency.\n\nIRCC then conducts periodic draws by setting a minimum CRS threshold. Candidates who score above this threshold receive an Invitation to Apply (ITA) for permanent residency. This transparent and competitive process helps ensure that Canada selects individuals most likely to succeed economically and socially.",
        },
        drawResults: {
            title: "Recent Express Entry Draw Results",
            description:
                "Recent draw results offer valuable insights into the current competitiveness of the Express Entry pool. These results reveal the latest CRS cut-off scores, the number of ITAs issued, and trends in candidate selection.\n\nBy reviewing the most recent outcomes, prospective immigrants can better understand the evolving criteria and adjust their profiles accordingly to enhance their chances of receiving an ITA.",
            years: [
                {
                    year: "2025",
                    data: [
                        {
                            draw: "336",
                            score: "750 (*Provincial Nominee only)",
                            date: "February 17, 2025",
                            ITAs: "646",
                        },
                        {
                            draw: "335",
                            score: "521 (*Canadian Experience Class only)",
                            date: "February 5, 2025",
                            ITAs: "4,000",
                        },
                        {
                            draw: "334",
                            score: "455 (*Provincial Nominee only)",
                            date: "February 04, 2025",
                            ITAs: "802",
                        },
                        {
                            draw: "333",
                            score: "527 (*Canadian Experience Class only)",
                            date: "January 23, 2025",
                            ITAs: "4,000",
                        },
                        {
                            draw: "332",
                            score: "542 (*Canadian Experience Class only)",
                            date: "January 8, 2025",
                            ITAs: "1,350",
                        },
                        {
                            draw: "331",
                            score: "793 (*Provincial nominees only)",
                            date: "January 7, 2025",
                            ITAs: "471",
                        },
                    ],
                },
                {
                    year: "2024",
                    data: [
                        {
                            draw: "330",
                            score: "727 (*Provincial nominees only)",
                            date: "December 16, 2024",
                            ITAs: "1,085",
                        },
                        {
                            draw: "329",
                            score: "466 (*French language proficiency only)",
                            date: "December 3, 2024",
                            ITAs: "800",
                        },
                        {
                            draw: "328",
                            score: "705 (*Provincial nominees only)",
                            date: "December 2, 2024",
                            ITAs: "676",
                        },
                        {
                            draw: "327",
                            score: "463 (*Healthcare occupations only)",
                            date: "November 20, 2024",
                            ITAs: "3,000",
                        },
                        {
                            draw: "326",
                            score: "539 (*Canadian Experience Class only)",
                            date: "November 19, 2024",
                            ITAs: "400",
                        },
                        {
                            draw: "325",
                            score: "816 (*Provincial nominees only)",
                            date: "November 18, 2024",
                            ITAs: "174",
                        },
                        {
                            draw: "324",
                            score: "478 (*French language proficiency only)",
                            date: "November 15, 2024",
                            ITAs: "800",
                        },
                        {
                            draw: "323",
                            score: "547 (*Canadian Experience Class only)",
                            date: "November 13, 2024",
                            ITAs: "400",
                        },
                        {
                            draw: "322",
                            score: "812 (*Provincial nominees only)",
                            date: "November 12, 2024",
                            ITAs: "733",
                        },
                        {
                            draw: "321",
                            score: "433 (*Trade occupations only)",
                            date: "October 23, 2024",
                            ITAs: "1,800",
                        },
                        {
                            draw: "320",
                            score: "539 (*Canadian Experience Class only)",
                            date: "October 22, 2024",
                            ITAs: "400",
                        },
                        {
                            draw: "319",
                            score: "791 (*Provincial nominees only)",
                            date: "October 21, 2024",
                            ITAs: "648",
                        },
                        {
                            draw: "318",
                            score: "444 (*French language proficiency only)",
                            date: "October 10, 2024",
                            ITAs: "1,000",
                        },
                        {
                            draw: "317",
                            score: "539 (*Canadian Experience Class only)",
                            date: "October 9, 2024",
                            ITAs: "500",
                        },
                        {
                            draw: "316",
                            score: "743 (*Provincial nominees only)",
                            date: "October 7, 2024",
                            ITAs: "1,613",
                        },
                        {
                            draw: "315",
                            score: "509 (*Canadian Experience Class only)",
                            date: "September 19, 2024",
                            ITAs: "4,000",
                        },
                        {
                            draw: "314",
                            score: "446 (*French language proficiency only)",
                            date: "September 13, 2024",
                            ITAs: "1,000",
                        },
                        {
                            draw: "313",
                            score: "732 (*Provincial nominees only)",
                            date: "September 9, 2024",
                            ITAs: "911",
                        },
                        {
                            draw: "312",
                            score: "507 (*Canadian Experience Class only)",
                            date: "August 27, 2024",
                            ITAs: "3,300",
                        },
                        {
                            draw: "311",
                            score: "694 (*Provincial nominees only)",
                            date: "August 26, 2024",
                            ITAs: "1,121",
                        },
                        {
                            draw: "310",
                            score: "394 (*French language proficiency only)",
                            date: "August 15, 2024",
                            ITAs: "2,000",
                        },
                        {
                            draw: "309",
                            score: "509 (*Canadian Experience Class only)",
                            date: "August 14, 2024",
                            ITAs: "3,200",
                        },
                        {
                            draw: "308",
                            score: "690 (*Provincial nominees only)",
                            date: "August 13, 2024",
                            ITAs: "763",
                        },
                        {
                            draw: "307",
                            score: "510 (*Canadian Experience Class only)",
                            date: "July 31, 2024",
                            ITAs: "5,000",
                        },
                        {
                            draw: "306",
                            score: "686 (*Provincial nominees only)",
                            date: "July 30, 2024",
                            ITAs: "964",
                        },
                        {
                            draw: "305",
                            score: "400 (*French language proficiency only)",
                            date: "July 18, 2024",
                            ITAs: "1,800",
                        },
                        {
                            draw: "304",
                            score: "515 (*Canadian Experience Class only)",
                            date: "July 17, 2024",
                            ITAs: "6,300",
                        },
                        {
                            draw: "303",
                            score: "670 (*Provincial nominees only)",
                            date: "July 16, 2024",
                            ITAs: "1,391",
                        },
                        {
                            draw: "302",
                            score: "420 (*French language proficiency only)",
                            date: "July 8, 2024",
                            ITAs: "3,200",
                        },
                        {
                            draw: "301",
                            score: "445 (*Healthcare occupations only)",
                            date: "July 5, 2024",
                            ITAs: "3,750",
                        },
                        {
                            draw: "300",
                            score: "436 (*Trades occupations only)",
                            date: "July 4, 2024",
                            ITAs: "1,800",
                        },
                        {
                            draw: "299",
                            score: "739 (*Provincial nominees only)",
                            date: "July 2, 2024",
                            ITAs: "920",
                        },
                        {
                            draw: "298",
                            score: "663 (*Provincial nominees only)",
                            date: "June 19, 2024",
                            ITAs: "1,499",
                        },
                        {
                            draw: "297",
                            score: "522 (*Canadian Experience Class only)",
                            date: "May 31, 2024",
                            ITAs: "3,000",
                        },
                        {
                            draw: "296",
                            score: "676 (*Provincial nominees only)",
                            date: "May 30, 2024",
                            ITAs: "2,985",
                        },
                        {
                            draw: "295",
                            score: "410 (*French language proficiency only)",
                            date: "April 24, 2024",
                            ITAs: "1,400",
                        },
                        {
                            draw: "294",
                            score: "529 (General)",
                            date: "April 23, 2024",
                            ITAs: "2,095",
                        },
                        {
                            draw: "293",
                            score: "491 (*STEM occupations only)",
                            date: "April 11, 2024",
                            ITAs: "4,500",
                        },
                        {
                            draw: "292",
                            score: "549 (General)",
                            date: "April 10, 2024",
                            ITAs: "1,280",
                        },
                        {
                            draw: "291",
                            score: "338 (*French language proficiency only)",
                            date: "March 26, 2024",
                            ITAs: "1,500",
                        },
                        {
                            draw: "290",
                            score: "524 (General)",
                            date: "March 25, 2024",
                            ITAs: "1,980",
                        },
                        {
                            draw: "289",
                            score: "430 (*Transport occupations only)",
                            date: "March 13, 2024",
                            ITAs: "975",
                        },
                        {
                            draw: "288",
                            score: "525 (General)",
                            date: "March 12, 2024",
                            ITAs: "2,850",
                        },
                        {
                            draw: "287",
                            score: "336 (*French language proficiency only)",
                            date: "February 29, 2024",
                            ITAs: "2,500",
                        },
                        {
                            draw: "286",
                            score: "534 (General)",
                            date: "February 28, 2024",
                            ITAs: "1,470",
                        },
                        {
                            draw: "285",
                            score: "437 (*Agriculture and Agri-Food occupations only)",
                            date: "February 16, 2024",
                            ITAs: "150",
                        },
                        {
                            draw: "284",
                            score: "422 (*Healthcare occupations only)",
                            date: "February 14, 2024",
                            ITAs: "3,500",
                        },
                        {
                            draw: "283",
                            score: "535 (General)",
                            date: "February 13, 2024",
                            ITAs: "1,490",
                        },
                        {
                            draw: "282",
                            score: "365 (*French language proficiency only)",
                            date: "February 1, 2024",
                            ITAs: "7,000",
                        },
                        {
                            draw: "281",
                            score: "541 (General)",
                            date: "January 31, 2024",
                            ITAs: "730",
                        },
                        {
                            draw: "280",
                            score: "543 (General)",
                            date: "January 23, 2024",
                            ITAs: "1,040",
                        },
                        {
                            draw: "279",
                            score: "546 (General)",
                            date: "January 10, 2024",
                            ITAs: "1,510",
                        },
                    ],
                },
                {
                    year: "2023",
                    data: [
                        {
                            draw: "278",
                            score: "386 (*Agriculture and Agri-Food occupations only)",
                            date: "December 21, 2023",
                            ITAs: "400",
                        },
                        {
                            draw: "277",
                            score: "435 (*Transport occupations only)",
                            date: "December 20, 2023",
                            ITAs: "670",
                        },
                        {
                            draw: "276",
                            score: "425 (*Trades occupations only)",
                            date: "December 19, 2023",
                            ITAs: "1,000",
                        },
                        {
                            draw: "275",
                            score: "542",
                            date: "December 18, 2023",
                            ITAs: "1,325",
                        },
                        {
                            draw: "274",
                            score: "481 (*STEM occupations only)",
                            date: "December 8, 2023",
                            ITAs: "5,900",
                        },
                        {
                            draw: "273",
                            score: "470 (*French language proficiency only)",
                            date: "December 7, 2023",
                            ITAs: "1,000",
                        },
                        {
                            draw: "272",
                            score: "561",
                            date: "December 6, 2023",
                            ITAs: "4,750",
                        },
                        {
                            draw: "271",
                            score: "431 (*Healthcare occupations only)",
                            date: "October 26, 2023",
                            ITAs: "3,600",
                        },
                        {
                            draw: "270",
                            score: "486 (*French language proficiency only)",
                            date: "October 25, 2023",
                            ITAs: "300",
                        },
                        {
                            draw: "269",
                            score: "776 (*Provincial nominees only)",
                            date: "October 24, 2023",
                            ITAs: "1,548",
                        },
                        {
                            draw: "268",
                            score: "500",
                            date: "October 10, 2023",
                            ITAs: "3,725",
                        },
                        {
                            draw: "267",
                            score: "354 (*Agriculture and Agri-Food occupations only)",
                            date: "September 28, 2023",
                            ITAs: "600",
                        },
                        {
                            draw: "266",
                            score: "472 (*French language proficiency only)",
                            date: "September 27, 2023",
                            ITAs: "500",
                        },
                        {
                            draw: "265",
                            score: "504",
                            date: "September 26, 2023",
                            ITAs: "3,000",
                        },
                        {
                            draw: "264",
                            score: "435 (*Transport occupations only)",
                            date: "September 20, 2023",
                            ITAs: "1,000",
                        },
                        {
                            draw: "263",
                            score: "531",
                            date: "September 19, 2023",
                            ITAs: "3,200",
                        },
                        {
                            draw: "262",
                            score: "496",
                            date: "August 15, 2023",
                            ITAs: "4,300",
                        },
                        {
                            draw: "261",
                            score: "388 (*Trades occupations only)",
                            date: "August 3, 2023",
                            ITAs: "1,500",
                        },
                        {
                            draw: "260",
                            score: "435 (*French language proficiency only)",
                            date: "August 2, 2023",
                            ITAs: "800",
                        },
                        {
                            draw: "259",
                            score: "517",
                            date: "August 1, 2023",
                            ITAs: "2,000",
                        },
                        {
                            draw: "258",
                            score: "375 (*French language proficiency only)",
                            date: "July 12th, 2023",
                            ITAs: "3,800",
                        },
                        {
                            draw: "257",
                            score: "505",
                            date: "July 11th, 2023",
                            ITAs: "800",
                        },
                        {
                            draw: "256",
                            score: "439 (*French language proficiency only)",
                            date: "July 7th, 2023",
                            ITAs: "2,300",
                        },
                        {
                            draw: "255",
                            score: "463 (*Healthcare occupations only)",
                            date: "July 6th, 2023",
                            ITAs: "1,500",
                        },
                        {
                            draw: "254",
                            score: "486 (*STEM occupations only)",
                            date: "July 5th, 2023",
                            ITAs: "500",
                        },
                        {
                            draw: "253",
                            score: "511",
                            date: "July 4th, 2023",
                            ITAs: "700",
                        },
                        {
                            draw: "252",
                            score: "476 (*Healthcare occupations only)",
                            date: "June 28, 2023",
                            ITAs: "500",
                        },
                        {
                            draw: "251",
                            score: "486",
                            date: "June 27, 2023",
                            ITAs: "4,300",
                        },
                        {
                            draw: "250",
                            score: "486",
                            date: "June 8, 2023",
                            ITAs: "4,800",
                        },
                        {
                            draw: "249",
                            score: "488",
                            date: "May 24, 2023",
                            ITAs: "4,800",
                        },
                        {
                            draw: "248",
                            score: "691 (*Provincial nominees only)",
                            date: "May 10, 2023",
                            ITAs: "589",
                        },
                        {
                            draw: "247",
                            score: "483",
                            date: "April 26, 2023",
                            ITAs: "3,500",
                        },
                        {
                            draw: "246",
                            score: "486",
                            date: "April 12, 2023",
                            ITAs: "3,500",
                        },
                        {
                            draw: "245",
                            score: "481",
                            date: "March 29, 2023",
                            ITAs: "7,000",
                        },
                        {
                            draw: "244",
                            score: "484",
                            date: "March 23, 2023",
                            ITAs: "7,000",
                        },
                        {
                            draw: "243",
                            score: "490",
                            date: "March 15, 2023",
                            ITAs: "7,000",
                        },
                        {
                            draw: "242",
                            score: "748 (*Provincial nominees only)",
                            date: "March 1, 2023",
                            ITAs: "667",
                        },
                        {
                            draw: "241",
                            score: "791 (*Provincial nominees only)",
                            date: "February 15, 2023",
                            ITAs: "699",
                        },
                        {
                            draw: "240",
                            score: "489 (*Foreign Skilled Worker Program nominees only)",
                            date: "February 2, 2023",
                            ITAs: "3,300",
                        },
                        {
                            draw: "239",
                            score: "733 (*Provincial nominees only)",
                            date: "February 1, 2023",
                            ITAs: "893",
                        },
                        {
                            draw: "238",
                            score: "490",
                            date: "January 18, 2023",
                            ITAs: "5,500",
                        },
                        {
                            draw: "237",
                            score: "507",
                            date: "January 11, 2023",
                            ITAs: "5,500",
                        },
                    ],
                },
                {
                    year: "2022",
                    data: [
                        {
                            draw: "236",
                            score: "491",
                            date: "November 23, 2022",
                            ITAs: "4,750",
                        },
                        {
                            draw: "235",
                            score: "494",
                            date: "November 9, 2022",
                            ITAs: "4,750",
                        },
                        {
                            draw: "234",
                            score: "496",
                            date: "October 26, 2022",
                            ITAs: "4,750",
                        },
                        {
                            draw: "233",
                            score: "500",
                            date: "October 12, 2022",
                            ITAs: "4,250",
                        },
                        {
                            draw: "232",
                            score: "504",
                            date: "September 28, 2022",
                            ITAs: "3,750",
                        },
                        {
                            draw: "231",
                            score: "510",
                            date: "September 14, 2022",
                            ITAs: "3,250",
                        },
                        {
                            draw: "230",
                            score: "516",
                            date: "August 31, 2022",
                            ITAs: "2,750",
                        },
                        {
                            draw: "229",
                            score: "525",
                            date: "August 17, 2022",
                            ITAs: "2,250",
                        },
                        {
                            draw: "228",
                            score: "533",
                            date: "August 3, 2022",
                            ITAs: "2,000",
                        },
                        {
                            draw: "227",
                            score: "542",
                            date: "July 20, 2022",
                            ITAs: "1,750",
                        },
                        {
                            draw: "226",
                            score: "557",
                            date: "July 6, 2022",
                            ITAs: "1,500",
                        },
                        {
                            draw: "225",
                            score: "752 (*Provincial Nominee only)",
                            date: "June 22, 2022",
                            ITAs: "636",
                        },
                        {
                            draw: "224",
                            score: "796 (*Provincial Nominee only)",
                            date: "June 8, 2022",
                            ITAs: "932",
                        },
                        {
                            draw: "223",
                            score: "741 (*Provincial Nominee only)",
                            date: "May 25, 2022",
                            ITAs: "589",
                        },
                        {
                            draw: "222",
                            score: "753 (*Provincial Nominee only)",
                            date: "May 11, 2022",
                            ITAs: "545",
                        },
                        {
                            draw: "221",
                            score: "772 (*Provincial Nominee only)",
                            date: "April 27, 2022",
                            ITAs: "829",
                        },
                        {
                            draw: "220",
                            score: "782 (*Provincial Nominee only)",
                            date: "April 13, 2022",
                            ITAs: "787",
                        },
                        {
                            draw: "219",
                            score: "785 (*Provincial Nominee only)",
                            date: "March 30, 2022",
                            ITAs: "919",
                        },
                        {
                            draw: "218",
                            score: "754 (*Provincial Nominee only)",
                            date: "March 16, 2022",
                            ITAs: "924",
                        },
                        {
                            draw: "217",
                            score: "761 (*Provincial Nominee only)",
                            date: "March 2, 2022",
                            ITAs: "1,047",
                        },
                        {
                            draw: "216",
                            score: "710 (*Provincial Nominee only)",
                            date: "February 16, 2022",
                            ITAs: "1,082",
                        },
                        {
                            draw: "215",
                            score: "674 (*Provincial Nominee only)",
                            date: "February 2, 2022",
                            ITAs: "1,070",
                        },
                        {
                            draw: "214",
                            score: "745 (*Provincial Nominee only)",
                            date: "January 19, 2022",
                            ITAs: "1,036",
                        },
                        {
                            draw: "213",
                            score: "808 (*Provincial Nominee only)",
                            date: "January 5, 2022",
                            ITAs: "392",
                        },
                    ],
                },
                {
                    year: "2021",
                    data: [
                        {
                            draw: "212",
                            score: "720 (*Provincial nominees only)",
                            date: "December 22, 2021",
                            ITAs: "746",
                        },
                        {
                            draw: "211",
                            score: "698 (*Provincial nominees only)",
                            date: "December 10, 2021",
                            ITAs: "1,032",
                        },
                        {
                            draw: "210",
                            score: "737 (*Provincial nominees only)",
                            date: "November 24, 2021",
                            ITAs: "613",
                        },
                        {
                            draw: "209",
                            score: "685 (*Provincial nominees only)",
                            date: "November 10, 2021",
                            ITAs: "775",
                        },
                        {
                            draw: "208",
                            score: "744 (*Provincial nominees only)",
                            date: "October 27, 2021",
                            ITAs: "888",
                        },
                        {
                            draw: "207",
                            score: "720 (*Provincial nominees only)",
                            date: "October 13, 2021",
                            ITAs: "681",
                        },
                        {
                            draw: "206",
                            score: "742 (*Provincial nominees only)",
                            date: "September 29, 2021",
                            ITAs: "761",
                        },
                        {
                            draw: "205",
                            score: "732 (*Provincial nominees only)",
                            date: "September 15, 2021",
                            ITAs: "521",
                        },
                        {
                            draw: "204",
                            score: "462 (*Canadian Experience Class only)",
                            date: "September 14, 2021",
                            ITAs: "2,000",
                        },
                        {
                            draw: "203",
                            score: "764 (*Provincial nominees only)",
                            date: "September 1, 2021",
                            ITAs: "635",
                        },
                        {
                            draw: "202",
                            score: "403 (*Canadian Experience Class only)",
                            date: "August 19, 2021",
                            ITAs: "3,000",
                        },
                        {
                            draw: "201",
                            score: "751 (*Provincial nominees only)",
                            date: "August 18, 2021",
                            ITAs: "463",
                        },
                        {
                            draw: "200",
                            score: "404 (*Canadian Experience Class only)",
                            date: "August 5, 2021",
                            ITAs: "3,000",
                        },
                        {
                            draw: "199",
                            score: "760 (*Provincial nominees only)",
                            date: "August 4, 2021",
                            ITAs: "512",
                        },
                        {
                            draw: "198",
                            score: "357 (*Canadian Experience Class only)",
                            date: "July 22, 2021",
                            ITAs: "4,500",
                        },
                        {
                            draw: "197",
                            score: "734 (*Provincial nominees only)",
                            date: "July 21, 2021",
                            ITAs: "462",
                        },
                        {
                            draw: "196",
                            score: "369 (*Canadian Experience Class only)",
                            date: "July 8, 2021",
                            ITAs: "4,500",
                        },
                        {
                            draw: "195",
                            score: "760 (*Provincial nominees only)",
                            date: "July 7, 2021",
                            ITAs: "627",
                        },
                        {
                            draw: "194",
                            score: "357 (*Canadian Experience Class only)",
                            date: "June 24, 2021",
                            ITAs: "6,000",
                        },
                        {
                            draw: "193",
                            score: "742 (*Provincial nominees only)",
                            date: "June 23, 2021",
                            ITAs: "1,002",
                        },
                        {
                            draw: "192",
                            score: "368 (*Canadian Experience Class only)",
                            date: "June 10, 2021",
                            ITAs: "6,000",
                        },
                        {
                            draw: "191",
                            score: "711 (*Provincial nominees only)",
                            date: "June 9, 2021",
                            ITAs: "940",
                        },
                        {
                            draw: "190",
                            score: "380 (*Canadian Experience Class only)",
                            date: "May 31, 2021",
                            ITAs: "5,956",
                        },
                        {
                            draw: "189",
                            score: "713 (*Provincial nominees only)",
                            date: "May 26, 2021",
                            ITAs: "500",
                        },
                        {
                            draw: "188",
                            score: "397 (*Canadian Experience Class only)",
                            date: "May 20, 2021",
                            ITAs: "1,842",
                        },
                        {
                            draw: "187",
                            score: "401 (*Canadian Experience Class only)",
                            date: "May 13, 2021",
                            ITAs: "4,147",
                        },
                        {
                            draw: "186",
                            score: "752 (*Provincial nominees only)",
                            date: "May 12, 2021",
                            ITAs: "557",
                        },
                        {
                            draw: "185",
                            score: "400 (*Canadian Experience Class only)",
                            date: "April 29, 2021",
                            ITAs: "6,000",
                        },
                        {
                            draw: "184",
                            score: "717 (*Provincial nominees only)",
                            date: "April 28, 2021",
                            ITAs: "381",
                        },
                        {
                            draw: "183",
                            score: "417 (*Canadian Experience Class only)",
                            date: "April 16, 2021",
                            ITAs: "6,000",
                        },
                        {
                            draw: "182",
                            score: "753 (*Provincial nominees only)",
                            date: "April 14, 2021",
                            ITAs: "266",
                        },
                        {
                            draw: "181",
                            score: "432 (*Canadian Experience Class only)",
                            date: "April 1, 2021",
                            ITAs: "5,000",
                        },
                        {
                            draw: "180",
                            score: "778 (*Provincial nominees only)",
                            date: "March 31, 2021",
                            ITAs: "284",
                        },
                        {
                            draw: "179",
                            score: "449 (*Canadian Experience Class only)",
                            date: "March 18, 2021",
                            ITAs: "5,000",
                        },
                        {
                            draw: "178",
                            score: "682 (*Provincial nominees only)",
                            date: "March 17, 2021",
                            ITAs: "183",
                        },
                        {
                            draw: "177",
                            score: "739 (*Provincial nominees only)",
                            date: "March 8, 2021",
                            ITAs: "671",
                        },
                        {
                            draw: "176",
                            score: "75 (*Canadian Experience Class only)",
                            date: "February 13, 2021",
                            ITAs: "27,332",
                        },
                        {
                            draw: "175",
                            score: "720 (*Provincial nominees only)",
                            date: "February 10, 2021",
                            ITAs: "654",
                        },
                        {
                            draw: "174",
                            score: "454 (*Canadian Experience Class only)",
                            date: "January 21, 2021",
                            ITAs: "4,626",
                        },
                        {
                            draw: "173",
                            score: "741 (*Provincial nominees only)",
                            date: "January 20, 2021",
                            ITAs: "374",
                        },
                        {
                            draw: "172",
                            score: "461 (*Canadian Experience Class only)",
                            date: "January 7, 2021",
                            ITAs: "4,750",
                        },
                        {
                            draw: "171",
                            score: "813 (*Provincial nominees only)",
                            date: "January 6, 2021",
                            ITAs: "250",
                        },
                    ],
                },
                {
                    year: "2020",
                    data: [
                        {
                            draw: "170",
                            score: "468",
                            date: "December 23, 2020",
                            ITAs: "5,000",
                        },
                        {
                            draw: "169",
                            score: "469",
                            date: "December 9, 2020",
                            ITAs: "5,000",
                        },
                        {
                            draw: "168",
                            score: "469",
                            date: "November 25, 2020",
                            ITAs: "5,000",
                        },
                        {
                            draw: "167",
                            score: "472",
                            date: "November 18, 2020",
                            ITAs: "5,000",
                        },
                        {
                            draw: "166",
                            score: "478",
                            date: "November 5, 2020",
                            ITAs: "4,500",
                        },
                        {
                            draw: "165",
                            score: "471",
                            date: "October 14, 2020",
                            ITAs: "4,500",
                        },
                        {
                            draw: "164",
                            score: "471",
                            date: "September 29, 2020",
                            ITAs: "4,200",
                        },
                        {
                            draw: "163",
                            score: "472",
                            date: "September 16, 2020",
                            ITAs: "4,200",
                        },
                        {
                            draw: "162",
                            score: "475",
                            date: "September 2, 2020",
                            ITAs: "4,200",
                        },
                        {
                            draw: "161",
                            score: "454 (*Canadian Experience Class only)",
                            date: "August 20, 2020",
                            ITAs: "3,300",
                        },
                        {
                            draw: "160",
                            score: "771 (*Provincial nominees only)",
                            date: "August 19, 2020",
                            ITAs: "600",
                        },
                        {
                            draw: "159",
                            score: "415 (*Federal Skilled Trades candidates only)",
                            date: "August 6, 2020",
                            ITAs: "250",
                        },
                        {
                            draw: "158",
                            score: "476",
                            date: "August 5, 2020",
                            ITAs: "3,900",
                        },
                        {
                            draw: "157",
                            score: "445 (*Canadian Experience Class only)",
                            date: "July 23, 2020",
                            ITAs: "3,343",
                        },
                        {
                            draw: "156",
                            score: "687 (*Provincial nominees only)",
                            date: "July 22, 2020",
                            ITAs: "557",
                        },
                        {
                            draw: "155",
                            score: "478",
                            date: "July 8, 2020",
                            ITAs: "3,900",
                        },
                        {
                            draw: "154",
                            score: "431 (*Canadian Experience Class only)",
                            date: "June 25, 2020",
                            ITAs: "3,508",
                        },
                        {
                            draw: "153",
                            score: "696 (*Provincial nominees only)",
                            date: "June 24, 2020",
                            ITAs: "392",
                        },
                        {
                            draw: "152",
                            score: "437 (*Canadian Experience Class only)",
                            date: "June 11, 2020",
                            ITAs: "3,559",
                        },
                        {
                            draw: "151",
                            score: "743 (*Provincial nominees only)",
                            date: "June 10, 2020",
                            ITAs: "341",
                        },
                        {
                            draw: "150",
                            score: "440 (*Canadian Experience Class only)",
                            date: "May 28, 2020",
                            ITAs: "3,515",
                        },
                        {
                            draw: "149",
                            score: "757 (*Provincial nominees only)",
                            date: "May 27, 2020",
                            ITAs: "385",
                        },
                        {
                            draw: "148",
                            score: "447 (*Canadian Experience Class only)",
                            date: "May 15, 2020",
                            ITAs: "3,371",
                        },
                        {
                            draw: "147",
                            score: "718 (*Provincial nominees only)",
                            date: "May 14, 2020",
                            ITAs: "529",
                        },
                        {
                            draw: "146",
                            score: "452 (*Canadian Experience Class only)",
                            date: "May 1, 2020",
                            ITAs: "3,311",
                        },
                        {
                            draw: "145",
                            score: "692 (*Provincial nominees only)",
                            date: "April 29, 2020",
                            ITAs: "589",
                        },
                        {
                            draw: "144",
                            score: "455 (*Canadian Experience Class only)",
                            date: "April 16, 2020",
                            ITAs: "3,782",
                        },
                        {
                            draw: "143",
                            score: "808 (*Provincial nominees only)",
                            date: "April 15, 2020",
                            ITAs: "118",
                        },
                        {
                            draw: "142",
                            score: "464 (*Canadian Experience Class only)",
                            date: "April 9, 2020",
                            ITAs: "3,294",
                        },
                        {
                            draw: "141",
                            score: "698 (*Provincial nominees only)",
                            date: "April 9, 2020",
                            ITAs: "606",
                        },
                        {
                            draw: "140",
                            score: "467 (*Canadian Experience Class only)",
                            date: "March 23, 2020",
                            ITAs: "3,232",
                        },
                        {
                            draw: "139",
                            score: "720 (*Provincial nominees only)",
                            date: "March 18, 2020",
                            ITAs: "668",
                        },
                        {
                            draw: "138",
                            score: "471",
                            date: "March 4, 2020",
                            ITAs: "3,900",
                        },
                        {
                            draw: "137",
                            score: "470",
                            date: "February 19, 2020",
                            ITAs: "4,500",
                        },
                        {
                            draw: "136",
                            score: "472",
                            date: "February 5, 2020",
                            ITAs: "3,500",
                        },
                        {
                            draw: "135",
                            score: "471",
                            date: "January 22, 2020",
                            ITAs: "3,400",
                        },
                        {
                            draw: "134",
                            score: "473",
                            date: "January 8, 2020",
                            ITAs: "3,400",
                        },
                    ],
                },
                {
                    year: "2019",
                    data: [
                        {
                            draw: "133",
                            score: "469",
                            date: "December 19, 2019",
                            ITAs: "3,200",
                        },
                        {
                            draw: "132",
                            score: "472",
                            date: "December 11, 2019",
                            ITAs: "3,200",
                        },
                        {
                            draw: "131",
                            score: "471",
                            date: "November 27, 2019",
                            ITAs: "3,600",
                        },
                        {
                            draw: "130",
                            score: "472",
                            date: "November 13, 2019",
                            ITAs: "3,600",
                        },
                        {
                            draw: "128",
                            score: "357 (*Federal Skilled Trades candidates only)",
                            date: "October 16, 2019",
                            ITAs: "500",
                        },
                        {
                            draw: "127",
                            score: "464",
                            date: "October 2, 2019",
                            ITAs: "3,900",
                        },
                        {
                            draw: "126",
                            score: "462",
                            date: "September 18, 2019",
                            ITAs: "3,600",
                        },
                        {
                            draw: "125",
                            score: "463",
                            date: "September 4, 2019",
                            ITAs: "3,600",
                        },
                        {
                            draw: "124",
                            score: "457",
                            date: "August 20, 2019",
                            ITAs: "3,600",
                        },
                        {
                            draw: "123",
                            score: "466",
                            date: "August 12, 2019",
                            ITAs: "3,600",
                        },
                        {
                            draw: "122",
                            score: "459",
                            date: "July 24, 2019",
                            ITAs: "3,600",
                        },
                        {
                            draw: "121",
                            score: "460",
                            date: "July 10, 2019",
                            ITAs: "3,600",
                        },
                        {
                            draw: "120",
                            score: "462",
                            date: "June 26, 2019",
                            ITAs: "3,350",
                        },
                        {
                            draw: "119",
                            score: "465",
                            date: "June 12, 2019",
                            ITAs: "3,350",
                        },
                        {
                            draw: "118",
                            score: "470",
                            date: "May 29, 2019",
                            ITAs: "3,350",
                        },
                        {
                            draw: "117",
                            score: "332 (*Federal Skilled Trades candidates only)",
                            date: "May 15, 2019",
                            ITAs: "500",
                        },
                        {
                            draw: "116",
                            score: "450",
                            date: "May 1, 2019",
                            ITAs: "3,350",
                        },
                        {
                            draw: "115",
                            score: "451",
                            date: "April 17, 2019",
                            ITAs: "3,350",
                        },
                        {
                            draw: "114",
                            score: "451",
                            date: "April 3, 2019",
                            ITAs: "3,350",
                        },
                        {
                            draw: "113",
                            score: "452",
                            date: "March 20, 2019",
                            ITAs: "3,350",
                        },
                        {
                            draw: "112",
                            score: "454",
                            date: "March 6, 2019",
                            ITAs: "3,350",
                        },
                        {
                            draw: "111",
                            score: "457",
                            date: "February 20, 2019",
                            ITAs: "3,350",
                        },
                        {
                            draw: "110",
                            score: "438",
                            date: "January 30, 2019",
                            ITAs: "3,350",
                        },
                        {
                            draw: "109",
                            score: "443",
                            date: "January 23, 2019",
                            ITAs: "3,900",
                        },
                        {
                            draw: "108",
                            score: "449",
                            date: "January 10, 2019",
                            ITAs: "3,900",
                        },
                    ],
                },
                {
                    year: "2018",
                    data: [
                        {
                            draw: "107",
                            score: "439",
                            date: "December 19, 2018",
                            ITAs: "3,900",
                        },
                        {
                            draw: "106",
                            score: "445",
                            date: "December 12, 2018",
                            ITAs: "3,900",
                        },
                        {
                            draw: "105",
                            score: "445",
                            date: "November 28, 2018",
                            ITAs: "3,900",
                        },
                        {
                            draw: "104",
                            score: "449",
                            date: "November 15, 2018",
                            ITAs: "3,900",
                        },
                        {
                            draw: "103",
                            score: "442",
                            date: "October 29, 2018",
                            ITAs: "3,900",
                        },
                        {
                            draw: "102",
                            score: "440",
                            date: "October 15, 2018",
                            ITAs: "3,900",
                        },
                        {
                            draw: "101",
                            score: "445",
                            date: "October 3, 2018",
                            ITAs: "3,900",
                        },
                        {
                            draw: "100",
                            score: "284 (*Federal Skilled Trades candidates only)",
                            date: "September 24, 2018",
                            ITAs: "400",
                        },
                        {
                            draw: "99",
                            score: "441",
                            date: "September 19, 2018",
                            ITAs: "3,500",
                        },
                        {
                            draw: "98",
                            score: "440",
                            date: "September 5, 2018",
                            ITAs: "3,900",
                        },
                        {
                            draw: "97",
                            score: "440",
                            date: "August 22, 2018",
                            ITAs: "3,750",
                        },
                        {
                            draw: "96",
                            score: "440",
                            date: "August 8, 2018",
                            ITAs: "3,750",
                        },
                        {
                            draw: "95",
                            score: "441",
                            date: "July 25, 2018",
                            ITAs: "3,750",
                        },
                        {
                            draw: "94",
                            score: "442",
                            date: "July 11, 2018",
                            ITAs: "3,750",
                        },
                        {
                            draw: "93",
                            score: "442",
                            date: "June 25, 2018",
                            ITAs: "3,750",
                        },
                        {
                            draw: "92",
                            score: "451",
                            date: "June 13, 2018",
                            ITAs: "3,750",
                        },
                        {
                            draw: "91",
                            score: "902 (*Provincial nominees only), 288 (*Federal Skilled Trades candidates only)",
                            date: "May 30, 2018",
                            ITAs: "700",
                        },
                        {
                            draw: "90",
                            score: "440",
                            date: "May 23, 2018",
                            ITAs: "3,500",
                        },
                        {
                            draw: "89",
                            score: "441",
                            date: "May 9, 2018",
                            ITAs: "3,500",
                        },
                        {
                            draw: "88",
                            score: "441",
                            date: "April 25, 2018",
                            ITAs: "3,500",
                        },
                        {
                            draw: "87",
                            score: "444",
                            date: "April 11, 2018",
                            ITAs: "3,500",
                        },
                        {
                            draw: "86",
                            score: "446",
                            date: "March 26, 2018",
                            ITAs: "3,000",
                        },
                        {
                            draw: "85",
                            score: "456",
                            date: "March 14, 2018",
                            ITAs: "3,000",
                        },
                        {
                            draw: "84",
                            score: "442",
                            date: "February 21, 2018",
                            ITAs: "3,000",
                        },
                        {
                            draw: "83",
                            score: "442",
                            date: "February 7, 2018",
                            ITAs: "3,000",
                        },
                        {
                            draw: "82",
                            score: "444",
                            date: "January 24, 2018",
                            ITAs: "2,750",
                        },
                        {
                            draw: "81",
                            score: "446",
                            date: "January 10, 2018",
                            ITAs: "2,750",
                        },
                    ],
                },
                {
                    year: "2017",
                    data: [
                        {
                            draw: "80",
                            score: "446",
                            date: "December 20, 2017",
                            ITAs: "2,750",
                        },
                        {
                            draw: "79",
                            score: "452",
                            date: "December 6, 2017",
                            ITAs: "2,750",
                        },
                        {
                            draw: "78",
                            score: "439",
                            date: "November 15, 2017",
                            ITAs: "2,750",
                        },
                        {
                            draw: "77",
                            score: "458",
                            date: "November 8, 2017",
                            ITAs: "2,000",
                        },
                        {
                            draw: "76",
                            score: "241 (*Federal Skilled Trades candidates only)",
                            date: "November 1, 2017",
                            ITAs: "505",
                        },
                        {
                            draw: "75",
                            score: "673 (*Provincial nominees only)",
                            date: "November 1, 2017",
                            ITAs: "290",
                        },
                        {
                            draw: "74",
                            score: "436",
                            date: "October 18, 2017",
                            ITAs: "2,757",
                        },
                        {
                            draw: "73",
                            score: "438",
                            date: "October 04, 2017",
                            ITAs: "2,801",
                        },
                        {
                            draw: "72",
                            score: "433",
                            date: "September 20, 2017",
                            ITAs: "2,871",
                        },
                        {
                            draw: "71",
                            score: "435",
                            date: "September 6, 2017",
                            ITAs: "2,772",
                        },
                        {
                            draw: "70",
                            score: "434",
                            date: "August 23, 2017",
                            ITAs: "3,035",
                        },
                        {
                            draw: "69",
                            score: "433",
                            date: "August 9, 2017",
                            ITAs: "2,991",
                        },
                        {
                            draw: "68",
                            score: "441",
                            date: "August 2, 2017",
                            ITAs: "3,264",
                        },
                        {
                            draw: "67",
                            score: "440",
                            date: "July 12, 2017",
                            ITAs: "3,202",
                        },
                        {
                            draw: "66",
                            score: "449",
                            date: "June 28, 2017",
                            ITAs: "3,409",
                        },
                        {
                            draw: "65",
                            score: "413",
                            date: "May 31, 2017",
                            ITAs: "3,877",
                        },
                        {
                            draw: "64",
                            score: "199 (*Federal Skilled Trades candidates only)",
                            date: "May 26, 2017",
                            ITAs: "400",
                        },
                        {
                            draw: "63",
                            score: "775 (*Provincial nominees only)",
                            date: "May 26, 2017",
                            ITAs: "143",
                        },
                        {
                            draw: "62",
                            score: "415",
                            date: "May 17, 2017",
                            ITAs: "3,687",
                        },
                        {
                            draw: "61",
                            score: "423",
                            date: "May 4, 2017",
                            ITAs: "3,796",
                        },
                        {
                            draw: "60",
                            score: "415",
                            date: "April 19, 2017",
                            ITAs: "3,665",
                        },
                        {
                            draw: "59",
                            score: "423",
                            date: "April 12, 2017",
                            ITAs: "3,923",
                        },
                        {
                            draw: "58",
                            score: "431",
                            date: "April 5, 2017",
                            ITAs: "3,753",
                        },
                        {
                            draw: "57",
                            score: "441",
                            date: "March 24, 2017",
                            ITAs: "3,749",
                        },
                        {
                            draw: "56",
                            score: "434",
                            date: "March 1, 2017",
                            ITAs: "3,884",
                        },
                        {
                            draw: "55",
                            score: "441",
                            date: "February 22, 2017",
                            ITAs: "3,611",
                        },
                        {
                            draw: "54",
                            score: "447",
                            date: "February 8, 2017",
                            ITAs: "3,644",
                        },
                        {
                            draw: "53",
                            score: "453",
                            date: "January 25, 2017",
                            ITAs: "3,508",
                        },
                        {
                            draw: "52",
                            score: "459",
                            date: "January 11, 2017",
                            ITAs: "3,334",
                        },
                        {
                            draw: "51",
                            score: "468",
                            date: "January 4, 2017",
                            ITAs: "2,902",
                        },
                    ],
                },
                {
                    year: "2016",
                    data: [
                        {
                            draw: "50",
                            score: "475",
                            date: "December 22, 2016",
                            ITAs: "2,878",
                        },
                        {
                            draw: "49",
                            score: "497",
                            date: "December 16, 2016",
                            ITAs: "1,936",
                        },
                        {
                            draw: "48",
                            score: "786 (*Provincial nominees only)",
                            date: "November 30, 2016",
                            ITAs: "559",
                        },
                        {
                            draw: "47",
                            score: "470",
                            date: "November 16, 2016",
                            ITAs: "2,427",
                        },
                        {
                            draw: "46",
                            score: "472",
                            date: "November 2, 2016",
                            ITAs: "2,080",
                        },
                        {
                            draw: "45",
                            score: "475",
                            date: "October 19, 2016",
                            ITAs: "1,804",
                        },
                        {
                            draw: "44",
                            score: "484",
                            date: "October 12, 2016",
                            ITAs: "1,518",
                        },
                        {
                            draw: "43",
                            score: "483",
                            date: "September 21, 2016",
                            ITAs: "1,288",
                        },
                        {
                            draw: "42",
                            score: "491",
                            date: "September 7, 2016",
                            ITAs: "1,000",
                        },
                        {
                            draw: "41",
                            score: "538",
                            date: "August 24, 2016",
                            ITAs: "750",
                        },
                        {
                            draw: "40",
                            score: "490",
                            date: "August 10, 2016",
                            ITAs: "754",
                        },
                        {
                            draw: "39",
                            score: "488",
                            date: "July 27, 2016",
                            ITAs: "755",
                        },
                        {
                            draw: "38",
                            score: "482",
                            date: "July 13, 2016",
                            ITAs: "747",
                        },
                        {
                            draw: "37",
                            score: "482",
                            date: "June 29, 2016",
                            ITAs: "773",
                        },
                        {
                            draw: "36",
                            score: "488",
                            date: "June 15, 2016",
                            ITAs: "752",
                        },
                        {
                            draw: "35",
                            score: "483",
                            date: "June 1, 2016",
                            ITAs: "762",
                        },
                        {
                            draw: "34",
                            score: "484",
                            date: "May 18, 2016",
                            ITAs: "763",
                        },
                        {
                            draw: "33",
                            score: "534",
                            date: "May 6, 2016",
                            ITAs: "799",
                        },
                        {
                            draw: "32",
                            score: "468",
                            date: "April 20, 2016",
                            ITAs: "1,018",
                        },
                        {
                            draw: "31",
                            score: "470",
                            date: "April 6, 2016",
                            ITAs: "954",
                        },
                        {
                            draw: "30",
                            score: "470",
                            date: "March 23, 2016",
                            ITAs: "1,014",
                        },
                        {
                            draw: "29",
                            score: "473",
                            date: "March 8, 2016",
                            ITAs: "1,013",
                        },
                        {
                            draw: "28",
                            score: "453",
                            date: "February 24, 2016",
                            ITAs: "1,484",
                        },
                        {
                            draw: "27",
                            score: "459",
                            date: "February 10, 2016",
                            ITAs: "1,505",
                        },
                        {
                            draw: "26",
                            score: "457",
                            date: "January 28, 2016",
                            ITAs: "1,468",
                        },
                        {
                            draw: "25",
                            score: "453",
                            date: "January 13, 2016",
                            ITAs: "1,518",
                        },
                        {
                            draw: "24",
                            score: "461",
                            date: "January 6, 2016",
                            ITAs: "1,463",
                        },
                    ],
                },
                {
                    year: "2015",
                    data: [
                        {
                            draw: "23",
                            score: "460",
                            date: "December 18, 2015",
                            ITAs: "1,503",
                        },
                        {
                            draw: "22",
                            score: "461",
                            date: "December 4, 2015",
                            ITAs: "1,451",
                        },
                        {
                            draw: "21",
                            score: "472",
                            date: "November 27, 2015",
                            ITAs: "1,559",
                        },
                        {
                            draw: "20",
                            score: "484",
                            date: "November 13, 2015",
                            ITAs: "1,506",
                        },
                        {
                            draw: "19",
                            score: "489",
                            date: "October 23, 2015",
                            ITAs: "1,502",
                        },
                        {
                            draw: "18",
                            score: "450",
                            date: "October 2, 2015",
                            ITAs: "1,530",
                        },
                        {
                            draw: "17",
                            score: "450",
                            date: "September 18, 2015",
                            ITAs: "1,545",
                        },
                        {
                            draw: "16",
                            score: "459",
                            date: "September 8, 2015",
                            ITAs: "1,517",
                        },
                        {
                            draw: "15",
                            score: "456",
                            date: "August 21, 2015",
                            ITAs: "1,523",
                        },
                        {
                            draw: "14",
                            score: "471",
                            date: "August 7, 2015",
                            ITAs: "1,402",
                        },
                        {
                            draw: "13",
                            score: "451",
                            date: "July 17, 2015",
                            ITAs: "1,581",
                        },
                        {
                            draw: "12",
                            score: "463",
                            date: "July 10, 2015",
                            ITAs: "1,516",
                        },
                        {
                            draw: "11",
                            score: "469",
                            date: "June 27, 2015",
                            ITAs: "1,575",
                        },
                        {
                            draw: "10",
                            score: "482",
                            date: "June 12, 2015",
                            ITAs: "1,501",
                        },
                        {
                            draw: "9",
                            score: "755",
                            date: "May 22, 2015",
                            ITAs: "1,361",
                        },
                        {
                            draw: "8",
                            score: "453",
                            date: "April 17, 2015",
                            ITAs: "715",
                        },
                        {
                            draw: "7",
                            score: "469",
                            date: "April 10, 2015",
                            ITAs: "925",
                        },
                        {
                            draw: "6",
                            score: "453",
                            date: "March 27, 2015",
                            ITAs: "1,637",
                        },
                        {
                            draw: "5",
                            score: "481",
                            date: "March 20, 2015",
                            ITAs: "1,620",
                        },
                        {
                            draw: "4",
                            score: "735",
                            date: "February 27, 2015",
                            ITAs: "1,187",
                        },
                        {
                            draw: "3",
                            score: "808 (*Canadian Experience Class only)",
                            date: "February 20, 2015",
                            ITAs: "849",
                        },
                        {
                            draw: "2",
                            score: "818",
                            date: "February 7, 2015",
                            ITAs: "779",
                        },
                        {
                            draw: "1",
                            score: "886",
                            date: "January 31, 2015",
                            ITAs: "779",
                        },
                    ],
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Express Entry Program?",
            description:
                "Navigating the Canada immigration process can be complex, with various visa categories, legal requirements, and changing policies. Our expert team provides comprehensive, step-by-step assistance to ensure your application is accurate, well-prepared, and aligned with immigration regulations. With our professional guidance, efficient processing, and tailored solutions, we help make your Canada immigration journey smooth and stress-free.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canada immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your career, education, or business needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
    },
};

export const canadaEmployerSpecificWorkPermitData = {
    header: {
        label: "Work Permit",
        title: "Tailor Your Employment Journey with an Employer-Specific Work Permit",
        description:
            "An Employer-Specific Work Permit is tied to a particular job offer, allowing you to work exclusively for your designated Canadian employer.",
    },
    sections: {
        whatIs: {
            title: "What is an Employer-Specific Work Permit?",
            content:
                "This work permit is issued to individuals who have a valid job offer from a Canadian employer. It restricts your employment to that employer, ensuring that the opportunity aligns with the organization’s specific needs.",
        },
        whyChoose: {
            title: "Why Choose an Employer-Specific Work Permit?",
            items: [
                {
                    title: "Dedicated Employment Opportunity",
                    text: "Work exclusively for your sponsoring employer.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Career Advancement",
                    text: "Develop specialized skills and gain valuable industry-specific experience.",
                    icon: "FaChartLine",
                },
                {
                    title: "Regulated Work Environment",
                    text: "Benefit from the security and stability of a structured work permit.",
                    icon: "FaPoundSign",
                },
                {
                    title: "Pathway to Permanent Residency",
                    text: "Leverage your Canadian work experience for future immigration opportunities.",
                    icon: "FaGlobe",
                },
                {
                    title: "Comprehensive Employer Support",
                    text: "Benefit from your employer’s guidance throughout the application process.",
                    icon: "FaUsers",
                },
                {
                    title: "Sector-Specific Experience",
                    text: "Develop expertise in your employer’s industry and grow professionally.",
                    icon: "FaIndustry",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for the Employer-Specific Work Permit",
            description:
                "To qualify, you must meet the following requirements:",
            items: [
                {
                    title: "Valid Job Offer",
                    text: "Secure a valid job offer from a designated Canadian employer.",
                },
                {
                    title: "Relevant Skills & Experience",
                    text: "Demonstrate that you possess the skills required for the position.",
                },
                {
                    title: "Compliance with Regulations",
                    text: "Ensure that both you and your employer meet all applicable requirements.",
                },
                {
                    title: "Financial Stability",
                    text: "Show that you can support yourself financially during your employment.",
                },
                {
                    title: "Health & Security Checks",
                    text: "Pass the necessary medical examinations and background checks.",
                },
            ],
        },
        process: {
            title: "Application Process for the Employer-Specific Work Permit",
            description:
                "Follow our detailed process to secure your Employer-Specific Work Permit:",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Job Offer Verification",
                    description:
                        "Start with a consultation to verify your job offer and confirm your eligibility for an employer‑specific permit. This step is crucial to set the foundation for your application.",
                },
                {
                    number: "02",
                    title: "Documentation & Application Preparation",
                    description:
                        "Gather all required documents, including your job offer, professional credentials, and identification proofs. Our team ensures your application is accurate and complete.",
                },
                {
                    number: "03",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your application along with the necessary fees through our secure platform. Timely submission helps avoid delays.",
                },
                {
                    number: "04",
                    title: "Review & Additional Evaluation",
                    description:
                        "Your application is reviewed by immigration authorities, and additional documentation may be requested. We provide support throughout any further evaluation.",
                },
                {
                    number: "05",
                    title: "Decision & Post-Approval Guidance",
                    description:
                        "Upon approval, we offer guidance on transitioning smoothly into your role with your sponsoring employer. Ongoing support is provided to ensure your continued success.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Your Employer-Specific Work Permit Application?",
            description:
                "At Horizon Success Bridge, we provide specialized guidance to help you secure an Employer-Specific Work Permit. Our experienced team ensures that your application is prepared with precision, allowing you to make the most of a dedicated job opportunity.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canadian immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your family’s unique needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
    },
};

export const canadaOpenWorkPermitData = {
    header: {
        label: "Work Permit",
        title: "Empower Your Career in Canada with an Open Work Permit",
        description:
            "An Open Work Permit provides the flexibility to work for any employer in Canada, opening doors to diverse career opportunities and a dynamic work environment.",
    },
    sections: {
        whatIs: {
            title: "What is the Open Work Permit?",
            content:
                "The Open Work Permit is a versatile immigration option designed for individuals who do not have a specific job offer in hand. It allows you to work for any employer in Canada while you explore opportunities that best suit your skills and career aspirations.",
        },
        whyChoose: {
            title: "Why Choose the Open Work Permit?",
            items: [
                {
                    title: "Flexible Employment",
                    text: "Work with any employer across Canada.",
                    icon: "FaGlobe",
                },
                {
                    title: "Career Growth",
                    text: "Expand your professional horizons and gain diverse work experience.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Streamlined Process",
                    text: "Benefit from an efficient and straightforward application process.",
                    icon: "FaChartLine",
                },
                {
                    title: "No Employer Restrictions",
                    text: "Enjoy the freedom to choose your ideal job without being tied to a specific employer.",
                    icon: "FaUsers",
                },
                {
                    title: "Bridge to Permanent Residency",
                    text: "Leverage your work experience as a stepping stone towards Canadian permanent residency.",
                    icon: "FaPoundSign",
                },
                {
                    title: "Work-Life Balance",
                    text: "Experience a supportive Canadian work environment that promotes personal and professional well-being.",
                    icon: "FaLightbulb",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for the Open Work Permit",
            description:
                "To qualify for an Open Work Permit, ensure you meet the following requirements:",
            items: [
                {
                    title: "Valid Immigration Status",
                    text: "Hold a valid temporary resident status in Canada or apply from abroad under eligible categories.",
                },
                {
                    title: "Financial Stability",
                    text: "Demonstrate sufficient funds to support yourself during your stay in Canada.",
                },
                {
                    title: "Health & Security",
                    text: "Pass all the medical examinations and background checks to meet immigration requirements.",
                },
                {
                    title: "Comprehensive Documentation",
                    text: "Submit complete and accurate documents as required by Canadian immigration authorities.",
                },
                {
                    title: "Purpose of Stay",
                    text: "Provide evidence of your intent to work and contribute to Canada’s economy.",
                },
            ],
        },
        process: {
            title: "Application Process for the Open Work Permit",
            description:
                "Follow our structured process to secure your Open Work Permit with ease:",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Begin with a comprehensive consultation to assess your eligibility and determine the best pathway for your work permit application. This initial step lays the groundwork for your application.",
                },
                {
                    number: "02",
                    title: "Documentation & Application Preparation",
                    description:
                        "Gather all necessary documents, including proof of status, financial records, and any supporting evidence required by immigration authorities. Our team will assist you in preparing a complete and compelling application.",
                },
                {
                    number: "03",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your application along with the required fees via our secure system. Your application is then forwarded to Canadian immigration for review. Timely submission is key to avoiding delays.",
                },
                {
                    number: "04",
                    title: "Review & Additional Evaluation",
                    description:
                        "An evaluation may be conducted, including interviews or requests for further documentation. We will support you through any additional steps. This ensures your application remains robust and complete.",
                },
                {
                    number: "05",
                    title: "Decision & Post-Approval Support",
                    description:
                        "Upon receiving a decision, we provide detailed post-approval guidance to help you transition smoothly into your new work environment in Canada. Ongoing support is available to ensure your success.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Your Open Work Permit Application?",
            description:
                "At Horizon Success Bridge, we offer personalized, expert guidance to help you navigate every step of your Open Work Permit application. Our comprehensive support ensures a seamless transition into the Canadian workforce.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canadian immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your family’s unique needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
    },
};

export const canadaLMIAWorkPermitData = {
    header: {
        label: "Work Permit",
        title: "Empower Your Canadian Career with an LMIA Work Permit",
        description:
            "The LMIA Work Permit offers a pathway to employment in Canada, where employers secure a positive Labour Market Impact Assessment (LMIA) to prove the need for hiring foreign talent.",
    },
    sections: {
        whatIs: {
            title: "What is the LMIA Work Permit?",
            content:
                "An LMIA Work Permit is issued when a Canadian employer obtains a positive LMIA from Employment and Social Development Canada (ESDC), demonstrating that hiring a foreign worker will not negatively impact the local labor market.",
        },
        whyChoose: {
            title: "Why Choose the LMIA Work Permit?",
            items: [
                {
                    title: "Verified Employment Opportunities",
                    text: "Gain access to jobs with employers who have proven the need for foreign talent.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Enhanced Career Prospects",
                    text: "Build your career with valuable Canadian work experience.",
                    icon: "FaChartLine",
                },
                {
                    title: "Regulated Process",
                    text: "Enjoy a transparent process backed by Canadian labor authorities.",
                    icon: "FaPoundSign",
                },
                {
                    title: "Pathway to Permanent Residency",
                    text: "Leverage your work experience towards long-term immigration goals.",
                    icon: "FaGlobe",
                },
                {
                    title: "Comprehensive Support",
                    text: "Benefit from expert guidance throughout your application.",
                    icon: "FaUsers",
                },
                {
                    title: "Efficient Processing",
                    text: "Streamlined process that minimizes delays and accelerates your LMIA approval.",
                    icon: "FaChartLine",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for the LMIA Work Permit",
            description:
                "To qualify for an LMIA Work Permit, you must meet several requirements:",
            items: [
                {
                    title: "Valid Job Offer",
                    text: "Obtain a genuine job offer from a Canadian employer with a positive LMIA.",
                },
                {
                    title: "Skill & Experience",
                    text: "Demonstrate that you possess the necessary skills and experience for the role.",
                },
                {
                    title: "Compliance with Regulations",
                    text: "Ensure both you and your employer meet all regulatory requirements.",
                },
                {
                    title: "Financial Stability",
                    text: "Show that you have sufficient financial resources to support yourself during your stay.",
                },
                {
                    title: "Health & Security",
                    text: "Pass the required medical examinations and background checks.",
                },
            ],
        },
        process: {
            title: "Application Process for the LMIA Work Permit",
            description:
                "Follow our structured process to secure your LMIA Work Permit:",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Job Offer Verification",
                    description:
                        "Start with a consultation to verify your job offer and confirm your LMIA status. This initial step sets the foundation for your application.",
                },
                {
                    number: "02",
                    title: "Documentation & Application Preparation",
                    description:
                        "Gather all required documents, including your LMIA, proof of experience, and identification. We help you compile a complete and compelling application.",
                },
                {
                    number: "03",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your application with the required fees through our secure system. Timely submission is crucial to avoid delays.",
                },
                {
                    number: "04",
                    title: "Review & Additional Evaluation",
                    description:
                        "Your application will be reviewed by immigration authorities, and further information may be requested. We support you throughout any additional steps.",
                },
                {
                    number: "05",
                    title: "Decision & Post-Approval Guidance",
                    description:
                        "Upon approval, we guide you on transitioning smoothly into your new Canadian work environment. Ongoing support is provided for your continued success.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Your LMIA Work Permit Application?",
            description:
                "At Horizon Success Bridge, our experienced team provides personalized support to ensure your LMIA Work Permit application is handled with precision. We streamline the process, allowing you to focus on your career growth in Canada.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canadian immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your family’s unique needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
    },
};

export const canadaGlobalTalentStreamData = {
    header: {
        label: "Work Permit",
        title: "Accelerate Your Career with the Global Talent Stream",
        description:
            "The Global Talent Stream offers a fast‑track work permit for highly skilled professionals, enabling you to join leading Canadian companies and drive innovation.",
    },
    sections: {
        whatIs: {
            title: "What is the Global Talent Stream?",
            content:
                "The Global Talent Stream is a specialized program that expedites work permit processing for skilled workers. It helps Canadian employers access the global talent needed to fuel innovation and growth.",
        },
        whyChoose: {
            title: "Why Choose the Global Talent Stream?",
            items: [
                {
                    title: "Fast-Track Processing",
                    text: "Benefit from expedited approvals.",
                    icon: "FaRocket",
                },
                {
                    title: "Access to Global Talent",
                    text: "Join leading companies driving innovation.",
                    icon: "FaGlobe",
                },
                {
                    title: "Enhanced Career Opportunities",
                    text: "Expand your professional horizons.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Comprehensive Support",
                    text: "Receive expert guidance throughout the application.",
                    icon: "FaUsers",
                },
                {
                    title: "Pathway to Growth",
                    text: "Leverage Canadian work experience for long‑term success.",
                    icon: "FaChartLine",
                },
                {
                    title: "Innovative Edge",
                    text: "Harness cutting‑edge skills and creativity to advance your career.",
                    icon: "FaLightbulb",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for the Global Talent Stream",
            description:
                "To qualify, you must meet the following requirements:",
            items: [
                {
                    title: "High-Level Skillset",
                    text: "Possess specialized skills and experience in high-demand industries.",
                },
                {
                    title: "Job Offer from a Canadian Employer",
                    text: "Secure a valid job offer from a participating Canadian company.",
                },
                {
                    title: "Regulatory Compliance",
                    text: "Ensure that both you and your employer meet all applicable standards.",
                },
                {
                    title: "Financial Viability",
                    text: "Demonstrate the financial means to support your transition to Canada.",
                },
                {
                    title: "Relevant Experience",
                    text: "Provide evidence of your professional achievements and industry expertise.",
                },
            ],
        },
        process: {
            title: "Application Process for the Global Talent Stream",
            description:
                "Follow our streamlined process to secure your work permit:",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Begin with a consultation to assess your eligibility and review the Global Talent Stream requirements. This step sets the foundation for your application.",
                },
                {
                    number: "02",
                    title: "Documentation & Application Preparation",
                    description:
                        "Gather all required documents, including your resume, job offer letter, and proof of specialized skills. We assist you in creating a compelling application package.",
                },
                {
                    number: "03",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your application with the necessary fees via our secure online platform. Timely submission is crucial to fast‑tracking your permit.",
                },
                {
                    number: "04",
                    title: "Review & Additional Evaluation",
                    description:
                        "Your application is reviewed by immigration authorities, and further documentation may be requested. We support you throughout any additional steps.",
                },
                {
                    number: "05",
                    title: "Decision & Post-Approval Guidance",
                    description:
                        "Upon approval, we provide guidance on transitioning into your new role in Canada. Ongoing support ensures your continued success.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Your Global Talent Stream Application?",
            description:
                "At Horizon Success Bridge, we provide expert guidance to help you navigate the fast‑track Global Talent Stream, ensuring your application stands out and accelerates your career in Canada.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canadian immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your family’s unique needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
    },
};

export const canadaEntrepreneurStreamsData = {
    header: {
        label: "Entrepreneur Visa",
        title: "Transform Your Entrepreneurial Journey in Canada",
        description:
            "Step into a world of opportunities where your business acumen meets innovative strategies. The Entrepreneur Visa offers a dedicated pathway for experienced business professionals to launch and expand their ventures in Canada.",
    },
    sections: {
        whatIs: {
            title: "What is the Entrepreneur Visa?",
            content:
                "The Entrepreneur Visa is an immigration program tailored for seasoned entrepreneurs. It provides a framework for establishing and growing a business in Canada, fostering economic innovation and job creation.",
        },
        whyChoose: {
            title: "Why Choose the Entrepreneur Visa?",
            items: [
                {
                    title: "Innovative Business Strategies",
                    text: "Leverage creative approaches to drive growth.",
                    icon: "FaLightbulb",
                },
                {
                    title: "Proven Business Expertise",
                    text: "Build on your successful track record.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Capital Investment",
                    text: "Access necessary funds to fuel your venture.",
                    icon: "FaPoundSign",
                },
                {
                    title: "Global Market Reach",
                    text: "Expand your business beyond borders.",
                    icon: "FaGlobe",
                },
                {
                    title: "Comprehensive Support",
                    text: "Benefit from expert guidance at every step.",
                    icon: "FaUsers",
                },
                {
                    title: "Pathway to Long-Term Success",
                    text: "Secure a future in Canada's vibrant market.",
                    icon: "FaChartLine",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for the Entrepreneur Visa",
            description:
                "Ensure you meet the following requirements to qualify for the Entrepreneur Visa:",
            items: [
                {
                    title: "Business Experience",
                    text: "Demonstrate a solid track record in managing or owning a business.",
                },
                {
                    title: "Net Worth Requirement",
                    text: "Meet the minimum net worth criteria as stipulated by Canadian authorities.",
                },
                {
                    title: "Investment Proposal",
                    text: "Submit a detailed business plan outlining your strategy and market analysis.",
                },
                {
                    title: "Language Proficiency",
                    text: "Provide evidence of proficiency in English or French.",
                },
                {
                    title: "Operational Plan",
                    text: "Present a comprehensive plan for establishing and operating your business in Canada.",
                },
            ],
        },
        process: {
            title: "Application Process for the Entrepreneur Visa",
            description:
                "Begin your application journey with our streamlined process, designed to guide you from initial consultation to final approval.",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Business Idea Evaluation",
                    description:
                        "Start with a comprehensive consultation to assess your business idea and ensure it aligns with Canadian market needs. This step lays the groundwork for a successful application.",
                },
                {
                    number: "02",
                    title: "Documentation & Proposal Preparation",
                    description:
                        "Compile all necessary documentation, including a detailed business plan and financial projections. Our team assists you in crafting a compelling proposal. Accurate documentation is critical to your application’s success.",
                },
                {
                    number: "03",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your completed application along with the required fees. Your application is then forwarded to the relevant Canadian immigration authorities for review. Ensure all documents are in order to avoid delays.",
                },
                {
                    number: "04",
                    title: "Review & Additional Evaluation",
                    description:
                        "You may be required to participate in an interview or provide additional information. Our team is here to support you through any further evaluations. We strive to maintain a seamless process throughout.",
                },
                {
                    number: "05",
                    title: "Decision & Post-Approval Support",
                    description:
                        "Once your application is reviewed, you will receive a decision. Our team continues to offer support for any follow-up steps or queries post-approval. We help ensure a smooth transition into your new entrepreneurial venture.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Your Entrepreneur Visa?",
            description:
                "At Horizon Success Bridge, we empower experienced entrepreneurs with the tools and support needed to succeed in the competitive Canadian market. Our dedicated team provides end-to-end assistance, ensuring your business vision is realized.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canadian immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your business goals and investment needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
    },
};

export const canadaStartUpVisaData = {
    header: {
        label: "Startup Visa",
        title: "Launch Your Innovative Startup in Canada",
        description:
            "Discover the pathway to turn your groundbreaking startup idea into a thriving business in Canada. The Startup Visa is tailored for visionary entrepreneurs ready to make their mark in one of the world’s most dynamic economies.",
    },
    sections: {
        whatIs: {
            title: "What is the Startup Visa?",
            content:
                "The Startup Visa is an immigration program designed for entrepreneurs with an innovative business idea, backed by a designated Canadian organization. It offers a unique opportunity to launch and grow your startup while benefiting from Canada's vibrant ecosystem.",
        },
        whyChoose: {
            title: "Why Choose the Startup Visa?",
            items: [
                {
                    title: "Innovative Startup Idea",
                    text: "Bring your creative vision to life.",
                    icon: "FaRocket",
                },
                {
                    title: "Entrepreneurial Expertise",
                    text: "Leverage your experience to build a robust business.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Designated Organization Support",
                    text: "Gain mentorship and funding opportunities.",
                    icon: "FaUsers",
                },
                {
                    title: "Global Market Access",
                    text: "Expand your startup into international markets.",
                    icon: "FaGlobe",
                },
                {
                    title: "Capital Investment",
                    text: "Secure necessary funding to accelerate growth.",
                    icon: "FaPoundSign",
                },
                {
                    title: "Pathway to Residency",
                    text: "Establish a long-term presence in Canada.",
                    icon: "FaChartLine",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for the Startup Visa",
            description:
                "To qualify for the Startup Visa, ensure you meet the following requirements:",
            items: [
                {
                    title: "Innovative Business Idea",
                    text: "Present a groundbreaking concept that has the potential to disrupt the market.",
                },
                {
                    title: "Organization Endorsement",
                    text: "Get support from a recognized Canadian VC fund, investor group, or incubator.",
                },
                {
                    title: "Language Proficiency",
                    text: "Demonstrate proficiency in English or French as per immigration standards.",
                },
                {
                    title: "Sufficient Settlement Funds",
                    text: "Provide evidence of sufficient funds to support yourself and your startup.",
                },
                {
                    title: "Business Plan",
                    text: "Submit a detailed and compelling business plan outlining your strategy and market potential.",
                },
            ],
        },
        process: {
            title: "Application Process for the Startup Visa",
            description:
                "Begin your journey with our structured process, designed to guide you every step of the way.",
            steps: [
                {
                    number: "01",
                    title: "Initial Consultation & Idea Evaluation",
                    description:
                        "Meet with our experts to assess your startup idea and determine its viability within the Canadian market. This initial consultation sets the foundation for a tailored application process.",
                },
                {
                    number: "02",
                    title: "Endorsement & Documentation Preparation",
                    description:
                        "Gather necessary documents, including your business plan and endorsement from a designated organization. We assist you in preparing a compelling application. Thorough documentation is crucial for success.",
                },
                {
                    number: "03",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Complete the application form, attach your documents, and pay the required fees through our secure system. Your application is then submitted to Canadian immigration authorities. Timely submission is key to avoiding delays.",
                },
                {
                    number: "04",
                    title: "Review & Additional Evaluation",
                    description:
                        "You may be required to attend an interview or provide further information. Our team supports you through any additional evaluations. We ensure that your application remains comprehensive and robust.",
                },
                {
                    number: "05",
                    title: "Decision & Post-Approval Guidance",
                    description:
                        "Once reviewed, you will receive a decision on your application. We continue to offer support for any follow-up documentation or queries. Post-approval, we guide you through the transition to your new Canadian venture.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Your Startup Visa?",
            description:
                "At Horizon Success Bridge, we specialize in turning innovative startup ideas into successful ventures in Canada. Our dedicated team provides end-to-end support to ensure your application is robust and compelling.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canadian immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your business goals and investment needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
    },
};

export const canadaInvestorVisaData = {
    header: {
        label: "Investor Visa",
        title: "Secure Your Future with Canada’s Investor Visa",
        description:
            "Seize the opportunity to invest in Canada’s robust economy. The Investor Visa is designed for experienced investors who can contribute significant capital and expertise, opening the door to a prosperous future in one of the world’s most dynamic markets.",
    },
    sections: {
        whatIs: {
            title: "What is the Investor Visa?",
            content:
                "The Investor Visa is a specialized immigration pathway for individuals with substantial investment capital and proven business experience. It enables you to establish a business presence in Canada while contributing to the country’s economic growth.",
        },
        whyChoose: {
            title: "Why Choose the Investor Visa?",
            items: [
                {
                    title: "Business & Investment Opportunities",
                    text: "Contribute to Canada's economy and benefit from stable returns.",
                    icon: "FaLightbulb",
                },
                {
                    title: "Permanent Residency",
                    text: "Gain a straightforward and reliable pathway to obtaining Canadian PR status.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Family Benefits",
                    text: "Your spouse and children can enjoy world-class healthcare and education.",
                    icon: "FaUsers",
                },
                {
                    title: "Global Mobility",
                    text: "Enjoy hassle-free, visa-free travel to attractive destination countries worldwide.",
                    icon: "FaGlobe",
                },
                {
                    title: "Economic Growth",
                    text: "Contribute to and benefit from Canada’s thriving economy.",
                    icon: "FaChartLine",
                },
                {
                    title: "Future Citizenship",
                    text: "Become eligible for Canadian citizenship after a set period.",
                    icon: "FaPoundSign",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for the Investor Visa",
            description:
                "To qualify for the Canada Investor Visa, applicants must meet the following requirements:",
            items: [
                {
                    title: "Investment Requirement",
                    text: "Invest in an approved Canadian economic program.",
                },
                {
                    title: "Business Experience",
                    text: "Show a proven record in business management or investment.",
                },
                {
                    title: "Net Worth Requirement",
                    text: "Show proof of substantial personal net worth.",
                },
                {
                    title: "Investment Proposal",
                    text: "Submit a detailed business plan outlining your investment strategy.",
                },
                {
                    title: "Government Endorsement",
                    text: "Get approved by a recognized Canadian business organization.",
                },
                {
                    title: "English/French Proficiency",
                    text: "Meet the language requirements for settlement in Canada.",
                },
            ],
        },
        process: {
            title: "Application Process for the Investor Visa",
            description:
                "Begin your journey to Canadian investment success with our step-by-step application process. We’ll guide you from initial consultation to visa approval.",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Investment Assessment",
                    description:
                        "Schedule a comprehensive consultation with our expert advisors. We evaluate your investment capacity and business background to craft a tailored strategy. This initial stage lays the foundation for your application.",
                },
                {
                    number: "02",
                    title: "Documentation & Proposal Preparation",
                    description:
                        "Gather all necessary documents, including financial records and your detailed business plan. Our team assists in preparing a compelling investment proposal. Thorough documentation is key to a strong application.",
                },
                {
                    number: "03",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Complete the application form, attach your documents, and process the fee payment securely. This step formally initiates your Investor Visa journey. Your application is then reviewed by Canadian immigration authorities.",
                },
                {
                    number: "04",
                    title: "Interview & Further Evaluation",
                    description:
                        "You may be invited for an interview or asked for additional information regarding your investment strategy. We provide continuous support throughout this process. This step ensures your application remains comprehensive.",
                },
                {
                    number: "05",
                    title: "Decision & Follow-Up",
                    description:
                        "After a thorough review, you will receive a decision on your application. Our team remains available to address any follow-up queries or requests. Timely communication is essential for a smooth process.",
                },
                {
                    number: "06",
                    title: "Visa Approval & Post-Approval Support",
                    description:
                        "Upon approval, you will receive your Investor Visa, unlocking your gateway to Canadian investment opportunities. We offer post-approval guidance to help you establish your business in Canada. Our support ensures you’re well-prepared for long-term success.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Your Investor Visa?",
            description:
                "Navigating the Canadian immigration process for business visas can be complex, with specific requirements and documentation. Our expert team provides comprehensive, step-by-step assistance to ensure your application is accurate, complete, and aligned with Canadian immigration laws. With our professional guidance, you can secure your Canadian visa faster and with greater confidence.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canadian immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your business goals and investment needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
    },
};

export const canadaSpousalSponsorshipData = {
    header: {
        label: "Family Sponsorship",
        title: "Spousal Sponsorship",
        description:
            "Reconnect with your loved one by applying for spousal sponsorship. This pathway allows Canadian citizens and permanent residents to sponsor their spouse or common-law partner, paving the way for a new chapter together in Canada.",
    },
    sections: {
        whatIs: {
            title: "What is Spousal Sponsorship?",
            content:
                "Spousal Sponsorship is a family-based immigration program that allows Canadian citizens and permanent residents to sponsor their spouse or common-law partner. The goal is to ensure families can stay together and build a future in Canada.",
        },
        whyChoose: {
            title: "Why Choose Spousal Sponsorship?",
            items: [
                {
                    title: "Family Reunification",
                    text: "Bring your partner closer.",
                    icon: "FaHeart",
                },
                {
                    title: "Streamlined Process",
                    text: "Enjoy an efficient application journey.",
                    icon: "FaRegClock",
                },
                {
                    title: "Genuine Relationship Focus",
                    text: "Emphasis on authentic connections.",
                    icon: "FaCheckCircle",
                },
                {
                    title: "Access to Canadian Benefits",
                    text: "Secure a future with healthcare and social services.",
                    icon: "FaGlobe",
                },
                {
                    title: "Supportive Community",
                    text: "Join a network of families in Canada.",
                    icon: "FaUserFriends",
                },
                {
                    title: "Long-Term Stability",
                    text: "Build a secure future together.",
                    icon: "FaUsers",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for Spousal Sponsorship",
            description:
                "To qualify for spousal sponsorship, ensure you meet these essential requirements:",
            items: [
                {
                    title: "Genuine Relationship",
                    text: "Provide evidence of a bona fide and ongoing relationship with your spouse or partner.",
                },
                {
                    title: "Sponsor Eligibility",
                    text: "The sponsor must be a Canadian citizen or permanent resident who meets legal and financial criteria.",
                },
                {
                    title: "Financial Requirements",
                    text: "Demonstrate the ability to support your spouse without reliance on social assistance.",
                },
                {
                    title: "Legal & Background Checks",
                    text: "Both sponsor and applicant must pass health, criminal, and security screenings.",
                },
                {
                    title: "Comprehensive Documentation",
                    text: "Prepare robust documentation to substantiate your relationship and eligibility.",
                },
            ],
        },
        process: {
            title: "Application Process for Spousal Sponsorship",
            description:
                "Begin your journey towards family reunification with our step-by-step application process:",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Begin with a comprehensive consultation to evaluate your relationship and determine sponsorship eligibility. This step lays the foundation for your application.",
                },
                {
                    number: "02",
                    title: "Documentation & Evidence Preparation",
                    description:
                        "Gather essential documents such as proof of relationship, financial records, and identity documents. Thorough documentation is key to a successful application.",
                },
                {
                    number: "03",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your complete application along with the required fees. Your application is then forwarded to Canadian immigration authorities for review. Timely submission helps avoid unnecessary delays.",
                },
                {
                    number: "04",
                    title: "Interview & Additional Evaluation (if needed)",
                    description:
                        "An interview may be scheduled to further assess your application. Our team supports you throughout this stage. Additional evaluation ensures all aspects of your case are thoroughly considered.",
                },
                {
                    number: "05",
                    title: "Decision & Post-Approval Guidance",
                    description:
                        "Once a decision is reached, we provide post-approval guidance to help you and your spouse transition smoothly into Canadian life. Ongoing support is available to ensure long-term success.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Your Spousal Sponsorship?",
            description:
                "At Horizon Success Bridge, we are dedicated to reuniting families. Our experienced team provides personalized guidance, ensuring your spousal sponsorship application is handled with care and expertise.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canadian immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your family’s unique needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
    },
};

export const canadaDependentChildSponsorshipData = {
    header: {
        label: "Family Sponsorship",
        title: "Dependent Child Sponsorship",
        description:
            "With Canada’s Dependent Child Sponsorship program, eligible children can join their parents in a safe and prosperous environment. This pathway enables families to be reunited while offering a secure foundation for your child’s future.",
    },
    sections: {
        whatIs: {
            title: "What is Dependent Child Sponsorship?",
            content:
                "Dependent Child Sponsorship is a family-based immigration program that allows Canadian citizens and permanent residents to sponsor their dependent children. The program is designed to ensure that families remain together and that children have the opportunity to thrive in Canada.",
        },
        whyChoose: {
            title: "Why Choose Dependent Child Sponsorship?",
            items: [
                {
                    title: "Family Reunification",
                    text: "Keep your family united.",
                    icon: "FaChild",
                },
                {
                    title: "Secure Future",
                    text: "Provide a safe and supportive environment.",
                    icon: "FaHome",
                },
                {
                    title: "Efficient Processing",
                    text: "Benefit from a streamlined application process.",
                    icon: "FaChartLine",
                },
                {
                    title: "Comprehensive Support",
                    text: "Access expert guidance at every step.",
                    icon: "FaUsers",
                },
                {
                    title: "Financial Stability",
                    text: "Demonstrate the ability to support your child’s settlement.",
                    icon: "FaPoundSign",
                },
                {
                    title: "Educational Opportunities",
                    text: "Give your child access to quality education and resources.",
                    icon: "FaBook",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for Dependent Child Sponsorship",
            description:
                "To be eligible for Dependent Child Sponsorship, ensure you meet the following requirements:",
            items: [
                {
                    title: "Proof of Relationship",
                    text: "Provide a birth certificate or legal documents proving the parent-child relationship.",
                },
                {
                    title: "Age Requirement",
                    text: "The child must be under a specified age limit or meet the definition of a dependent child.",
                },
                {
                    title: "Financial Support",
                    text: "Demonstrate that you have the financial means to support your child’s settlement in Canada.",
                },
                {
                    title: "Medical & Background Checks",
                    text: "Ensure that your child meets the required health and security standards.",
                },
                {
                    title: "Comprehensive Documentation",
                    text: "Prepare robust documentation to substantiate your relationship and eligibility.",
                },
            ],
        },
        process: {
            title: "Application Process for Dependent Child Sponsorship",
            description:
                "Our structured process simplifies the journey of sponsoring your dependent child:",
            steps: [
                {
                    number: "01",
                    title: "Initial Consultation & Eligibility Assessment",
                    description:
                        "Begin with a detailed consultation to assess your eligibility and review the required documentation. This step sets the foundation for your application.",
                },
                {
                    number: "02",
                    title: "Documentation & Evidence Collection",
                    description:
                        "Gather all essential documents such as birth certificates, custody papers (if applicable), and proof of relationship. Thorough documentation is key to a successful application.",
                },
                {
                    number: "03",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Complete the sponsorship application, attach your documents, and process the fee payment through our secure system. Your application is then forwarded to the Canadian immigration authorities for review.",
                },
                {
                    number: "04",
                    title: "Interview & Additional Verification",
                    description:
                        "An interview or additional verification may be required to further assess your case. Our team supports you throughout this stage. This ensures every aspect of your application is thoroughly vetted.",
                },
                {
                    number: "05",
                    title: "Decision & Post-Approval Guidance",
                    description:
                        "Once a decision is made, we provide comprehensive post-approval guidance to help your child transition smoothly into Canadian life. Ongoing support is available to ensure long-term success.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Your Dependent Child Sponsorship?",
            description:
                "At Horizon Success Bridge, we specialize in guiding families through the complexities of the Dependent Child Sponsorship process. Our personalized services ensure that your application is meticulously prepared and that your child’s future in Canada is secure.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canadian immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your family’s unique needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
    },
};

export const canadaSuperVisaData = {
    header: {
        label: "Family Visitation",
        title: "Parent & Grandparent Super Visa",
        description:
            "The Parent & Grandparent Super Visa allows your loved ones to visit Canada for extended periods, offering multiple entries over a ten-year period with each stay lasting up to two years.",
    },
    sections: {
        whatIs: {
            title: "What is the Parent & Grandparent Super Visa?",
            content:
                "The Super Visa is a specialized program for parents and grandparents of Canadian citizens and permanent residents. It enables extended visits, ensuring that families can reconnect and enjoy longer stays together in Canada.",
        },
        whyChoose: {
            title: "Why Choose the Super Visa?",
            items: [
                {
                    title: "Extended Stay",
                    text: "Enjoy up to 2-year visits per entry.",
                    icon: "FaHome",
                },
                {
                    title: "Multiple Entries",
                    text: "Valid for up to 10 years for frequent family reunions.",
                    icon: "FaChartLine",
                },
                {
                    title: "Family Reunification",
                    text: "Bring your family with you and create lasting memories together.",
                    icon: "FaHeart",
                },
                {
                    title: "Expert Support",
                    text: "Benefit from comprehensive guidance throughout your application process.",
                    icon: "FaUsers",
                },
                {
                    title: "Financial Assurance",
                    text: "Demonstrate financial stability to meet the program’s requirements.",
                    icon: "FaPoundSign",
                },
                {
                    title: "Enhanced Flexibility",
                    text: "Enjoy tailored visit durations and scheduling that suit your family’s needs.",
                    icon: "FaChartLine",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for the Super Visa",
            description:
                "To qualify for the Parent & Grandparent Super Visa, ensure you meet the following requirements:",
            items: [
                {
                    title: "Proof of Relationship",
                    text: "Submit documents that verify your relationship with the Canadian citizen or PR sponsor.",
                },
                {
                    title: "Medical Insurance",
                    text: "Obtain valid medical insurance coverage for the required period as stipulated by Canadian authorities.",
                },
                {
                    title: "Financial Support",
                    text: "The sponsor must demonstrate sufficient income to support extended family visits.",
                },
                {
                    title: "Admissibility",
                    text: "All applicants must pass health, security, and criminal background checks.",
                },
                {
                    title: "Comprehensive Documentation",
                    text: "Prepare and submit all necessary forms, identification, and supporting documents.",
                },
            ],
        },
        process: {
            title: "Application Process for the Super Visa",
            description:
                "Follow our structured process to secure a Super Visa for your parents or grandparents:",
            steps: [
                {
                    number: "01",
                    title: "Consultation & Eligibility Assessment",
                    description:
                        "Start with a detailed consultation to assess your family’s eligibility and review the required documentation. This foundational step ensures a tailored approach to your application.",
                },
                {
                    number: "02",
                    title: "Documentation & Evidence Collection",
                    description:
                        "Gather all necessary documents, including proof of relationship, valid medical insurance, and financial records. Comprehensive documentation is key to a successful application.",
                },
                {
                    number: "03",
                    title: "Application Submission & Fee Payment",
                    description:
                        "Submit your complete application along with the required fees through our secure system. Timely submission helps to avoid unnecessary delays.",
                },
                {
                    number: "04",
                    title: "Interview & Additional Verification",
                    description:
                        "An interview or further verification may be required to confirm your eligibility. Our team will support you through this stage. Additional checks ensure that your application meets all criteria.",
                },
                {
                    number: "05",
                    title: "Decision & Post-Approval Guidance",
                    description:
                        "Upon review, you will receive a decision on your application. Our experts then provide post-approval guidance to help plan your loved one’s extended stay. Ongoing support is available for a seamless transition.",
                },
            ],
        },
        whyAustin: {
            title: "Why Choose Horizon Success Bridge for Your Super Visa Application?",
            description:
                "At Horizon Success Bridge, we offer expert guidance tailored to your family’s needs. Our comprehensive services ensure that every step of your Parent & Grandparent Super Visa application is handled with care and professionalism.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Canadian immigration laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation and visa applications to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase your chances of a successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description:
                        "Immigration assistance based on your family’s unique needs.",
                },
                {
                    number: "05",
                    title: "Faster Processing",
                    description:
                        "Avoid unnecessary delays with proper documentation and expert support.",
                },
                {
                    number: "06",
                    title: "Post Landing Support",
                    description:
                        "Get assistance with settlement, job search, and adapting to a new life after your arrival.",
                },
            ],
        },
    },
};
