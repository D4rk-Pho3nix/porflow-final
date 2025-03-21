"use client"

import { useState, useRef, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { BorderBeam } from "@/components/magicui/border-beam"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EarlyAccessModal({ isOpen, onClose }: ModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [verificationSent, setVerificationSent] = useState(false)
  const [errors, setErrors] = useState({ name: "", email: "" })
  const modalRef = useRef<HTMLDivElement>(null)
  
  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    
    if (isOpen) {
      // Add a small delay to prevent immediate closing if modal just opened
      const timer = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 100);
      
      return () => {
        clearTimeout(timer);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, onClose]);
  
  // Validate email with regex
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset errors
    const newErrors = { name: "", email: "" }
    let hasError = false
    
    if (!name.trim()) {
      newErrors.name = "Name is required"
      hasError = true
    }
    
    if (!email.trim()) {
      newErrors.email = "Email is required"
      hasError = true
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email"
      hasError = true
    }
    
    setErrors(newErrors)
    
    if (!hasError) {
      // Send verification email (mock)
      setVerificationSent(true)
      // In a real app, you would call an API here
    }
  }
  
  // Add function to scroll to the main CTA button
  const scrollToMainCTA = () => {
    // First close the modal
    onClose();
    
    // Then scroll to the main button with a small delay to ensure modal is closed
    setTimeout(() => {
      const heroSection = document.getElementById('hero');
      const mainButton = document.getElementById('main-cta-button');
      
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
        
        // Highlight the button with a pulsing effect
        if (mainButton) {
          mainButton.classList.add('animate-pulse');
          setTimeout(() => {
            mainButton.classList.remove('animate-pulse');
          }, 2000); // Remove the pulse after 2 seconds
        }
      }
    }, 300);
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            ref={modalRef}
            className="bg-[#111] border border-[#333] rounded-xl w-full max-w-md p-6 relative overflow-hidden"
          >
            {/* BorderBeam effects */}
            <BorderBeam 
              duration={5} 
              size={400} 
              colorFrom="transparent" 
              colorTo="#CCFF00" 
              className="from-transparent via-[#CCFF00] to-transparent opacity-40" 
            />
            <BorderBeam 
              duration={5} 
              delay={2.5} 
              size={400} 
              colorFrom="transparent" 
              colorTo="#CCFF00" 
              className="from-transparent via-[#CCFF00] to-transparent opacity-40" 
              reverse
            />
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-20 p-2"
            >
              <X size={20} />
            </button>
            
            <div className="relative z-10"> {/* Add z-index to keep content above the beams */}
              {!verificationSent ? (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">Get Early Access</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full bg-[#0D0D0D] border ${
                          errors.name ? "border-red-500" : "border-[#333]"
                        } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#CCFF00]`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full bg-[#0D0D0D] border ${
                          errors.email ? "border-red-500" : "border-[#333]"
                        } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#CCFF00]`}
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-[#CCFF00] text-black py-3 px-6 rounded-lg font-medium hover:bg-[#BBEE00] transition-colors mt-4"
                    >
                      Get Early Access
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-[#CCFF00]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-12 h-12 bg-[#CCFF00]/50 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-[#CCFF00] rounded-full"></div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">Verification Email Sent</h2>
                  <p className="text-gray-400 mb-6">
                    We've sent a verification email to <span className="text-[#CCFF00]">{email}</span>. 
                    Please check your inbox and follow the instructions to complete your registration.
                  </p>
                  <button
                    onClick={scrollToMainCTA}
                    className="bg-[#CCFF00] text-black py-2 px-6 rounded-lg font-medium hover:bg-[#EEFFAA] transition-colors"
                  >
                    Return to Homepage
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
} 