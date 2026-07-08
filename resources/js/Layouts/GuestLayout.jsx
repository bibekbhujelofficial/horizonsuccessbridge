import React, { useState, useEffect } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans relative">
            <header className="sticky top-0 z-[100] w-full bg-white shadow-sm">
                <TopBar />
                <Navbar />
            </header>
            <main className="flex-1">{children}</main>
            <Newsletter />
            <Footer />
            {/* <WhatsAppWidget /> */}
        </div>
    );
}
