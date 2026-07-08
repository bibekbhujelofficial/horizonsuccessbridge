import { 
    HiOutlineLocationMarker, 
    HiOutlineCalendar, 
    HiOutlineClock, 
    HiOutlineUserGroup,
    HiOutlineGlobeAlt,
    HiOutlineCash,
    HiOutlineMail,
    HiOutlineIdentification
} from "react-icons/hi";
import { FaUserTie, FaBuilding, FaWallet, FaFileSignature } from "react-icons/fa";

export const singleEventData = {
    header: {
        title: "Global Leadership & Immigration Summit 2026",
        description: "Building resilient international careers and organizations through expert guidance, policy insights, and global networking.",
        status: "Registration Open",
        venue: "Hilton Hotel, Toronto, Canada",
        host: "Horizon Success Bridge",
        logo: "/logo-dark.png"
    },
    about: {
        title: "Empowering Your Global Future",
        description: "The Global Leadership & Immigration Summit 2026 is a premier event designed to bridge the gap between international talent and global opportunities. Over three intensive days, we bring together industry leaders, immigration experts, and HR specialists to provide a roadmap for success in the evolving global landscape.",
        points: [
            "Latest 2026 Immigration Policy Updates",
            "Cross-border Talent Management Strategies",
            "Exclusive Networking with UK & Canadian Employers",
            "On-the-spot Application Assessments"
        ]
    },
    speakers: [
        {
            id: 1,
            name: "Dr. Sarah Mitchell",
            title: "Senior Immigration Consultant",
            company: "Horizon Success Bridge Canada",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
            specialty: "Express Entry Expert"
        },
        {
            id: 2,
            name: "James Wilson",
            title: "Director of HR Solutions",
            company: "Horizon Success Bridge London",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            specialty: "Global Recruitment"
        },
        {
            id: 3,
            name: "Meera Patel",
            title: "Education Policy Advisor",
            company: "Australian Education Board",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
            specialty: "Scholarship Guidance"
        }
    ],
    schedule: [
        {
            day: 1,
            title: "Global Mobility Landscape",
            date: "June 05, 2026",
            items: [
                { time: "09:00 AM", title: "Registration & Breakfast", description: "Collect your delegate kits and network with other attendees." },
                { time: "10:30 AM", title: "Keynote: The 2026 Immigration Shift", description: "Dr. Sarah Mitchell discusses the major policy changes in G7 nations." },
                { time: "01:00 PM", title: "Lunch Break", description: "Networking lunch at the Hilton Ballroom." },
                { time: "02:30 PM", title: "Panel: Hiring Without Borders", description: "HR leaders share success stories of international recruitment." }
            ]
        },
        {
            day: 2,
            title: "Regional Pathways & Settlement",
            date: "June 06, 2026",
            items: [
                { time: "10:00 AM", title: "Workshop: Express Entry 2026", description: "Hands-on session for Canadian PR aspirants." },
                { time: "12:30 PM", title: "Study to PR Pipelines", description: "Navigating international education for long-term settlement." },
                { time: "04:00 PM", title: "One-on-One Consultations", description: "Private sessions with our legal experts." }
            ]
        },
        {
            day: 3,
            title: "Leadership & Future Career Moves",
            date: "June 07, 2026",
            items: [
                { time: "10:00 AM", title: "Executive Branding Workshop", description: "Building a profile for the global executive market." },
                { time: "02:00 PM", title: "Closing Ceremony", description: "Certification award and final networking session." }
            ]
        }
    ],
    attendees: {
        title: "Who Can Attend?",
        description: "This forum is designed for a diverse range of professionals, leaders, and aspirants seeking to navigate the complex world of global migration and leadership.",
        groups: [
            { 
                icon: "FaUserTie", 
                name: "Career Seekers", 
                description: "Professionals in Tech, Healthcare, and Engineering looking for sponsorship opportunities and PR pathways in the UK, Canada, and Australia." 
            },
            { 
                icon: "FaBuilding", 
                name: "Corporate Leaders", 
                description: "HR Directors, CEOs, and business owners aiming to build global teams and understand international labor laws and talent acquisition." 
            },
            { 
                icon: "HiOutlineUserGroup", 
                name: "Students & Graduates", 
                description: "Ambitious individuals planning their higher education journey abroad with a focus on long-term career growth and settlement." 
            },
            { 
                icon: "HiOutlineGlobeAlt", 
                name: "International Delegates", 
                description: "Global representatives and migration experts seeking the latest regulatory updates and policy shifts in the G7 migration landscape." 
            }
        ]
    },
    pricing: {
        title: "Registration Fees & Options",
        description: "Select the registration tier that aligns with your professional needs. All prices are in CAD and inclusive of required event taxes.",
        options: [
            { 
                name: "Early Bird", 
                price: "299", 
                description: "Special rate for early registrants. Standard access to all sessions and workshops.",
                benefits: [
                    "Access to all 3-day sessions",
                    "Digital Delegate Kit",
                    "Daily Networking Lunch",
                    "Certificate of Attendance"
                ]
            },
            { 
                name: "Standard Delegate", 
                price: "450", 
                description: "Full access to the entire summit program, including evening networking mixers.",
                benefits: [
                    "Everything in Early Bird",
                    "Printed Protocol Manual",
                    "Evening Networking Reception",
                    "Post-event session recordings"
                ]
            },
            { 
                name: "VIP Executive", 
                price: "750", 
                description: "Premium access for leaders seeking one-on-one expert time and exclusive networking.",
                benefits: [
                    "Everything in Standard",
                    "Private 30min Consultation",
                    "VIP Lounge Access",
                    "Horizon Success Bridge Gala Dinner Entry"
                ]
            },
            {
                name: "Corporate Access",
                price: "1250",
                description: "Complete team access for up to 3 delegates from the same business organization.",
                benefits: [
                    "Everything in VIP Executive",
                    "Up to 3 Delegates",
                    "Dedicated Account Manager",
                    "Exhibition Booth Discount"
                ]
            }
        ]
    },
    paymentMethods: {
        description: "Official payment guidelines designed for seamless and secure international transactions.",
        methods: [
            { type: "Wire Transfer", details: "Available globally via specialized IBAN/SWIFT connections directly to our secure UK accounts." },
            { type: "Credit/Debit Card", details: "Corporate and personal cards accepted via our PCI-compliant Stripe enterprise payment gateway." },
            { type: "PayPal / Crypto", details: "Flexible settlement options for international delegates prioritizing anonymity or stablecoins." }
        ],
        steps: [
            { step: "01", title: "Select Delegate Tier", description: "Choose the pass that aligns with your professional needs and verify availability." },
            { step: "02", title: "Submit Credentials", description: "Complete the mandatory registration form with your organizational details." },
            { step: "03", title: "Complete Protocol", description: "Process your payment instantly through our encrypted 256-bit secure gateway." },
            { step: "04", title: "Access Granted", description: "Receive immediate electronic issuance of your tax invoice and delegate code." }
        ]
    },
    visaSupport: {
        title: "Visa Support Credentials",
        description: "Navigating international travel protocols can be challenging. Horizon Success Bridge issues officially recognized visa invitation letters to fully registered delegates, backed by our licensed immigration legal team to accelerate processing.",
        requirements: [
            "Must be fully registered with confirmed payment",
            "Copy of valid international passport (PDF)",
            "Subject to review by Horizon Success Bridge Legal",
            "Typical processing time of 3-5 business days"
        ],
        steps: [
            { step: "01", title: "Confirm Seat", description: "Visa support letters are exclusively issued to delegates with fully processed event tickets." },
            { step: "02", title: "Document Submission", description: "Send your registration ID and a high-resolution scan of your passport to our legal desk." },
            { step: "03", title: "Legal Verification", description: "Our compliance team reviews your details against immigration prerequisites." },
            { step: "04", title: "Letter Issuance", description: "Your digitally signed, embassy-compliant invitation is dispatched via secure email." }
        ],
        contactEmail: "legal.visas@eliteoverseas.co.uk"
    }
};
