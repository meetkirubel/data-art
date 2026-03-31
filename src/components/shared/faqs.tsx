import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What services does Data Art Consulting offer?",
        answer:
            "We provide technical support, development, system integrations, and training to help your business operate efficiently and grow."
    },
    {
        question: "How quickly can I get support?",
        answer:
            "Our team is available 24/7 to resolve issues and minimize downtime, ensuring your operations stay uninterrupted."
    },
    {
        question: "Do you offer custom development solutions?",
        answer:
            "Yes! We build web apps, mobile apps, and database systems tailored to your business needs and goals."
    },
    {
        question: "Can you help integrate our existing systems?",
        answer:
            "Absolutely. We specialize in connecting multiple platforms and applications so your data flows seamlessly."
    },
    {
        question: "Do you provide training for our staff?",
        answer:
            "Yes, we offer hands-on, personalized training sessions to empower your team with the skills needed to use new tools effectively."
    }
];
export function FAQ() {
    return (
        <section id="faqs" className="py-12 bg-muted">
            <div className="wrapper mx-auto px-4 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/3 space-y-4">
                        <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-primary" />
                            Support
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter">
                            Common <br className="hidden sm:block" /> Questions
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                            Can’t find the answer you need? Our team is here to provide clarity and guidance.
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