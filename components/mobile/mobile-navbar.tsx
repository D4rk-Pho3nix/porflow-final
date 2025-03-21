"use client"

import { useState, useEffect } from "react"
import { Menu, X, Coffee } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "@/components/logo"
import Link from "next/link"

export default function MobileNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Simplified scroll handler for mobile
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  // Links for mobile navigation
  const navLinks = [
    { name: "How It Works", href: "#mobile-features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Meet the Team", href: "#team" },
    { name: "FAQ", href: "#faq" }
  ]

  return (
    <>
      {/* Mobile Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between px-4 h-16">
          {/* Logo */}
          <div 
            className="flex items-center" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo size="small" />
          </div>

          {/* Mobile menu button */}
          <button
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-95 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-sm rounded-lg bg-zinc-900/60 p-8"
            >
              <div className="mb-8 flex justify-between">
                <Logo size="small" />
                <button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xl font-medium text-white transition-colors duration-300 hover:text-[#CCFF00]"
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(link.href)
                      if (element) {
                        // Close mobile menu
                        setMobileMenuOpen(false)
                        // Scroll to the section with offset for the navbar
                        const yOffset = -70
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
                  href="https://www.buymeacoffee.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#CCFF00] px-4 py-3 text-lg font-medium text-black transition-all duration-300 hover:bg-[#EEFFAA]"
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