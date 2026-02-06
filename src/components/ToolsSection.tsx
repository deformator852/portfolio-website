"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Make, N8n, Zapier, OpenAI, Gemini, Grok } from "@lobehub/icons";
import Telegram from "./ui/telegram";
import WhatsApp from "./ui/whatsapp";
import FacebookMessenger from "./ui/facebook-messenger";
const tools = [
  {
    name: "n8n",
    category: "Automation",
    icon: <N8n.Color size={24}></N8n.Color>,
  },
  {
    name: "Make.com",
    category: "Automation",
    icon: <Make.Color size={24}></Make.Color>,
  },
  {
    name: "Zapier",
    category: "Automation",
    icon: <Zapier.Avatar size={24}></Zapier.Avatar>,
  },
  { name: "OpenAI", category: "AI", icon: <OpenAI size={24}></OpenAI> },
  {
    name: "Gemini",
    category: "AI",
    icon: <Gemini.Color size={24}></Gemini.Color>,
  },
  { name: "Grok", category: "AI", icon: <Grok size={24}></Grok> },
  {
    name: "Telegram",
    category: "Messaging & Bots",
    icon: <Telegram size={24}></Telegram>,
  },
  {
    name: "WhatsApp",
    category: "Messaging & Bots",
    icon: <WhatsApp size={24}></WhatsApp>,
  },
  {
    name: "Messenger",
    category: "Messaging & Bots",
    icon: <FacebookMessenger size={24}></FacebookMessenger>,
  },
  // { name: "Slack", category: "Messaging & Bots", icon: "💼" },
  // { name: "Google Sheets", category: "Google Workspace", icon: "📋" },
  // { name: "Gmail", category: "Google Workspace", icon: "📧" },
  // { name: "Google Drive", category: "Google Workspace", icon: "🗂️" },
  // { name: "Notion", category: "Workspace & Notes", icon: "📓" },
  // { name: "Airtable", category: "Database", icon: "📊" },
  // { name: "PostgreSQL", category: "Database", icon: "🐘" },
  // { name: "Supabase", category: "Database", icon: "🗄️" },
  // { name: "Pocketbase", category: "Database", icon: "🗄️" },
  // { name: "SQLite", category: "Database", icon: "🗄️" },
  // { name: "JavaScript", category: "Programming", icon: "💛" },
  // { name: "Node.js", category: "Programming", icon: "🟢" },
];
const categories = [
  "All",
  "AI",
  "Automation",
  "Database",
  "Development",
  "Messaging & Bots",
  "Programming",
  "Google Workspace",
];

export const ToolsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools =
    activeCategory === "All"
      ? tools
      : tools.filter((tool) => tool.category === activeCategory);

  return (
    <section id="tools" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tools & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            The powerful platforms and tools I use to build automation
            solutions.
          </p>
        </div>

        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <ScrollArea className="max-w-full whitespace-nowrap">
              <TabsList className="inline-flex h-auto bg-transparent gap-2 p-1">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="px-4 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-muted text-muted-foreground hover:bg-muted/80 transition-colors flex-shrink-0"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex gap-4 pb-4">
                {filteredTools.map((tool, index) => (
                  <Card
                    key={`${tool.name}-${index}`}
                    className="bg-card border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 group flex-shrink-0 w-32"
                  >
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                        {/* <span className="text-xl"></span> */}
                        {tool.icon}
                      </div>
                      <h3 className="font-medium text-foreground text-sm mb-1 truncate">
                        {tool.name}
                      </h3>
                      {/* <p className="text-muted-foreground text-xs">
                        {tool.category}
                      </p> */}
                    </CardContent>
                  </Card>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
