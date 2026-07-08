export const eventsPageData = {
    header: {
        label: "Events & Seminars",
        title: "Global Events & Seminars",
        description: "Join our free immigration seminars, education fairs, and hr solutions workshops. Discover opportunities in the UK, Canada, Australia, and beyond.",
    },
    countries: [
        { id: "all", name: "All Locations" },
        { id: "uk", name: "United Kingdom" },
        { id: "canada", name: "Canada" },
        { id: "australia", name: "Australia" },
        { id: "nepal", name: "Nepal" },
        { id: "india", name: "India" },
        { id: "europe", name: "Europe" },
    ],
    upcomingEvents: [
        {
            id: 1,
            title: "UK Healthcare HR & Recruitment Drive",
            description: "Join our exclusive recruitment event connecting skilled healthcare professionals with top UK-based employers and sponsorship opportunities.",
            country: "uk",
            city: "London",
            date: "March 25, 2026",
            time: "10:00 AM - 4:00 PM",
            category: "HR Solutions",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba969eb?q=80&w=800&auto=format&fit=crop",
            location: "Horizon Success Bridge London HQ, Wood Lane",
            status: "Open"
        },
        {
            id: 2,
            title: "Canada Express Entry & PNP Seminar",
            description: "Expert-led seminar covering the latest Express Entry draws, Provincial Nominee Programs, and strategic pathway planning for Canadian PR.",
            country: "canada",
            city: "Toronto",
            date: "April 05, 2026",
            time: "2:00 PM - 5:00 PM",
            category: "Immigration",
            image: "https://images.unsplash.com/photo-1503102321946-993d56d8f1e6?q=80&w=800&auto=format&fit=crop",
            location: "Old City Hall, Toronto",
            status: "Booking Fast"
        },
        {
            id: 3,
            title: "Global Education Fair 2026",
            description: "Meet representatives from world-class universities, explore scholarship options, and receive on-the-spot application assessments for your study abroad journey.",
            country: "australia",
            city: "Sydney",
            date: "April 15, 2026",
            time: "11:00 AM - 6:00 PM",
            category: "Education Fair",
            image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800&auto=format&fit=crop",
            location: "International Convention Centre",
            status: "Registration Open"
        },
        {
            id: 4,
            title: "Executive HR Solutions Meet",
            description: "A high-level networking event for corporate leaders and HR professionals focusing on international talent acquisition and workforce management.",
            country: "nepal",
            city: "Kathmandu",
            date: "March 28, 2026",
            time: "9:00 AM - 1:00 PM",
            category: "HR Solutions",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
            location: "Dillibazar Center, Horizon Success Bridge",
            status: "Limited Slots"
        },
        {
            id: 5,
            title: "European Skilled Worker Workshop",
            description: "Comprehensive guide to work permits and skilled migration routes across Germany, Poland, and other major European economies.",
            country: "europe",
            city: "Berlin",
            date: "May 10, 2026",
            time: "4:00 PM - 7:00 PM",
            category: "Immigration",
            image: "https://images.unsplash.com/photo-1467226311097-1d3c15ad039b?q=80&w=800&auto=format&fit=crop",
            location: "Berlin Business Hub",
            status: "Upcoming"
        },
        {
            id: 6,
            title: "UK University Roadshow - India",
            description: "Direct access to top-tier UK universities for Indian students, featuring personalized counseling, fee information, and visa guidance.",
            country: "india",
            city: "New Delhi",
            date: "April 22, 2026",
            time: "10:00 AM - 5:00 PM",
            category: "Education Fair",
            image: "https://images.unsplash.com/photo-1523050335392-93851179ae09?q=80&w=800&auto=format&fit=crop",
            location: "Le Meridien, New Delhi",
            status: "Register Now"
        }
    ],
    pastEvents: [
        {
            id: 101,
            title: "Global Talent Summit 2025",
            description: "A landmark summit bringing together global recruitment experts to discuss the future of cross-border talent mobility and recruitment technology.",
            country: "uk",
            city: "London",
            date: "January 15, 2025",
            category: "HR Solutions",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
            location: "The Shard, London",
            status: "Completed"
        },
        {
            id: 102,
            title: "Nepal Education Expo - Winter Edition",
            description: "Nepal's premier winter education fair, helping hundreds of students secure admissions for the spring intake across global universities.",
            country: "nepal",
            city: "Kathmandu",
            date: "December 10, 2024",
            category: "Education Fair",
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
            location: "Hotel Annapurna",
            status: "Completed"
        },
        {
            id: 103,
            title: "Australia Skilled Migration Seminar",
            description: "A deep-dive seminar for skilled professionals on navigating Australia's points-based migration system and employer-sponsored visa routes.",
            country: "australia",
            city: "Melbourne",
            date: "November 22, 2024",
            category: "Immigration",
            image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
            location: "Convention Centre",
            status: "Completed"
        }
    ],
    sections: [
        {
            id: "immigration",
            title: "Immigration Seminars",
            subtitle: "EXPERT VISA GUIDANCE",
            description: "Stay updated with the latest visa policies and immigration laws. Our experts provide comprehensive guidance for UK, Canada, Australia, and European destinations.",
            href: "/contact",
            items: [
                {
                    title: "Visa Policy Updates",
                    text: "Detailed analysis of current immigration trends and policy changes.",
                    icon: "FaGlobeEurope"
                },
                {
                    title: "PR & Settlement",
                    text: "Strategic planning for long-term residency and citizenship transitions.",
                    icon: "FaMapMarkedAlt"
                }
            ]
        },
        {
            id: "education-fair",
            title: "Education Fairs",
            subtitle: "STUDY ABROAD OPPORTUNITIES",
            description: "Connect with top global universities and educational institutions. Explore courses, scholarships, and campus life opportunities across the world.",
            href: "/study",
            items: [
                {
                    title: "University Meet",
                    text: "Direct interaction with university representatives.",
                    icon: "FaUniversity"
                },
                {
                    title: "Scholarship Guidance",
                    text: "Information on merit-based and financial aid scholarships.",
                    icon: "FaAward"
                }
            ]
        },
        {
            id: "hr-solutions",
            title: "HR Solutions",
            subtitle: "TALENT & RECRUITMENT",
            description: "Dedicated workshops for international recruitment, talent management, and skilled worker placements in healthcare and IT sectors.",
            href: "/hr-solutions",
            items: [
                {
                    title: "Recruitment Drives",
                    text: "Connecting skilled professionals with international employers.",
                    icon: "FaHandshake"
                },
                {
                    title: "Talent Management",
                    text: "Strategic HR services for businesses and individuals.",
                    icon: "FaUsersCog"
                }
            ]
        }
    ]
};


