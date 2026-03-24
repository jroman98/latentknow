import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LatestWritings from "@/components/LatestWritings";
import RadarSection from "@/components/RadarSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import AboutSection from "@/components/AboutSection";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col relative w-full overflow-hidden">
        {/* Core global grid for entire page background consistency */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-0" style={{
          backgroundImage: "radial-gradient(var(--muted) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />

        <Hero />
        <LatestWritings />
        <RadarSection />
        <FeaturedProjectsSection />
        <AboutSection />
      </main>
    </>
  );
}
