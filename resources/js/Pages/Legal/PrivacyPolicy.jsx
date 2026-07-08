import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import PageHeader from "../../components/PageHeader";

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "1. Information We Collect",
            content: "We collect information that you provide directly to us, including when you fill out an assessment form, subscribe to our newsletter, or contact us for consultation. This may include your name, email address, phone number, physical address, passport details, educational history, work experience, and other details related to your immigration or education goals."
        },
        {
            title: "2. How We Use Your Information",
            content: "The information we collect is used to provide, maintain, and improve our services. Specifically, we use your data to: (a) Process and respond to your assessments; (b) Communicate with you regarding your inquiries and applications; (c) Send relevant updates about immigration laws and opportunities; (d) Improve website performance and user experience; (e) Comply with legal and regulatory obligations."
        },
        {
            title: "3. Data Sharing and Disclosure",
            content: "Horizon Success Bridge does not sell or rent your personal information to third parties. We may share your information with licensed immigration consultants, educational institutions, or legal partners only when explicitly necessary to fulfill your request for services. We may also disclose information if required by law or to protect the rights, property, or safety of our company or others."
        },
        {
            title: "4. Data Retention",
            content: "We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies."
        },
        {
            title: "5. Your Data Protection Rights",
            content: "Depending on your location, you may have the following rights regarding your personal data: (a) The right to access and receive a copy of your data; (b) The right to rectify inaccurate data; (c) The right to request deletion of your data; (d) The right to restrict or object to the processing of your data. To exercise these rights, please contact our data protection team."
        },
        {
            title: "6. Security of Your Data",
            content: "We implement a variety of industry-standard security measures, including SSL encryption and secure firewalls, to maintain the safety of your personal information. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
        },
        {
            title: "7. Cookies and Tracking Technologies",
            content: "Our website uses cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
        },
        {
            title: "8. Interaction with Third-Party Sites",
            content: "Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit, as we have no control over and assume no responsibility for the content or privacy practices of any third-party sites."
        },
        {
            title: "9. Marketing Communications",
            content: "We may use your personal data to contact you with newsletters, marketing or promotional materials, and other information that may be of interest to you. You may opt-out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send."
        },
        {
            title: "10. Children's Privacy",
            content: "Our services are not intended for use by anyone under the age of 18. We do not knowingly collect personally identifiable information from children. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us."
        },
        {
            title: "11. Changes to This Privacy Policy",
            content: "We reserve the right to update our Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
        }
    ];

    return (
        <GuestLayout>
            <Head title="Privacy Policy - Horizon Success Bridge" />

            <PageHeader 
                title="Privacy Policy" 
                description="Your privacy is important to us. Learn how we handle and protect your personal data."
                breadcrumbs={[{ text: "Privacy Policy", href: null }]}
            />

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <div className="prose prose-lg prose-blue max-w-none">
                        <p className="text-gray-500 mb-12 italic">Last Updated: March 13, 2026</p>
                        
                        {sections.map((section, idx) => (
                            <div key={idx} className="mb-12">
                                <h2 className="text-2xl font-black text-primary mb-4 tracking-tight">
                                    {section.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-8 rounded-3xl bg-gray-50 border border-gray-100 italic text-gray-400 text-sm">
                        If you have any questions about this Privacy Policy, please contact us at info@eliteo.co.uk.
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default PrivacyPolicy;
