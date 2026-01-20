"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "AI Automation Specialist",
    company: "Freelance",
    period: "2025 - Present",
    description:
      "Creating high-ROI AI automations + full websites/apps via chat with Lovable.dev and then connect them to Netlify CMS for easy content management. Turn business needs into fast, working solutions using AI agents, n8n workflows, Make/Zapier and top LLMs → serious time & cost savings for clients.",
    skills: [
      "Lovable",
      "n8n",
      "AI Agents",
      "Grok",
      "OpenAI",
      "Gemini",
      "Airtable",
      "Javascript",
      "Make.com",
      "Zappier",
      "Workflow Automation",
      "React",
      "Next.js",
      "Node.js",
    ],
  },
  {
    title: "Full-Stack Automation Engineer",
    company: "ClearFleet",
    period: "2022 - 2025",
    description:
      "Created efficient Python automation solutions, custom scripts, bots and integration pipelines that eliminated repetitive manual tasks and reduced data processing time by approximately 80%. Additionally designed & built modern responsive websites and web applications using HTML, CSS, JavaScript, React, and Node.js.",
    skills: [
      "Python",
      "Pandas",
      "Playwright",
      "Airtable",
      "AI Agents",
      "OpenAI",
      "Chatbots",
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Node.js",
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
