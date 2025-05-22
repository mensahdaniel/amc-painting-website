
import HeroSection from "@/components/sections/HeroSection";
import Services from "@/components/sections/Services";
import Impact from "@/components/sections/Impact";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import Publications from "@/components/sections/Publications";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <HeroSection />

      {/* Services section */}
      <Services />

      {/* Impact section */}
      <Impact />

      {/* Testimonial section */}
      <Testimonials />

      {/* CTA section */}
      <CTASection />

      {/* Latest Publications */}
      <Publications />
    </>
  );
}
