"use client"

import { useEffect, useState } from "react"
import { useMobileDetection } from "@/hooks/use-mobile-detection"

// Desktop components
import SplitHero from "@/components/split-hero"
import UnifiedNavbar from "@/components/unified-navbar"
import FeatureMasonryGrid from "@/components/feature-masonry-grid"
import TestimonialSection from "@/components/testimonial-section"
import TeamSection from "@/components/team-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"
import ScrollLineController from "@/components/scroll-line-controller"

// Mobile components
import MobileNavbar from "@/components/mobile/mobile-navbar"
import MobileHero from "@/components/mobile/mobile-hero"
import MobileFeatures from "@/components/mobile/mobile-features"
import MobileTestimonials from "@/components/mobile/mobile-testimonials"
import MobileTeam from "@/components/mobile/mobile-team"
import MobileFaq from "@/components/mobile/mobile-faq"
import MobileFooter from "@/components/mobile/mobile-footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const isMobile = useMobileDetection()
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Don't render anything until after hydration
  if (!mounted) return null
  
  if (isMobile) {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <MobileNavbar />
        <MobileHero />
        <MobileFeatures />
        <MobileTestimonials />
        <MobileTeam />
        <MobileFaq />
        <MobileFooter />
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Scrolling Line Animation Controller */}
      <ScrollLineController />

      {/* Unified Navbar */}
      <UnifiedNavbar />

      {/* Split Hero Section */}
      <section id="hero" className="scroll-mt-24">
        <SplitHero
          headline="No Brokers. No Delays. Just Trade"
          subheadline="An AI-powered app eliminates middlemen and delays and streamlines the entire import/export process. Ensuring faster, cost-effective customs clearance ~ right at your fingertips!"
          ctaText="Get Early Access"
          videoSrc="/assets/videos/sample.mp4"
        />
      </section>

      {/* Feature Masonry Grid */}
      <section id="features">
        <FeatureMasonryGrid />
      </section>

      {/* Testimonial Section */}
      <section id="testimonials">
        <TestimonialSection />
      </section>

      {/* Team Section */}
      <section id="team">
        <TeamSection />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FaqSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}