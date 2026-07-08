import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import { whatsAppData } from "../data/data";

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOfficeTime, setIsOfficeTime] = useState(false);
    const [message, setMessage] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const londonTime = new Date(
                now.toLocaleString("en-US", { timeZone: "Europe/London" }),
            );
            const hour = londonTime.getHours();
            const day = londonTime.getDay();

            const isWorkDay = day !== 0 && day !== 6;
            const isWorkHour = hour >= 9 && hour < 17;
            setIsOfficeTime(isWorkDay && isWorkHour);
        };

        checkTime();
        const interval = setInterval(checkTime, 60000);
        return () => clearInterval(interval);
    }, []);

    // Auto-open after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    const togglePopup = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setTimeout(() => inputRef.current?.focus(), 350);
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        const textToSend =
            message.trim() ||
            "Hi, I would like to inquire about Horizon Success Bridge's services.";
        const whatsappUrl = `https://wa.me/${whatsAppData.phoneNumber}?text=${encodeURIComponent(textToSend)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        setMessage("");
    };

    return (
        <div className="fixed bottom-6 left-6 md:bottom-10 md:left-12 z-50 font-sans">
            {/* Chat Window */}
            <div
                className={`absolute bottom-16 md:bottom-20 left-0 w-[calc(100vw-48px)] sm:w-[360px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-300 transform origin-bottom-left overflow-hidden flex flex-col ${
                    isOpen
                        ? "scale-100 opacity-100 translate-y-0"
                        : "scale-95 opacity-0 translate-y-6 pointer-events-none"
                }`}
                style={{ height: "calc(min(440px, 80vh))" }}
            >
                {/* Header */}
                <div className="bg-primary px-5 py-4 text-white flex items-center gap-3.5 shrink-0 relative overflow-hidden">
                    <div className="relative">
                        <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm">
                            <img
                                src={whatsAppData.header.logo}
                                alt="Horizon Success Bridge"
                                className="h-7 w-auto object-contain"
                            />
                        </div>
                        <span
                            className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 border-[2.5px] border-primary rounded-full ${
                                isOfficeTime ? "bg-green-400" : "bg-gray-400"
                            }`}
                        ></span>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-[15px] leading-tight">
                            Horizon Success Bridge
                        </h3>
                        <p className="text-white/60 text-[11px] mt-0.5 font-medium">
                            {isOfficeTime
                                ? "Usually replies in minutes"
                                : "We'll get back to you soon"}
                        </p>
                    </div>
                    <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-white/5 rounded-full"></div>
                </div>

                {/* Chat Body */}
                <div
                    className="flex-1 p-5 overflow-y-auto"
                    style={{
                        backgroundColor: "#ECE5DD",
                        backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "412px",
                    }}
                >
                    {/* Greeting Message */}
                    <div className="flex gap-2.5 w-full">
                        <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center shrink-0 mt-0.5">
                            <img
                                src={whatsAppData.header.logo}
                                alt="Horizon Success Bridge"
                                className="h-5 w-auto object-contain"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="bg-white rounded-lg rounded-tl-none shadow-sm px-4 py-3 w-full">
                                <p className="text-neutral-700 text-[13px] mt-2 leading-relaxed">
                                    Welcome to Horizon Success Bridge. How can we assist you
                                    with your immigration journey today?
                                </p>
                                <p className="text-[10px] text-[#999] text-right mt-2">
                                    {new Date().toLocaleTimeString("en-GB", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        timeZone: "Europe/London",
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="px-4 py-3 bg-neutral-100 shrink-0">
                    <form
                        onSubmit={handleSendMessage}
                        className="relative"
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="w-full bg-white text-gray-800 text-sm rounded-full pl-5 pr-12 py-3 border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 placeholder:text-gray-400"
                        />
                        <button
                            type="submit"
                            className={`absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                                message.trim()
                                    ? "bg-primary text-white hover:bg-primary-light"
                                    : "bg-gray-200 text-gray-400"
                            }`}
                        >
                            <FaPaperPlane className="text-[10px]" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={togglePopup}
                className="group flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-whatsapp text-white shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:bg-whatsapp-dark hover:scale-105 hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] transition-all duration-300"
            >
                {isOpen ? (
                    <BsX className="text-2xl md:text-3xl" />
                ) : (
                    <FaWhatsapp className="text-2xl md:text-3xl" />
                )}
            </button>
        </div>
    );
};

export default WhatsAppWidget;
