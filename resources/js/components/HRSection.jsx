import React from "react";
import { Link } from "@inertiajs/react";
import { FaUsers, FaChartLine, FaHandshake, FaUserTie } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const HRSection = () => {
    const features = [
        {
            icon: <FaUsers className="text-3xl" />,
            title: "Expert Recruitment",
            description:
                "Access a global talent pool with our specialized international recruitment protocols.",
        },
        {
            icon: <FaChartLine className="text-3xl" />,
            title: "Strategic Growth",
            description:
                "Optimize your workforce with data-driven HR strategies and performance management.",
        },
        {
            icon: <FaHandshake className="text-3xl" />,
            title: "Global Compliance",
            description:
                "Navigate complex international labor laws and immigration requirements seamlessly.",
        },
        {
            icon: <FaUserTie className="text-3xl" />,
            title: "Leadership Excellence",
            description:
                "Develop executive talent and foster a culture of high performance and innovation.",
        },
    ];

    return (
        <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.02] rounded-bl-[10rem]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 opacity-50"></div>

            <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left Side: Content */}
                    <div className="lg:col-span-6">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[2px] w-8 bg-secondary"></span>
                            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-secondary">
                                Corporate Solutions
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-primary leading-[1.1] tracking-tighter mb-8">
                            Empowering Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">
                                Workforce Globally
                            </span>
                        </h2>
                        <p className="text-gray-500 font-medium leading-relaxed max-w-xl mb-12 text-lg">
                            We provide comprehensive HR solutions that bridge
                            the gap between global talent and industry leaders.
                            From recruitment to strategic consulting, we handle
                            the complexities while you focus on growth.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-lg shadow-gray-200/50 flex items-center justify-center text-secondary shrink-0 transform hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-primary font-bold mb-1 tracking-tight">
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/hr-solutions"
                            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-primary text-white font-black text-xs uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-300 shadow-2xl shadow-primary/20"
                        >
                            <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                            <span className="relative z-10 flex items-center gap-3">
                                Explore HR Services
                                <BsArrowRight className="text-lg group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                    </div>

                    {/* Right Side: Interactive Card / Image */}
                    <div className="lg:col-span-6 relative">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group/banner">
                            <img
                                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
                                alt="HR Solutions"
                                className="w-full aspect-[4/5] object-cover transition-transform duration-[2s] group-hover/banner:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>

                            {/* Floating Stats Card */}
                            <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 transform hover:-translate-y-2 transition-transform duration-500">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                                            >
                                                <img
                                                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                                    alt="Expert"
                                                />
                                            </div>
                                        ))}
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-white text-[10px] font-black">
                                            +50
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-white text-2xl font-black tracking-tight leading-tight">
                                    Trusted by 500+ Corporations <br />
                                    <span className="text-secondary">
                                        Worldwide
                                    </span>
                                </h3>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary rounded-3xl -z-0 rotate-12 animate-pulse transition-transform duration-500 group-hover:rotate-45"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-3xl -z-0 -rotate-12 transition-transform duration-500 group-hover:-rotate-45"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HRSection;
