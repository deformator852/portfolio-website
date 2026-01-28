"use client";

import { Mail, Linkedin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "kostneko30@gmail.com",
    href: "mailto:kostneko30@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Nikita Kostenko",
    href: "https://www.linkedin.com/in/nikita-kostenko141/",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to automate your business processes? Reach out through any of
            these channels and let's discuss how I can help.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6 sm:grid-cols-2">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="pt-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {contact.label}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
