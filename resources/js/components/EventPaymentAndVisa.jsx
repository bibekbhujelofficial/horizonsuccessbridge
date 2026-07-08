import React from "react";
import { BsAward, BsArrowRight } from "react-icons/bs";
import { HiOutlineMail, HiOutlineCheckCircle } from "react-icons/hi";

const EventPaymentAndVisa = ({ data }) => {
    return (
        <>
            {/* Payment Methods Section */}
            <section className="py-32 bg-white border-t border-gray-100">
                <div className="max-w-[1450px] mx-auto px-6 lg:px-12">
                     <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <span className="h-[2px] w-12 bg-secondary"></span>
                            <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] text-secondary">
                                Fees & Entry
                            </span>
                            <span className="h-[2px] w-12 bg-secondary"></span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black text-primary tracking-tighter mb-6 leading-[1.2]">
                            Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">Protocols</span>
                        </h2>
                        <p className="text-gray-500 font-medium leading-relaxed italic max-w-2xl mx-auto">
                            "{data.paymentMethods.description}"
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Methods Grid */}
                        <div className="bg-gray-50 border border-gray-100 p-10 lg:p-14 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-[60px]"></div>
                            
                            <div className="relative z-10 space-y-10">
                                {data.paymentMethods.methods.map((method, i) => (
                                    <div key={i} className="flex gap-4 group/item">
                                        <div className="w-2 h-2 rounded-full bg-secondary/20 mt-2 shrink-0 group/item:bg-secondary transition-colors"></div>
                                        <div>
                                            <h5 className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3">{method.type}</h5>
                                            <p className="text-gray-500 text-sm font-medium leading-relaxed">{method.details}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-200 flex items-start gap-6 relative z-10">
                                <BsAward className="text-4xl text-secondary/60 shrink-0" />
                                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest leading-loose">Secure transaction protocols. Certificates of registration and tax invoices are generated automatically upon successful payment.</p>
                            </div>
                        </div>

                        {/* Steps Grid */}
                        <div className="bg-white border border-gray-100 shadow-xl shadow-primary/5 p-10 lg:p-14 rounded-[2.5rem]">
                            <h3 className="text-xs font-black text-secondary uppercase tracking-[0.3em] mb-10">Registration Flow</h3>
                            <div className="space-y-8 relative">
                                <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gray-100"></div>
                                {data.paymentMethods.steps.map((step, i) => (
                                    <div key={i} className="flex gap-8 relative z-10 group">
                                        <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shrink-0 group-hover:border-secondary transition-colors">
                                            <span className="text-[10px] font-black text-primary group-hover:text-secondary">{step.step}</span>
                                        </div>
                                        <div className="pt-2">
                                            <h5 className="text-sm font-black text-primary mb-2">{step.title}</h5>
                                            <p className="text-gray-500 text-sm font-medium leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visa Support Info Section */}
            <section className="py-32 bg-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-[100px]"></div>

                <div className="max-w-[1450px] mx-auto px-6 lg:px-12 relative z-10">
                     <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <span className="h-[2px] w-12 bg-secondary"></span>
                            <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] text-secondary">
                                International Support
                            </span>
                            <span className="h-[2px] w-12 bg-secondary"></span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-6 leading-[1.2]">
                            {data.visaSupport.title.split(' ').map((word, i, arr) => (
                                <span key={i} className={i === arr.length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary" : ""}>
                                    {word}{" "}
                                </span>
                            ))}
                        </h2>
                        <p className="text-white/60 font-medium leading-relaxed text-base italic max-w-2xl mx-auto">
                            "{data.visaSupport.description}"
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Visa Requirements */}
                        <div className="bg-white/5 border border-white/10 p-10 lg:p-14 rounded-[2.5rem]">
                            <h3 className="text-xs font-black text-secondary uppercase tracking-[0.3em] mb-10">Prerequisites</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {data.visaSupport.requirements.map((req, i) => (
                                    <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                        <HiOutlineCheckCircle className="text-2xl text-secondary" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90 leading-relaxed">{req}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visa Steps */}
                        <div className="bg-primary-light border border-white/5 p-10 lg:p-14 rounded-[2.5rem]">
                            <h3 className="text-xs font-black text-secondary uppercase tracking-[0.3em] mb-10">Processing Flow</h3>
                            <div className="space-y-8 relative">
                                <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-white/5"></div>
                                {data.visaSupport.steps.map((step, i) => (
                                    <div key={i} className="flex gap-8 relative z-10 group">
                                        <div className="w-10 h-10 rounded-full bg-primary border-2 border-white/20 flex items-center justify-center shrink-0 group-hover:border-secondary transition-colors">
                                            <span className="text-[10px] font-black text-white group-hover:text-secondary">{step.step}</span>
                                        </div>
                                        <div className="pt-2">
                                            <h5 className="text-sm font-black text-white mb-2">{step.title}</h5>
                                            <p className="text-white/60 text-sm font-medium leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-8">
                        <div className="flex items-center gap-4 bg-white/5 px-8 py-4 rounded-full border border-white/10">
                            <HiOutlineMail className="text-xl text-secondary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">{data.visaSupport.contactEmail}</span>
                        </div>
                        <button className="group/btn relative bg-secondary text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden transition-all shadow-xl shadow-secondary/20">
                            <span className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"></span>
                            <span className="relative z-10 group-hover/btn:text-primary transition-colors duration-500 flex items-center justify-center gap-3">
                                Request Letter <BsArrowRight className="text-sm" />
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventPaymentAndVisa;
