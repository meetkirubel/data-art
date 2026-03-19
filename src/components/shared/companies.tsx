import React from "react";
import { Coffee, Cloud, LayoutGrid, Hexagon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Capitalized names slightly for a better "logo" feel
const companies = [
    { name: "Minimal", logo: null, className: "font-semibold text-slate-900" },
    { name: "INNERTY", logo: null, className: "font-bold tracking-widest text-slate-900" },
    { name: "Grid", logo: <LayoutGrid className="h-6 w-6" />, className: "font-bold tracking-tight" },
    { name: "Company", logo: <Hexagon className="h-6 w-6" />, className: "font-medium" },
    { name: "XX", logo: <div className="flex -gap-1"><X className="h-5 w-5" /><X className="h-5 w-5" /></div>, className: "font-black" },
    { name: "Personlab", logo: null, className: "font-semibold text-slate-900 tracking-tight" },
    { name: "Xpate", logo: null, className: "font-bold text-slate-900" },
    { name: "Frappuccio", logo: <Coffee className="h-6 w-6" />, className: "font-semibold" },
    { name: "AWS", logo: null, className: "font-black text-slate-900 tracking-tighter" },
    { name: "Cloudflare", logo: <Cloud className="h-6 w-6 text-orange-500" />, className: "font-bold" },
    { name: "Sendlab", logo: null, className: "italic font-bold text-slate-900" },
    { name: "Adyen", logo: null, className: "font-bold text-green-600" },
];

export function Companies() {
    return (
        <section className="py-24 bg-background">
            <div className="wrapper mx-auto px-4 lg:px-8">

                {/* Top Row: Header & Stats */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">

                    {/* Left Side: Text Content */}
                    <div className="space-y-6 max-w-2xl">
                        <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                            Companies Growing With Us
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 leading-[1.1]">
                            A Growth Partner to <br className="hidden md:block" /> 50+ Companies
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                            Trusted by teams at Bukit Vista, OJT Indonesia, and government
                            institutions — companies that chose speed over uncertainty.
                        </p>
                    </div>

                    {/* Right Side: Stat Cards */}
                    {/* Replaced invalid min-w-3xs with standard w-full sm:w-[200px] to keep them uniform */}
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                        <Card className="border-none bg-slate-50 rounded-[2rem] p-2 w-full sm:w-[200px] shadow-sm">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-5xl font-semibold tracking-tighter text-primary">
                                    1000+
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                                    Users enabled with <br /> solutions
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none bg-slate-50 rounded-[2rem] p-2 w-full sm:w-[200px] shadow-sm">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-5xl font-semibold tracking-tighter text-primary">
                                    50%
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                                    Cost reduction average <br /> for our clients
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                </div>

                {/* Bottom Row: Company Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            // Lowered base opacity slightly so the hover effect pops more
                            className="flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default"
                        >
                            {/* Added text-xl to make the text-based logos feel more like actual logos */}
                            <div className={cn("flex items-center gap-2 text-xl md:text-2xl", company.className)}>
                                {company.logo}
                                <span>{company.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}