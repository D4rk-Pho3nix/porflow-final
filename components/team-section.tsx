"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Github, Linkedin, ChevronLeft, ChevronRight } from "lucide-react"
import { useCursor } from "@/components/custom-cursor"

// Dummy team data
const teamMembers = [
  {
    id: 1,
    name: "Manish Kumar S",
    role: "Team Lead | Full Stack Developer",
    image: "/assets/images/team 1.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Balaji Gunasekaran",
    role: "Swift Developer",
    image: "/assets/images/Team 3.JPG",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Prasana Shanmugham",
    role: "Flutter Developer",
    image: "/assets/images/team 4.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Santhosh Paramasivam",
    role: "Android Studio Kotlin Developer",
    image: "/assets/images/team 2.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Davis Nicholson",
    role: "Tester",
    image: "/assets/images/Team 5.jpeg",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/davis-nicholsona/",
  },
  {
    id: 6,
    name: "Fiyaz R",
    role: "Tester",
    image: "/assets/images/team 6.jpeg",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/mohamed-fiyaz-8b9146254/",
  },
]

// Polaroid Card Component (removed the cursor-following outline)
const PolaroidCard = ({ member, index }: { member: (typeof teamMembers)[0]; index: number }) => {
  const { setType } = useCursor();
  
  return (
    <motion.div
      className="flex-shrink-0 w-[280px] snap-center mx-5 relative group"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Polaroid Card */}
      <motion.div
        className="bg-white rounded-lg overflow-hidden shadow-lg p-3 h-[400px] w-full relative"
        whileHover={{
          rotate: [0, -1, 2, -1, 0],
          transition: { duration: 0.5 },
        }}
        onMouseEnter={() => setType("hover")}
        onMouseLeave={() => setType("default")}
      >
        {/* Photo Area */}
        <div 
          className="relative w-full aspect-square mb-4 overflow-hidden bg-gray-100"
          onMouseEnter={() => setType("hover")}
          onMouseLeave={() => setType("default")}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }} 
            className="w-full h-full"
          >
            <Image 
              src={member.image} 
              alt={member.name} 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, 280px"
              priority={index < 3}
              onError={(e) => {
                // Fallback if image fails to load
                // @ts-ignore - TypeScript doesn't know about currentTarget.src
                e.currentTarget.src = "/placeholder.svg?height=400&width=400";
              }}
            />
          </motion.div>
        </div>

        {/* Info Area */}
        <div className="px-2">
          <h3 className="font-monument text-black text-xl font-bold">{member.name}</h3>
          <p className="text-gray-600 mb-4">{member.role}</p>

          {/* Social Icons */}
          <div className="flex justify-end space-x-3">
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Polaroid Tape */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-gray-100 opacity-50 rotate-1"></div>
      </motion.div>
    </motion.div>
  )
}

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const isCentered = useInView(sectionRef, { amount: 0.65 })
  const controls = useAnimation()
  const [hasScrolledRight, setHasScrolledRight] = useState(false)
  const [hasScrolledLeft, setHasScrolledLeft] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isSectionActive, setIsSectionActive] = useState(false)
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])
  
  useEffect(() => {
    setIsSectionActive(isCentered)
  }, [isCentered])
  
  useEffect(() => {
    const calculateMaxScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current
        setMaxScroll(scrollWidth - clientWidth)
      }
    }
    
    calculateMaxScroll()
    window.addEventListener('resize', calculateMaxScroll)
    
    return () => window.removeEventListener('resize', calculateMaxScroll)
  }, [])
  
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        setScrollPosition(scrollLeft)
        
        setHasScrolledRight(scrollLeft >= scrollWidth - clientWidth - 20)
        setHasScrolledLeft(scrollLeft <= 20)
      }
    }
    
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true })
      return () => scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [])
  
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isSectionActive) return
      
      const container = scrollContainerRef.current
      if (!container) return
      
      const { scrollLeft, scrollWidth, clientWidth } = container
      const isScrolledToRight = scrollLeft >= scrollWidth - clientWidth - 20
      const isScrolledToLeft = scrollLeft <= 20
      const isScrollingDown = e.deltaY > 0
      const isScrollingUp = e.deltaY < 0
      
      if (!isScrolledToRight && !isScrolledToLeft) {
        e.preventDefault()
        
        const scrollAmount = Math.min(Math.abs(e.deltaY), 100) * Math.sign(e.deltaY)
        container.scrollBy({ 
          left: scrollAmount, 
          behavior: 'smooth' 
        })
        
        if (!isScrolling) {
          setIsScrolling(true)
          setTimeout(() => setIsScrolling(false), 150)
        }
        
        return
      }
      
      if (isScrollingDown && !isScrolledToRight) {
        e.preventDefault()
        container.scrollBy({ left: e.deltaY, behavior: 'smooth' })
        return
      }
      
      if (isScrollingUp && !isScrolledToLeft) {
        e.preventDefault()
        container.scrollBy({ left: e.deltaY, behavior: 'smooth' })
        return
      }
    }
    
    window.addEventListener("wheel", handleWheel, { passive: false })
    
    return () => window.removeEventListener("wheel", handleWheel)
  }, [isSectionActive, isScrolling])
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      })
    }
  }

  const scrollProgress = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0

  return (
    <section 
      ref={sectionRef} 
      className={`relative bg-[#121212] px-[5%] py-24 transition-opacity duration-300 ${
        isSectionActive ? 'opacity-100' : 'opacity-95'
      }`} 
      id="team"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-monument text-4xl font-bold text-white md:text-5xl">
            Meet Our <span className="text-[#CCFF00]">Team</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#888888]">
            The creative minds behind our revolutionary app.
          </p>
          {isSectionActive && !hasScrolledRight && (
            <p className="mt-2 text-[#CCFF00] text-sm animate-pulse">
              Scroll horizontally to meet everyone →
            </p>
          )}
          {isSectionActive && hasScrolledRight && (
            <p className="mt-2 text-[#CCFF00] text-sm animate-pulse">
              Scroll down to continue
            </p>
          )}
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Scroll Buttons - visible when centered */}
          {isSectionActive && (
            <>
              <button
                onClick={scrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center border border-[#333] text-white hover:bg-[rgba(204,255,0,0.2)] hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all duration-300 -ml-5 lg:ml-0 ${
                  hasScrolledLeft ? 'opacity-50' : 'opacity-100'
                }`}
                disabled={hasScrolledLeft}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={scrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center border border-[#333] text-white hover:bg-[rgba(204,255,0,0.2)] hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all duration-300 -mr-5 lg:mr-0 ${
                  hasScrolledRight ? 'opacity-50' : 'opacity-100'
                }`}
                disabled={hasScrolledRight}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Scrollable Team Cards with improved containment */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-10 pt-4 px-4 -mx-4 scrollbar-hide snap-x snap-mandatory"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              scrollBehavior: "smooth",
              maxWidth: "100vw",
              margin: "0 auto"
            }}
          >
            <style jsx global>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* Initial spacer for better UX */}
            <div className="flex-shrink-0 w-[10vw] md:w-[20vw] h-1"></div>

            {/* Team Member Cards */}
            {teamMembers.map((member, index) => (
              <PolaroidCard key={member.id} member={member} index={index} />
            ))}

            {/* End spacer for better UX */}
            <div className="flex-shrink-0 w-[10vw] md:w-[20vw] h-1"></div>
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  scrollProgress >= (index * 100) / Math.ceil(teamMembers.length / 3) && 
                  scrollProgress <= ((index + 1) * 100) / Math.ceil(teamMembers.length / 3)
                    ? "w-8 bg-[#CCFF00]" 
                    : "w-8 bg-[#333] hover:bg-[#CCFF00]"
                }`}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: index * 900 + window.innerWidth * 0.1,
                      behavior: "smooth",
                    })
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute -left-[300px] top-1/4 h-[500px] w-[500px] rounded-full bg-[#CCFF00]/5 blur-[150px]"></div>
      <div className="absolute -right-[300px] bottom-1/3 h-[600px] w-[600px] rounded-full bg-[#CCFF00]/5 blur-[150px]"></div>
    </section>
  )
}

