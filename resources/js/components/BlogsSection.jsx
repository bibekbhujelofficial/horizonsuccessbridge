import React from "react";
import { Link } from "@inertiajs/react";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";
import { blogData } from "../data/blogData";

const BlogsSection = () => {
    // Categorize blogs for the 2-column layout
    const immigrationBlogs = blogData.filter(b => b.category === "Immigration News").slice(0, 3);
    const generalBlogs = blogData.filter(b => b.category === "General Insights").slice(0, 3);

    const BlogCard = ({ blog, isCompact = false }) => (
        <Link 
            href={`/blogs/${blog.slug}`}
            className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500"
        >
            <div className={`relative ${isCompact ? 'h-48' : 'h-64'} overflow-hidden`}>
                <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[8px] font-black uppercase tracking-widest">
                        {blog.category}
                    </span>
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <h3 className={`font-black text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2 ${isCompact ? 'text-lg' : 'text-xl'}`}>
                    {blog.title}
                </h3>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-50 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-1.5">
                        <HiOutlineCalendar className="text-sm text-secondary" />
                        {blog.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <HiOutlineClock className="text-sm text-secondary" />
                        {blog.readTime}
                    </div>
                </div>
            </div>
        </Link>
    );

    return (
        <section className="py-24 md:py-32 bg-gray-50/50 relative overflow-hidden">
            <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="h-[2px] w-8 bg-secondary"></span>
                            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-secondary">
                                Knowledge Hub
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-primary leading-[1.1] tracking-tighter">
                            Latest Global{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">
                                Perspectives
                            </span>
                        </h2>
                    </div>
                    <Link 
                        href="/blogs"
                        className="group flex items-center gap-3 text-primary text-[11px] font-black uppercase tracking-[0.2em] hover:text-secondary transition-all duration-300"
                    >
                        View All Publications
                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary group-hover:text-white transition-all">
                            <BsArrowRight />
                        </div>
                    </Link>
                </div>

                {/* 2-Column Category Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    
                    {/* Left Column: General Insights */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <h4 className="text-2xl font-black text-primary tracking-tight">General Insights</h4>
                            <div className="h-[1px] flex-1 bg-gray-200"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="md:col-span-2">
                                {generalBlogs[0] && <BlogCard blog={generalBlogs[0]} />}
                            </div>
                            {generalBlogs.slice(1).map(blog => (
                                <BlogCard key={blog.id} blog={blog} isCompact={true} />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Immigration News */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <h4 className="text-2xl font-black text-primary tracking-tight">Immigration News</h4>
                            <div className="h-[1px] flex-1 bg-gray-200"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="md:col-span-2">
                                {immigrationBlogs[0] && <BlogCard blog={immigrationBlogs[0]} />}
                            </div>
                            {immigrationBlogs.slice(1).map(blog => (
                                <BlogCard key={blog.id} blog={blog} isCompact={true} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BlogsSection;
