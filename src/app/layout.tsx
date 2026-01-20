import "../index.css";
import "../App.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Nikita Kostenko Portfolio Website | Automation & Web Expert | AI
          Workflows + Websites Delivered in 1 Day
        </title>
      </head>

      <body>
        {children}
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  );
}
