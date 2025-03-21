"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitter, Instagram, Linkedin, Youtube, Mail, ArrowRight } from "lucide-react"
import Logo from "@/components/logo"
import EarlyAccessModal from "@/components/early-access-modal"
import Toast from "@/components/ui/toast"

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [showToast, setShowToast] = useState(false)

  // Create multiple copies of the text for seamless scrolling
  const scrollText = "Join the Beta Now! • Join the Beta Now! • Join the Beta Now! • Join the Beta Now! • "
  const repeatedText = scrollText.repeat(5)

  // Calculate scroll animation duration based on text length
  const scrollDuration = repeatedText.length * 0.15

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
      {/* Scrolling Banner with seamless pause/resume behavior */}
      <div
        className="relative h-[60px] bg-black overflow-hidden border-t border-b border-[#222]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={scrollRef}
          className="absolute whitespace-nowrap flex items-center h-full"
          style={{
            animation: `scrollText ${scrollDuration}s linear infinite`,
            animationPlayState: isHovered ? "paused" : "running"
          }}
        >
          <style jsx global>{`
            @keyframes scrollText {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
          <span className="text-[#CCFF00] font-monument text-xl px-4">{repeatedText}</span>
        </div>
      </div>

      <div className="container mx-auto py-20 px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Left Column - Logo & Description */}
          <div className="space-y-6">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Logo />
            </div>
            <p className="text-[#888888] max-w-xs">
            An AI-powered trade solution with seamless automation, real-time tracking, and predictive analytics to revolutionize global import/export operations.
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

          {/* Middle Column - Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
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
                <li>
                  <Link href="#team" className="text-[#888888] hover:text-[#CCFF00] transition-colors">
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#faq" className="text-[#888888] hover:text-[#CCFF00] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="https://hashnode.com" target="_blank" className="text-[#888888] hover:text-[#CCFF00] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="mailto:contact@portflow.com" className="text-[#888888] hover:text-[#CCFF00] transition-colors">
                    Contact Us
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

          {/* Right Column - Connect & Subscribe */}
          <div>
            <h3 className="text-white font-bold mb-6">Connect With Us</h3>
            <div className="flex space-x-4 mb-8">
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
              <a 
                href="https://youtube.com/portflow" 
                target="_blank" 
                className="bg-[#111111] w-10 h-10 rounded-full flex items-center justify-center text-[#888] hover:bg-[#CCFF00] hover:text-black transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>

            <h3 className="text-white font-bold mb-4">Subscribe to our newsletter</h3>
            <div className="flex">
              <form onSubmit={handleSubscribe} className="flex">
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
          </div>
        </div>

        {/* Footer Bottom - Copyright & Links */}
        <div className="border-t border-[#222] mt-16 pt-6 pb-0 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#666] text-sm mb-0">© 2025 Portflow. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 mb-0">
            <Link href="/privacy" className="text-[#666] text-sm hover:text-[#CCFF00] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#666] text-sm hover:text-[#CCFF00] transition-colors">
              Terms of Service
            </Link>
            <span className="text-[#666] text-sm">
              A Team G3N3SIS Production ❤️
            </span>
          </div>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute -left-[300px] top-1/4 h-[500px] w-[500px] rounded-full bg-[#CCFF00]/5 blur-[150px]"></div>

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

