"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { FileText, MapPin, BarChart3, QrCode, MessageSquare, Lock, Shield, Calculator } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

// Updated feature data without placeholders
const features = [
  {
    id: "document-management",
    icon: FileText,
    title: "AI-Powered Document Management",
    description:
      "Automates document collection, verification, and compliance checks, reducing paperwork errors and speeding up approvals.",
    size: "regular", // 1x1
    videoSrc: "/assets/videos/Manual Entry.mp4",
    imageSrc: "", // Removed placeholder
    slideDirection: "left", // only horizontal or vertical slides
    delay: 0.1,
    hasImage: false,
  },
  {
    id: "shipment-tracking",
    icon: MapPin,
    title: "Real-Time Shipment Tracking",
    description:
      "Allows importers/exporters to track their shipments in real time and view the exact stage of customs clearance.",
    size: "wide", // 2x1
    videoSrc: "/assets/videos/Tracking shipment.mp4",
    imageSrc: "", // Removed placeholder
    slideDirection: "right",
    delay: 0.3,
    hasImage: false,
  },
  {
    id: "tax-calculator",
    icon: Calculator,
    title: "AI-Driven Tax & Duty Calculator",
    description:
      "Automatically calculates import/export duties based on HSN codes, exemptions, and trade agreements, ensuring accurate tax estimates.",
    size: "tall", // 1x2
    videoSrc: "/assets/videos/Tax Calculator.mp4",
    imageSrc: "", // Removed tax calculator placeholder
    slideDirection: "bottom",
    delay: 0.5,
    hasImage: false,
  },
  {
    id: "qr-inspection",
    icon: QrCode,
    title: "QR-Based Customs Inspection & Clearance",
    description:
      "Customs officers and Importers/Exporters can scan a shipment's QR code to instantly access and review all necessary documents, reducing processing time.",
    size: "large", // 2x2
    videoSrc: "/assets/videos/Scan to Track.mp4",
    imageSrc: "", // Removed placeholder
    slideDirection: "left",
    delay: 0.2,
    hasImage: false,
  },
  {
    id: "feedback-system",
    icon: MessageSquare,
    title: "Instant Feedback System from Customs Officers",
    description:
      "Officers can request document corrections or additional information directly within the app, expediting the clearance process.",
    size: "regular", // 1x1
    videoSrc: "/assets/videos/notif.mp4",
    imageSrc: "", // Removed placeholder
    slideDirection: "bottom",
    delay: 0.35,
    hasImage: false,
  },
  {
    id: "secure-storage",
    icon: Shield,
    title: "Secure & Encrypted Data Storage",
    description:
      "Ensures all business and trade-sensitive information is stored securely with encryption and compliance with global data protection laws.",
    size: "wide", // 2x1
    videoSrc: "/assets/videos/Main.mp4",
    imageSrc: "", // Already empty
    slideDirection: "right",
    delay: 0.45,
    hasImage: false, // Changed to false
  },
  {
    id: "empty-space-1",
    icon: Lock,
    title: "",
    description: "",
    size: "tall", // 1x2
    videoSrc: "",
    imageSrc: "",
    slideDirection: "left",
    delay: 0.25,
    hasImage: false,
    isEmpty: true,
  },
  {
    id: "empty-space-2",
    icon: BarChart3,
    title: "",
    description: "",
    size: "regular", // 1x1
    videoSrc: "",
    imageSrc: "",
    slideDirection: "bottom",
    delay: 0.4,
    hasImage: false,
    isEmpty: true,
  },
]

// Video popup component with mac browser styling
const VideoPopup = ({
  isOpen,
  onClose,
  videoSrc,
  title,
}: {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  title: string
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Play video when popup opens with better error handling
  useEffect(() => {
    if (isOpen && videoRef.current) {
      const playPromise = videoRef.current.play();
      
      // Handle the play promise properly to avoid abort errors
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video playback started successfully
          })
          .catch(err => {
            // If autoplay was prevented or the resource couldn't be loaded
            console.log("Video playback was interrupted or prevented:", err.name);
            // Don't show the error in console
          });
      }
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose()
            }
          }}
        >
          {/* Browser-style window container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mac-style browser header */}
            <div className="bg-[#252525] h-12 flex items-center px-4 border-b border-[#333] rounded-t-lg">
              {/* Window controls (left) */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] cursor-pointer" onClick={onClose}></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              
              {/* Browser tab */}
              <div className="flex-grow mx-4">
                <div className="inline-flex bg-[#2A2A2A] rounded-t-lg px-4 py-1 text-xs text-gray-300 border-b-2 border-[#CCFF00]">
                  {title}
                </div>
              </div>
              
              {/* Browser controls (right) */}
              <div className="flex space-x-5 text-[#888]">
                <div className="cursor-pointer">⟲</div>
                <div className="cursor-pointer">⨁</div>
                <div className="cursor-pointer">⋮</div>
              </div>
            </div>
            
            {/* Phone container with more space around it */}
            <div className="bg-[#121212] p-10 flex justify-center border-l border-r border-[#333]">
              {/* App video in phone frame */}
              <div className="relative h-[600px] w-[300px] overflow-hidden rounded-[32px] border-[8px] border-[#222222] bg-black shadow-[0_0_30px_rgba(204,255,0,0.3)]">
                {/* Phone Frame elements */}
                <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[24px] shadow-inner">
                  {/* Status bar */}
                  <div className="absolute left-0 right-0 top-0 h-6 bg-black/20 flex items-center justify-between px-5 text-[10px] text-white">
                    <div>9:41</div>
                    <div className="flex space-x-1">
                      <span>📶</span>
                      <span>📡</span>
                      <span>🔋</span>
                    </div>
                  </div>
                  
                  {/* Notch */}
                  <div className="absolute left-1/2 top-0 h-[20px] w-[100px] -translate-x-1/2 rounded-b-[10px] bg-[#222222]"></div>
                  
                  {/* Home indicator */}
                  <div className="absolute bottom-1 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-white/30"></div>
                </div>
                
                {/* Video */}
                <video 
                  ref={videoRef}
                  className="h-full w-full object-cover rounded-[24px]"
                  loop
                  muted
                  playsInline
                  controls={false}
                >
                  <source src={videoSrc || "/assets/videos/sample.mp4"} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            {/* Simple empty footer - no text */}
            <div className="bg-[#252525] h-8 flex items-center justify-center rounded-b-lg border-l border-r border-b border-[#333]">
              {/* Empty footer - no URL text */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Card component with click-only behavior (no hover trigger)
const FeatureCard = ({
  feature,
  index,
  onHover,
  activeCardId,
}: {
  feature: (typeof features)[0]
  index: number
  onHover: (id: string | null) => void
  activeCardId: string | null
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const cardRef = useRef<HTMLDivElement>(null)
  const isActive = activeCardId === feature.id
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })
  
  // Handle feature click
  const handleFeatureClick = () => {
    if (!feature.isEmpty) {
      onHover(isActive ? null : feature.id)
    }
  }
  
  // Dynamic size classes based on card size
  const sizeClasses = {
    regular: "col-span-1 row-span-1 min-h-[250px]",
    wide: "col-span-2 row-span-1 min-h-[250px]",
    tall: "col-span-1 row-span-2 min-h-[520px]",
    large: "col-span-2 row-span-2 min-h-[520px]",
  }[feature.size || "regular"]

  // Get slide animation starting position
  const getSlideAnimation = () => {
    const distance = 100; // slide distance in pixels
    
    switch (feature.slideDirection) {
      case "left":
        return { x: -distance, y: 0 };
      case "right":
        return { x: distance, y: 0 };
      case "top":
        return { x: 0, y: -distance };
      case "bottom":
        return { x: 0, y: distance };
      default:
        return { x: 0, y: distance }; // Default bottom slide
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      ...(feature.slideDirection && getSlideAnimation()),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        delay: feature.delay || 0.1 * index,
        duration: 0.7,
      },
    },
  }

  // Icon component
  const IconComponent = feature.icon || (() => null)

  if (feature.isEmpty) return null

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "rounded-xl p-6 relative group cursor-pointer", // Added cursor-pointer for better click affordance
        sizeClasses,
        feature.hasImage
          ? "overflow-hidden p-0"
          : "shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-[#333]",
      )}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onClick={handleFeatureClick} // Only trigger on click
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 30px rgba(204, 255, 0, 0.3)",
        borderColor: "rgba(204, 255, 0, 0.5)",
        transition: { duration: 0.2 }
      }}
    >
      {feature.hasImage ? (
        // Image card - similar structure but with click handler
        <div className="relative w-full h-full">
          <Image
            src={feature.imageSrc || "/placeholder.svg"}
            alt={feature.title}
            fill
            className="object-cover rounded-[12px]"
          />
          <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors duration-300 rounded-[12px]">
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              {/* Simplified icon without hover handlers */}
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#CCFF00]/20">
                <IconComponent className="h-5 w-5 text-[#CCFF00]" />
              </div>
              <h3 className="mb-1 font-monument text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-sm text-[#CCFF00]">{feature.description}</p>
            </div>
          </div>
        </div>
      ) : (
        // Content card - simplified without hover handlers
        <div className="flex h-full flex-col">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#CCFF00]/10">
            <IconComponent className="h-7 w-7 text-[#CCFF00]" />
          </div>
          <h3 className="mb-2 font-monument text-xl font-bold text-white md:text-2xl">{feature.title}</h3>
          <p className="text-sm text-[#888888] md:text-base">{feature.description}</p>
          <div className="mt-auto pt-4 text-sm font-medium text-[#CCFF00]">
            Click to see demo
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function FeatureMasonryGrid() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeCardId, setActiveCardId] = useState<string | null>(null)
  const activeFeature = features.find((f) => f.id === activeCardId)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  // Debug popup state
  useEffect(() => {
    console.log("Active feature:", activeFeature?.title || "none")
  }, [activeFeature])

  // Show feature modal
  const showFeature = (id: string) => {
    setActiveCardId(id)
  }

  // Hide feature modal
  const hideFeature = () => {
    setActiveCardId(null)
  }

  // Play video when modal opens
  useEffect(() => {
    if (activeCardId && videoRef.current) {
      // Reset the video to the beginning
      videoRef.current.currentTime = 0
      // Ensure it's muted for autoplay to work consistently
      videoRef.current.muted = true
      
      // Play the video
      const playPromise = videoRef.current.play()
      
      // Handle potential autoplay restrictions
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Video autoplay failed:", error)
        })
      }
    }
  }, [activeCardId])

  return (
    <section ref={sectionRef} className="relative bg-[#121212] px-[5%] py-24" id="how-it-works">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="font-monument text-4xl font-bold text-white md:text-5xl">
            How It <span className="text-[#CCFF00]">Works</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#888888]">
            Our platform streamlines customs clearance with AI-powered features designed to save time and reduce errors.
          </p>
        </motion.div>

        {/* Masonry Grid - Animation triggered by scroll */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
              onHover={setActiveCardId}
              activeCardId={activeCardId}
            />
          ))}
        </div>
      </div>

      {/* Video Popup - simplified condition */}
      <VideoPopup
        isOpen={!!activeCardId}
        onClose={hideFeature}
        videoSrc={activeFeature?.videoSrc || ""}
        title={activeFeature?.title || "Feature Demo"}
      />

      {/* Background Glow Effects */}
      <div className="absolute -left-[300px] top-1/4 h-[500px] w-[500px] rounded-full bg-[#CCFF00]/5 blur-[150px]"></div>
      <div className="absolute -right-[300px] bottom-1/3 h-[600px] w-[600px] rounded-full bg-[#CCFF00]/5 blur-[150px]"></div>
    </section>
  )
}

