"use client";

import { MapPin, Mail, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/30 flex items-center justify-center">
                  <span className="text-6xl">🤖</span>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full -z-10" />
          </div>

          {/* About Content */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Hello! I'm an AI Automation & Web Specialist
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I specialize in building intelligent automation & web solutions
              that transform how businesses operate. From simple task automation
              to complex AI-powered workflows, I help companies eliminate
              repetitive work and focus on what matters.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With expertise in no-code/low-code platforms like Lovable, n8n,
              Make.com, and Zapier, I create custom solutions that integrate
              seamlessly with your existing tools and scale with your business.
              My solid foundation in HTML, CSS, JavaScript and Node.js, allows
              me to write custom code whenever needed - for unique features,
              performance tweaks, or advanced integrations that go beyond
              standard no-code capabilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Card className="bg-background/50 border-border">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    Remote Worldwide
                  </span>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-border">
                <CardContent className="p-4 flex items-center gap-3">
                  <Mail className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    kostneko30@gmail.com
                  </span>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-border">
                <CardContent className="p-4 flex items-center gap-3">
                  <Briefcase className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Available for hire
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
