"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

// Simplified reviews data for mobile
const mobileReviews = [
  {
    id: 1,
    name: "Rohit Jain",
    role: "Friend | App Developer",
    avatar: "/assets/images/reviewer 1.jpeg",
    rating: 5,
    review: "This app seems like a game-changer! I think it will make importing and exporting so much easier.",
  },
  {
    id: 2,
    name: "Bharath Kumar K",
    role: "Senior | Backend Developer",
    avatar: "/assets/images/reviewer 2.jpeg",
    rating: 5,
    review: "I think this app will be a lifesaver for traders. No more dealing with middlemen!",
  },
  {
    id: 3,
    name: "Dr.Kanaga Suba Raja",
    role: "HOD CSE",
    avatar: "/assets/images/reviewer 3.jpeg",
    rating: 5,
    review: "Trade compliance has always been complicated, but I think this app will make it effortless.",
  },
  {
    id: 4,
    name: "Santhiya B",
    role: "Friend | Swift Developer",
    avatar: "/assets/images/reviewer 4.jpeg",
    rating: 4,
    review: "Perfect for businesses dealing with frequent imports and exports without hidden costs!",
  },
  {
    id: 5,
    name: "Dr.Shobin L. R.",
    role: "HOD Physics | Local Business Owner",
    avatar: "/assets/images/reviewer 5.jpeg",
    rating: 5,
    review:
      "Managing trade documents is such a hassle, but I think this app will simplify everything with automation and QR-based inspections. A must-have for businesses!",
  },
  {
    id: 6,
    name: "Viviliya Darvin",
    role: "Local Business Owner",
    avatar: "/assets/images/reviewer 6.jpeg",
    rating: 4,
    review:
      "I think this app will revolutionize how customs clearance is handled. Faster approvals, better tracking, and no more relying on brokers—it's a win!",
  },
]

export default function MobileTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  // Function to navigate through reviews
  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % mobileReviews.length)
  }
  
  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + mobileReviews.length) % mobileReviews.length)
  }
  
  // Check video availability only
  useEffect(() => {
    const checkVideoAvailability = async () => {
      try {
        const response = await fetch('/assets/videos/testimonial-video.mp4', { method: 'HEAD' });
        if (!response.ok) {
          setVideoError(true);
        }
      } catch (err) {
        setVideoError(true);
      }
    };
    
    checkVideoAvailability();
    
    // Simple error handling only
    if (videoRef.current) {
      const handleVideoError = (e: Event) => {
        setVideoError(true);
      };
      
      videoRef.current.addEventListener('error', handleVideoError);
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('error', handleVideoError);
        }
      };
    }
  }, []);

  return (
    <section className="relative bg-black px-5 py-16" id="testimonials">
      <div className="mx-auto max-w-md">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="font-monument text-3xl font-bold text-white mb-3">
            Hear It From The <span className="text-[#CCFF00]">Pros</span>
          </h2>
          <p className="text-base text-[#888888]">
            See what industry experts are saying about our revolutionary app.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Video Container with Audio Enabled */}
          <div className="mb-8 relative overflow-hidden rounded-xl border border-[#333] bg-[#0A0A0A] aspect-video">
            {!videoError ? (
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                playsInline
                controls
                src="/assets/videos/testimonial-video.mp4"
              />
            ) : (
              // Fallback for video error
              <div className="absolute inset-0 flex items-center justify-center bg-[#111]">
                <p className="text-[#666] text-center p-4">
                  Video preview not available
                </p>
              </div>
            )}
          </div>

          {/* Testimonial Card */}
          <div className="bg-[#1A1A1A] border border-[#333] rounded-xl p-5">
            {/* Reviewer Info */}
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                <Image 
                  src={mobileReviews[activeIndex].avatar} 
                  alt={mobileReviews[activeIndex].name} 
                  fill
                  className="object-cover"
                  sizes="48px"
                  priority
                  onError={(e) => {
                    // @ts-ignore
                    e.currentTarget.src = "/placeholder.svg?height=48&width=48";
                  }}
                />
              </div>
              <div>
                <h4 className="text-white font-bold">{mobileReviews[activeIndex].name}</h4>
                <p className="text-[#888888] text-xs">{mobileReviews[activeIndex].role}</p>
              </div>
            </div>

            <div className="flex mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 mr-1 ${
                    i < mobileReviews[activeIndex].rating 
                      ? "fill-[#CCFF00] text-[#CCFF00]" 
                      : "fill-[#333] text-[#333]"
                  }`}
                />
              ))}
            </div>

            <p className="text-[#AAAAAA] text-sm leading-relaxed">"{mobileReviews[activeIndex].review}"</p>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between mt-4">
            <button
              onClick={prevReview}
              className="w-8 h-8 rounded-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center border border-[#333] text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots indicator */}
            <div className="flex items-center space-x-2">
              {mobileReviews.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === activeIndex ? "bg-[#CCFF00]" : "bg-[#333]"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-8 h-8 rounded-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center border border-[#333] text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute -right-[150px] top-1/4 h-[300px] w-[300px] rounded-full bg-[#CCFF00]/5 blur-[100px]"></div>
    </section>
  )
} 