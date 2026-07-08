import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import PageHeader from "../../components/PageHeader";
import { blogData } from "../../data/blogData";
import { 
    HiOutlineCalendar, 
    HiOutlineClock, 
    HiOutlineUser, 
    HiOutlineShare,
    HiOutlineArrowNarrowLeft,
    HiOutlineTag
} from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

const BlogDetail = ({ slug }) => {
    // Find the blog post based on the slug
    const blog = blogData.find((b) => b.slug === slug) || blogData[0];
    
    // Find related posts
    const relatedPosts = blogData.filter(b => blog.related?.includes(b.id));

    return (
        <GuestLayout>
            <Head title={`${blog.title} - Horizon Success Bridge`} />

            <PageHeader
                title={blog.title}
                subtitle={blog.category}
                description={blog.description}
                breadcrumbs={[
                    { text: "Blogs", href: "/blogs" },
                    { text: "Details", href: null },
                ]}
                image={blog.image}
            />

            <section className="py-24 bg-white relative">
                <div className="max-w-[1450px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Main Content Side */}
                        <div className="lg:w-2/3">
                            {/* Meta Info Bar */}
                            <div className="flex flex-wrap items-center gap-8 py-8 border-b border-gray-100 mb-12">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-secondary">
                                        <HiOutlineUser className="text-xl" />
                                    </div>
                                    <div className="text-xs font-black uppercase tracking-widest text-primary">
                                        <span className="block text-gray-400 text-[9px] mb-0.5">Author</span>
                                        {blog.author}
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-secondary">
                                        <HiOutlineCalendar className="text-xl" />
                                    </div>
                                    <div className="text-xs font-black uppercase tracking-widest text-primary">
                                        <span className="block text-gray-400 text-[9px] mb-0.5">Date</span>
                                        {blog.date}
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-secondary">
                                        <HiOutlineClock className="text-xl" />
                                    </div>
                                    <div className="text-xs font-black uppercase tracking-widest text-primary">
                                        <span className="block text-gray-400 text-[9px] mb-0.5">Read Time</span>
                                        {blog.readTime}
                                    </div>
                                </div>
                            </div>

                            {/* Blog Content */}
                            <div 
                                className="prose prose-lg max-w-none text-gray-600 font-medium leading-[1.8] mb-16 blog-content"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />

                            {/* Share & Back */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-12 border-t border-gray-100">
                                <Link 
                                    href="/blogs"
                                    className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-[11px] hover:text-secondary transition-colors"
                                >
                                    <HiOutlineArrowNarrowLeft className="text-xl" />
                                    Back to Insights
                                </Link>
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-400 text-[10px] uppercase font-black tracking-widest">Share Article</span>
                                    <div className="flex gap-2">
                                        {[1, 2, 3].map(i => (
                                            <button key={i} className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300">
                                                <HiOutlineShare />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-[120px] space-y-12">
                                {/* Categories Widget */}
                                <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100">
                                    <h4 className="text-xl font-black text-primary mb-8 flex items-center gap-3">
                                        <HiOutlineTag className="text-secondary" />
                                        Categories
                                    </h4>
                                    <div className="flex flex-col gap-3">
                                        {["Immigration News", "General Insights", "Career Pathways", "Coaching"].map((cat, i) => (
                                            <Link 
                                                key={i} 
                                                href="/blogs" 
                                                className={`flex items-center justify-between p-4 rounded-2xl bg-white border border-transparent hover:border-secondary/20 hover:shadow-lg transition-all duration-300 group`}
                                            >
                                                <span className="text-xs font-black uppercase tracking-widest text-primary group-hover:text-secondary">{cat}</span>
                                                <BsArrowRight className="text-gray-300 group-hover:text-secondary" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Recent / Related Posts */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <span className="h-[2px] w-8 bg-secondary"></span>
                                        <h4 className="text-sm font-black uppercase tracking-widest text-primary">Related Articles</h4>
                                    </div>
                                    <div className="grid grid-cols-1 gap-6">
                                        {relatedPosts.map((related, i) => (
                                            <Link 
                                                key={i} 
                                                href={`/blogs/${related.slug}`}
                                                className="group flex gap-5 items-center p-4 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100"
                                            >
                                                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                                                    <img src={related.image} alt={related.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                </div>
                                                <div>
                                                    <span className="text-secondary text-[9px] font-black uppercase tracking-widest mb-1 block">{related.category}</span>
                                                    <h5 className="text-sm font-black text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-snug">{related.title}</h5>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Consultation CTA Widget */}
                                <div className="bg-primary rounded-[2.5rem] p-10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                                    <div className="relative z-10">
                                        <h4 className="text-white text-2xl font-black tracking-tight mb-4">Need Expert Advice?</h4>
                                        <p className="text-white/60 text-sm font-medium mb-8 leading-relaxed">Book a personalized consultation with our senior legal team today.</p>
                                        <Link 
                                            href="/contact"
                                            className="w-full bg-secondary text-white py-4 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-secondary transition-colors"
                                        >
                                            Get Started Now <BsArrowRight className="text-lg" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <style dangerouslySetInnerHTML={{ __html: `
                .blog-content h3 {
                    font-size: 1.5rem;
                    font-weight: 900;
                    color: #052a5f;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    letter-spacing: -0.025em;
                }
                .blog-content p {
                    margin-bottom: 1.5rem;
                }
            `}} />
        </GuestLayout>
    );
};

export default BlogDetail;
