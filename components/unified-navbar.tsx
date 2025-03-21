"use client"

import { useState, useEffect } from "react"
import { Menu, X, Coffee } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useCursor } from "@/components/custom-cursor"
import Image from "next/image"
import Link from "next/link"
import Logo from "@/components/logo"

export default function UnifiedNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dotCount, setDotCount] = useState(1)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { setType } = useCursor()

  // Simplified scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  // Animate the dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  const dots = ".".repeat(dotCount)

  // Links for navigation with their corresponding section IDs
  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Meet the Team", href: "#team" },
    { name: "FAQ", href: "#faq" }
  ]

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      {/* Fixed size container - this prevents jumping */}
      <div className="fixed left-1/2 top-5 z-[200] -translate-x-1/2">
        {/* Animated navbar */}
        <motion.nav
          className="overflow-hidden rounded-[25px] border border-[rgba(204,255,0,0.2)] bg-[rgba(0,0,0,0.98)] shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-[20px]"
          animate={{
            width: scrolled ? 'clamp(800px, 90vw, 1200px)' : '200px',
            height: scrolled ? '60px' : '50px',
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* INIT state - only visible when not scrolled */}
          <AnimatePresence mode="wait">
            {!scrolled ? (
              <motion.div
                key="init"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-monument text-lg font-bold text-white"
              >
                INIT{dots}
              </motion.div>
            ) : (
              <motion.div
                key="expanded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex h-full w-full items-center"
              >
                {/* Left aligned logo with click-to-top functionality */}
                <div 
                  className="absolute left-6 flex h-full items-center cursor-pointer"
                  onClick={scrollToTop}
                  onMouseEnter={() => setType("hover")}
                  onMouseLeave={() => setType("default")}
                >
                  <div className="relative mr-2 h-8 w-8">
                    <Image 
                      src="/logo.svg" 
                      alt="Portflow Logo" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <span className="font-monument text-sm font-bold text-white">PORTFLOW</span>
                </div>
                
                {/* Center aligned navigation */}
                <div className="flex w-full items-center justify-center">
                  <div className="flex gap-12">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-white transition-colors duration-300 hover:text-[#CCFF00]"
                        onMouseEnter={() => setType("hover")}
                        onMouseLeave={() => setType("default")}
                        onClick={(e) => {
                          e.preventDefault()
                          const element = document.querySelector(link.href)
                          if (element) {
                            // Close mobile menu if open
                            if (mobileMenuOpen) setMobileMenuOpen(false)
                            // Scroll to the section with offset for the navbar
                            const yOffset = -80
                            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                            window.scrollTo({ top: y, behavior: 'smooth' })
                          }
                        }}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Right aligned button */}
                <a
                  href="https://buymeacoffee.com/portflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-6 flex items-center gap-2 rounded-full bg-[#CCFF00] px-4 py-2 text-sm font-medium text-black transition-colors duration-300 hover:bg-[#EEFFAA] hover:shadow-[0_0_15px_rgba(204,255,0,0.7)]"
                  onMouseEnter={() => setType("hover")}
                  onMouseLeave={() => setType("default")}
                >
                  <Coffee className="h-4 w-4" />
                  <span>Buy Me a Coffee</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
        
        {/* Mobile menu button */}
        <motion.button
          className="absolute right-4 top-[25px] -translate-y-1/2 text-white md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMobileMenuOpen(true)}
          onMouseEnter={() => setType("hover")}
          onMouseLeave={() => setType("default")}
        >
          <Menu className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-sm rounded-lg bg-zinc-900 p-8"
            >
              <div className="mb-8 flex justify-between">
                <span className="font-monument text-xl font-bold text-white">Menu</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-white"
                  onMouseEnter={() => setType("hover")}
                  onMouseLeave={() => setType("default")}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-white transition-colors duration-300 hover:text-[#CCFF00]"
                    onMouseEnter={() => setType("hover")}
                    onMouseLeave={() => setType("default")}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(link.href)
                      if (element) {
                        // Close mobile menu
                        setMobileMenuOpen(false)
                        // Scroll to the section with offset for the navbar
                        const yOffset = -80
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                        window.scrollTo({ top: y, behavior: 'smooth' })
                      }
                    }}
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* Buy Me a Coffee Button in mobile menu */}
                <a
                  href="https://buymeacoffee.com/portflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#CCFF00] px-4 py-3 text-lg font-medium text-black transition-all duration-300 hover:bg-[#EEFFAA]"
                  onMouseEnter={() => setType("hover")}
                  onMouseLeave={() => setType("default")}
                >
                  <Coffee className="h-5 w-5" />
                  <span>Buy Me a Coffee</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

