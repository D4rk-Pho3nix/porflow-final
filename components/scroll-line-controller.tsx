"use client"

import { useEffect, useState } from "react"
import ScrollingLineAnimation from "./scrolling-line-animation"

export default function ScrollLineController() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Track sections in view
  useEffect(() => {
    setMounted(true)

    const sections = ["hero", "features", "testimonials", "team", "faq"]
    const observers: IntersectionObserver[] = []

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(section)
              }
            })
          },
          { threshold: 0.3 },
        )

        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  // Performance optimization - debounce scroll events
  useEffect(() => {
    if (!mounted) return

    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      // Add will-change to improve performance during scroll
      document.querySelectorAll(".scroll-line").forEach((el) => {
        ;(el as HTMLElement).style.willChange = "transform"
      })

      // Clear existing timeout
      clearTimeout(scrollTimeout)

      // Set new timeout to remove will-change after scrolling stops
      scrollTimeout = setTimeout(() => {
        document.querySelectorAll(".scroll-line").forEach((el) => {
          ;(el as HTMLElement).style.willChange = "auto"
        })
      }, 200)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <>
      <div id="hero-line" className="scroll-line">
        <ScrollingLineAnimation section="hero" />
      </div>
      <div id="features-line" className="scroll-line">
        <ScrollingLineAnimation section="features" />
      </div>
      <div id="testimonials-line" className="scroll-line">
        <ScrollingLineAnimation section="testimonials" />
      </div>
      <div id="team-line" className="scroll-line">
        <ScrollingLineAnimation section="team" />
      </div>
      <div id="faq-line" className="scroll-line">
        <ScrollingLineAnimation section="faq" />
      </div>
    </>
  )
}

