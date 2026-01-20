import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const works = [
  {
    title: "AI Chatbot Integration",
    description:
      "Automated customer support chatbot using GPT-4 and custom workflows",
    github: "https://github.com/nikitakostenko/ai-chatbot",
  },
  {
    title: "Data Pipeline Automation",
    description: "ETL pipeline for processing and analyzing large datasets",
    github: "https://github.com/nikitakostenko/data-pipeline",
  },
  {
    title: "Workflow Automation Tool",
    description: "No-code automation platform for business processes using n8n",
    github: "https://github.com/nikitakostenko/workflow-automation",
  },
  {
    title: "E-commerce Bot",
    description:
      "Telegram bot for automated order processing and notifications",
    github: "https://github.com/nikitakostenko/ecommerce-bot",
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
