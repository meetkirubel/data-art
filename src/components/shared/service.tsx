import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import img from "@/asset/icon1.png";

// The 6 Services from your data
const SERVICES = [
    {
        title: "Technical Support",
        description: "24/7 assistance to resolve issues quickly and keep your business running.",
        image: ""
    },
    {
        title: "Development",
        description: "Custom web, app, and database solutions designed to fit your business needs.",
        image: ""
    },
    {
        title: "Integrations",
        description: "Connect your systems and apps seamlessly for smoother workflows.",
        image: ""
    },
    {
        title: "Training",
        description: "Hands-on sessions to help your team master new tools and technologies.",
        image: ""
    }
];


export function Services() {
    return (
        <section className="bg-background py-24">
            <div className="wrapper mx-auto lg:px-8">

                {/* Header - Consistent with your other sections */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
                    <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Our Solutions
                    </p>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1]">
                        What We Do
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                        Reliable solutions to keep your business running smoothly.
                    </p>
                </div>

                {/* The Grid - Structured and Responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SERVICES.map((service, index) => (
                        <Card
                            key={index}
                            className="group border-none bg-muted p-4 rounded-2xl"
                        >
                            {/* Image/Icon Slot - Structured Height */}
                            <div className="flex items-center justify-center h-64 lg:h-96 transition-transform duration-500 group-hover:scale-110">
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
                            <div className="bg-background p-6 rounded-2xl shadow-sm min-h-20 flex flex-col justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <CardTitle className="text-2xl font-medium tracking-tight mb-2 ">
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