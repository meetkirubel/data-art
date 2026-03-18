"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Recent Work" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 right-0 z-50">
            <div className="container py-4  mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex items-center">
                            <div className="flex flex-col">
                                <span className="text-white font-black text-3xl tracking-tighter">Data Arts</span>
                                <span className="text-white font-thin text-[12px] uppercase">Consulting</span>

                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1 border-[.5px] bg-white/5- rounded-full py-4 px-8 backdrop-blur-2xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button variant="secondary" className="rounded-full px-6 py-6 text-base">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-sm rounded-lg p-4 mt-2">
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <Button className="rounded-full px-6 py-6 text-base">
                                Book a Call
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
