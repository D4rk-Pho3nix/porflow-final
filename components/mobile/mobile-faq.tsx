"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Simplified FAQ data for mobile
const mobileFaqItems = [
  {
    id: 1,
    question: "Can the app handle shipments across multiple countries?",
    answer:
      "Yes. Our platform supports multi-country operations with documentation and compliance management for each destination.",
  },
  {
    id: 2,
    question: "How does the AI-powered tax calculator work?",
    answer:
      "The calculator uses the latest tariff schedules and HSN codes to estimate duties and taxes, helping you avoid misclassification.",
  },
  {
    id: 3,
    question: "Do I need to register separately for each shipment?",
    answer:
      "No. One account lets you manage multiple shipments simultaneously under the same login.",
  },
  {
    id: 4,
    question: "Does the app integrate with government portals?",
    answer:
      "Yes. Our platform works with relevant government e-filing systems for electronic documentation submission.",
  },
  {
    id: 5,
    question: "Who can use this app?",
    answer:
      "Importers, exporters, and customs officers can all benefit from our platform's streamlined features.",
  },
]

// Mobile Accordion Item Component
const MobileAccordionItem = ({
  item,
  isOpen,
  toggleAccordion,
}: {
  item: (typeof mobileFaqItems)[0]
  isOpen: boolean
  toggleAccordion: () => void
}) => {
  return (
    <div className="mb-3">
      <motion.div
        className={cn(
          "border border-[rgba(204,255,0,0.1)] rounded-lg overflow-hidden transition-all duration-300",
          isOpen ? "shadow-[0_0_10px_rgba(204,255,0,0.1)]" : "",
        )}
        initial={false}
        animate={{ backgroundColor: isOpen ? "rgba(204, 255, 0, 0.03)" : "transparent" }}
      >
        {/* Question Header */}
        <motion.button
          className="w-full flex justify-between items-center p-4 text-left"
          onClick={toggleAccordion}
          whileHover={{ backgroundColor: "rgba(204, 255, 0, 0.05)" }}
        >
          <h3 className="font-monument text-white text-base">{item.question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 ml-2"
          >
            <ChevronDown className="w-4 h-4 text-[#CCFF00]" />
          </motion.div>
        </motion.button>

        {/* Answer Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 pb-4">
                <p className="text-[#888888] text-sm">{item.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default function MobileFaq() {
  const [openItemId, setOpenItemId] = useState<number | null>(1) // First item open by default

  const toggleAccordion = (itemId: number) => {
    setOpenItemId(openItemId === itemId ? null : itemId)
  }

  return (
    <section className="relative bg-black px-5 py-16" id="faq">
      <div className="mx-auto max-w-md">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="font-monument text-3xl font-bold text-white mb-3">
            <span className="text-[#CCFF00]">FAQ</span>
          </h2>
          <p className="text-base text-[#888888]">Everything you need to know about our platform.</p>
        </div>

        {/* Mobile Accordion */}
        <div className="space-y-3">
          {mobileFaqItems.map((item) => (
            <MobileAccordionItem
              key={item.id}
              item={item}
              isOpen={openItemId === item.id}
              toggleAccordion={() => toggleAccordion(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Background Glow Effect - Reduced for mobile */}
      <div className="absolute -left-[150px] top-1/3 h-[200px] w-[200px] rounded-full bg-[#CCFF00]/5 blur-[80px]"></div>
    </section>
  )
} 