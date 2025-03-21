"use client"

import { useState } from "react"
import EarlyAccessModal from "@/components/early-access-modal"

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
            Modern Design with Neon Accents
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            A minimalist approach with subtle glass-morphism effects and neon green highlights for a striking visual experience.
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block bg-[#CCFF00] text-black py-3 px-6 rounded-lg font-medium hover:bg-[#BBEE00] transition-colors"
          >
            Get Early Access
          </button>
        </div>
      </div>
      
      <EarlyAccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
} 