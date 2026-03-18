import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import img from "@/asset/icon1.png";

// The 6 Services from your data
const SERVICES = [
    {
        title: "Medicaid Behavioral Health",
        description: "Optimized large-scale Medicaid reporting and risk analytics workflows to improve processing efficiency.",
        image: "https://images.unsplash.com/photo-1576091160550-2173bdb999ef?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Healthcare Workforce Retention",
        description: "Developed longitudinal models tracking provider deployment and retention trends in underserved regions.",
        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop",
    },
    {
        title: "Market Data Reconciliation",
        description: "Automated reconciliation of multi-source pricing data supporting portfolio analysis and investment workflows.",
        image: "https://images.unsplash.com/photo-1611974714131-77d04e9c7e7b?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Digital Water Reporting",
        description: "Implemented centralized analytics for municipal water operations, enabling visibility into infrastructure performance.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Enterprise Modernization",
        description: "Led modernization of legacy systems through cloud architecture redesign and workflow automation.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    },
    {
        title: "Digital Infrastructure",
        description: "Advanced analytics and platform optimization across utilities and public sector environments.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2026&auto=format&fit=crop",
    },
];


export function Services() {
    return (
        <section className="bg-background py-24">
            <div className="container mx-auto px-4 lg:px-8">

                {/* Header - Consistent with your other sections */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
                    <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Our Solutions
                    </p>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1]">
                        Selected Engagements
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                        Representative experience in delivering advanced analytics and digital infrastructure
                        across healthcare, finance, and the public sector.
                    </p>
                </div>

                {/* The Grid - Structured and Responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SERVICES.map((service, index) => (
                        <Card
                            key={index}
                            className="group border-none bg-muted p-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Image/Icon Slot - Structured Height */}
                            <div className="flex items-center justify-center h-64 lg:h-72 transition-transform duration-500 group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-badge-check h-24 w-24 text-primary/20" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                                {/* <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={"100"}
                                    height={"100"}
                                    className="w-40 h-40 object-contain" // Fixed sizing for the icon
                                /> */}
                            </div>

                            {/* Content Card - The "Floating" Look */}
                            <div className="bg-background p-8 rounded-[1.8rem] shadow-sm min-h-20 flex flex-col justify-center">
                                <CardTitle className="text-2xl font-medium tracking-tight mb-4 text-slate-900">
                                    {service.title}
                                </CardTitle>
                                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                                    {service.description}
                                </CardDescription>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}