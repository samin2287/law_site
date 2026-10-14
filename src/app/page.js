import HeroSection from "@/components/home/HeroSection";
import PracticePillarsSection from "@/components/home/PracticePillarsSection";
import FirmLegacySection from "@/components/home/FirmLegacySection";
import FeaturedLawyersSection from "@/components/home/FeaturedLawyersSection";
import LatestInsightsSection from "@/components/home/LatestInsightsSection";
import ConsultationCtaSection from "@/components/home/ConsultationCtaSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <PracticePillarsSection />
      <FirmLegacySection />
      <FeaturedLawyersSection />
      <LatestInsightsSection />
      <ConsultationCtaSection />
    </div>
  );
}
