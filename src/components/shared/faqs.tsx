import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How does the 50% cost reduction work?",
        answer: "We audit your current cloud infrastructure and automate repetitive manual tasks. Most clients see a significant drop in operational overhead within the first 3 months of implementation."
    },
    {
        question: "Is this suitable for early-stage startups?",
        answer: "Absolutely. We specialize in helping companies choose 'speed over uncertainty,' providing the technical foundation you need to scale without the typical growing pains."
    },
    {
        question: "What kind of support can we expect?",
        answer: "Every partner gets a dedicated Slack channel and weekly syncs. We operate as an extension of your team, not just a third-party vendor."
    },
    {
        question: "Do you offer custom integrations?",
        answer: "Yes. Whether it's AWS, Cloudflare, or proprietary internal tools, we build bespoke connectors to ensure your data flows seamlessly across your entire stack."
    }
];

export function FAQ() {
    return (
        <section className="py-12 bg-muted">
            <div className="container mx-auto px-4 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Side: Header Logic */}
                    <div className="lg:w-1/3 space-y-4">
                        <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-primary" />
                            Support
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter">
                            Common <br /> Questions
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                            Can’t find what you’re looking for? Reach out to our team for a personalized consultation.
                        </p>
                    </div>

                    {/* Right Side: Accordion */}
                    <div className="lg:w-2/3">
                        <Accordion type="single" collapsible className="w-full border-t border-slate-200">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 py-2">
                                    <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:no-underline hover:text-primary transition-colors py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </div>
        </section>
    );
}