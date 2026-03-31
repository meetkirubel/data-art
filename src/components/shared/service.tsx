import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import img1 from "@/asset/ser1.svg";
import img2 from "@/asset/ser2.svg";
import img3 from "@/asset/ser3.png";
import img4 from "@/asset/ser4.svg";

// The 6 Services from your data
const SERVICES = [
    {
        title: "Technical Support",
        description: "24/7 assistance to resolve issues quickly and keep your business running.",
        image: img1,
    },
    {
        title: "Development",
        description: "Custom web, app, and database solutions designed to fit your business needs.",
        image: img2,
    },
    {
        title: "Integrations",
        description: "Connect your systems and apps seamlessly for smoother workflows.",
        image: img3
    },
    {
        title: "Training",
        description: "Hands-on sessions to help your team master new tools and technologies.",
        image: img4
    }
];


export function Services() {
    return (
        <section id="services" className="bg-background pt-24">
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

                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-contain" // Fixed sizing for the icon
                                />
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