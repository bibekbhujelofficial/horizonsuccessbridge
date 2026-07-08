import React from "react";
import PageHeader from "./PageHeader";
import GuestLayout from "../Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

const ImmigrationPageTemplate = ({
    headerData,
    breadcrumbs,
    children,
    title,
}) => {
    return (
        <GuestLayout>
            <Head title={title || headerData.title} />

            <PageHeader
                title={headerData.title}
                description={headerData.description}
                breadcrumbs={breadcrumbs}
            />

            <section className="py-20 bg-white">
                <div className="max-w-[1200px] mx-auto px-6">
                    {/* Main Content (Redesigned without sidebar) */}
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        {children}
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default ImmigrationPageTemplate;
