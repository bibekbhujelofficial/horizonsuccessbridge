import React, { useState, useRef } from "react";
import { Link } from "@inertiajs/react";
import { FaAngleDown, FaBars, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

import { navbarData, topBarData } from "../data/data";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedGroups, setExpandedGroups] = useState({});

    const toggleGroup = (key, isOpen) => {
        setExpandedGroups((prev) => ({
            ...prev,
            [key]: isOpen !== undefined ? isOpen : !prev[key],
        }));
    };
    const hoverTimeout = useRef(null);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMouseEnter = (index) => {
        if (window.innerWidth >= 1024) {
            if (hoverTimeout.current) {
                clearTimeout(hoverTimeout.current);
            }
            setActiveDropdown(index);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 1024) {
            hoverTimeout.current = setTimeout(() => {
                setActiveDropdown(null);
            }, 100); // 100ms delay to bridge the gap
        }
    };

    const toggleMobileDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <nav className="z-[70] shadow-md font-roboto bg-white border-b border-gray-100 relative">
            <div className="w-full max-w-screen-2xl mx-auto flex items-center h-20 px-8">
                {/* Logo Section - Left */}
                <div className="flex-1 shrink-0">
                    <Link href="/">
                        <img
                            className="h-12 lg:h-14 w-auto object-contain"
                            src={topBarData.logo}
                            alt="Horizon Success Bridge"
                        />
                    </Link>
                </div>

                {/* Menu Section - Center */}
                <div className="flex-[2] hidden lg:flex items-center justify-center h-full">
                    <ul className="flex items-center gap-1 xl:gap-2 h-full">
                        {navbarData.map((item, index) => (
                            <li
                                key={index}
                                className="h-full flex items-center group px-3"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    href={item.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className={`flex items-center gap-1.5 text-[13px] font-bold py-2 tracking-wide uppercase transition-all duration-200 relative ${
                                        activeDropdown === index
                                            ? "text-secondary"
                                            : "text-primary hover:text-secondary"
                                    }`}
                                >
                                    {item.title}
                                    {/* Bottom bar indicator - only for items without dropdown */}
                                    {!item.submenu && (
                                        <span
                                            className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-secondary rounded-full transition-all duration-200 ${"w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}`}
                                        ></span>
                                    )}
                                </Link>

                                {/* Mega Menu Dropdown */}
                                {item.submenu && (
                                    <div
                                        className={`absolute top-full left-0 w-screen bg-white text-gray-800 z-40 ${
                                            activeDropdown === index
                                                ? "opacity-100 visible pointer-events-auto"
                                                : "opacity-0 invisible pointer-events-none"
                                        }`}
                                        style={{
                                            clipPath:
                                                activeDropdown === index
                                                    ? "inset(0 0 0 0)"
                                                    : "inset(0 0 100% 0)",
                                            boxShadow:
                                                activeDropdown === index
                                                    ? "0 25px 50px -12px rgba(0,0,0,0.12)"
                                                    : "none",
                                            transition:
                                                activeDropdown === index
                                                    ? "clip-path 350ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms ease, box-shadow 350ms ease, visibility 0ms"
                                                    : "clip-path 0ms, opacity 0ms, box-shadow 0ms, visibility 0ms",
                                        }}
                                    >
                                        {/* Top accent line */}
                                        <div className="h-[3px] bg-gradient-to-r from-primary via-secondary to-primary"></div>

                                        <div className="max-w-screen-2xl mx-auto px-8 py-8">
                                            {/* Deep Structure (Migrate, Points Calculator, etc.) */}
                                            {item.submenu.some(
                                                (sub) => sub.submenu,
                                            ) ? (
                                                <div className="pr-2 custom-scrollbar max-h-[65vh] overflow-y-auto">
                                                    <ul className="grid grid-cols-4 xl:grid-cols-5 gap-8">
                                                        {item.submenu.map(
                                                            (
                                                                subItem,
                                                                subIndex,
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        subIndex
                                                                    }
                                                                    className="relative"
                                                                >
                                                                    <div className="flex flex-col gap-4">
                                                                        {/* Column Header */}
                                                                        <Link
                                                                            href={
                                                                                subItem.href
                                                                            }
                                                                            onClick={() =>
                                                                                setActiveDropdown(
                                                                                    null,
                                                                                )
                                                                            }
                                                                            className="text-[13px] font-black text-primary border-b-2 border-gray-100 pb-2.5 hover:text-secondary hover:border-secondary transition-all duration-300 inline-block uppercase tracking-wider"
                                                                        >
                                                                            {
                                                                                subItem.title
                                                                            }
                                                                        </Link>

                                                                        {/* Sub-Items */}
                                                                        {(
                                                                            subItem.submenu ||
                                                                            []
                                                                        )
                                                                            .length >
                                                                            0 && (
                                                                            <ul className="flex flex-col gap-1.5">
                                                                                {subItem.submenu.map(
                                                                                    (
                                                                                        grandChild,
                                                                                        grandIndex,
                                                                                    ) => (
                                                                                        <li
                                                                                            key={
                                                                                                grandIndex
                                                                                            }
                                                                                        >
                                                                                            {grandChild.submenu ? (
                                                                                                /* L3 Group Header */
                                                                                                <div
                                                                                                    className="mb-2"
                                                                                                    onMouseEnter={() =>
                                                                                                        toggleGroup(
                                                                                                            `${item.title}-${subItem.title}-${grandChild.title}`,
                                                                                                            true,
                                                                                                        )
                                                                                                    }
                                                                                                    onMouseLeave={() =>
                                                                                                        toggleGroup(
                                                                                                            `${item.title}-${subItem.title}-${grandChild.title}`,
                                                                                                            false,
                                                                                                        )
                                                                                                    }
                                                                                                >
                                                                                                    <div className="flex items-center justify-between gap-2 py-1.5 px-2 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                                                                                                        <Link
                                                                                                            href={
                                                                                                                grandChild.href
                                                                                                            }
                                                                                                            onClick={() =>
                                                                                                                setActiveDropdown(
                                                                                                                    null,
                                                                                                                )
                                                                                                            }
                                                                                                            className="text-[13px] font-semibold text-gray-700 hover:text-secondary flex-1 transition-colors"
                                                                                                        >
                                                                                                            {
                                                                                                                grandChild.title
                                                                                                            }
                                                                                                        </Link>
                                                                                                        <FaAngleDown
                                                                                                            className={`text-[9px] text-gray-400 transition-transform duration-200 ${expandedGroups[`${item.title}-${subItem.title}-${grandChild.title}`] ? "rotate-180 text-secondary" : ""}`}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className={`pl-3 ml-2 border-l-2 border-gray-100 overflow-hidden transition-all duration-200 ${
                                                                                                            expandedGroups[
                                                                                                                `${item.title}-${subItem.title}-${grandChild.title}`
                                                                                                            ]
                                                                                                                ? "max-h-[500px] opacity-100 mt-1"
                                                                                                                : "max-h-0 opacity-0"
                                                                                                        }`}
                                                                                                    >
                                                                                                        <ul className="flex flex-col gap-1 pb-1">
                                                                                                            {grandChild.submenu.map(
                                                                                                                (
                                                                                                                    greatGrandChild,
                                                                                                                    greatIndex,
                                                                                                                ) => (
                                                                                                                    <li
                                                                                                                        key={
                                                                                                                            greatIndex
                                                                                                                        }
                                                                                                                    >
                                                                                                                        <Link
                                                                                                                            href={
                                                                                                                                greatGrandChild.href
                                                                                                                            }
                                                                                                                            onClick={() =>
                                                                                                                                setActiveDropdown(
                                                                                                                                    null,
                                                                                                                                )
                                                                                                                            }
                                                                                                                            className="text-[12px] font-medium text-gray-500 hover:text-secondary transition-colors block py-1 px-2 rounded hover:bg-red-50/50"
                                                                                                                        >
                                                                                                                            {
                                                                                                                                greatGrandChild.title
                                                                                                                            }
                                                                                                                        </Link>
                                                                                                                    </li>
                                                                                                                ),
                                                                                                            )}
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                </div>
                                                                                            ) : (
                                                                                                /* L3 Normal Link */
                                                                                                <Link
                                                                                                    href={
                                                                                                        grandChild.href
                                                                                                    }
                                                                                                    onClick={() =>
                                                                                                        setActiveDropdown(
                                                                                                            null,
                                                                                                        )
                                                                                                    }
                                                                                                    className="text-[13px] font-medium text-gray-600 hover:text-secondary transition-all duration-200 block py-1.5 px-2 rounded-md hover:bg-gray-50"
                                                                                                >
                                                                                                    {
                                                                                                        grandChild.title
                                                                                                    }
                                                                                                </Link>
                                                                                            )}
                                                                                        </li>
                                                                                    ),
                                                                                )}
                                                                            </ul>
                                                                        )}
                                                                    </div>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            ) : (
                                                /* Dynamic Services Hub */
                                                <div className="relative">
                                                    <ul className="grid grid-cols-4 xl:grid-cols-5 gap-6">
                                                        {item.submenu.map(
                                                            (
                                                                subItem,
                                                                subIndex,
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        subIndex
                                                                    }
                                                                    className="relative group/card"
                                                                >
                                                                    <Link
                                                                        href={
                                                                            subItem.href
                                                                        }
                                                                        onClick={() =>
                                                                            setActiveDropdown(
                                                                                null,
                                                                            )
                                                                        }
                                                                        className="block p-4 rounded-xl border border-gray-100 hover:border-secondary/20 hover:shadow-md hover:shadow-secondary/5 transition-all duration-300 group/link"
                                                                    >
                                                                        <h4 className="text-[13px] font-bold text-primary group-hover/link:text-secondary transition-colors uppercase tracking-wider mb-2">
                                                                            {
                                                                                subItem.title
                                                                            }
                                                                        </h4>
                                                                        {subItem.description && (
                                                                            <p className="text-[12px] text-gray-500 leading-relaxed font-medium">
                                                                                {
                                                                                    subItem.description
                                                                                }
                                                                            </p>
                                                                        )}
                                                                    </Link>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Contact CTA / Mobile Toggle */}
                <div className="flex-1 flex items-center justify-end h-full">
                    {/* <div className="hidden xl:flex items-center gap-3.5">
                        <div className="text-[28px] text-secondary">
                            <FaPhoneVolume />
                        </div>
                        <div className="flex flex-col leading-[1.1]">
                            <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.25em]">
                                Call us directly
                            </span>
                            <a
                                href="tel:+918796151760"
                                className="text-primary hover:text-secondary font-black text-[19px] transition-colors tracking-tighter"
                    >
                                +91 87961 51760
                            </a>
                        </div>
                    </div> */}

                    <Link
                        href="/contact"
                        className="hidden lg:flex items-center justify-center bg-secondary hover:bg-primary text-white px-7 py-3 rounded-full text-[13px] font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-blue-900/20 active:scale-95"
                    ><div className="text-[13px] pr-2 text-white">
                            <FaPhoneVolume />
                        </div>Get In Touch
                    </Link>

                    

                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-primary text-3xl focus:outline-none"
                        >
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={`lg:hidden fixed inset-0 z-[110] bg-black/50 transition-opacity duration-300 ${
                    isMobileMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                }`}
                onClick={toggleMobileMenu}
            ></div>

            <div
                className={`lg:hidden fixed top-0 right-0 z-[120] h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out transform ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-between items-center p-5 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-primary uppercase tracking-wider">
                        Navigation
                    </h2>
                    <button
                        onClick={toggleMobileMenu}
                        className="text-gray-500 hover:text-primary text-xl"
                    >
                        <FaTimes />
                    </button>
                </div>
                <div className="h-full overflow-y-auto pb-20">
                    <ul className="flex flex-col py-2">
                        {navbarData.map((item, index) => (
                            <li
                                key={index}
                                className="border-b border-gray-50 last:border-0"
                            >
                                <div className="flex justify-between items-center">
                                    <Link
                                        href={item.href}
                                        className="flex-1 py-3.5 px-6 text-sm font-semibold text-gray-800 hover:text-primary transition-colors"
                                        onClick={() =>
                                            !item.submenu &&
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        {item.title}
                                    </Link>
                                    {item.submenu && (
                                        <button
                                            onClick={() =>
                                                toggleMobileDropdown(index)
                                            }
                                            className="px-6 py-3.5 text-gray-500 hover:text-primary transition-colors bg-gray-50/50"
                                        >
                                            <FaAngleDown
                                                className={`transition-transform duration-300 ${
                                                    activeDropdown === index
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </button>
                                    )}
                                </div>
                                {item.submenu && (
                                    <div
                                        className={`bg-gray-50 overflow-hidden transition-all duration-300 ${
                                            activeDropdown === index
                                                ? "max-h-[1000px]"
                                                : "max-h-0"
                                        }`}
                                    >
                                        <ul className="py-2 px-4 flex flex-col gap-2">
                                            {item.submenu.map(
                                                (subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        {subItem.submenu ? (
                                                            /* Nested Mobile Item */
                                                            <div className="py-2">
                                                                <Link
                                                                    href={
                                                                        subItem.href
                                                                    }
                                                                    className="block font-semibold text-sm text-gray-800 mb-2"
                                                                    onClick={() =>
                                                                        setIsMobileMenuOpen(
                                                                            false,
                                                                        )
                                                                    }
                                                                >
                                                                    {
                                                                        subItem.title
                                                                    }
                                                                </Link>
                                                                <ul className="pl-4 border-l-2 border-gray-200 flex flex-col gap-2">
                                                                    {subItem.submenu.map(
                                                                        (
                                                                            grandChild,
                                                                            grandIndex,
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    grandIndex
                                                                                }
                                                                            >
                                                                                <Link
                                                                                    href={
                                                                                        grandChild.href
                                                                                    }
                                                                                    className="text-sm text-gray-600 block"
                                                                                    onClick={() =>
                                                                                        setIsMobileMenuOpen(
                                                                                            false,
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        grandChild.title
                                                                                    }
                                                                                </Link>
                                                                            </li>
                                                                        ),
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        ) : (
                                                            /* Flat Mobile Item */
                                                            <Link
                                                                href={
                                                                    subItem.href
                                                                }
                                                                className="block py-2 pl-4 text-sm font-medium text-gray-600 hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary"
                                                                onClick={() =>
                                                                    setIsMobileMenuOpen(
                                                                        false,
                                                                    )
                                                                }
                                                            >
                                                                {subItem.title}
                                                            </Link>
                                                        )}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
