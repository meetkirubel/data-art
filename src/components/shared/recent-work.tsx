import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import React from 'react'
import ho from "@/asset/hero1.jpg"
import img1 from "@/asset/works/img1.jpg"
import img2 from "@/asset/works/img2.jpg"
import img3 from "@/asset/works/img3.jpg"
import img4 from "@/asset/works/img4.jpg"
import img5 from "@/asset/works/img5.jpg"


export const PROJECTS = [
    {
        id: 1,
        title: "Medicaid Behavioral Health Analytics",
        category: "Healthcare",
        image: img1,
        challenge: "Optimize Medicaid reporting and risk analytics.",
        result: "Faster reporting and clearer insights.",
        stats: [
            { value: "50%", label: "Faster processing" },
            { value: "100%", label: "Data consistency" },
            { value: "High", label: "Risk visibility" },
        ],
        reverse: false,
    },
    {
        id: 2,
        title: "Healthcare Workforce Retention",
        category: "Healthcare",
        image: img2,
        challenge: "Track provider deployment and retention trends.",
        result: "Better workforce planning and policy evaluation.",
        stats: [
            { value: "Improved", label: "Impact measurement" },
            { value: "Enhanced", label: "Workforce planning" },
            { value: "Strong", label: "Policy evaluation" },
        ],
        reverse: true,
    },
    {
        id: 3,
        title: "Market Data & Portfolio Analytics",
        category: "Financial Services",
        image: img3,
        challenge: "Automate multi-source market data reconciliation.",
        result: "Accurate pricing and faster validation.",
        stats: [
            { value: "99%", label: "Pricing accuracy" },
            { value: "Reduced", label: "Manual effort" },
            { value: "High", label: "Analyst confidence" },
        ],
        reverse: false,
    },
    {
        id: 4,
        title: "Digital Water & Utility Analytics",
        category: "Utilities",
        image: img4,
        challenge: "Centralize water reporting and analytics.",
        result: "Clear visibility and better monitoring.",
        stats: [
            { value: "Improved", label: "Reporting" },
            { value: "Enhanced", label: "Monitoring" },
            { value: "Strengthened", label: "Planning" },
        ],
        reverse: true,
    },
    {
        id: 5,
        title: "Cloud-Native Platform Modernization",
        category: "Enterprise",
        image: img5,
        challenge: "Modernize legacy enterprise systems.",
        result: "Scalable, resilient, faster delivery.",
        stats: [
            { value: "Reduced", label: "Bottlenecks" },
            { value: "Improved", label: "Scalability" },
            { value: "Faster", label: "Delivery" },
        ],
        reverse: false,
    },
];

const RecentWork = () => {
    return (
        <section id='works' className="py-24 bg-background">
            <div className="wrapper mx-auto px-4 lg:px-8">

                {/* Header - Perfectly Centered & Structured */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
                    <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Projects We Take Pride In
                    </p>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.1]">
                        Recent Success Stories
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                        Showcasing the impact of our work — helping organizations streamline operations, harness insights, and grow with confidence.
                    </p>
                </div>

                {/* Project List */}
                <div className="space-y-12">
                    {PROJECTS.map((project) => (
                        <Card key={project.id} className="bg-muted border-none rounded-[2.5rem] p-4 lg:p-6 overflow-hidden">
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch`}>

                                {/* Image Logic: is reverse? */}
                                <div className={`${project.reverse ? "lg:order-2" : "lg:order-1"}`}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        placeholder='blur'
                                        className="rounded-[1.5rem] w-full h-full object-cover min-h-60 lg:min-h-100 transition-all duration-300 hover:shadow-sm hover:-translate-y-1"
                                    />
                                </div>

                                {/* Content Logic */}
                                <div className={`flex flex-col justify-between py-6 lg:py-10 ${project.reverse ? "lg:order-1" : "lg:order-2"}`}>

                                    {/* Top: Title & Badge */}
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-8">
                                        <h3 className="text-3xl sm:text-4xl font-medium tracking-tight">{project.title}</h3>
                                        <Badge className="px-8 py-4 text-primary rounded-full text-lg font-medium tracking-tighter bg-background" variant="outline">
                                            {project.category}
                                        </Badge>
                                    </div>

                                    {/* Middle: Challenge & Result */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-b border-slate-200">
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-medium tracking-tight flex items-center gap-2">
                                                <span className="h-2 w-2 rounded-full bg-destructive" />
                                                Challenge
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-medium tracking-tight flex items-center gap-2">
                                                <span className="h-2 w-2 rounded-full bg-green-600" />
                                                Result
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">{project.result}</p>
                                        </div>
                                    </div>

                                    {/* Bottom: The 3-Column Stats */}
                                    <div className="grid grid-cols-3 gap-4 pt-10">
                                        {project.stats.map((stat, i) => (
                                            <div key={i} className="space-y-1 text-center">
                                                <h5 className="text-lg sm:text-2xl uppercase tracking-tighter font-medium text-primary">
                                                    {stat.value}
                                                </h5>
                                                <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground leading-tight">
                                                    {stat.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecentWork