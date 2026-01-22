"use client";

import { Workflow, Bot, Zap, Link2, Brain, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const expertiseAreas = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Designing end-to-end automated workflows that connect your apps and eliminate repetitive tasks.",
  },
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    description:
      "Building intelligent AI assistants that handle customer support, lead generation, and data processing.",
  },
  {
    icon: Link2,
    title: "API Integrations",
    description:
      "Connecting disparate systems and creating seamless data flows between your business tools.",
  },
  {
    icon: Zap,
    title: "Revenue-Focused Automations",
    description:
      "Creating AI-powered systems that cut manual work, eliminate errors, automate sales/support, and directly increase business revenue.",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "Leveraging AI models for content generation, data analysis, and intelligent decision-making.",
  },
  {
    icon: Clock,
    title: "Process Optimization",
    description:
      "Analyzing business processes to identify automation opportunities and maximize efficiency.",
  },
];

export const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            My Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I help businesses automate, integrate, and scale with cutting-edge
            AI and no-code solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              className="bg-background/80 border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
