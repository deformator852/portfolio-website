"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToWorks = () => {
    const element = document.querySelector("#works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <p className="text-muted-foreground text-lg mb-4 tracking-wide">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            AI Automation <span className="text-primary">Expert</span>
            <br />& Builder
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            I help businesses save time and grow by using smart AI solutions for
            webites and automations. I create beautiful, fully working websites
            in just one day, ready for you to use and update easily.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button size="lg" onClick={scrollToWorks}>
              See My Work
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact}>
              Let's Talk
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToWorks}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};
