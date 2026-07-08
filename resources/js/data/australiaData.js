import {
    FaBriefcase,
    FaUniversity,
    FaMapMarkedAlt,
    FaChartLine,
    FaHospital,
    FaGlobe,
    FaCheckCircle,
} from "react-icons/fa";

export const australiaImmigrationData = {
    header: {
        title: "Australia Immigration",
        subtitle: "Secure your future in the Land Down Under.",
    },
    overview: {
        label: "Overview",
        title: "Your Pathway to a New Future in Australia",
        description:
            "Australia is one of the most welcoming and immigrant-friendly countries in the world, offering excellent opportunities for skilled professionals, students, entrepreneurs, and families looking to settle in a stable and thriving environment. Whether you want to work, study, invest, or become a permanent resident, navigating Australia's immigration process can be complex. Our Australia Immigration Services provide expert guidance and end-to-end support to help you successfully apply for your visa and build a bright future in Australia.",
    },
    sections: {
        whatIs: {
            label: "I. Context",
            title: "What is Australia Immigration?",
            content:
                "Australia Immigration refers to the legal process of entering and settling in Australia for various purposes such as work, study, business, family reunification, or permanent residency. Australia’s immigration system is designed to attract skilled professionals, entrepreneurs, students, and families who can contribute to the economy and society. \n\nThe Department of Home Affairs (DHA) manages immigration policies and programs, ensuring a structured and fair entry process for eligible applicants. Australia provides multiple visa options, including pathways to permanent residency and eventual Australian citizenship.",
        },
        whyChoose: {
            label: "II. Objectives",
            title: "What Makes Australia the Perfect Destination?",
            description:
                "Australia is one of the most sought-after destinations for immigrants due to its high standard of living, strong economy, excellent education system, and diverse multicultural society.",
            items: [
                {
                    title: "Strong Job Market",
                    text: "High demand for skilled professionals in IT, Healthcare, Engineering, Construction, Finance, and more.",
                    icon: "FaBriefcase",
                },
                {
                    title: "World-Class Education",
                    text: "Home to top universities like The University of Melbourne, ANU, and The University of Sydney.",
                    icon: "FaUniversity",
                },
                {
                    title: "Pathway to Permanent Residency",
                    text: "Various visa programs leading to Australian PR and eventual citizenship.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Business & Investment Opportunities",
                    text: "A stable economy with government support for entrepreneurs and investors.",
                    icon: "FaChartLine",
                },
                {
                    title: "Social Security & Benefits",
                    text: "Access to healthcare, pension plans, child benefits, and social security services.",
                    icon: "FaHospital",
                },
                {
                    title: "Cultural Diversity & Quality of Life",
                    text: "A safe, inclusive, and diverse society with excellent public services and infrastructure.",
                    icon: "FaGlobe",
                },
            ],
        },
        types: {
            label: "III. Scope",
            title: "Our Australia Immigration Services",
            description:
                "We provide complete support for a wide range of Australia visa programs, ensuring a hassle-free and successful immigration process. Whether you're applying for a skilled visa, study permit, business migration, or family sponsorship, our expert team offers personalized consultation.",
            items: [
                {
                    title: "Skilled Migration",
                    icon: "FaCogs",
                    items: ["Subclass 189", "Subclass 190", "Subclass 491"],
                },
                {
                    title: "Employer Sponsored",
                    icon: "FaUserTie",
                    items: [
                        "Subclass 482 (TSS)",
                        "Subclass 186 (ENS)",
                        "Subclass 187 (RSMS)",
                    ],
                },
                {
                    title: "Business & Investment",
                    icon: "FaChartArea",
                    items: [
                        "Subclass 188 & 888",
                        "Subclass 891 Investor",
                        "Subclass 858 Global Talent",
                    ],
                },
                {
                    title: "Family & Partner",
                    icon: "FaUsers",
                    items: [
                        "Subclass 820/801 Partner",
                        "Subclass 103/143 Parent",
                        "Subclass 101 Child",
                    ],
                },
                {
                    title: "Student & Visitor",
                    icon: "FaPlane",
                    items: [
                        "Subclass 500 Student",
                        "Subclass 485 Graduate",
                        "Subclass 600 Visitor",
                    ],
                },
                {
                    title: "Regional & State",
                    icon: "FaMapSigns",
                    items: ["VIC, NSW, QLD, SA", "WA, TAS, NT, ACT"],
                },
            ],
        },
        whyAustin: {
            label: "IV. Methodology",
            title: "Why Choose Horizon Success Bridge for Australia Immigration?",
            description:
                "Navigating Australia's immigration process can be complex, with various visa categories, legal requirements, and policy updates. Our experienced team provides step-by-step assistance.",
            steps: [
                {
                    number: "01",
                    title: "Expert Guidance",
                    description:
                        "Stay updated with the latest Australian immigration laws and policies.",
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
        title: "Australia",
        items: [
            {
                title: "Skilled Migration Visa",
                href: "/australia-immigration/skilled-migration-visa",
                description:
                    "Live and work in Australia as a skilled professional.",
            },
            {
                title: "Employer-Sponsored Visa",
                href: "/australia-immigration/employer-sponsored-visa",
                description: "Work in Australia with employer sponsorship.",
            },
            {
                title: "Business & Investment Visa",
                href: "/australia-immigration/business-investment-visa",
                description: "Start or invest in a business in Australia.",
            },
            {
                title: "Family & Partner Visa",
                href: "/australia-immigration/family-partner-visa",
                description: "Join your family or partner in Australia.",
            },
            {
                title: "Regional & State-Specific",
                href: "/australia-immigration/regional-state-specific",
                description:
                    "Explore regional immigration options in Australia.",
            },
            {
                title: "Study Visa",
                href: "/study/study-in-australia",
                description: "Study in Australia's top universities.",
            },
            {
                title: "Visit Visa",
                href: "/visit/australia-visit-visa",
                description: "Visit Australia for tourism or business.",
            },
        ],
    },
};

export const australiaSkilledMigrationData = {
    header: {
        label: "Pathway to Australian PR",
        title: "Skilled Migration",
        description:
            "General Skilled Migration (GSM) is for skilled professionals who are not sponsored by an employer and want to live and work in Australia permanently.",
    },
    sections: {
        whatIs: {
            title: "What is Skilled Migration?",
            content:
                "The GSM program uses a points-based system to attract highly skilled people from across the globe. The main visa subclasses are 189 (Skilled Independent), 190 (Skilled Nominated), and 491 (Skilled Regional Provisional).",
        },
        whyChoose: {
            title: "Benefits",
            items: [
                {
                    title: "Permanent Residence",
                    text: "Subclass 189 and 190 lead directly to PR.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "No Employer Needed",
                    text: "You don't need a specific job offer to apply for 189.",
                    icon: "FaUserCheck",
                },
                {
                    title: "Medicare",
                    text: "Access to Australia's public healthcare system.",
                    icon: "FaHospital",
                },
            ],
        },
        eligibility: {
            title: "Eligibility",
            description: "To apply, you must meet the following criteria:",
            items: [
                {
                    title: "Occupation",
                    text: "Your occupation must be on the relevant skilled list.",
                },
                {
                    title: "Skills Assessment",
                    text: "Positive assessment from the relevant authority.",
                },
                {
                    title: "Points",
                    text: "Score at least 65 points on the Australian points test.",
                },
            ],
        },
        process: {
            title: "Steps",
            steps: [
                {
                    number: "01",
                    title: "Skills Assessment",
                    description: "Get your skills and qualifications assessed.",
                },
                {
                    number: "02",
                    title: "EOI Submission",
                    description:
                        "Submit an Expression of Interest via SkillSelect.",
                },
                {
                    number: "03",
                    title: "Visa Application",
                    description:
                        "Receive an invitation and apply for the visa.",
                },
            ],
        },
    },
};

export const australiaEmployerSponsoredData = {
    header: {
        label: "Work in Australia",
        title: "Employer Sponsored Visas",
        description:
            "For skilled workers who have an Australian employer willing to sponsor their work and residency.",
    },
    sections: {
        whatIs: {
            title: "Overview",
            content:
                "These visas allow Australian employers to address labor shortages by bringing in skilled workers from overseas. Includes Subclass 482 (Temporary), 186 (Permanent), and 494 (Regional).",
        },
        whyChoose: {
            title: "Benefits",
            items: [
                {
                    title: "Direct Path to PR",
                    text: "Subclass 186 provides immediate permanent residency.",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Security",
                    text: "Have a job secured before you arrive in Australia.",
                    icon: "FaLock",
                },
                {
                    title: "Flexibility",
                    text: "Pathways to transition from temporary to permanent visas.",
                    icon: "FaSync",
                },
            ],
        },
        eligibility: {
            title: "Requirements",
            items: [
                {
                    title: "Sponsor",
                    text: "Must have a nomination from an approved Australian employer.",
                },
                {
                    title: "Age",
                    text: "Usually must be under 45 years of age for PR streams.",
                },
                {
                    title: "English",
                    text: "Proof of competent English language skills.",
                },
            ],
        },
        process: {
            title: "Steps",
            steps: [
                {
                    number: "01",
                    title: "Sponsorship",
                    description: "Employer applies for sponsorship status.",
                },
                {
                    number: "02",
                    title: "Nomination",
                    description:
                        "Employer nominates you for a specific position.",
                },
                {
                    number: "03",
                    title: "Visa App",
                    description:
                        "Apply for the visa subclass after nomination approval.",
                },
            ],
        },
    },
};

export const australiaBusinessVisaData = {
    header: {
        label: "Invest in Australia",
        title: "Business & Investment Visa",
        description:
            "Pathways for investors and entrepreneurs to establish or grow businesses in Australia.",
    },
    sections: {
        whatIs: {
            title: "Overview",
            content:
                "The Business Innovation and Investment (Provisional) visa (subclass 188) is for people with business skills who want to operate a business or invest in Australia.",
        },
        whyChoose: {
            title: "Benefits",
            items: [
                {
                    title: "Economic Growth",
                    text: "Operate in a stable and growing economy.",
                    icon: "FaChartLine",
                },
                {
                    title: "Residency",
                    text: "Pathways to permanent residency (subclass 888).",
                    icon: "FaMapMarkedAlt",
                },
                {
                    title: "Global Access",
                    text: "Strong trade links with the Asia-Pacific region.",
                    icon: "FaGlobe",
                },
            ],
        },
        eligibility: {
            title: "Criteria",
            items: [
                {
                    title: "Net Assets",
                    text: "Minimum net business and personal assets required.",
                },
                {
                    title: "Investment",
                    text: "Willingness to make a 'complying investment' in Australia.",
                },
                {
                    title: "Business History",
                    text: "Successful track record in business or investment.",
                },
            ],
        },
        process: {
            title: "Steps",
            steps: [
                {
                    number: "01",
                    title: "Nomination",
                    description:
                        "Get nominated by a State or Territory government.",
                },
                {
                    number: "02",
                    title: "Invitation",
                    description:
                        "Receive an invitation to apply through SkillSelect.",
                },
                {
                    number: "03",
                    title: "Submit App",
                    description: "Submit your provisional visa application.",
                },
            ],
        },
    },
};

export const australiaRegionalVisasData = {
    header: {
        label: "Live in Regional Australia",
        title: "Regional Visas",
        description:
            "Incentivized pathways for skilled workers to live and work in designated regional areas of Australia.",
    },
    sections: {
        whatIs: {
            title: "What are Regional Visas?",
            content:
                "Australia encourages migration to regional areas to help local communities grow. Key visas include Subclass 491 (Skilled Work Regional) and Subclass 494 (Employer Sponsored Regional).",
        },
        whyChoose: {
            title: "Benefits",
            items: [
                {
                    title: "Priority Processing",
                    text: "Regional visa applications are often prioritized.",
                    icon: "FaFastForward",
                },
                {
                    title: "Longer Duration",
                    text: "Visas are typically valid for 5 years.",
                    icon: "FaCalendarAlt",
                },
                {
                    title: "PR Pathway",
                    text: "Path to permanent residency via Subclass 191.",
                    icon: "FaMapMarkedAlt",
                },
            ],
        },
        eligibility: {
            title: "Requirements",
            items: [
                {
                    title: "Regional Location",
                    text: "Must live and work in a 'designated regional area'.",
                },
                { title: "Age", text: "Generally under 45 years of age." },
                {
                    title: "Skills",
                    text: "Skills and experience relevant to regional needs.",
                },
            ],
        },
        process: {
            title: "Steps",
            steps: [
                {
                    number: "01",
                    title: "Assessment",
                    description: "Obtain a skills assessment and English test.",
                },
                {
                    number: "02",
                    title: "State Nomination",
                    description: "Apply for a State or Territory nomination.",
                },
                {
                    number: "03",
                    title: "Visa Launch",
                    description:
                        "Apply for the visa once invited or nominated.",
                },
            ],
        },
    },
};

export const australiaFamilyPartnerData = {
    header: {
        label: "Family Reunion",
        title: "Family & Partner Visas",
        description:
            "Reunite with your family members and partners who are Australian citizens or permanent residents.",
    },
    sections: {
        whatIs: {
            title: "Overview",
            content:
                "Australia offers pathways for partners, children, and parents to join their family in Australia. Most common are Subclasses 309/100 and 820/801 for partners.",
        },
        whyChoose: {
            title: "Benefits",
            items: [
                {
                    title: "Togetherness",
                    text: "Live permanently with your family in Australia.",
                    icon: "FaHeart",
                },
                {
                    title: "Work/Study",
                    text: "Full work and study rights in Australia.",
                    icon: "FaUserCheck",
                },
                {
                    title: "Health",
                    text: "Access to the Medicare system.",
                    icon: "FaHospital",
                },
            ],
        },
        eligibility: {
            title: "Criteria",
            items: [
                {
                    title: "Sponsorship",
                    text: "Sponsored by an eligible Australian relative.",
                },
                {
                    title: "Relationship",
                    text: "Must prove genuine and ongoing relationship.",
                },
                {
                    title: "Character",
                    text: "Police checks and health clearances required.",
                },
            ],
        },
        process: {
            title: "Steps",
            steps: [
                {
                    number: "01",
                    title: "Evidence",
                    description:
                        "Gather extensive evidence of your relationship.",
                },
                {
                    number: "02",
                    title: "Lodge App",
                    description:
                        "Apply for the provisional and permanent visa simultaneously.",
                },
                {
                    number: "03",
                    title: "Grant",
                    description:
                        "Wait for the processing and grant of your visa.",
                },
            ],
        },
    },
};

export const australiaSubclass189Data = {
    ...australiaSkilledMigrationData,
    header: {
        ...australiaSkilledMigrationData.header,
        title: "Skilled Independent Visa (Subclass 189)",
        description: "Points-tested permanent residency for skilled workers who are not sponsored by an employer or family member.",
    },
};

export const australiaSubclass190Data = {
    ...australiaSkilledMigrationData,
    header: {
        ...australiaSkilledMigrationData.header,
        title: "Skilled Nominated Visa (Subclass 190)",
        description: "Permanent residency for skilled workers who are nominated by an Australian state or territory government.",
    },
};

export const australiaSubclass491Data = {
    ...australiaSkilledMigrationData,
    header: {
        ...australiaSkilledMigrationData.header,
        title: "Skilled Work Regional (Provisional) Visa (Subclass 491)",
        description: "A 5-year provisional visa for skilled workers who want to live and work in regional Australia.",
    },
};

export const australiaSubclass482Data = {
    ...australiaEmployerSponsoredData,
    header: {
        ...australiaEmployerSponsoredData.header,
        title: "Temporary Skill Shortage Visa (Subclass 482)",
        description: "Allows employers to address labor shortages by bringing in genuinely skilled workers where they cannot find an appropriately skilled Australian.",
    },
};

export const australiaSubclass186Data = {
    ...australiaEmployerSponsoredData,
    header: {
        ...australiaEmployerSponsoredData.header,
        title: "Employer Nomination Scheme Visa (Subclass 186)",
        description: "A permanent residency visa for skilled workers who are nominated by their employer to work in Australia.",
    },
};

export const australiaSubclass494Data = {
    ...australiaEmployerSponsoredData,
    header: {
        ...australiaEmployerSponsoredData.header,
        title: "Skilled Employer Sponsored Regional (Provisional) Visa (Subclass 494)",
        description: "For skilled workers who are nominated by an employer to work in regional Australia.",
    },
};

export const australiaSubclass188Data = {
    ...australiaBusinessVisaData,
    header: {
        ...australiaBusinessVisaData.header,
        title: "Business Innovation & Investment (Provisional) Visa (Subclass 188)",
        description: "For people with business skills who want to establish and develop a new or existing business in Australia.",
    },
};

export const australiaSubclass888Data = {
    ...australiaBusinessVisaData,
    header: {
        ...australiaBusinessVisaData.header,
        title: "Business Innovation & Investment (Permanent) Visa (Subclass 888)",
        description: "The permanent stage of the subclass 188 visa, allowing for permanent residency after meeting business requirements.",
    },
};

export const australiaSubclass891Data = {
    ...australiaBusinessVisaData,
    header: {
        ...australiaBusinessVisaData.header,
        title: "Investor Visa (Subclass 891)",
        description: "A permanent visa for people who held a subclass 162 visa and have maintained a designated investment in Australia.",
    },
};

export const australiaSubclass858Data = {
    ...australiaBusinessVisaData,
    header: {
        ...australiaBusinessVisaData.header,
        title: "Global Talent Visa (Subclass 858)",
        description: "For people who are internationally recognized for exceptional achievements in a priority sector.",
    },
};

export const australiaPartnerVisaData = {
    ...australiaFamilyPartnerData,
    header: {
        ...australiaFamilyPartnerData.header,
        title: "Partner Visa (Subclass 820/801 & 309/100)",
        description: "For partners or spouses of Australian citizens, permanent residents, or eligible New Zealand citizens to live in Australia.",
    },
};

export const australiaParentVisaData = {
    ...australiaFamilyPartnerData,
    header: {
        ...australiaFamilyPartnerData.header,
        title: "Parent Visa (Subclass 103/143)",
        description: "Allow parents of Australian citizens or permanent residents to live in Australia permanently.",
    },
};

export const australiaChildVisaData = {
    ...australiaFamilyPartnerData,
    header: {
        ...australiaFamilyPartnerData.header,
        title: "Child Visa (Subclass 101)",
        description: "A permanent visa for a child to live in Australia with their parent who is a citizen or resident.",
    },
};

export const australiaVICData = {
    ...australiaRegionalVisasData,
    header: {
        ...australiaRegionalVisasData.header,
        title: "Victoria State Nomination",
        description: "Opportunities for skilled workers and business people to settle in Victoria.",
    },
};

export const australiaNSWData = {
    ...australiaRegionalVisasData,
    header: {
        ...australiaRegionalVisasData.header,
        title: "New South Wales State Nomination",
        description: "Immigration pathways for skilled professionals in NSW.",
    },
};

export const australiaQLDData = {
    ...australiaRegionalVisasData,
    header: {
        ...australiaRegionalVisasData.header,
        title: "Queensland State Nomination",
        description: "Live and work in the Sunshine State with Queensland nomination.",
    },
};

export const australiaSAData = {
    ...australiaRegionalVisasData,
    header: {
        ...australiaRegionalVisasData.header,
        title: "South Australia State Nomination",
        description: "Pathways for skilled and business migrants to South Australia.",
    },
};

export const australiaWAData = {
    ...australiaRegionalVisasData,
    header: {
        ...australiaRegionalVisasData.header,
        title: "Western Australia State Nomination",
        description: "Skilled migration opportunities in Western Australia.",
    },
};

export const australiaTASData = {
    ...australiaRegionalVisasData,
    header: {
        ...australiaRegionalVisasData.header,
        title: "Tasmania State Nomination",
        description: "Nomination pathways for skilled workers in Tasmania.",
    },
};

export const australiaNTData = {
    ...australiaRegionalVisasData,
    header: {
        ...australiaRegionalVisasData.header,
        title: "Northern Territory State Nomination",
        description: "Immigration options for the Northern Territory.",
    },
};

export const australiaACTData = {
    ...australiaRegionalVisasData,
    header: {
        ...australiaRegionalVisasData.header,
        title: "Australian Capital Territory Nomination",
        description: "Nomination for skilled workers in Canberra and the ACT.",
    },
};
