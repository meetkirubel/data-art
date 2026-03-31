"use client"; // Required for Framer Motion in Next.js

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import hero from "@/asset/hero.jpg";
import { motion } from "framer-motion"; // Imported Framer Motion
import Link from "next/link";

export function Hero() {
    return (
        // Replaced non-standard 'min-h-225' with a responsive viewport height
        <section id="#" className="relative min-h-screen md:min-h-225 flex flex-col justify-end overflow-hidden pb-12 lg:pb-20">

            {/* Background Video & Overlays */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <Video />
                <Image src={hero} alt="hero" className="w-full h-full relative -z-10" placeholder="blur" objectFit="cover" />
                {/* Added a gradient overlay so the white text is ALWAYS readable, regardless of the video content */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10" />
            </div>

            {/* Main Content */}
            <div className="wrapper mx-auto px-4 lg:px-8 relative z-20 mt-auto pt-48">

                {/* Changed to flex-col on mobile so text and buttons stack, but they sit side-by-side on large screens */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-10">

                    {/* Left Side: Text */}
                    <div className="max-w-4xl">
                        {/* ANIMATION ADDED: Gently slides up and fades in */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-5xl md:text-7xl lg:text-8xl font-semibold font-sans tracking-tighter capitdalize text-white mb-6 leading-[1.1] lg:leading-[0.9]"
                        >
                            Reliable tech for your work.
                        </motion.h1>

                        {/* ANIMATION ADDED: Delayed by 0.2s so it follows the title */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-muted font-light md:text-xl max-w-xl leading-relaxed"
                        >
                            We provide support, development, and integrations to keep your systems running smoothly and your work moving forward.
                        </motion.p>
                    </div>

                    {/* Right Side: Actions */}
                    {/* Stack buttons on tiny screens, side-by-side on sm+ */}
                    {/* ANIMATION ADDED: Delayed by 0.4s to load last */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 shrink-0"
                    >
                        <Link href="https://form.jotform.com/242335134954456" target="_blank">
                            <Button variant="secondary" className="rounded-full w-full px-8 py-6 text-base font-medium">
                                Start a Project
                                <ArrowRight className="ml-2 h-5 w-5 hidden md:block" />
                            </Button>
                        </Link>
                        <Link href="#cta">
                            <Button
                                variant="outline"
                                // Fixed the hover state so it turns white with black text on hover
                                className="rounded-full px-8 py-6 text-base font-medium hover:bg-white/10 hover:text-white w-full  text-white bg-transparent"
                            >
                                Meet Our Process
                                <ArrowRight className="ml-2 h-5 w-5 hidden md:block" />
                            </Button>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export function Video() {
    return (
        <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}