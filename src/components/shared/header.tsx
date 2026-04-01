"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/asset/logo.png";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#works", label: "Recent Works" },
    { href: "#faqs", label: "FAQs" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Block scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            {/* Header - Fixed to top, high Z-index */}
            <header className="fixed md:absolute top-0 left-0 right-0 z-100 transition-all duration-300">
                <div className="wrapper py-4 mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">

                        {/* Logo - Always visible and above overlay */}
                        <Link href="/" className="relative z-110 flex items-center shrink-0">
                            <Image
                                src={logo}
                                alt="Data Art Consulting"
                                className="h-8 md:h-10 w-auto object-contain"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1 rounded-full p-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="px-5 py-2 text-sm font-medium text-white hover:opacity-70 transition-opacity"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA & Mobile Toggle */}
                        <div className="flex items-center gap-4 relative z-110">
                            <div className="hidden md:block">
                                <Link href="#cta">
                                    <Button variant="secondary" className="rounded-full px-6 py-5 text-sm font-semibold">
                                        Let's Talk
                                    </Button>
                                </Link>
                            </div>

                            {/* Animated Hamburger Button */}
                            <Button
                                variant="secondary"
                                className="md:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11 p-0 rounded-full focus:outline-none overflow-hidden"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle Menu"
                            >
                                <span className={cn(
                                    "w-6 h-0.5 bg-slate-900 rounded-full transition-all duration-300 origin-center",
                                    isOpen ? "rotate-45 translate-y-2" : ""
                                )} />
                                <span className={cn(
                                    "w-6 h-0.5 bg-slate-900 rounded-full transition-all duration-300",
                                    isOpen ? "-translate-x-full opacity-0" : "opacity-100"
                                )} />
                                <span className={cn(
                                    "w-6 h-0.5 bg-slate-900 rounded-full transition-all duration-300 origin-center",
                                    isOpen ? "-rotate-45 -translate-y-2" : ""
                                )} />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay - Full Screen Slide-in */}
            <div className={cn(
                "fixed inset-0 z-90 bg-primary md:hidden  flex flex-col justify-between transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="flex flex-col h-full pt-32 pb-12 px-6 sm:px-10">
                    {/* Staggered Nav Links */}
                    <nav className="flex flex-col gap-4 h-full">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-3xl sm:text-5xl font-bold uppercase text-white transition-all duration-500",
                                    isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                                )}
                                style={{ transitionDelay: `${i * 70 + 200}ms` }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Bottom Section: CTA & Socials */}
                    <div className={cn(
                        "mt-auto space-y-4 transition-all duration-700 delay-500 ",
                        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}>
                        <Link href="https://form.jotform.com/242335134954456" target="_blank" className="block">
                            <Button variant="secondary" className="rounded-full w-full py-6">
                                Get Started
                            </Button>
                        </Link>

                        <div className="flex flex-col gap-4">
                            <p className="text-white/60 text-sm uppercase text-center tracking-widest font-semibold">Follow Us</p>
                            <div className="flex items-center gap-8 text-white justify-center">
                                <Link href="#" className="hover:scale-110 transition-transform">
                                    <Instagram size={16} />
                                </Link>
                                <Link href="#" className="hover:scale-110 transition-transform">
                                    <Linkedin size={16} />
                                </Link>
                                <Link href="#" className="hover:scale-110 transition-transform">
                                    <Twitter size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}