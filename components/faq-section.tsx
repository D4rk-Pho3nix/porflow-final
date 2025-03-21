"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// FAQ data
const faqItems = [
  {
    id: 1,
    question: "Can the app handle shipments across multiple countries?",
    answer:
      "Yes. Our platform supports multi-country operations. Simply input the relevant shipping details, and the app will manage documentation and compliance for each destination.",
  },
  {
    id: 2,
    question: "How does the AI-powered tax calculator work?",
    answer:
      "The calculator uses the latest tariff schedules, HSN codes, and any applicable trade agreements to estimate duties and taxes. This helps you avoid misclassification and ensures accurate payment.",
  },
  {
    id: 3,
    question: "Do I need to register separately for each shipment?",
    answer:
      "You only need one account for your business. You can manage multiple shipments simultaneously under the same login, making it easy to oversee all your import and export activities in one place.",
  },
  {
    id: 4,
    question: "Does the app integrate with government portals (e.g., ICEGATE in India)?",
    answer:
      "Yes. Our platform is designed to work seamlessly with relevant government e-filing systems, allowing you to submit documentation electronically and track customs status in real time.",
  },
  {
    id: 5,
    question: "Who can use this app?",
    answer:
      "Importers, exporters, and customs officers can all benefit from our platform's streamlined document management, AI-driven tax calculations, and real-time shipment tracking.",
  },
  {
    id: 6,
    question: "Do I still need a customs broker?",
    answer:
      "Our platform is designed to reduce or eliminate the need for third-party brokers by simplifying document submission and clearance directly with customs.",
  },
  {
    id: 7,
    question: "How do I track my shipments?",
    answer:
      "We integrate with Ola Maps for real-time GPS tracking. You can see where your shipment is and which stage of customs clearance it's currently in.",
  },
  {
    id: 8,
    question: "How secure is my data?",
    answer:
      "We use robust encryption and secure servers to protect your sensitive information, ensuring compliance with relevant data protection regulations.",
  },
  {
    id: 9,
    question: "Can customs officers provide feedback directly?",
    answer:
      "Yes. Each shipment has a unique QR code that customs officers can scan to review documents, request changes, and provide feedback instantly for faster clearance.",
  },
]

// Accordion Item Component
const AccordionItem = ({
  item,
  isOpen,
  toggleAccordion,
}: {
  item: (typeof faqItems)[0]
  isOpen: boolean
  toggleAccordion: () => void
}) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const contentHeight = useRef<number>(0)

  // Get the height of the content when it's rendered
  if (contentRef.current) {
    contentHeight.current = contentRef.current.scrollHeight
  }

  return (
    <div className="mb-4">
      <motion.div
        className={cn(
          "border border-[rgba(204,255,0,0.1)] rounded-lg overflow-hidden transition-all duration-300",
          isOpen ? "shadow-[0_0_15px_rgba(204,255,0,0.1)]" : "",
        )}
        initial={false}
        animate={{ backgroundColor: isOpen ? "rgba(204, 255, 0, 0.03)" : "transparent" }}
      >
        {/* Question Header */}
        <motion.button
          className="w-full flex justify-between items-center p-6 text-left"
          onClick={toggleAccordion}
          whileHover={{ backgroundColor: "rgba(204, 255, 0, 0.05)" }}
        >
          <h3 className="font-monument text-white text-xl">{item.question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 ml-4"
          >
            <ChevronDown className="w-5 h-5 text-[#CCFF00]" />
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
              <div ref={contentRef} className="px-6 pb-6">
                <p className="text-[#888888] text-base leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default function FaqSection() {
  const [openItemId, setOpenItemId] = useState<number | null>(1) // First item open by default

  const toggleAccordion = (itemId: number) => {
    setOpenItemId(openItemId === itemId ? null : itemId)
  }

  return (
    <section className="relative bg-black px-[5%] py-24" id="faq">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-monument text-4xl font-bold text-white md:text-5xl mb-4">
            <span className="text-[#CCFF00]">FAQ</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#888888]">Everything you need to know about our platform.</p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openItemId === item.id}
              toggleAccordion={() => toggleAccordion(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute -left-[300px] top-1/4 h-[500px] w-[500px] rounded-full bg-[#CCFF00]/5 blur-[150px]"></div>
      <div className="absolute -right-[300px] bottom-1/3 h-[600px] w-[600px] rounded-full bg-[#CCFF00]/5 blur-[150px]"></div>
    </section>
  )
}

