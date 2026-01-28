import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const works = [
  {
    title: "Telegram crypto signals automation",
    description:
      "Automated system for sending crypto trading signals via Telegram",
    github: "https://deformator852.github.io/telegram-crypto-signals-bot/",
  },
  {
    title: "Recruitment Automation System",
    description:
      "Automates the handling of job applications for a Ukrainian recruitment agency",
    github:
      "https://deformator852.github.io/automated-recruitment-application-processing/",
  },
  {
    title: "IdeaFlow – Slack → Notion + Airtable n8n Automation",
    description:
      "Quickly captures and stores ideas shared in Slack - no need to switch apps or write long notes.",
    github: "https://deformator852.github.io/ideaflow-slack-notion-airtable/",
  },
  {
    title: "Lead Capturing Automation",
    description:
      "An automated lead capture system for a recruitment agency with Zapier, Slack and HubSpot",
    github: "https://deformator852.github.io/zapier-lead-capturing/",
  },
  {
    title: "Telegram AI Customer Support Bot",
    description:
      "An AI-powered customer support bot for Telegram that handles user inquiries automatically",
    github: "https://deformator852.github.io/telegram-ai-customer-support/",
  },
];

export const WorksSection = () => {
  return (
    <section id="works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Works
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Projects I've built and contributed to
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {works.map((work, index) => (
            <a
              key={index}
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 group-hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {work.description}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
