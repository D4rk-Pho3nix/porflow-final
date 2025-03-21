"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import EarlyAccessModal from "@/components/early-access-modal"

export default function MobileHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Simpler video playback logic for mobile
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

  return (
    <section className="relative flex flex-col min-h-screen bg-black px-5 pt-24 pb-16">
      {/* Mobile Text Content - Top Aligned */}
      <motion.div
        className="flex flex-col gap-6 text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="font-monument text-4xl font-bold leading-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          No Brokers. No Delays. Just Trade
        </motion.h1>

        <motion.p 
          className="text-[#888888] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          An AI-powered app eliminates middlemen and delays and streamlines the entire import/export process.
          <br /><br />
          Ensuring faster, cost-effective customs clearance ~ right at your fingertips!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            className="bg-[#CCFF00] px-8 py-4 text-base font-medium text-black rounded-lg transition-all duration-300 hover:bg-[#BBEE00]"
            onClick={() => setIsModalOpen(true)}
          >
            Get Early Access
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile Phone Display */}
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div
          className="relative h-[500px] w-[240px] overflow-hidden rounded-[30px] border-[8px] border-[#222222] bg-black shadow-[0_0_30px_rgba(0,0,0,0.3)]"
          animate={{ y: [0, -5, 0, 5, 0] }}
          transition={{ 
            repeat: Number.POSITIVE_INFINITY, 
            duration: 4, 
            ease: "easeInOut"
          }}
        >
          {/* Phone Frame */}
          <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[22px] shadow-inner">
            <div className="absolute left-1/2 top-0 h-[20px] w-[100px] -translate-x-1/2 rounded-b-[10px] bg-[#222222]"></div>
          </div>

          {/* Video for Mobile */}
          {!videoError ? (
            <video 
              ref={videoRef} 
              className="h-full w-full rounded-[22px] object-cover"
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

      {/* Background Glow Effects - Reduced for mobile */}
      <div className="absolute -left-[150px] top-1/4 h-[300px] w-[300px] rounded-full bg-[#CCFF00]/5 blur-[100px]"></div>
      <div className="absolute -right-[150px] bottom-1/4 h-[300px] w-[300px] rounded-full bg-[#CCFF00]/5 blur-[100px]"></div>

      <EarlyAccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
} 