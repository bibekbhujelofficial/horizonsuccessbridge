import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { newsletterData } from "../data/data";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setMessage("Thank you for subscribing!");
            setEmail("");
            setTimeout(() => setSuccess(false), 3000);
        }, 1500);
    };

    return (
        <div className="py-24 relative overflow-hidden bg-white">
            <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="bg-gradient-to-br from-neutral-950 via-[#111] to-[#000] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/10">
                    
                    {/* Deep red and blue ambient glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen -translate-x-1/2 translate-y-1/2"></div>
                    
                    {/* Abstract noise / texture */}
                    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                    {/* Text Content */}
                    <div className="text-center lg:text-left text-white max-w-2xl relative z-10">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                            <span className="h-[2px] w-8 bg-secondary"></span>
                            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-secondary">
                                {newsletterData.header.subtitle}
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter text-white mb-6">
                            {newsletterData.header.title.split(' ').map((word, i, arr) => (
                                <span key={i} className={i === arr.length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-red-600" : ""}>
                                    {word}{" "}
                                </span>
                            ))}
                        </h2>
                        <p className="text-white/60 font-medium leading-relaxed text-lg max-w-lg mx-auto lg:mx-0">
                            Get weekly insights on global immigration policies, elite study opportunities, and exclusive career pathways delivered directly to your inbox.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="w-full lg:w-auto flex-1 max-w-xl relative z-10">
                        <form onSubmit={handleSubmit} className="relative group">
                            {/* Neon glowing backdrop for form */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            
                            <div className="relative flex flex-col sm:flex-row items-center bg-neutral-900/80 backdrop-blur-xl rounded-[2rem] sm:rounded-full p-2 border border-white/10 shadow-2xl gap-2 sm:gap-0">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={newsletterData.placeholder}
                                    required
                                    className="flex-1 appearance-none bg-transparent border-none w-full text-white px-6 py-4 leading-tight focus:outline-none focus:ring-0 placeholder-white/30 font-medium text-center sm:text-left"
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full sm:w-auto relative flex-shrink-0 bg-secondary hover:bg-secondary text-white text-[11px] font-black uppercase tracking-[0.2em] py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group/btn"
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        {loading ? "Subscribing..." : newsletterData.buttonText}
                                        {!loading && (
                                            <FaPaperPlane className="text-[10px] group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        )}
                                    </span>
                                </button>
                            </div>
                            {message && (
                                <div
                                    className={`absolute -bottom-10 left-0 w-full text-center text-[10px] font-black tracking-widest uppercase ${
                                        success ? "text-accent-green" : "text-secondary"
                                    }`}
                                >
                                    {message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
