import {
    FaBriefcase,
    FaUniversity,
    FaMapMarkedAlt,
    FaChartLine,
    FaHospital,
    FaGlobe,
    FaMoneyBill,
    FaCalendar,
    FaCheckCircle,
    FaUsers,
    FaDollarSign,
    FaHeart,
    FaUserTie,
    FaStar,
    FaBuilding,
    FaHeartbeat,
    FaGlobeAmericas,
    FaClock,
} from "react-icons/fa";

export const usaImmigrationData = {
    header: {
        title: "USA Immigration",
        subtitle: "Expert guidance for your journey to the United States.",
    },
    overview: {
        label: "Overview",
        title: "Your Pathway to a New Future in USA",
        description:
            "The United States is one of the most sought-after destinations for immigrants worldwide, offering unmatched opportunities in education, employment, business, and a high standard of living. Whether you want to work, study, invest, or become a permanent resident, navigating the USA’s immigration process can be complex. Our USA Immigration Services provide expert guidance and end-to-end support to help you successfully apply for your visa and build a bright future in the United States.",
    },
    sections: {
        whatIs: {
            label: "I. Context",
            title: "What is USA Immigration?",
            content:
                "USA Immigration refers to the legal process of entering and settling in the United States for various purposes such as work, study, business, family reunification, or permanent residency. The U.S. offers multiple visa categories for Nepali passport holders, including temporary and permanent options. \n\nThe United States Citizenship and Immigration Services (USCIS) manages immigration programs, ensuring a structured entry process for eligible applicants. Various visa pathways lead to Green Cards (permanent residency) and eventually U.S. citizenship.",
        },
        whyChoose: {
            label: "II. Objectives",
            title: "What Makes USA the Perfect Destination?",
            description:
                "The United States stands as a global leader in innovation, education, and economic opportunity, making it one of the most desirable destinations for individuals seeking career growth, world-class education, business expansion, and a high quality of life.",
            items: [
                {
                    title: "Strong Job Market",
                    text: "High demand for skilled professionals in IT, Healthcare, Engineering, Finance, and other key sectors.",
                    icon: "FaBriefcase",
                },
                {
                    title: "World-Class Education",
                    text: "Home to prestigious universities like Harvard, MIT, and Stanford.",
                    icon: "FaUniversity",
                },
                {
                    title: "Pathway to Permanent Residency",
                    text: "Multiple visa programs leading to a Green Card and U.S. citizenship.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Business & Investment Opportunities",
                    text: "One of the world's largest economies with strong business support.",
                    icon: "FaChartLine",
                },
                {
                    title: "Social Security & Benefits",
                    text: "Access to healthcare, pension plans, and social services.",
                    icon: "FaHospital",
                },
                {
                    title: "High Quality of Life",
                    text: "A diverse and inclusive society with top healthcare, infrastructure, and job opportunities.",
                    icon: "FaGlobe",
                },
            ],
        },
        types: {
            label: "III. Scope",
            title: "Our USA Immigration Services",
            description:
                "We provide comprehensive support for a wide range of USA visa programs, ensuring a seamless immigration process. Whether you're applying for a work visa, study permit, business visa, or Green Card, our expert team offers personalized consultation.",
            items: [
                {
                    title: "Temporary Work Visa",
                    icon: "FaBriefcase",
                    items: ["H-1B Visa", "L-1 Visa", "O-1 Visa"],
                },
                {
                    title: "Permanent Work Visa",
                    icon: "FaUserTie",
                    items: ["EB-1 Visa", "EB-2 Visa", "EB-3 Visa", "EB-4 Visa"],
                },
                {
                    title: "Business & Investment Visa",
                    icon: "FaChartLine",
                    items: [
                        "E-2 Visa (Investor Visa)",
                        "EB-5 Visa (Investor Green Card)",
                    ],
                },
                {
                    title: "Family & Spouse Visa",
                    icon: "FaUsers",
                    items: [
                        "Fiancé(e) Visa (K-1)",
                        "Spousal Visa (IR-1/CR-1)",
                        "Parent & Sibling Sponsorship",
                    ],
                },
                {
                    title: "Visit Visa",
                    icon: "FaPlane",
                    items: [
                        "B-1 Visa (Business Visit Visa)",
                        "B-2 Visa (Tourist Visa)",
                        "B1/B2 Multiple-Entry Visa",
                    ],
                },
                {
                    title: "Study Visa",
                    icon: "FaGraduationCap",
                    items: [
                        "F-1 Visa (Student Visa)",
                        "M-1 Visa (Short Term)",
                        "J-1 Visa (Exchange Visitor Visa)",
                    ],
                },
            ],
        },
        whyAustin: {
            label: "IV. Methodology",
            title: "Why Choose Horizon Success Bridge for USA Immigration?",
            description:
                "Navigating the U.S. immigration process can be challenging, with various visa categories, legal requirements, and frequent policy updates. Our experienced team provides step-by-step assistance.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest USA immigration laws and policies.",
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
        title: "United States",
        items: [
            {
                title: "Temporary Work Visa",
                href: "/usa-immigration/temporary-work-visa",
                description:
                    "Work and live in the USA legally with an employer-sponsored visa.",
            },
            {
                title: "Permanent Work Visa",
                href: "/usa-immigration/permanent-work-visa",
                description:
                    "Obtain U.S. permanent residency through employment-based Green Card programs.",
            },
            {
                title: "Business & Investment Visa",
                href: "/usa-immigration/business-investment-visa",
                description:
                    "Invest or start a business in the U.S. with entrepreneur and investor visa programs.",
            },
            {
                title: "Family & Spouse Visa",
                href: "/usa-immigration/family-spouse-visa",
                description:
                    "Reunite with family members or spouses in the U.S. with family-based visa options.",
            },
            {
                title: "Study Visa",
                href: "/study/study-in-usa",
                description:
                    "Pursue higher education at top U.S. universities with an F-1 or M-1 student visa.",
            },
            {
                title: "Visit Visa",
                href: "/visit/usa-visit-visa",
                description:
                    "Travel to the USA for tourism, business visits, or short-term stays.",
            },
        ],
    },
};

export const usaH1BData = {
    header: {
        label: "USA Immigration",
        title: "H-1B Visa",
        description:
            "Launch your US career with the H-1B Visa for skilled professionals. Work in specialty occupations for up to six years in a dynamic economy.",
    },
    sections: {
        whatIs: {
            label: "Visa Scope",
            title: "What is the H-1B Visa?",
            content:
                "The H-1B Visa is a work permit for foreign professionals in specialty occupations that require theoretical or technical expertise. It is commonly used in fields such as IT, engineering, medicine, and finance. The visa is employer-sponsored, meaning you must have a job offer from a U.S. employer willing to sponsor your application.",
        },
        whyChoose: {
            label: "Visa Benefits",
            title: "Why Choose the H-1B Visa?",
            items: [
                {
                    title: "Thriving Job Market",
                    text: "Access to a high-demand job market in tech, healthcare, and engineering.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Competitive Salaries",
                    text: "Earn attractive wages, exclusive perks, and benefits comparable to U.S. professionals.",
                    icon: "FaDollarSign",
                },
                {
                    title: "Dual Intent",
                    text: "Pursue permanent residency (Green Card) while on an H-1B Visa.",
                    icon: "FaUsers",
                },
                {
                    title: "Family Inclusion",
                    text: "Bring your spouse and children (under 21) on an H-4 Visa.",
                    icon: "FaHospital",
                },
                {
                    title: "Global Exposure",
                    text: "Gain international experience in a leading global economy.",
                    icon: "FaGlobe",
                },
                {
                    title: "Career Growth",
                    text: "Build a successful career in the U.S. with opportunities for advancement.",
                    icon: "FaChartLine",
                },
            ],
        },
        eligibility: {
            label: "Selection Criteria",
            title: "Eligibility Criteria for the H-1B Visa",
            description:
                "To qualify for the H-1B Visa, you must meet specific requirements.",
            items: [
                {
                    title: "Valid Job Offer",
                    text: "Must have a job offer from a licensed U.S. employer for a specialty occupation.",
                },
                {
                    title: "Education",
                    text: "Requires a bachelor’s degree or higher (or equivalent work experience).",
                },
                {
                    title: "Specialty Occupation",
                    text: "The role must require specialized knowledge (e.g., IT, engineering, medicine).",
                },
                {
                    title: "Salary Requirement",
                    text: "Must meet the prevailing wage or the role's going rate.",
                },
                {
                    title: "Labor Condition Application (LCA)",
                    text: "Employer must file an LCA with the Department of Labor.",
                },
                {
                    title: "English Proficiency",
                    text: "Must demonstrate English skills at a professional level.",
                },
            ],
        },
        process: {
            label: "Journey Map",
            title: "Application Process for the H-1B Visa",
            steps: [
                {
                    number: "01",
                    title: "Job Offer & Employer Sponsorship",
                    description:
                        "Secure a job offer from a U.S. employer willing to sponsor your H-1B Visa in a specialty occupation.",
                },
                {
                    number: "02",
                    title: "Labor Condition Application (LCA)",
                    description:
                        "Employer must obtain a certified LCA from the Department of Labor, ensuring prevailing wage compliance.",
                },
                {
                    number: "03",
                    title: "H-1B Petition Filing",
                    description:
                        "Employer files Form I-129 with USCIS, including qualifications and certified LCA.",
                },
                {
                    number: "04",
                    title: "H-1B Lottery & Review",
                    description:
                        "If selected in the random lottery, USCIS reviews the petition for eligibility and specialty occupation status.",
                },
                {
                    number: "05",
                    title: "Visa Stamping",
                    description:
                        "Apply for an H-1B visa stamp at a U.S. consulate or embassy and attend a visa interview.",
                },
                {
                    number: "06",
                    title: "Travel & Compliance",
                    description:
                        "Travel to the U.S. and maintain valid status by complying with employment terms.",
                },
            ],
        },
    },
};

export const usaL1VisaData = {
    header: {
        label: "Expand Your Career with the L-1 Visa",
        title: "L-1 Visa",
        description:
            "Advance your career with the L-1 Visa for executives and specialized employees. Work in the US for up to 7 years, leading and growing in an innovative environment.",
    },
    sections: {
        whatIs: {
            title: "What is the L-1 Visa?",
            content:
                "The L-1 Visa is a work permit for employees of international companies who are being transferred to a U.S. branch, subsidiary, or affiliate. It is divided into two categories: the L-1A Visa (executives/managers) and the L-1B Visa (specialized knowledge). This visa is employer-sponsored.",
        },
        whyChoose: {
            title: "Why Choose the L-1 Visa?",
            description:
                "The L-1 Visa offers numerous benefits for professionals and businesses:",
            items: [
                {
                    title: "Leadership Opportunities",
                    text: "Take on executive or managerial roles in the U.S. company.",
                    icon: "FaBriefcase",
                },
                {
                    title: "No Annual Cap",
                    text: "Unlike the H-1B Visa, there is no limit on the number of L-1 Visas issued.",
                    icon: "FaDollarSign",
                },
                {
                    title: "Dual Intent",
                    text: "Pursue permanent residency (Green Card) while on an L-1 Visa.",
                    icon: "FaUsers",
                },
                {
                    title: "Family Inclusion",
                    text: "Bring your spouse and children (under 21) on an L-2 Visa.",
                    icon: "FaHospital",
                },
                {
                    title: "Global Exposure",
                    text: "Gain international experience in a leading global economy.",
                    icon: "FaGlobe",
                },
                {
                    title: "Fast Processing",
                    text: "Expedited processing options are available for qualifying employers.",
                    icon: "FaClock",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for the L-1 Visa",
            description:
                "To qualify for the L-1 Visa, you must meet the following requirements:",
            items: [
                {
                    title: "Employment with Company",
                    text: "Worked for the employer outside the U.S. for at least 1 year in the last 3 years.",
                },
                {
                    title: "Executive/Managerial Role",
                    text: "Transfer to a U.S. office in an executive or managerial role.",
                },
                {
                    title: "Specialized Knowledge",
                    text: "Possess specialized knowledge critical to the company’s operations.",
                },
                {
                    title: "Qualifying Relationship",
                    text: "U.S. and foreign offices must have a qualifying relationship.",
                },
                {
                    title: "Job Offer",
                    text: "Secure a job offer from the U.S. office for a qualifying role.",
                },
                {
                    title: "Salary Requirement",
                    text: "Meet the prevailing wage for the role in the U.S.",
                },
                {
                    title: "Health & Security Checks",
                    text: "Complete required health tests and background checks.",
                },
            ],
        },
        process: {
            title: "Application Process for the L-1 Visa",
            description:
                "The L-1 Visa application process involves multiple steps, requiring coordination between the employer and the employee.",
            steps: [
                {
                    number: "01",
                    title: "Qualifying Employment",
                    description:
                        "You must have worked for the employer outside the U.S. for at least 1 year in the last 3 years.",
                },
                {
                    number: "02",
                    title: "Job Offer & Employer Petition",
                    description:
                        "Your employer files Form I-129 with USCIS, including proof of relationship and role details.",
                },
                {
                    number: "03",
                    title: "USCIS Review & Approval",
                    description:
                        "USCIS reviews the petition. Premium processing is available for faster decisions.",
                },
                {
                    number: "04",
                    title: "Visa Stamping & Travel to the U.S.",
                    description:
                        "Apply for an L-1 visa stamp at a U.S. consulate and attend an interview.",
                },
                {
                    number: "05",
                    title: "Post-Arrival Compliance",
                    description:
                        "Work only for the sponsoring employer and maintain valid status.",
                },
            ],
        },
    },
};

export const usaO1VisaData = {
    header: {
        label: "Excel in the U.S. with the O-1 Visa",
        title: "O-1 Visa",
        description:
            "Unlock your potential with the O-1 Visa for extraordinary abilities in arts, sciences, or business. Work in the US and showcase your talent.",
    },
    sections: {
        whatIs: {
            title: "What is the O-1 Visa?",
            content:
                "The O-1 Visa is a work permit for individuals who have demonstrated extraordinary ability in their field. Categories include O-1A (sciences, education, business, athletics) and O-1B (arts, motion picture/TV). It requires employer sponsorship.",
        },
        whyChoose: {
            title: "Why Choose the O-1 Visa?",
            description:
                "The O-1 Visa offers numerous benefits for individuals with extraordinary ability:",
            items: [
                {
                    title: "Global Recognition",
                    text: "Showcase your talent on a global stage in the U.S.",
                    icon: "FaBriefcase",
                },
                {
                    title: "No Annual Cap",
                    text: "Unlike H-1B, there is no limit on the number of O-1 Visas issued.",
                    icon: "FaDollarSign",
                },
                {
                    title: "Dual Intent",
                    text: "Pursue permanent residency (Green Card) while on an O-1 Visa.",
                    icon: "FaUsers",
                },
                {
                    title: "Family Inclusion",
                    text: "Bring your spouse and children (under 21) on an O-3 Visa.",
                    icon: "FaHospital",
                },
                {
                    title: "Flexibility",
                    text: "Work on multiple projects or contracts with different employers.",
                    icon: "FaGlobe",
                },
                {
                    title: "Prestige",
                    text: "Gain recognition as a top-tier professional in your field.",
                    icon: "FaStar",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria for the O-1 Visa",
            description:
                "To qualify for the O-1 Visa, you must meet the following requirements:",
            items: [
                {
                    title: "Extraordinary Ability",
                    text: "Prove exceptional skills with national or int'l recognition.",
                },
                {
                    title: "Evidence of Achievements",
                    text: "Show awards, publications, or major contributions in your field.",
                },
                {
                    title: "Job Offer or Contract",
                    text: "Secure a U.S. job offer or contract from an employer or agent.",
                },
                {
                    title: "Advisory Opinion",
                    text: "Obtain a written opinion from a peer group or labor organization.",
                },
                {
                    title: "Salary Requirement",
                    text: "Meet the U.S. prevailing wage for your role.",
                },
                {
                    title: "Health & Security Checks",
                    text: "Complete required health tests and background checks.",
                },
            ],
        },
        process: {
            title: "Application Process for the O-1 Visa",
            description:
                "The O-1 Visa application process involves multiple steps, requiring coordination between the employer/agent and the applicant.",
            steps: [
                {
                    number: "01",
                    title: "Demonstrate Extraordinary Ability",
                    description:
                        "Provide evidence such as major awards, publications, or original contributions.",
                },
                {
                    number: "02",
                    title: "Job Offer or Contract",
                    description: "Employer/agent files Form I-129 with USCIS.",
                },
                {
                    number: "03",
                    title: "Advisory Opinion",
                    description:
                        "Obtain a written advisory opinion from a peer group or expert.",
                },
                {
                    number: "04",
                    title: "USCIS Review & Approval",
                    description:
                        "USCIS verifies eligibility. Premium processing available.",
                },
                {
                    number: "05",
                    title: "Visa Stamping & Travel to the U.S.",
                    description: "Apply for a visa stamp at a U.S. consulate.",
                },
                {
                    number: "06",
                    title: "Post-Arrival Compliance",
                    description:
                        "Work only for the sponsoring employer and renew as needed.",
                },
            ],
        },
    },
};

export const usaBusinessInvestmentVisaData = {
    header: {
        label: "Your Pathway to Business Investments in the USA",
        title: "Business & Investment Visa",
        description:
            "Establish or expand your ventures in the USA with business and investment visas for entrepreneurs and investors in a top global economy.",
    },
    sections: {
        whatIs: {
            title: "What is a Business & Investment Visa?",
            content:
                "Business and investment visas are designed for individuals who wish to invest in or manage a business in the USA. The two primary categories are the E-2 Visa (Treaty Investor) and the EB-5 Visa (Investor Green Card).",
        },
        whyChoose: {
            title: "Why Choose a Business & Investment Visa?",
            description:
                "The USA is a global leader in innovation and entrepreneurship. A business visa allows you to grow your business and build a future in the USA.",
            items: [
                {
                    title: "Business Expansion",
                    text: "Access to one of the world's largest financial markets.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Job Creation",
                    text: "Contribute to the U.S. economy by creating jobs.",
                    icon: "FaUsers",
                },
                {
                    title: "Permanent Residency",
                    text: "Pathway to a Green Card (EB-5).",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Family Inclusion",
                    text: "Bring your spouse and children to live with you.",
                    icon: "FaUsers",
                },
                {
                    title: "Tax Benefits",
                    text: "Take advantage of favorable tax policies.",
                    icon: "FaDollarSign",
                },
                {
                    title: "Global Networking",
                    text: "Connect with industry leaders.",
                    icon: "FaGlobeAmericas",
                },
            ],
        },
        types: [
            {
                title: "E-2 Visa: Treaty Investor Visa",
                items: [
                    "For investors from treaty countries.",
                    "Requires substantial investment in a U.S. business.",
                    "Allows you to manage and develop your investment.",
                    "Renewable indefinitely while business operates.",
                ],
                icon: "FaStar",
            },
            {
                title: "EB-5 Visa: Immigrant Investor Program",
                items: [
                    "Requires minimum investment ($800k or $1.05M).",
                    "Must create at least 10 full-time jobs.",
                    "Direct pathway to a Green Card.",
                    "Includes family members in the application.",
                ],
                icon: "FaBriefcase",
            },
        ],
        eligibility: {
            title: "Eligibility Criteria for Business & Investment Visa",
            description:
                "To qualify, applicants must meet specific requirements depending on the visa category:",
            items: [
                {
                    title: "Investment Amount",
                    text: "Minimum investment of $1.05 million (EB-5) or a substantial amount (E-2).",
                },
                {
                    title: "Job Creation",
                    text: "Create at least 10 full-time jobs for U.S. workers (EB-5).",
                },
                {
                    title: "Business Plan",
                    text: "A detailed business plan outlining the investment and impact.",
                },
                {
                    title: "Treaty Country",
                    text: "For E-2, must be from a country with a commerce treaty with the USA.",
                },
                {
                    title: "Active Business",
                    text: "Investment must be in an active, for-profit business.",
                },
                {
                    title: "Source of Funds",
                    text: "Proof that funds were obtained legally.",
                },
                {
                    title: "Management Role",
                    text: "For E-2, investor must manage and direct the business.",
                },
                {
                    title: "Health & Security Checks",
                    text: "Mandatory medical and background checks.",
                },
            ],
        },
        process: {
            title: "Why Choose Horizon Success Bridge for Business & Investment Visa?",
            description:
                "Navigating the U.S. immigration process can be complex. Our team provides end-to-end assistance.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description: "Stay updated with latest laws and policies.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description:
                        "From documentation to submission and follow-ups.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description:
                        "Minimize errors and increase success chances.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description: "Assistance based on your business needs.",
                },
            ],
        },
        pathways: {
            title: "Investment Options",
            description:
                "Choose the right investment path for your business goals.",
            items: [
                {
                    title: "E-2 Visa",
                    desc: "For treaty investors substantial capital.",
                    href: "/usa-immigration/business-investment-visa/e-2-visa",
                },
                {
                    title: "EB-5 Visa",
                    desc: "Direct route to Green Card through investment.",
                    href: "/usa-immigration/business-investment-visa/eb-5-visa",
                },
            ],
        },
    },
};

export const usaTemporaryWorkVisaData = {
    header: {
        label: "USA Immigration",
        title: "Temporary Work Visas (Non-Immigrant)",
        description:
            "The United States offers various temporary work visas for foreign nationals to work in the U.S. for a fixed period. These visas are often employer-sponsored and can be a stepping stone to permanent residency.",
    },
    sections: {
        whatIs: {
            title: "Visa Overview",
            content:
                "Temporary work visas allow foreign nationals to enter the U.S. for employment purposes. The most common types include the H-1B for specialty occupations, the L-1 for intracompany transferees, and the O-1 for individuals with extraordinary ability.",
        },
        whyChoose: {
            title: "Benefits",
            items: [
                {
                    title: "US Experience",
                    text: "Gain valuable work experience in the US market.",
                    icon: "FaBriefcase",
                },
                {
                    title: "Networking",
                    text: "Build a professional network in the United States.",
                    icon: "FaUsers",
                },
                {
                    title: "Pathway to Green Card",
                    text: "Many temporary visas (like H-1B and L-1) are 'dual intent', allowing you to apply for PR.",
                    icon: "FaMapMarkedAlt",
                },
            ],
        },
        pathways: {
            title: "Sub-Categories",
            description: "Explore the different types of temporary work visas.",
            items: [
                {
                    title: "H-1B Visa",
                    desc: "For professionals in specialty occupations.",
                    href: "/usa-immigration/temporary-work-visa/h-1b-visa",
                },
                {
                    title: "L-1 Visa",
                    desc: "For intracompany transferees (executives/managers).",
                    href: "/usa-immigration/temporary-work-visa/l-1-visa",
                },
                {
                    title: "O-1 Visa",
                    desc: "For individuals with extraordinary ability.",
                    href: "/usa-immigration/temporary-work-visa/o-1-visa",
                },
            ],
        },
        eligibility: {
            title: "General Eligibility",
            description:
                "Requirements vary by visa type, but generally include:",
            items: [
                {
                    title: "Job Offer",
                    text: "A valid job offer from a U.S. employer.",
                },
                {
                    title: "Qualifications",
                    text: "Education and experience relevant to the role.",
                },
                {
                    title: "Petition",
                    text: "Employer must file a petition (I-129) with USCIS.",
                },
            ],
        },
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "Job Offer",
                    description: "Secure employment in the U.S.",
                },
                {
                    number: "02",
                    title: "Petition",
                    description: "Employer files petition with USCIS.",
                },
                {
                    number: "03",
                    title: "Visa App",
                    description: "Apply for visa at U.S. Embassy/Consulate.",
                },
            ],
        },
    },
};

export const usaFamilySpouseVisaData = {
    header: {
        label: "Your Pathway to Family Reunion in the USA",
        title: "Family & Spouse Visa",
        description:
            "Reunite with loved ones in the USA. Family-based visa options for spouses, fiancés, parents, and siblings to build a life together.",
    },
    sections: {
        whatIs: {
            title: "What is a Family & Spouse Visa?",
            content:
                "Family and spouse visas are designed for U.S. citizens and permanent residents to sponsor their immediate family members. Categories include Fiancé(e) Visa (K-1), Spousal Visa (IR-1/CR-1), and Parent & Sibling Sponsorship.",
        },
        whyChoose: {
            title: "Why Choose a Family & Spouse Visa?",
            description:
                "The USA recognizes the importance of family unity and offers paths to build a life together.",
            items: [
                {
                    title: "Reunite with Loved Ones",
                    text: "Bring your family to live with you in the USA.",
                    icon: "FaHeart",
                },
                {
                    title: "Work and Study",
                    text: "Family members can work and study in the USA.",
                    icon: "FaUsers",
                },
                {
                    title: "Pathway to Citizenship",
                    text: "Family members can apply for permanent residency and citizenship.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Family Inclusion",
                    text: "Include children and dependents.",
                    icon: "FaUsers",
                },
                {
                    title: "Strong Family Bonds",
                    text: "Build a future together.",
                    icon: "FaGlobeAmericas",
                },
                {
                    title: "Diverse Opportunities",
                    text: "Access to education and healthcare.",
                    icon: "FaGlobe",
                },
            ],
        },
        types: [
            {
                title: "Fiancé(e) Visa (K-1)",
                items: [
                    "For U.S. citizens to bring foreign fiancé(e) for marriage.",
                    "Must marry within 90 days of entry.",
                    "Includes K-2 for dependent children.",
                ],
                icon: "FaHeart",
            },
            {
                title: "Spousal Visa (IR-1/CR-1)",
                items: [
                    "For U.S. citizens/residents to sponsor spouse.",
                    "CR-1 for marriages < 2 years, IR-1 for > 2 years.",
                    "Provides Green Card upon entry.",
                ],
                icon: "FaUsers",
            },
            {
                title: "Parent & Sibling Sponsorship",
                items: [
                    "For U.S. citizens to sponsor parents/siblings.",
                    "Parents get immediate residency; siblings have wait times.",
                    "Includes dependent family members.",
                ],
                icon: "FaUserTie",
            },
        ],
        eligibility: {
            title: "Eligibility Criteria for Family & Spouse Visa",
            description:
                "To qualify, applicants must meet specific requirements:",
            items: [
                {
                    title: "Sponsorship",
                    text: "U.S. citizen or permanent resident must sponsor.",
                },
                {
                    title: "Relationship Proof",
                    text: "Evidence of genuine relationship (marriage cert, photos).",
                },
                {
                    title: "Financial Support",
                    text: "Sponsor must meet income requirements.",
                },
                {
                    title: "Medical Examination",
                    text: "Mandatory exam by approved physician.",
                },
                {
                    title: "Background Checks",
                    text: "Security and background checks required.",
                },
                {
                    title: "Marriage Validity",
                    text: "Marriage must be legally recognized for spousal visas.",
                },
                {
                    title: "Intent to Marry",
                    text: "Proof of intent to marry within 90 days for K-1.",
                },
            ],
        },
        process: {
            title: "Why Choose Horizon Success Bridge for Family & Spouse Visa?",
            description:
                "We provide end-to-end assistance for your family reunification.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description: "Stay updated with immigration laws.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description: "From documentation to submission.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description: "Minimize errors for successful application.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description: "Assistance based on your unique needs.",
                },
            ],
        },
        pathways: {
            title: "Sub-Categories",
            description:
                "Explore the different types of family & spouse visas.",
            items: [
                {
                    title: "Fiancé(e) Visa (K-1)",
                    desc: "For U.S. citizens to bring foreign fiancé(e) for marriage.",
                    href: "/usa-immigration/family-spouse-visa/k-1-visa",
                },
                {
                    title: "Spousal Visa (IR-1/CR-1)",
                    desc: "For U.S. citizens/residents to sponsor spouse.",
                    href: "/usa-immigration/family-spouse-visa/ir-1-visa",
                },
                {
                    title: "Parent & Sibling Sponsorship",
                    desc: "For U.S. citizens to sponsor parents/siblings.",
                    href: "/usa-immigration/family-spouse-visa/parent-sibling-sponsorship",
                },
            ],
        },
    },
};

export const usaPermanentWorkVisaData = {
    header: {
        label: "Your Pathway to Secure Future in the USA",
        title: "Permanent Work Visa",
        description:
            "Secure a permanent future in the USA with EB visas for skilled professionals and researchers. A pathway to live and work permanently.",
    },
    sections: {
        whatIs: {
            title: "What is Employment-Based (EB) Visa?",
            content:
                "Employment-Based (EB) visas are issued to foreign nationals who meet specific criteria (EB-1 to EB-5). Successful applicants can obtain a Green Card, granting permanent residency.",
        },
        whyChoose: {
            title: "Why Choose a Permanent Work Visa?",
            description: "The USA is a global hub for career opportunities.",
            items: [
                {
                    title: "Global Opportunities",
                    text: "Access a thriving job market.",
                    icon: "FaBriefcase",
                },
                {
                    title: "High Salaries",
                    text: "Competitive pay in a strong economy.",
                    icon: "FaDollarSign",
                },
                {
                    title: "Family Inclusion",
                    text: "Bring spouse and children to live in the USA.",
                    icon: "FaUsers",
                },
                {
                    title: "Pathway to Citizenship",
                    text: "Apply for citizenship after 5 years.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "World-Class Education",
                    text: "Access to top universities.",
                    icon: "FaGlobe",
                },
                {
                    title: "Diverse Culture",
                    text: "Experience a multicultural society.",
                    icon: "FaGlobeAmericas",
                },
            ],
        },
        types: [
            {
                title: "EB-1 Visa: Priority Workers",
                items: [
                    "For extraordinary abilities in sciences, arts, business.",
                    "No job offer needed for some.",
                    "Fast processing.",
                ],
                icon: "FaStar",
            },
            {
                title: "EB-2 Visa: Advanced Degree Professionals",
                items: [
                    "For advanced degrees or exceptional ability.",
                    "Requires job offer & PERM (unless NIW).",
                    "National Interest Waiver available.",
                ],
                icon: "FaBriefcase",
            },
            {
                title: "EB-3 Visa: Skilled/Other Workers",
                items: [
                    "For skilled workers (2+ yrs exp) or professionals.",
                    "Requires job offer & PERM.",
                    "Longer processing times.",
                ],
                icon: "FaBuilding",
            },
            {
                title: "EB-4 Visa: Special Immigrants",
                items: [
                    "Religious workers, broadcasters, etc.",
                    "Specific eligibility criteria.",
                    "No labor certification required.",
                ],
                icon: "FaHeartbeat",
            },
        ],
        eligibility: {
            title: "Eligibility Criteria for Permanent Work Visa",
            description:
                "To qualify, applicants must meet specific requirements:",
            items: [
                {
                    title: "Job Offer",
                    text: "Valid offer from U.S. employer (except EB-1/NIW).",
                },
                {
                    title: "Labor Certification",
                    text: "PERM certification for EB-2/EB-3.",
                },
                {
                    title: "Education & Experience",
                    text: "Advanced degree (EB-2) or skilled work (EB-3).",
                },
                {
                    title: "Extraordinary Ability",
                    text: "National/International acclaim for EB-1.",
                },
                {
                    title: "Special Immigrant Status",
                    text: "Criteria for EB-4.",
                },
                {
                    title: "Health & Security Checks",
                    text: "Mandatory checks.",
                },
            ],
        },
        process: {
            title: "Why Choose Horizon Success Bridge for Permanent Work Visa?",
            description:
                "We provide expert assistance for your immigration journey.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description: "Stay updated with laws.",
                },
                {
                    number: "02",
                    title: "End-to-End Assistance",
                    description: "Documentation to submission.",
                },
                {
                    number: "03",
                    title: "Higher Approval Rates",
                    description: "Minimize errors.",
                },
                {
                    number: "04",
                    title: "Tailored Solutions",
                    description: "Based on your career needs.",
                },
            ],
        },
        pathways: {
            title: "EB Visa Categories",
            description:
                "Select the permanent residency pathway that fits your background.",
            items: [
                {
                    title: "EB-1 Visa",
                    desc: "For priority workers and extraordinary abilities.",
                    href: "/usa-immigration/permanent-work-visa/eb-1-visa",
                },
                {
                    title: "EB-2 Visa",
                    desc: "For advanced degree professionals.",
                    href: "/usa-immigration/permanent-work-visa/eb-2-visa",
                },
                {
                    title: "EB-3 Visa",
                    desc: "For skilled workers and professionals.",
                    href: "/usa-immigration/permanent-work-visa/eb-3-visa",
                },
                {
                    title: "EB-4 Visa",
                    desc: "For special immigrants and religious workers.",
                    href: "/usa-immigration/permanent-work-visa/eb-4-visa",
                },
            ],
        },
    },
};

export const usaEB1VisaData = {
    header: {
        label: "Direct Pathway to Green Card",
        title: "EB-1 Visa (Priority Workers)",
        description:
            "The EB-1 visa allows individuals with extraordinary ability, outstanding professors/researchers, and multinational executives to obtain permanent residency in the U.S.",
    },
    sections: {
        whatIs: {
            title: "What is the EB-1 Visa?",
            content:
                "The EB-1 is a first-preference employment-based immigrant visa. It is designed for those who have risen to the very top of their field. It does not require a PERM labor certification, making the process significantly faster than other employment-based green cards.",
        },
        whyChoose: {
            title: "Benefits of EB-1",
            items: [
                {
                    title: "No Labor Certification",
                    text: "Skip the lengthy PERM process.",
                    icon: "FaCheckCircle",
                },
                {
                    title: "Fast Track",
                    text: "Current priority dates for most countries.",
                    icon: "FaChartLine",
                },
                {
                    title: "Direct Green Card",
                    text: "Immediate permanent residency upon approval.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Family Included",
                    text: "Spouse and children under 21 enter with you.",
                    icon: "FaUsers",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria",
            description: "There are three sub-categories for the EB-1 visa:",
            items: [
                {
                    title: "Extraordinary Ability",
                    text: "Sustained national or international acclaim in sciences, arts, education, business, or athletics.",
                },
                {
                    title: "Outstanding Professors",
                    text: "International recognition for outstanding achievements in a particular academic field.",
                },
                {
                    title: "Multinational Manager",
                    text: "Employed outside the U.S. for at least 1 year in the last 3 years in a managerial role.",
                },
            ],
        },
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "Profile Assessment",
                    description:
                        "Verify eligibility for one of the three categories.",
                },
                {
                    number: "02",
                    title: "File I-140 Petition",
                    description:
                        "Submit petition to USCIS with supporting evidence.",
                },
                {
                    number: "03",
                    title: "I-485 or Consular Processing",
                    description:
                        "Apply for Adjustment of Status or Immigrant Visa.",
                },
            ],
        },
    },
};

export const usaEB2VisaData = {
    header: {
        label: "Advanced Degree Professionals",
        title: "EB-2 Visa",
        description:
            "The EB-2 visa is for professionals holding an advanced degree or its equivalent, or those with exceptional ability in their field.",
    },
    sections: {
        whatIs: {
            title: "What is the EB-2 Visa?",
            content:
                "The EB-2 is a second-preference employment-based visa. It generally requires a job offer and a PERM labor certification, unless the applicant qualifies for a National Interest Waiver (NIW).",
        },
        whyChoose: {
            title: "Benefits of EB-2",
            items: [
                {
                    title: "Permanent Residency",
                    text: "Path to a U.S. Green Card.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "NIW Option",
                    text: "National Interest Waiver allows self-petitioning without an employer.",
                    icon: "FaCheckCircle",
                },
                {
                    title: "Career Growth",
                    text: "Work in high-demand advanced fields.",
                    icon: "FaBriefcase",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria",
            description: "You must meet one of the following criteria:",
            items: [
                {
                    title: "Advanced Degree",
                    text: "Master's degree or higher, or Bachelor's qualification plus 5 years of progressive work experience.",
                },
                {
                    title: "Exceptional Ability",
                    text: "Degree of expertise significantly above that ordinarily encountered in the sciences, arts, or business.",
                },
            ],
        },
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "PERM Certification",
                    description:
                        "Employer obtains labor certification (unless NIW).",
                },
                {
                    number: "02",
                    title: "I-140 Petition",
                    description: "Employer files I-140 with USCIS.",
                },
                {
                    number: "03",
                    title: "Green Card Application",
                    description:
                        "File I-485 or go through Consular Processing.",
                },
            ],
        },
    },
};

export const usaEB3VisaData = {
    header: {
        label: "Skilled Workers & Professionals",
        title: "EB-3 Visa",
        description:
            "The EB-3 visa is for skilled workers, professionals, and other workers who wish to live and work permanently in the United States.",
    },
    sections: {
        whatIs: {
            title: "What is the EB-3 Visa?",
            content:
                "The EB-3 is a third-preference employment-based visa. It typically has a backlog for many countries but is a reliable path to permanent residency for those with job offers.",
        },
        whyChoose: {
            title: "Benefits of EB-3",
            items: [
                {
                    title: "Green Card",
                    text: "Grants permanent resident status.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Inclusive",
                    text: "Covers a wide range of job types.",
                    icon: "FaUsers",
                },
                {
                    title: "Family",
                    text: "Spouse and unmarried children under 21 can join.",
                    icon: "FaHeart",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria",
            description: "There are three sub-categories:",
            items: [
                {
                    title: "Skilled Workers",
                    text: "Requires at least 2 years of job experience or training.",
                },
                {
                    title: "Professionals",
                    text: "Requires a U.S. baccalaureate degree or foreign equivalent.",
                },
                {
                    title: "Other Workers",
                    text: "For unskilled labor requiring less than 2 years of training.",
                },
            ],
        },
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "Job Offer",
                    description:
                        "Secure a full-time job offer from a U.S. employer.",
                },
                {
                    number: "02",
                    title: "PERM Certification",
                    description: "Employer obtains DOL certification.",
                },
                {
                    number: "03",
                    title: "File I-140",
                    description: "Employer petitions USCIS on your behalf.",
                },
            ],
        },
    },
};

export const usaEB4VisaData = {
    header: {
        label: "Special Immigrants",
        title: "EB-4 Visa",
        description:
            "The EB-4 visa is for special immigrants, including religious workers, special immigrant juveniles, and certain broadcasters.",
    },
    sections: {
        whatIs: {
            title: "What is the EB-4 Visa?",
            content:
                "The EB-4 is a fourth-preference employment-based visa for specific groups of special immigrants. A common category is for religious workers coming to work for a non-profit religious organization.",
        },
        whyChoose: {
            title: "Benefits",
            items: [
                {
                    title: "Specific Pathway",
                    text: "Tailored for religious and specialized workers.",
                    icon: "FaCheckCircle",
                },
                {
                    title: "Green Card",
                    text: "Lead to permanent residency.",
                    icon: "FaMapMarkedAlt",
                },
            ],
        },
        eligibility: {
            title: "Eligibility",
            description:
                "Requirements vary by sub-group. Common groups include:",
            items: [
                {
                    title: "Religious Workers",
                    text: "Ministers and non-ministers in religious vocations.",
                },
                {
                    title: "Special Immigrant Juveniles",
                    text: "Children abused, abandoned, or neglected.",
                },
                { title: "Broadcasters", text: "For USAGM." },
            ],
        },
        process: {
            title: "Application Process",
            steps: [
                {
                    number: "01",
                    title: "Petition",
                    description: "File Form I-360 with USCIS.",
                },
                {
                    number: "02",
                    title: "Approval",
                    description: "Wait for USCIS approval of your status.",
                },
                {
                    number: "03",
                    title: "Green Card",
                    description:
                        "Apply for adjustment of status or consular processing.",
                },
            ],
        },
    },
};

export const usaE2VisaData = {
    header: {
        label: "Treaty Investor",
        title: "E-2 Visa",
        description:
            "The E-2 visa allows nationals of a treaty country to be admitted to the U.S. when investing a substantial amount of capital in a U.S. business.",
    },
    sections: {
        whatIs: {
            title: "What is the E-2 Visa?",
            content:
                "The E-2 is a non-immigrant visa for investors, entrepreneurs, and people who want to run a business in the U.S. It requires a treaty of commerce between the U.S. and your country of citizenship.",
        },
        whyChoose: {
            title: "Benefits",
            items: [
                {
                    title: "Quick Processing",
                    text: "Often faster than Green Card routes.",
                    icon: "FaChartLine",
                },
                {
                    title: "Renewable",
                    text: "Can be renewed indefinitely as long as the business operates.",
                    icon: "FaCheckCircle",
                },
                {
                    title: "Work Authorization",
                    text: "Spouses can work in the U.S.",
                    icon: "FaBriefcase",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria",
            description: "Key requirements:",
            items: [
                {
                    title: "Treaty Country",
                    text: "Must be a citizen of a country with a U.S. commerce treaty.",
                },
                {
                    title: "Substantial Investment",
                    text: "Investment must be substantial relative to the business cost.",
                },
                {
                    title: "Control",
                    text: "Must seek to enter the U.S. solely to develop and direct the investment enterprise.",
                },
            ],
        },
        process: {
            title: "Process",
            steps: [
                {
                    number: "01",
                    title: "Business Plan",
                    description: "Create a comprehensive business plan.",
                },
                {
                    number: "02",
                    title: "Investment",
                    description: "Commit funds to the U.S. enterprise.",
                },
                {
                    number: "03",
                    title: "Application",
                    description: "Apply directly at a U.S. Consulate.",
                },
            ],
        },
    },
};

export const usaEB5VisaData = {
    header: {
        label: "Immigrant Investor Program",
        title: "EB-5 Visa",
        description:
            "The EB-5 program provides a method for eligible immigrant investors to become lawful permanent residents by investing significant capital in the U.S.",
    },
    sections: {
        whatIs: {
            title: "What is the EB-5 Visa?",
            content:
                "The EB-5 visa was created to stimulate the U.S. economy through job creation and capital investment by foreign investors. It offers a direct route to a Green Card for the investor and their family.",
        },
        whyChoose: {
            title: "Benefits",
            items: [
                {
                    title: "Green Card",
                    text: "Permanent residency for investors and family.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "No Sponsor Needed",
                    text: "Self-petitioned based on investment.",
                    icon: "FaCheckCircle",
                },
                {
                    title: "Education",
                    text: "Children can attend U.S. schools and colleges.",
                    icon: "FaUniversity",
                },
            ],
        },
        eligibility: {
            title: "Eligibility Criteria",
            description: "Investment thresholds:",
            items: [
                {
                    title: "Capital Investment",
                    text: "Invest $1,050,000 (or $800,000 in a TEA).",
                },
                {
                    title: "Job Creation",
                    text: "Create or preserve at least 10 full-time jobs for qualifying U.S. workers.",
                },
            ],
        },
        process: {
            title: "Process",
            steps: [
                {
                    number: "01",
                    title: "Invest",
                    description: "Place capital in a qualifying project.",
                },
                {
                    number: "02",
                    title: "File I-526",
                    description: "Petition for Alien Investor.",
                },
                {
                    number: "03",
                    title: "Conditional Residency",
                    description: "Receive 2-year Green Card.",
                },
                {
                    number: "04",
                    title: "Remove Conditions",
                    description: "File I-829 to make residency permanent.",
                },
            ],
        },
    },
};

export const usaK1VisaData = {
    header: {
        label: "Fiancé(e) Visa",
        title: "K-1 Visa",
        description:
            "The K-1 visa allows the foreign-citizen fiancé(e) of a U.S. citizen to travel to the United States and marry their U.S. citizen sponsor within 90 days of arrival.",
    },
    sections: {
        whatIs: {
            title: "Overview",
            content:
                "The K-1 nonimmigrant visa is for the foreign-citizen fiancé(e) of a United States citizen. It permits the fiancé(e) to travel to the United States and marry his or her U.S. citizen sponsor within 90 days of arrival.",
        },
        whyChoose: {
            title: "Benefits",
            items: [
                {
                    title: "Fast Entry",
                    text: "Often faster than spousal visa processing.",
                    icon: "FaChartLine",
                },
                {
                    title: "Work Permit",
                    text: "Can apply for work authorization after entry.",
                    icon: "FaBriefcase",
                },
            ],
        },
        eligibility: {
            title: "Eligibility",
            description: "Both parties must be free to marry.",
            items: [
                {
                    title: "U.S. Citizen Component",
                    text: "The petitioner must be a U.S. citizen.",
                },
                {
                    title: "Intent to Marry",
                    text: "Must marry within 90 days of entry.",
                },
                {
                    title: "Meeting Requirement",
                    text: "Met in person at least once within the 2 years before filing.",
                },
            ],
        },
        process: {
            title: "Steps",
            steps: [
                {
                    number: "01",
                    title: "Petition",
                    description: "U.S. citizen files Form I-129F.",
                },
                {
                    number: "02",
                    title: "Visa Interview",
                    description: "Fiancé(e) attends interview at consulate.",
                },
                {
                    number: "03",
                    title: "Entry & Marriage",
                    description: "Enter U.S. and marry within 90 days.",
                },
            ],
        },
    },
};

export const usaIR1VisaData = {
    header: {
        label: "Spousal Visa",
        title: "IR-1 / CR-1 Visa",
        description:
            "Immigrant visas for spouses of U.S. citizens or lawful permanent residents.",
    },
    sections: {
        whatIs: {
            title: "Overview",
            content:
                "The IR-1 (Immediate Relative) and CR-1 (Conditional Resident) visas allow a foreign spouse of a U.S. citizen to immigrate to the U.S. The CR-1 applies if married less than 2 years.",
        },
        whyChoose: {
            title: "Benefits",
            items: [
                {
                    title: "Green Card",
                    text: "Receive permanent residency immediately upon entry.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Work & Travel",
                    text: "Full rights to work and travel.",
                    icon: "FaGlobe",
                },
            ],
        },
        eligibility: {
            title: "Requirements",
            description: "Valid marriage to a U.S. citizen/resident.",
            items: [
                {
                    title: "Sponsorship",
                    text: "Must be sponsored by U.S. citizen/resident spouse.",
                },
                {
                    title: "Valid Marriage",
                    text: "Marriage must be legally valid.",
                },
            ],
        },
        process: {
            title: "Steps",
            steps: [
                {
                    number: "01",
                    title: "Petition",
                    description: "Sponsor files Form I-130.",
                },
                {
                    number: "02",
                    title: "NVC Processing",
                    description: "Submit financial and civil documents.",
                },
                {
                    number: "03",
                    title: "Interview",
                    description: "Attend consular interview.",
                },
            ],
        },
    },
};

export const usaParentVisaData = {
    header: {
        label: "Family Sponsorship",
        title: "Parent & Sibling Visa",
        description:
            "U.S. citizens can sponsor their parents and siblings to live permanently in the United States.",
    },
    sections: {
        whatIs: {
            title: "Overview",
            content:
                "Immediate relative visas are available for parents of U.S. citizens (over 21). Family preference visas are available for siblings of U.S. citizens.",
        },
        whyChoose: {
            title: "Benefits",
            items: [
                {
                    title: "Reunification",
                    text: "Live together in the U.S.",
                    icon: "FaHeart",
                },
                {
                    title: "Permanent Residency",
                    text: "Grants Green Card status.",
                    icon: "FaMapMarkedAlt",
                },
            ],
        },
        eligibility: {
            title: "Who Can Sponsor?",
            description:
                "Sponsor must be a U.S. citizen at least 21 years old.",
            items: [
                {
                    title: "Parents",
                    text: "Unlimited number of visas (Immediate Relative).",
                },
                {
                    title: "Siblings",
                    text: "Limited visas (F4 Preference) - long wait times.",
                },
            ],
        },
        process: {
            title: "Steps",
            steps: [
                {
                    number: "01",
                    title: "File I-130",
                    description: "Submit petition to USCIS.",
                },
                {
                    number: "02",
                    title: "Wait (if applicable)",
                    description: "Wait for priority date (for siblings).",
                },
                {
                    number: "03",
                    title: "Consular Processing",
                    description: "Apply for visa at consulate.",
                },
            ],
        },
    },
};
