import { EcosystemSection } from "@/components/EcosystemSection";
import { HeroSection } from "@/components/HeroSection";
import { NetworkSection } from "@/components/NetworkSection";
import { OperatingSystemShowcase } from "@/components/OperatingSystemShowcase";
import { PartnersSection } from "@/components/PartnersSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { TechnologyPanel } from "@/components/TechnologyPanel";
import { VideoShowcase } from "@/components/VideoShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-flextock-navy text-flextock-foreground">
      <HeroSection />
      <VideoShowcase />
      <OperatingSystemShowcase />
      <EcosystemSection />
      <TechnologyPanel />
      <NetworkSection />
      <PartnersSection />
      <ReviewsSection />
    </main>
  );
}
