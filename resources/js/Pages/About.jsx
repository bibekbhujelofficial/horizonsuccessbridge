import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import About from "../components/About";
import CeoMessage from "../components/CeoMessage";
import WhyChooseUs from "../components/WhyChooseUs";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
    return (
        <GuestLayout>
            <Head title="About Us" />

            <PageHeader
                title="Defining the Future of Global Mobility"
                description="Empowering your global aspirations with integrity, expertise, and a decade of excellence in immigration consultancy."
                breadcrumbs={[{ text: "About Us", href: null }]}
            />

            <About />
            {/* <CeoMessage /> */}
            <WhyChooseUs />
        </GuestLayout>
    );
}
