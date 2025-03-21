"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion"
import { Play, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

// Dummy reviews data
const reviews = [
  {
    id: 1,
    name: "Rohit Jain",
    role: "Friend | App Developer",
    avatar: "/assets/images/reviewer 1.jpeg",
    rating: 5,
    review: "This app seems like a game-changer! I think it will make importing and exporting so much easier by eliminating unnecessary delays and paperwork. Excited to see it in action!",
  },
  {
    id: 2,
    name: "Bharath Kumar K",
    role: "Senior | Backend Developer",
    avatar: "/assets/images/reviewer 2.jpeg",
    rating: 5,
    review:
      "I think this app will be a lifesaver for traders. No more dealing with middlemen or struggling with customs clearance. Everything is automated and streamlined!",
  },
  {
    id: 4,
    name: "Santhiya B",
    role: "Friend | Swift Developer",
    avatar: "/assets/images/reviewer 4.jpeg",
    rating: 4,
    review:
      "I think this app will be perfect for businesses dealing with frequent imports and exports. Finally, a tool that simplifies trade without hidden costs!",
  },
  {
    id: 3,
    name: "Dr.Kanaga Suba Raja",
    role: "HOD CSE",
    avatar: "/assets/images/reviewer 3.jpeg",
    rating: 5,
    review:
      "Trade compliance has always been complicated, but I think this app will make it effortless. The integration with government portals is a great touch!",
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

// Magic Review Card component with enhanced hover effects
function MagicReviewCard({ children, index, isInView }: { 
  children: React.ReactNode, 
  index: number,
  isInView: boolean 
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const gradientSize = 200
  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)
  
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect()
        mouseX.set(e.clientX - left)
        mouseY.set(e.clientY - top)
      }
    },
    [mouseX, mouseY]
  )

  const handleMouseOut = useCallback(
    (e: MouseEvent) => {
      if (!e.relatedTarget) {
        document.removeEventListener("mousemove", handleMouseMove)
        mouseX.set(-gradientSize)
        mouseY.set(-gradientSize)
      }
    },
    [handleMouseMove, mouseX, mouseY, gradientSize]
  )

  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  useEffect(() => {
    const card = cardRef.current
    if (card) {
      card.addEventListener("mouseenter", handleMouseEnter)
      document.addEventListener("mouseout", handleMouseOut)
    }
    
    return () => {
      if (card) {
        card.removeEventListener("mouseenter", handleMouseEnter)
      }
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [handleMouseEnter, handleMouseMove, handleMouseOut])

  // Initialize to hide gradients
  useEffect(() => {
    mouseX.set(-gradientSize)
    mouseY.set(-gradientSize)
  }, [gradientSize, mouseX, mouseY])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className="group relative flex-shrink-0 w-[300px] snap-center mx-3 rounded-xl overflow-hidden"
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      {/* Border gradient effect with stronger edge light */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
            #CCFF00, 
            rgba(204, 255, 0, 0.4), 
            transparent 75%
            )
          `,
        }}
      />
      
      {/* Card background */}
      <div className="absolute inset-px rounded-xl bg-[#1A1A1A] border border-[#333]" />
      
      {/* Inner glow effect */}
      <motion.div
        className="pointer-events-none absolute inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, rgba(204, 255, 0, 0.1), transparent 90%)
          `,
          opacity: 0.6,
        }}
      />
      
      {/* Card content */}
      <div className="relative p-6">
        {children}
      </div>
    </motion.div>
  )
}

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)

  // Handle video play/pause
  const toggleVideo = () => {
    if (videoRef.current && !videoError) {
      try {
        if (isPlaying) {
          videoRef.current.pause()
          setIsPlaying(false)
        } else {
          videoRef.current.play()
            .then(() => {
              setIsPlaying(true)
            })
            .catch((err) => {
              console.error("Video play failed:", err)
              setVideoError(true)
              setIsPlaying(false)
            })
        }
      } catch (error) {
        console.error("Video error:", error)
        setVideoError(true)
      }
    }
  }

  // Scroll carousel left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      })
    }
  }

  // Scroll carousel right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      })
    }
  }

  // Update the video element with proper error handling and format checking
  useEffect(() => {
    // Create a function to check if the video file is accessible
    const checkVideoAvailability = async () => {
      try {
        // Use fetch to check if the file is available and accessible
        const response = await fetch('/assets/videos/testimonial-video.mp4', { method: 'HEAD' });
        if (!response.ok) {
          console.log("Video file exists but couldn't be accessed:", response.status);
          setVideoError(true);
        }
      } catch (err) {
        console.error("Error checking video:", err);
        setVideoError(true);
      }
    };
    
    // Check video availability
    checkVideoAvailability();
    
    // Add error listener for the video element
    if (videoRef.current) {
      const handleVideoError = (e: Event) => {
        console.error("Video error event:", e);
        setVideoError(true);
      };
      
      videoRef.current.addEventListener('error', handleVideoError, true);
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('error', handleVideoError);
        }
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black px-[5%] py-24" id="testimonials">
      <div className="mx-auto max-w-7xl">
        {/* Hear It From the Pros Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-monument text-4xl font-bold text-white md:text-5xl mb-4">
              Hear It From <span className="text-[#CCFF00]">the Pros</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#888888]">
            Watch how our AI-powered platform might revolutionize customs clearance process straight from customs professionals

            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Video Container */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#333] bg-[#0A0A0A]">
              {/* Video overlay with play button */}
              <div 
                className={`absolute inset-0 flex items-center justify-center z-10 
                            ${isPlaying ? 'bg-transparent pointer-events-none' : 'bg-black/40 cursor-pointer'}`}
                onClick={toggleVideo}
              >
                {!isPlaying && (
                  <div className="w-16 h-16 rounded-full bg-[#CCFF00] flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <Play className="w-6 h-6 text-black ml-1" />
                  </div>
                )}
              </div>
              
              {/* Updated video element without loop */}
              {!videoError ? (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controlsList="nodownload"
                  preload="metadata"
                  playsInline
                  poster="/assets/images/video-placeholder.jpg"
                >
                  {/* Try multiple formats for better browser support */}
                  <source src="/assets/videos/testimonial-video.mp4" type="video/mp4" />
                  <source src="/assets/videos/testimonial-video.webm" type="video/webm" />
                  <source src="/assets/videos/testimonial-video.mov" type="video/quicktime" />
                  <source src="/assets/videos/testimonial-video.m4v" type="video/mp4" />
                  
                  {/* Provide direct download fallback */}
                  <p>
                    Your browser doesn't support HTML5 video. 
                    <a href="/assets/videos/testimonial-video.mp4" download className="text-[#CCFF00] underline ml-1">
                      Download the video
                    </a> 
                    instead.
                  </p>
                </video>
              ) : (
                /* Improved error message with troubleshooting info */
                <div className="w-full h-full flex items-center justify-center bg-black/80 text-center p-6">
                  <div>
                    <p className="text-[#CCFF00] font-semibold mb-2">Video could not be loaded</p>
                      <p className="text-gray-400 text-sm mb-2">Check that the file exists at public/assets/videos/testimonial-video.mp4</p>
                      <p className="text-gray-500 text-xs">
                        Common issues: file format not supported, file permissions, or server configuration.
                      </p>
                      <a 
                        href="/test-video.html" 
                        target="_blank" 
                        className="inline-block mt-3 px-3 py-1 bg-[#333] rounded-md text-xs text-white hover:bg-[#444]"
                      >
                        Test Video Playback
                      </a>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                "This app changes how we approach customs clearance "
              </h3>
              <p className="text-[#888888]">
                Piyush Kumar , Central Excise and Customs Officer
              </p>
            </div>
          </div>
        </motion.div>

        {/* More User Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-monument text-4xl font-bold text-white md:text-5xl mb-4">
              More User <span className="text-[#CCFF00]">Reviews</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#888888]">
              See what our friends and family is saying about their experience with our app.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Scroll Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center border border-[#333] text-white hover:bg-[rgba(204,255,0,0.2)] hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all duration-300 -ml-5 lg:ml-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center border border-[#333] text-white hover:bg-[rgba(204,255,0,0.2)] hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all duration-300 -mr-5 lg:mr-0"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scrollable Reviews with new MagicReviewCard */}
            <div
              ref={carouselRef}
              className="flex overflow-x-auto pb-8 pt-4 px-4 -mx-4 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {reviews.map((review, index) => (
                <MagicReviewCard key={review.id} index={index} isInView={isInView}>
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#333] mr-4">
                      <Image
                        src={review.avatar}
                        alt={`${review.name} avatar`}
                        fill
                        className="object-cover"
                        sizes="64px"
                        priority
                        onError={(e) => {
                          // @ts-ignore - TypeScript doesn't know about currentTarget.src
                          e.currentTarget.src = "/placeholder.svg?height=64&width=64";
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{review.name}</h4>
                      <p className="text-[#888888] text-sm">{review.role}</p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4 mr-1",
                          i < review.rating ? "fill-[#CCFF00] text-[#CCFF00]" : "fill-[#333] text-[#333]",
                        )}
                      />
                    ))}
                  </div>

                  <p className="text-[#AAAAAA] text-sm leading-relaxed">"{review.review}"</p>
                </MagicReviewCard>
              ))}
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  className="w-8 h-1 rounded-full bg-[#333] hover:bg-[#CCFF00] transition-all duration-300"
                  onClick={() => {
                    if (carouselRef.current) {
                      carouselRef.current.scrollTo({
                        left: index * 960,
                        behavior: "smooth",
                      })
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute -right-[300px] top-1/4 h-[500px] w-[500px] rounded-full bg-[#CCFF00]/5 blur-[150px]"></div>
      <div className="absolute -left-[300px] bottom-1/3 h-[600px] w-[600px] rounded-full bg-[#CCFF00]/5 blur-[150px]"></div>
    </section>
  )
}

