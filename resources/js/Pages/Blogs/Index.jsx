import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import PageHeader from "../../components/PageHeader";
import { BsArrowRight, BsSearch, BsClock } from "react-icons/bs";
import { HiOutlineCalendar, HiOutlineBookOpen } from "react-icons/hi";
import { blogData } from "../../data/blogData";

const categories = ["All", "Immigration News", "General Insights", "Career Pathways", "Coaching"];

export default function BlogsIndex() {
    const [activeCategory, setActiveCategory] = React.useState("All");
    const [currentPage, setCurrentPage] = React.useState(1);
    const blogsPerPage = 6;

    const filteredBlogs = activeCategory === "All" 
        ? blogData 
        : blogData.filter(blog => blog.category === activeCategory);

    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    return (
        <GuestLayout>
            <Head title="Latest News & Insights - Horizon Success Bridge" />

            <PageHeader
                title="Insights for Your Global Journey"
                description="Expert perspectives, latest policy updates, and comprehensive guides to help you navigate the complex world of global migration."
                breadcrumbs={[{ text: "Blogs", href: null }]}
            />

            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                    
                    {/* Filter & Header Row */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 pb-8 border-b border-gray-100">
                        <div className="space-y-1">
                            <p className="text-secondary text-[10px] font-black uppercase tracking-[0.3em]">Insights & Expert Advice</p>
                            <h2 className="text-3xl font-black text-primary tracking-tight">
                                Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">Publications</span>
                            </h2>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleCategoryChange(cat)}
                                    className={`px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                                        activeCategory === cat 
                                        ? "bg-secondary text-white shadow-lg shadow-secondary/20" 
                                        : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-900"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blogs Grid */}
                    {currentBlogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                            {currentBlogs.map((blog) => (
                                <Link 
                                    key={blog.id} 
                                    href={`/blogs/${blog.slug}`}
                                    className="group flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img 
                                            src={blog.image} 
                                            alt={blog.title} 
                                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        
                                        {/* Category Badge */}
                                        <div className="absolute top-6 left-6">
                                            <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[9px] font-black uppercase tracking-widest">
                                                {blog.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="mb-6">
                                            <h3 className="text-xl font-black text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                                                {blog.title}
                                            </h3>
                                            <p className="text-gray-500 text-[13px] font-medium leading-relaxed line-clamp-2">
                                                {blog.description}
                                            </p>
                                        </div>

                                        <div className="space-y-4 mb-8 pt-6 border-t border-gray-50">
                                            <div className="flex flex-wrap items-center gap-6 text-gray-500">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                                                        <HiOutlineCalendar className="text-lg text-primary" />
                                                    </div>
                                                    <div className="text-xs font-bold leading-tight">
                                                        <span className="block text-gray-400 uppercase tracking-widest text-[9px] mb-0.5">Published</span>
                                                        {blog.date}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                                                        <HiOutlineBookOpen className="text-lg text-primary" />
                                                    </div>
                                                    <div className="text-xs font-bold leading-tight">
                                                        <span className="block text-gray-400 uppercase tracking-widest text-[9px] mb-0.5">Read Time</span>
                                                        {blog.readTime}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                            <div className="text-[10px] text-secondary font-black uppercase tracking-widest">
                                                Premium Insights
                                            </div>
                                            <div 
                                                className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900 group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:rotate-[-45deg]"
                                            >
                                                <BsArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center">
                            <h3 className="text-xl font-black text-primary mb-2">No Articles Found</h3>
                            <p className="text-gray-500 text-sm font-medium">Try selecting a different category.</p>
                        </div>
                    )}

                    {/* Dynamic Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-20 flex justify-center items-center gap-4">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-12 h-12 rounded-full border flex items-center justify-center text-xs font-black transition-all ${
                                        currentPage === i + 1 
                                        ? "bg-secondary border-secondary text-white shadow-lg shadow-secondary/20" 
                                        : "bg-white border-gray-200 text-gray-400 hover:border-secondary hover:text-secondary"
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}

                </div>
            </section>
        </GuestLayout>
    );
}
