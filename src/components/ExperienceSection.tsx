"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Automation Specialist",
    company: "Freelance",
    period: "2025 - Present",
    description:
      "Delivering end-to-end automation workflows and intelligent systems using no-code/low-code platforms (n8n, Make.com, Zapier) and Javascript. Built chatbots, lead capturing automation, real-time notification systems, marketing automation, CRM synchronization, automated reporting dashboards, WordPress automation, recruitment & candidate processing, and many other projects. Integrated third-party tools and APIs including Airtable, HubSpot, etc.",
    skills: [
      "AI Agents",
      "Slack",
      "Notion",
      "Telegram",
      "Node.js",
      "Google Sheets",
      "Whatsapp",
      "Messenger",
      "Supabase",
      "HubSpot",
      "Airtable",
      "Javascript",
      "Grok",
      "OpenAI",
      "Gemini",
      "Zappier",
      "n8n",
    ],
  },
  {
    title: "Automation Engineer",
    company: "ClearFleet",
    period: "2021 - 2025",
    description:
      "Delivered and implemented high-ROI automations that saved businesses significant time and money. Converted real-world needs into fast, scalable solutions with AI agents, n8n workflows, Make.com/Zapier and leading LLMs (Grok, OpenAI, Gemini). Specialized in intelligent systems like automated data handling, multi-tool integrations, and AI decision-making - all built for reliability and easy client handover.",
    skills: [
      "n8n",
      "Telegram",
      "HubSpot",
      "Slack",
      "Make.com",
      "Zapier",
      "Airtable",
      "Google Sheets",
      "Whatsapp",
      "Messenger",
      "AI Agents",
      "OpenAI",
      "Chatbots",
      "Javascript",
      "Node.js",
      "Supabase",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            My Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 md:-translate-x-1/2 mt-6" />

                {/* Content */}
                <div
                  className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {exp.period}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary text-sm mb-3">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
