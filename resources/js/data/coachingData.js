export const coachingPageData = {
    header: {
        label: "Expert Test Preparation",
        title: "Achieve Your Highest Scores",
        description: "Unlock global opportunities with elite, personalized coaching for English proficiency and standardized academic tests.",
    },
    sections: [
        {
            id: "ielts",
            title: "IELTS Preparation",
            subtitle: "GLOBAL ENGLISH STANDARD",
            description: "Intensive training for the International English Language Testing System. Master reading, writing, listening, and speaking with expert strategies.",
            href: "/coaching/ielts",
            items: [
                {
                    title: "Mock Tests",
                    text: "Full-length simulated exams to build stamina and time management.",
                    icon: "FaPenNib"
                },
                {
                    title: "Speaking Practice",
                    text: "One-on-one speaking sessions with detailed feedback on fluency and pronunciation.",
                    icon: "FaMicrophone"
                },
                {
                    title: "Band 8+ Strategies",
                    text: "Advanced techniques specifically designed to secure top band scores.",
                    icon: "FaChartLine"
                }
            ]
        },
        {
            id: "pte",
            title: "PTE Academic",
            subtitle: "COMPUTER-BASED TESTING",
            description: "Learn algorithm-friendly techniques to excel in the Pearson Test of English. We provide AI-scored mock tests for accurate preparation.",
            href: "/coaching/pte",
            items: [
                {
                    title: "AI Scoring Engine",
                    text: "Practice on platforms that replicate the exact PTE scoring algorithms.",
                    icon: "FaRobot"
                },
                {
                    title: "Template Mastery",
                    text: "Proven templates for essays and spoken responses to maximize points.",
                    icon: "FaFileAlt"
                },
                {
                    title: "Speed Reading",
                    text: "Techniques to navigate complex texts quickly and accurately.",
                    icon: "FaBookOpen"
                }
            ]
        },
        {
            id: "toefl",
            title: "TOEFL iBT",
            subtitle: "US UNIVERSITY GATES",
            description: "Comprehensive coaching for the Test of English as a Foreign Language, the preferred english test for US and Canadian institutions.",
            href: "/coaching/toefl",
            items: [
                {
                    title: "Integrated Tasks",
                    text: "Master the unique TOEFL tasks that combine listening, reading, and speaking.",
                    icon: "FaHeadphones"
                },
                {
                    title: "Note-Taking Skills",
                    text: "Crucial shorthand strategies for long academic lectures.",
                    icon: "FaPencilAlt"
                },
                {
                    title: "Vocabulary Building",
                    text: "Curated academic word lists specifically targeted for TOEFL passages.",
                    icon: "FaFont"
                }
            ]
        },
        {
            id: "sat",
            title: "SAT Preparation",
            subtitle: "COLLEGE READINESS",
            description: "Horizon Success Bridge level tutoring for the new Digital SAT. We break down complex math concepts and teach critical reading strategies.",
            href: "/coaching/sat",
            items: [
                {
                    title: "Digital SAT Format",
                    text: "Familiarize yourself with the adaptive testing model via our custom portal.",
                    icon: "FaLaptop"
                },
                {
                    title: "Advanced Math",
                    text: "Shortcuts and problem-solving techniques for the no-calculator sections.",
                    icon: "FaCalculator"
                },
                {
                    title: "Evidence-Based Reading",
                    text: "Learn to systematically dissect complex historical and scientific texts.",
                    icon: "FaSearch"
                }
            ]
        },
        {
            id: "gre",
            title: "GRE Coaching",
            subtitle: "GRADUATE SCHOOL ADMISSIONS",
            description: "Targeted methodologies for the Graduate Record Examinations. Elevate your quantitative reasoning and analytical writing skills.",
            href: "/coaching/gre",
            items: [
                {
                    title: "Quantitative Reasoning",
                    text: "Master data interpretation and advanced algebra under strict time limits.",
                    icon: "FaChartBar"
                },
                {
                    title: "Verbal Strategies",
                    text: "Tackle sentence equivalence and text completion with advanced logic.",
                    icon: "FaBrain"
                },
                {
                    title: "Analytical Writing",
                    text: "Frameworks for constructing compelling argument and issue essays.",
                    icon: "FaPenSquare"
                }
            ]
        },
        {
            id: "gmat",
            title: "GMAT Focus",
            subtitle: "MBA ACCELERATOR",
            description: "Specialized coaching for the GMAT Focus Edition. Train your executive functioning skills for top-tier business school admissions.",
            href: "/coaching/gmat",
            items: [
                {
                    title: "Data Insights",
                    text: "Specialized training for the new integrated reasoning data section.",
                    icon: "FaDatabase"
                },
                {
                    title: "Logical Reasoning",
                    text: "Break down complex arguments and identify assumptions rapidly.",
                    icon: "FaProjectDiagram"
                },
                {
                    title: "Adaptive Strategy",
                    text: "Learn how to manage question difficulty in the computer-adaptive format.",
                    icon: "FaTachometerAlt"
                }
            ]
        },
        {
            id: "oet",
            title: "OET Preparation",
            subtitle: "HEALTHCARE PROFESSIONALS",
            description: "The Occupational English Test preparation for nurses, doctors, and allied health professionals seeking global registration.",
            href: "/coaching/oet",
            items: [
                {
                    title: "Medical Vocabulary",
                    text: "Focus on exact healthcare terminology relevant to your profession.",
                    icon: "FaStethoscope"
                },
                {
                    title: "Role-Play Scenarios",
                    text: "Simulated patient consultations to master the speaking sub-test.",
                    icon: "FaUserMd"
                },
                {
                    title: "Referral Letters",
                    text: "Extensive practice writing accurate and concise clinical letters.",
                    icon: "FaEnvelope"
                }
            ]
        },
        {
            id: "celpip",
            title: "CELPIP Coaching",
            subtitle: "CANADIAN IMMIGRATION",
            description: "Master the Canadian English Language Proficiency Index Program with practical, everyday English usage scenarios.",
            href: "/coaching/celpip",
            items: [
                {
                    title: "Canadian Context",
                    text: "Learn vocabulary and expressions specific to Canadian culture and workplaces.",
                    icon: "FaLeaf"
                },
                {
                    title: "Listening Strategies",
                    text: "Techniques for comprehending diverse accents and conversational audio.",
                    icon: "FaAssistiveListeningSystems"
                },
                {
                    title: "Timed Speaking",
                    text: "Practice delivering coherent responses within strict 60-90 second windows.",
                    icon: "FaStopwatch"
                }
            ]
        }
    ]
};

export const coachingSubPageData = {
    ielts: {
        header: {
            title: "IELTS Coaching",
            subtitle: "Path to Global Opportunities",
        },
        overview: {
            label: "Overview",
            title: "Master the IELTS Exam",
            description:
                "The International English Language Testing System (IELTS) is the world's most popular English language proficiency test for higher education and global migration. Our intensive coaching program is designed to help you achieve a Band 8+ score by mastering all four modules: Listening, Reading, Writing, and Speaking.",
        },
        sections: {
            types: {
                label: "Modules",
                title: "Curriculum Breakdown",
                description: "Focused training on every aspect of the IELTS test.",
                items: [
                    {
                        title: "Listening Module",
                        icon: "FaHeadphones",
                        items: ["Section-wise strategies", "Audio comprehension", "Note-taking techniques"],
                    },
                    {
                        title: "Reading Module",
                        icon: "FaBookOpen",
                        items: ["Skimming & Scanning", "Complex passage analysis", "Time management"],
                    },
                    {
                        title: "Writing Module",
                        icon: "FaPenFancy",
                        items: ["Graph & Essay templates", "Grammar & Vocabulary", "Coherence & Cohesion"],
                    },
                    {
                        title: "Speaking Module",
                        icon: "FaMicrophone",
                        items: ["One-on-one mock interviews", "Fluency & Pronunciation", "Confidence building"],
                    },
                ],
            },
            process: {
                title: "Our Training Approach",
                steps: [
                    {
                        title: "Diagnostic Test",
                        description: "Assess your current level to identify strengths and weaknesses.",
                    },
                    {
                        title: "Personalized Study Plan",
                        description: "Tailored roadmap focused on achieving your target band score.",
                    },
                    {
                        title: "Intensive Classroom Training",
                        description: "Interactive sessions with certified expert trainers.",
                    },
                    {
                        title: "Regular Mock Tests",
                        description: "Weekly full-length tests to track your progress.",
                    },
                ],
            },
        },
    },
    pte: {
        header: {
            title: "PTE Academic Coaching",
            subtitle: "Fast & Accurate Results",
        },
        overview: {
            label: "Overview",
            title: "Excel in PTE Academic",
            description:
                "PTE Academic is a computer-based English language test accepted by educational institutions and governments around the world. Our specialized coaching focuses on the unique scoring algorithms of PTE, ensuring you master the templates and techniques required for a 79+ score.",
        },
        sections: {
            types: {
                label: "Skills",
                title: "Core Skill Mastery",
                description: "Tailored training for the computer-based format.",
                items: [
                    {
                        title: "Speaking & Writing",
                        icon: "FaRobot",
                        items: ["Read Aloud techniques", "Essay templates", "Describe Image strategies"],
                    },
                    {
                        title: "Reading",
                        icon: "FaSearch",
                        items: ["Re-order paragraphs", "Fill in the blanks", "Academic vocabulary"],
                    },
                    {
                        title: "Listening",
                        icon: "FaHeadset",
                        items: ["Summarize spoken text", "Dictation practice", "Accurate transcriptions"],
                    },
                ],
            },
            process: {
                title: "The Horizon Success Bridge PTE Strategy",
                steps: [
                    {
                        title: "Software Familiarization",
                        description: "Get comfortable with the PTE interface and AI scoring.",
                    },
                    {
                        title: "Template Integration",
                        description: "Apply proven templates to secure high points in writing and speaking.",
                    },
                    {
                        title: "Time Management Drill",
                        description: "Practice finishing sections within the strict computer-timed windows.",
                    },
                    {
                        title: "AI-Scored Mock Tests",
                        description: "Simulate the real exam with our advanced PTE lab.",
                    },
                ],
            },
        },
    },
    toefl: {
        header: {
            title: "TOEFL iBT Coaching",
            subtitle: "Gateway to North American Universities",
        },
        overview: {
            label: "Overview",
            title: "Master the TOEFL iBT",
            description:
                "The Test of English as a Foreign Language (TOEFL) measures your ability to use and understand English at the university level. Our coaching program emphasizes academic integration—combining listening, reading, and speaking skills just as you would in a classroom setting.",
        },
        sections: {
            types: {
                label: "Competencies",
                title: "Academic Competencies",
                description: "Essential skills for university success.",
                items: [
                    {
                        title: "Academic Listening",
                        icon: "FaUniversity",
                        items: ["Lecture note-taking", "Campus conversation analysis", "Inference skills"],
                    },
                    {
                        title: "Integrated Writing",
                        icon: "FaPencilAlt",
                        items: ["Combining reading & listening", "Thesis development", "Academic citations"],
                    },
                    {
                        title: "Speech Delivery",
                        icon: "FaMicrophone",
                        items: ["Organized responses", "Clear articulation", "Academic tone"],
                    },
                ],
            },
        },
    },
    sat: {
        header: {
            title: "Digital SAT Preparation",
            subtitle: "Unlock Top University Admissions",
        },
        overview: {
            label: "Overview",
            title: "Prepare for the Digital SAT",
            description:
                "The new Digital SAT is adaptive and efficient. Our program uses advanced diagnostic tools to pinpoint exactly where you need improvement in Math and Evidence-Based Reading and Writing, helping you reach the 1500+ score threshold.",
        },
        sections: {
            types: {
                label: "Domain",
                title: "Test Domains",
                description: "Deep dive into SAT subject areas.",
                items: [
                    {
                        title: "Mathematics",
                        icon: "FaCalculator",
                        items: ["Algebra & Data Analysis", "Advanced Math concepts", "Geometry & Trig"],
                    },
                    {
                        title: "Reading & Writing",
                        icon: "FaEdit",
                        items: ["Information & Ideas", "Craft & Structure", "Standard English conventions"],
                    },
                ],
            },
        },
    },
};
