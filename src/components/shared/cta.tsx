import hero from "@/asset/hero1.jpg";
import icon1 from "@/asset/icon1.png";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Call, Call02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar, FileText, Headphones, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";

const contactFeatures = [
  {
    title: "1-on-1 Call",
    link: {
      href: "tel:+18004212682",
      label: "+1 800 421 26 82"
    },
    // Added w-12 h-12 to keep the icon size structured and consistent with Lucide icons
    icon: <HugeiconsIcon icon={Call02Icon} className="w-8 h-8 text-primary mb-2" />,
  },
  {
    title: "Technical Audit",
    link: {
      href: "",
      label: ""
    }, icon: <FileText className="w-8 h-8 text-primary mb-2" />,
  },
  {
    title: "Dedicated Support",
    link: {
      href: "",
      label: ""
    }, icon: <MessageSquare className="w-8 h-8 text-primary mb-2" />,
  },
  {
    title: "Weekly Syncs",
    link: {
      href: "",
      label: ""
    }, icon: <Calendar className="w-8 h-8 text-primary mb-2" />,
  },
];

export default function CTA() {
  return (
    // FIX: Removed min-h-[80vh]. 
    // Used py-24 (mobile) and py-32 (desktop) to create the "large" section feel 
    // while remaining 100% stable on all devices.
    <section className="relative w-full flex items-center justify-center py-20 md:py-32 px-4 md:px-8">

      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/30 z-10" />
        <Image
          src={hero}
          alt="Hero Background"
          placeholder="blur"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Foreground Container */}
      <div className="relative z-20 wrapper bg-background rounded-[2.5rem] p-8 lg:p-16 shadow-2xl border border-slate-100">

        {/* Header Badge */}
        <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] flex items-center gap-2 mb-10">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Support & Contact
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column */}
          <div className="flex flex-col gap-8 justify-between">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.1]">
                Ready to Start <br /> Your Journey?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Get in touch with Data Arts Consulting today. We'll help you build the technical foundation you need to scale.
              </p>
            </div>

            {/* Primary Action Card - Fixed margin for mobile stacking */}
            <Card className="mt-12 lg:mt-0">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold tracking-tight">
                  Book a 30-Minute Call
                </CardTitle>
                <CardDescription className="text-base">
                  Ready to take your business to the next level? Pick a time that works for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="https://form.jotform.com/242335134954456" target="_blank">
                  <Button className="rounded-full px-4 py-6 text-base w-full sm:w-auto hover:scale-105 transition-all">
                    <Calendar className="mr-2 h-5 w-5" /> Schedule a Call
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactFeatures.map((feature, index) => (
              <Card key={index} className="hover:border-primary/30 transition-all flex flex-col justify-between">
                <CardHeader className="pb-4">
                  {feature.icon}
                  <CardTitle className="text-lg font-semibold tracking-tight">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link className="text-primary text-lg font-medium" href={feature.link.href}> {feature.link.label}</Link>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}