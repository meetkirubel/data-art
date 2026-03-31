import React from "react";
import {
    Coffee, Cloud, LayoutGrid, Hexagon, X,
    Layers, Cpu, Globe, Database, Shield, Zap, Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

const companies = [
    { name: "Minimal", logo: <Layers className="h-6 w-6 text-blue-500" />, className: "font-semibold text-slate-900" },
    { name: "INNERTY", logo: <Activity className="h-6 w-6 text-indigo-500" />, className: "font-bold tracking-widest text-slate-900" },
    { name: "Grid", logo: <LayoutGrid className="h-6 w-6 text-slate-800" />, className: "font-bold tracking-tight" },
    { name: "Company", logo: <Hexagon className="h-6 w-6 text-emerald-500" />, className: "font-medium" },
    { name: "XX", logo: <div className="flex -gap-1 text-rose-500"><X className="h-5 w-5" /><X className="h-5 w-5" /></div>, className: "font-black" },
    { name: "Personlab", logo: <Cpu className="h-6 w-6 text-purple-500" />, className: "font-semibold text-slate-900 tracking-tight" },
    { name: "Xpate", logo: <Globe className="h-6 w-6 text-cyan-500" />, className: "font-bold text-slate-900" },
    { name: "Frappuccio", logo: <Coffee className="h-6 w-6 text-amber-700" />, className: "font-semibold" },
    { name: "AWS", logo: <Database className="h-6 w-6 text-orange-400" />, className: "font-black text-slate-900 tracking-tighter" },
    { name: "Cloudflare", logo: <Cloud className="h-6 w-6 text-orange-500" />, className: "font-bold" },
    { name: "Sendlab", logo: <Zap className="h-6 w-6 text-yellow-500" />, className: "italic font-bold text-slate-900" },
    { name: "Adyen", logo: <Shield className="h-6 w-6 text-green-600" />, className: "font-bold text-green-600" },
];

export function About() {
    return (
        <section id="about" className="pt-24  relative overflow-hidden">
            {/* Subtle background glow for a modern touch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="wrapper mx-auto px-4 lg:px-8 space-y-16 relative z-10">

                <div className="flex flex-col gap-4">
                    <div className="lg:w-1/3 space-y-4">
                        <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-primary" />
                            About Us
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter">
                            Experts in Data, Partners in Growth.
                        </h2>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Your trusted partner in cutting-edge technology solutions. At Data Arts Consulting, we specialize in delivering tailored services in Database Development, Web Development, Application Development, Power BI, and Azure. Our team of experts is committed to helping your business thrive in a digital world by providing innovative and efficient solutions.
                    </p>
                </div>


                {/* Marquee Section */}
                <div className="space-y-8">


                    <h3 className="text-muted-foreground font-medium text-sm text-center  uppercase tracking-widest">
                        Trusted by Innovative Teams
                    </h3>
                    {/* Marquee Container with fade masks on the edges */}
                    <div className="relative flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                        {/* We duplicate the array and apply the v4 animate-marquee utility. Hovering pauses the scroll. */}
                        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                            {[...companies, ...companies].map((company, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default px-8 sm:px-12"
                                >
                                    <div className={cn("flex items-center gap-3 text-xl md:text-2xl", company.className)}>
                                        {company.logo}
                                        <span>{company.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}