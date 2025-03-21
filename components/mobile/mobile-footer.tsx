"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Twitter, Instagram, Linkedin, Youtube, Mail, ArrowRight } from "lucide-react"
import Logo from "@/components/logo"
import EarlyAccessModal from "@/components/early-access-modal"
import Toast from "@/components/ui/toast"

export default function MobileFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [showToast, setShowToast] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the actual subscription logic
    console.log("Subscribing email:", email)
    
    // Show success notification
    setShowToast(true)
    
    // Clear the form
    setEmail("")
  }

  return (
    <footer className="relative bg-black">
      {/* Mobile-specific footer styles */}
      <div className="container mx-auto py-10 px-5">
        {/* Logo & Description - Centered on mobile */}
        <div className="flex flex-col items-center mb-8">
          <div 
            className="flex items-center cursor-pointer mb-4" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo />
          </div>
          <p className="text-[#888888] text-center max-w-xs mb-6">
            An AI-powered trade solution with seamless automation, real-time tracking, and predictive analytics.
          </p>
          <div>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setIsModalOpen(true)
              }}
              className="inline-block bg-[#CCFF00] text-black py-3 px-6 rounded-lg font-medium hover:bg-[#BBEE00] transition-colors"
            >
              Get Early Access
            </Link>
          </div>
        </div>

        {/* Mobile collapsible links - simplified for mobile */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#888888] hover:text-[#CCFF00] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-[#888888] hover:text-[#CCFF00] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-[#888888] hover:text-[#CCFF00] transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#faq" className="text-[#888888] hover:text-[#CCFF00] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="mailto:contact@portflow.com" className="text-[#888888] hover:text-[#CCFF00] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-[#888888] hover:text-[#CCFF00] transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social icons - in a row for mobile */}
        <div className="flex justify-center space-x-4 mb-8">
          <a 
            href="https://twitter.com/portflow" 
            target="_blank" 
            className="bg-[#111111] w-10 h-10 rounded-full flex items-center justify-center text-[#888] hover:bg-[#CCFF00] hover:text-black transition-colors"
          >
            <Twitter size={18} />
          </a>
          <a 
            href="https://instagram.com/portflow" 
            target="_blank"
            className="bg-[#111111] w-10 h-10 rounded-full flex items-center justify-center text-[#888] hover:bg-[#CCFF00] hover:text-black transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a 
            href="https://github.com/portflow" 
            target="_blank"
            className="bg-[#111111] w-10 h-10 rounded-full flex items-center justify-center text-[#888] hover:bg-[#CCFF00] hover:text-black transition-colors"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://linkedin.com/company/portflow" 
            target="_blank"
            className="bg-[#111111] w-10 h-10 rounded-full flex items-center justify-center text-[#888] hover:bg-[#CCFF00] hover:text-black transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Newsletter subscription - Fixed form submission */}
        <div className="mb-8">
          <h3 className="text-white font-bold mb-3 text-center">Subscribe to our newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex w-full">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#111] text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-[#CCFF00] border border-[#333] border-r-0"
            />
            <button
              type="submit"
              className="bg-[#CCFF00] text-black px-4 py-3 rounded-r-lg font-medium hover:bg-[#BBEE00] transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>

        {/* Footer Bottom - Copyright & Links - Stack on mobile */}
        <div className="border-t border-[#222] pt-6 flex flex-col items-center">
          <p className="text-[#666] text-sm mb-4 text-center">© 2025 Portflow. All rights reserved.</p>
          <div className="flex space-x-4 mb-2">
            <Link href="/privacy" className="text-[#666] text-sm hover:text-[#CCFF00] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[#666] text-sm hover:text-[#CCFF00] transition-colors">
              Terms
            </Link>
          </div>
          <span className="text-[#666] text-sm">
            A Team G3N3SIS Production ❤️
          </span>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute -left-[200px] top-1/4 h-[300px] w-[300px] rounded-full bg-[#CCFF00]/5 blur-[100px]"></div>

      <EarlyAccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Subscription Toast */}
      <Toast
        message="You've been subscribed to our newsletter!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </footer>
  )
} 