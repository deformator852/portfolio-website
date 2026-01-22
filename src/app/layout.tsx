import "../index.css";
import "../App.css";
import type { Metadata } from "next";

/* eslint-disable react-refresh/only-export-components */

export const metadata: Metadata = {
  title: "Nikita Kostenko | Freelance Automation & AI Workflow Expert",
  description:
    "Workflow automation developer helping businesses save time, eliminate errors & grow revenue with n8n, Make.com, Zapier, chatbots, Airtable and AI-powered integrations.",
  authors: [{ name: "Nikita Kostenko" }],
  keywords: [
    "workflow automation",
    "n8n developer",
    "Telegram bot",
    "Airtable",
    "no-code automation",
    "low-code automation",
    "AI integrations",
    "Zapier",
    "Make.com",
    "business automation",
    "chatbot developer",
    "automation engineer",
    "freelance automation expert",
    "process automation",
    "AI workflow",
    "automation solutions",
    "custom automations",
    "automation consulting",
    "automation services",
    "automation specialist",
  ],
  openGraph: {
    title: "Nikita Kostenko | Automation & AI Workflow Expert",
    description:
      "I build reliable automation that cuts manual work, powers 24/7 chatbots, and integrates Airtable, APIs, and AI.",
    siteName: "Nikita Kostenko – Freelance Workflow Automation Expert",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/meta.webp",
        width: 1200,
        height: 630,
        alt: "Freelance automation and AI workflow expert building business process automations",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body>{children}</body>
    </html>
  );
}
