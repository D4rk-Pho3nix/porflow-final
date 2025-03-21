"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import EarlyAccessModal from "@/components/early-access-modal"

interface SplitHeroProps {
  headline?: string
  subheadline?: string
  ctaText?: string
  videoSrc?: string
}

export default function SplitHero({
  headline = "Experience the future of digital design",
  subheadline = "A minimalist approach with subtle glass-morphism effects and neon green highlights for a striking visual experience.",
  ctaText = "Get Early Access",
  videoSrc = "/assets/videos/Main.mp4",
}: SplitHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    // Simpler video playback logic
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.muted = true // Must be muted for autoplay
      
      // Play the video
      videoElement.play().catch(error => {
        console.error("Video play error:", error)
        setVideoError(true)
      })
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  }

  return (
    <section className="relative flex h-screen w-full overflow-hidden bg-black px-[5%] py-20">
      {/* Left Column - 40% */}
      <motion.div
        className="flex w-full flex-col justify-center gap-6 md:w-2/5 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-monument text-[clamp(40px,5vw,64px)] font-bold leading-tight text-white"
          variants={itemVariants}
        >
          {headline}
        </motion.h1>

        <motion.p 
          className="max-w-[500px] text-[clamp(16px,2vw,20px)] text-[#888888] whitespace-pre-line" 
          variants={itemVariants}
        >
          {subheadline}
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button
            id="main-cta-button"
            className="bg-[#CCFF00] px-8 py-6 text-base font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(204,255,0,0.5)]"
            size="lg"
            onClick={() => setIsModalOpen(true)}
          >
            {ctaText}
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Column - 60% */}
      <motion.div
        className="hidden w-3/5 items-center justify-center md:flex z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.div
          className="relative h-[812px] w-[375px] overflow-hidden rounded-[40px] border-[12px] border-[#222222] bg-black shadow-[0_0_40px_rgba(0,0,0,0.3)]"
          style={{ transform: "rotate(-5deg)" }}
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{ 
            repeat: Number.POSITIVE_INFINITY, 
            duration: 4, 
            ease: "easeInOut"
          }}
        >
          {/* Phone Frame */}
          <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[28px] shadow-inner">
            <div className="absolute left-1/2 top-0 h-[30px] w-[150px] -translate-x-1/2 rounded-b-[14px] bg-[#222222]"></div>
          </div>

          {/* Simplified Video Implementation */}
          {!videoError ? (
            <video 
              ref={videoRef} 
              className="h-full w-full rounded-[28px] object-cover"
              autoPlay 
              muted
              loop
              playsInline
              onError={() => setVideoError(true)}
              src="/assets/videos/Main.mp4"
            />
          ) : (
            // Fallback when video fails
            <div className="flex h-full w-full items-center justify-center bg-black">
              <p className="text-center text-gray-400 p-4">
                Video not available
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Background Glow Effects */}
      <div className="absolute -left-[300px] top-1/4 h-[500px] w-[500px] rounded-full bg-[#CCFF00]/5 blur-[120px]"></div>
      <div className="absolute -right-[200px] bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#CCFF00]/5 blur-[100px]"></div>

      <EarlyAccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}

