import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import React from 'react'
import ho from "@/asset/hero1.jpg"
import ho2 from "@/asset/hero.jpg"

// Dynamic data so you don't have to copy-paste the whole Card block every time
const PROJECTS = [
    {
        id: 1,
        title: "KOP",
        category: "Ads Management",
        image: ho,
        challenge: "Institutions — companies that chose speed over uncertainty.",
        result: "Institutions — companies that chose speed over uncertainty.",
        stats: [
            { value: "90%", label: "Growth scale" },
            { value: "5000+", label: "New users" },
            { value: "3 Month", label: "Timeline" },
        ],
        reverse: false, // This controls the layout flip
    },
    {
        id: 2,
        title: "INNERTY",
        category: "Development",
        image: ho2,
        challenge: "Building a scalable infrastructure for rapid deployment.",
        result: "Reduced deployment time by 60% across all regions.",
        stats: [
            { value: "60%", label: "Faster Deploy" },
            { value: "12", label: "Countries" },
            { value: "24/7", label: "Uptime" },
        ],
        reverse: true, // Flips the image to the other side
    },
    {
        id: 1,
        title: "KOP",
        category: "Ads Management",
        image: ho,
        challenge: "Institutions — companies that chose speed over uncertainty.",
        result: "Institutions — companies that chose speed over uncertainty.",
        stats: [
            { value: "90%", label: "Growth scale" },
            { value: "5000+", label: "New users" },
            { value: "3 Month", label: "Timeline" },
        ],
        reverse: false, // This controls the layout flip
    },
    {
        id: 2,
        title: "INNERTY",
        category: "Development",
        image: ho2,
        challenge: "Building a scalable infrastructure for rapid deployment.",
        result: "Reduced deployment time by 60% across all regions.",
        stats: [
            { value: "60%", label: "Faster Deploy" },
            { value: "12", label: "Countries" },
            { value: "24/7", label: "Uptime" },
        ],
        reverse: true, // Flips the image to the other side
    }
];

const RecentWork = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">

                {/* Header - Perfectly Centered & Structured */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
                    <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Works We Are Proud Of
                    </p>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                        Recent Works
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                        Trusted by institutions and companies that chose speed over uncertainty to define their future.
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
                                        className="rounded-[1.5rem] w-full h-full object-cover min-h-60 lg:min-h-100"
                                    />
                                </div>

                                {/* Content Logic */}
                                <div className={`flex flex-col justify-between py-6 lg:py-10 ${project.reverse ? "lg:order-1" : "lg:order-2"}`}>

                                    {/* Top: Title & Badge */}
                                    <div className="flex items-center justify-between border-b border-slate-200 pb-8">
                                        <h3 className="text-4xl font-medium tracking-tight">{project.title}</h3>
                                        <Badge className="px-8 py-4 text-primary rounded-full text-lg font-medium tracking-tighter" variant="outline">
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
                                            <div key={i} className="space-y-1">
                                                <h5 className="text-3xl md:text-4xl tracking-tighter font-medium text-primary">
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