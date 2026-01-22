"use client";

import { Card, CardContent } from "@/components/ui/card";

const tools = [
  { name: "n8n", category: "Workflow Automation", icon: "🔗" },
  { name: "Make.com", category: "Automation Platform", icon: "⚙️" },
  { name: "Zapier", category: "App Integration", icon: "⚡" },
  { name: "OpenAI", category: "AI & LLMs", icon: "🤖" },
  { name: "Gemini", category: "AI & LLMs", icon: "✨" },
  { name: "Grok", category: "AI & LLMs", icon: "🚀" },
  { name: "Telegram", category: "Messaging & Bots", icon: "✈️" },
  { name: "Discord", category: "Messaging & Bots", icon: "🎮" },
  { name: "Google Sheets", category: "Spreadsheet & Data", icon: "📋" },
  { name: "Notion", category: "Workspace & Notes", icon: "📓" },
  { name: "Airtable", category: "Database", icon: "📊" },
  { name: "JavaScript", category: "Programming", icon: "💛" },
  { name: "Python", category: "Programming", icon: "🐍" },
  { name: "Node.js", category: "Runtime", icon: "🟢" },
];

export const ToolsSection = () => {
  return (
    <section id="tools" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tools & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            The powerful platforms and tools I use to build automation
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
            >
              <CardContent className="p-5 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">{tool.icon}</span>
                </div>
                <h3 className="font-medium text-foreground text-sm mb-1">
                  {tool.name}
                </h3>
                <p className="text-muted-foreground text-xs">{tool.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
