import logo from "../assets/logo.svg";

export const topBarData = {
    logo: logo,
    contactInfo: [
        {
            type: "email",
            icon: "FaEnvelope",
            text: "info@horizonsuccessbridge.com",
            href: "mailto:info@horizonsuccessbridge.com",
            subText: "Send Us Mail",
        },
        {
            type: "location",
            icon: "FaMapMarkerAlt",
            text: "Delhi, India",
            href: "",
            subText: "",
            target: "_blank",
        },
    ],
    cta: {
        text: "Free Assessment",
        href: "/inquiry",
    },
};
