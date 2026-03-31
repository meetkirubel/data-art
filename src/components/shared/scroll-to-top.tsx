"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <Button
                onClick={scrollToTop}
                variant="default"
                size="icon"
                className={cn(
                    "bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl transition-all duration-300 rounded-full h-12 w-12",
                    isVisible
                        ? "translate-y-0 opacity-100 scale-100"
                        : "translate-y-10 opacity-0 scale-50 pointer-events-none"
                )}
                aria-label="Scroll to top"
            >
                <ChevronUp className="h-6 w-6 stroke-[2.5px]" />
            </Button>
        </div>
    );
}