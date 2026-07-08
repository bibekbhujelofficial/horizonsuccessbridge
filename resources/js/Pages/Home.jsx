import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";
import HRSection from "../components/HRSection";
import Countries from "../components/Countries";
import WhyChooseUs from "../components/WhyChooseUs";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogsSection from "../components/BlogsSection";
import PartnersMarquee from "../components/PartnersMarquee";

export default function Home() {
    return (
        <GuestLayout>
            <Head title="Home" />
            <Hero />
            {/* <PartnersMarquee /> */}
            <ServicesSection />
            <StatsSection />
            <HRSection />
            <Countries />
            <WhyChooseUs />
            <TestimonialsSection />
            <BlogsSection />
        </GuestLayout>
    );
}
