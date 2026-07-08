import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import PageHeader from "../../components/PageHeader";

const TermsConditions = () => {
    const sections = [
        {
            title: "1. Agreement to Terms",
            content: "By accessing or using the Horizon Success Bridge website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services. These terms constitute a legally binding agreement between you and Horizon Success Bridge."
        },
        {
            title: "2. Scope of Services",
            content: "Horizon Success Bridge provides information and administrative assistance related to immigration, work permits, study visas, and coaching. We are not a law firm and do not provide legal advice. Our services are based on publicly available information and our professional experience. All final decisions regarding visa approvals and institution admissions rest solely with the respective government authorities and educational institutions."
        },
        {
            title: "3. User Responsibilities",
            content: "You agree to provide accurate, current, and complete information as prompted by any forms on the website. You are responsible for maintaining the confidentiality of any account details and for all activities that occur under your account. Providing false, misleading, or fraudulent information may result in the immediate termination of our services and potential legal action."
        },
        {
            title: "4. Intellectual Property Rights",
            content: "All content on this website, including but not limited to text, graphics, logos, images, code, and software, is the exclusive property of Horizon Success Bridge and is protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission."
        },
        {
            title: "5. Payment and Refunds",
            content: "Fees for our consultation and administrative services are clearly communicated prior to engagement. All payments must be made through our authorized payment channels. While we strive for excellence, consultation fees are generally non-refundable as they cover professional time and administrative processing. Specific refund policies for different service packages will be provided in individual service agreements."
        },
        {
            title: "6. Prohibited Uses",
            content: "When using our website, you agree not to: (a) Use the site for any unlawful purpose; (b) Attempt to interfere with the proper working of the site; (c) Use any robot, spider, or other automated device to access the site; (d) Transmit any viruses or malicious code; (e) Collect or track the personal information of others."
        },
        {
            title: "7. Disclaimer of Warranties",
            content: "Our services and website are provided on an 'as is' and 'as available' basis. Horizon Success Bridge makes no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of the content. We do not warrant that our services will meet your requirements or that the website will be uninterrupted or error-free."
        },
        {
            title: "8. Limitation of Liability",
            content: "To the maximum extent permitted by law, Horizon Success Bridge shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, our services. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses."
        },
        {
            title: "9. Indemnification",
            content: "You agree to indemnify and hold harmless Horizon Success Bridge, its officers, directors, and employees from any claims, damages, liabilities, and expenses arising out of your use of the website or your violation of these Terms and Conditions."
        },
        {
            title: "10. Termination of Use",
            content: "We reserve the right, in our sole discretion, to terminate or suspend your access to all or part of our website and services, with or without notice, for any reason, including violation of these Terms and Conditions."
        },
        {
            title: "11. Governing Law and Jurisdiction",
            content: "These terms shall be governed by and construed in accordance with the laws of the United Kingdom. Any legal action or proceeding arising under these terms shall be brought exclusively in the courts of the United Kingdom, and you hereby consent to the personal jurisdiction and venue therein."
        },
        {
            title: "12. Modifications to Terms",
            content: "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site following the posting of changes constitutes your acceptance of such changes."
        }
    ];

    return (
        <GuestLayout>
            <Head title="Terms & Conditions - Horizon Success Bridge" />

            <PageHeader 
                title="Terms & Conditions" 
                description="Please read these terms carefully before using our services."
                breadcrumbs={[{ text: "Terms & Conditions", href: null }]}
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
                        By using this website, you acknowledge that you have read and understood these terms.
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default TermsConditions;
