import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { WorksSection } from "./components/WorksSection";
import { ToolsSection } from "./components/ToolsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ExpertiseSection />
        <WorksSection />
        <ToolsSection />
        <ContactSection />
        <Footer />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
