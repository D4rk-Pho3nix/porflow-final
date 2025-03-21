"use client"

import { useRef, useState, useCallback } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { FileText, MapPin, BarChart3, QrCode, MessageSquare, Lock, Shield, Calculator, X, Play } from "lucide-react"

// Mobile-optimized features data with video links
const mobileFeatures = [
  {
    id: "document-management",
    icon: FileText,
    title: "AI-Powered Document Management",
    description: "Automates document collection and compliance checks.",
    videoSrc: "/assets/videos/Manual Entry.mp4", // Replace with actual video paths
  },
  {
    id: "shipment-tracking",
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track shipments and view customs clearance progress.",
    videoSrc: "/assets/videos/Tracking shipment.mp4",
  },
  {
    id: "tax-calculator",
    icon: Calculator,
    title: "AI-Driven Tax Calculator",
    description: "Calculates duties based on HSN codes and exemptions.",
    videoSrc: "/assets/videos/Tax Calculator.mp4",
  },
  {
    id: "qr-inspection",
    icon: QrCode,
    title: "QR-Based Clearance",
    description: "Scan QR codes to access all necessary documents.",
    videoSrc: "/assets/videos/Scan to Track.mp4",
  },
  {
    id: "feedback-system",
    icon: MessageSquare,
    title: "Instant Feedback System",
    description: "Request corrections directly within the app.",
    videoSrc: "/assets/videos/notif.mp4",
  },
  {
    id: "secure-storage",
    icon: Shield,
    title: "Secure Data Storage",
    description: "All sensitive information is encrypted and protected.",
    videoSrc: "/assets/videos/Main.mp4",
  },
]

export default function MobileFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [activeFeature, setActiveFeature] = useState<(typeof mobileFeatures)[0] | null>(null)
  const [videoError, setVideoError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Handle feature click to open the popup with enhanced feedback
  const handleFeatureClick = useCallback((feature: (typeof mobileFeatures)[0]) => {
    setIsLoading(true)
    setVideoError(false)
    setActiveFeature(feature)
  }, [])

  // Close the popup
  const closePopup = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setActiveFeature(null)
    setIsLoading(false)
  }, [])

  // Handle video loaded
  const handleVideoLoaded = useCallback(() => {
    setIsLoading(false)
  }, [])

  // Handle video error
  const handleVideoError = useCallback(() => {
    setVideoError(true)
    setIsLoading(false)
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-[#121212] px-5 py-16" id="mobile-features">
      <div className="mx-auto max-w-md">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="font-monument text-3xl font-bold text-white mb-3">
            How It <span className="text-[#CCFF00]">Works</span>
          </h2>
          <p className="text-base text-[#888888]">
            Our platform streamlines customs clearance with AI-powered features.
          </p>
        </motion.div>

        {/* Mobile Feature Grid - Single column with click indicators */}
        <div className="space-y-4">
          {mobileFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1A1A] border border-[#333] rounded-xl p-5 relative cursor-pointer hover:bg-[#222] transition-colors active:bg-[#252525]"
              onClick={() => handleFeatureClick(feature)}
              aria-label={`View ${feature.title} demo`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-[#CCFF00]/10">
                  <feature.icon className="h-6 w-6 text-[#CCFF00]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-monument text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#888888]">{feature.description}</p>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#CCFF00]/20 flex items-center justify-center">
                  <Play className="h-4 w-4 text-[#CCFF00] ml-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Popup with App Frame - Enhanced */}
      <AnimatePresence>
        {activeFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Feature title above the app frame */}
              <div className="mb-4 text-center">
                <h3 className="font-monument text-xl font-bold text-white">
                  {activeFeature.title}
                </h3>
              </div>
              
              {/* App Frame Container */}
              <div className="relative h-[500px] w-[250px] bg-black rounded-[30px] border-[8px] border-[#222] shadow-lg overflow-hidden">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[20px] w-[80px] bg-[#222] rounded-b-lg z-20"></div>
                
                {/* Phone Frame */}
                <div className="absolute inset-0 rounded-[22px] z-10 pointer-events-none border border-[#333]"></div>
                
                {/* Video Container - Preserving original ratio */}
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  {isLoading && !videoError && (
                    <div className="flex flex-col items-center justify-center text-center p-4">
                      <div className="w-8 h-8 border-2 border-[#CCFF00] border-t-transparent rounded-full animate-spin mb-2"></div>
                      <p className="text-[#888] text-sm">Loading video...</p>
                    </div>
                  )}
                  
                  {!videoError ? (
                    <video
                      ref={videoRef}
                      className={`max-h-full max-w-full object-contain ${isLoading ? 'hidden' : 'block'}`}
                      controls
                      autoPlay
                      playsInline
                      src={activeFeature.videoSrc}
                      onLoadedData={handleVideoLoaded}
                      onError={handleVideoError}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center p-4">
                      <BarChart3 className="w-12 h-12 text-[#666] mb-2" />
                      <p className="text-[#888] text-sm">
                        Feature video not available. <br />
                        Please try again later.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Close button - Enhanced for better tappability */}
              <button 
                className="mt-6 px-5 py-3 bg-[#1A1A1A] text-white rounded-lg border border-[#333] flex items-center justify-center shadow-lg hover:bg-[#222] active:bg-[#252525]"
                onClick={closePopup}
              >
                <X className="w-4 h-4 mr-2" />
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Glow Effect - Reduced for mobile */}
      <div className="absolute -right-[150px] top-1/4 h-[300px] w-[300px] rounded-full bg-[#CCFF00]/5 blur-[100px]"></div>
    </section>
  )
} 