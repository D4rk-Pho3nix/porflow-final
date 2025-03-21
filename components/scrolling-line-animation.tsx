"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

interface ScrollingLineProps {
  section: "hero" | "features" | "testimonials" | "team" | "faq"
}

export default function ScrollingLineAnimation({ section }: ScrollingLineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 })
  const [viewportWidth, setViewportWidth] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)

  // Update viewport dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      setViewportWidth(window.innerWidth)
      setViewportHeight(window.innerHeight)
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Generate SVG path based on section
  const getPath = () => {
    if (!viewportWidth || !viewportHeight) return ""

    const width = viewportWidth
    const height = viewportHeight

    // Scale down for mobile
    const scale = width < 768 ? 0.5 : width < 1024 ? 0.75 : 1

    switch (section) {
      case "hero":
        // Simple elegant curve
        return `M 0,${height * 0.2} 
                C ${width * 0.3},${height * 0.3} 
                  ${width * 0.5},${height * 0.6} 
                  ${width},${height * 0.4}`

      case "features":
        // Circular loop pattern
        const loopWidth = width * 0.6 * scale
        const loopHeight = height * 0.4 * scale
        const centerX = width / 2
        const centerY = height / 2

        return `M ${centerX - loopWidth / 2},${centerY}
                C ${centerX - loopWidth / 2},${centerY - loopHeight / 2}
                  ${centerX},${centerY - loopHeight / 2}
                  ${centerX},${centerY}
                C ${centerX},${centerY + loopHeight / 2}
                  ${centerX + loopWidth / 2},${centerY + loopHeight / 2}
                  ${centerX + loopWidth / 2},${centerY}
                C ${centerX + loopWidth / 2},${centerY - loopHeight / 2}
                  ${centerX},${centerY - loopHeight / 2}
                  ${centerX},${centerY}
                C ${centerX},${centerY + loopHeight / 2}
                  ${centerX - loopWidth / 2},${centerY + loopHeight / 2}
                  ${centerX - loopWidth / 2},${centerY}`

      case "testimonials":
        // Wave/zigzag motion
        const waveHeight = 120 * scale
        const waveLength = 300 * scale
        const waves = 4
        let wavePath = `M 0,${height / 2}`

        for (let i = 0; i < waves; i++) {
          wavePath += ` L ${(i + 0.5) * waveLength},${height / 2 - waveHeight}`
          wavePath += ` L ${(i + 1) * waveLength},${height / 2}`
          if (i < waves - 1) {
            wavePath += ` L ${(i + 1.5) * waveLength},${height / 2 + waveHeight}`
            wavePath += ` L ${(i + 2) * waveLength},${height / 2}`
          }
        }

        return wavePath

      case "team":
        // Spiral pattern
        const spiralRadius = Math.min(width, height) * 0.3 * scale
        const spiralCenterX = width / 2
        const spiralCenterY = height / 2
        const spiralPoints = 100
        let spiralPath = `M ${spiralCenterX},${spiralCenterY}`

        for (let i = 1; i <= spiralPoints; i++) {
          const angle = 0.1 * i
          const radius = (spiralRadius * i) / spiralPoints
          const x = spiralCenterX + radius * Math.cos(angle)
          const y = spiralCenterY + radius * Math.sin(angle)
          spiralPath += ` L ${x},${y}`
        }

        return spiralPath

      case "faq":
        // Diagonal grid pattern
        const gridSize = 100 * scale
        const rows = Math.ceil(height / gridSize)
        const cols = Math.ceil(width / gridSize)
        let gridPath = `M 0,0`

        for (let r = 0; r <= rows; r++) {
          gridPath += ` L ${width},${r * gridSize}`
          gridPath += ` M 0,${(r + 1) * gridSize}`
        }

        for (let c = 0; c <= cols; c++) {
          gridPath += ` M ${c * gridSize},0`
          gridPath += ` L ${c * gridSize},${height}`
        }

        return gridPath

      default:
        return ""
    }
  }

  // Animation variants for path drawing
  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1])
  const pathOffset = useTransform(smoothProgress, [0, 1], [1, 0])

  // Transform values for additional animations
  const xPosition = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0, section === "hero" ? -20 : section === "features" ? 20 : -10, 0],
  )

  const yPosition = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0, section === "hero" ? 30 : section === "features" ? -20 : 40, 0],
  )

  const rotation = useTransform(smoothProgress, [0, 0.5, 1], [0, section === "features" ? 180 : 0, 0])

  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, section === "testimonials" ? 1.15 : 1, 1])

  // Line thickness based on scroll
  const lineThickness = useTransform(smoothProgress, [0, 0.5, 1], [2, 3, 2])

  // Line opacity based on scroll
  const lineOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <motion.div
        style={{
          x: xPosition,
          y: yPosition,
          rotate: rotation,
          scale: scale,
        }}
        className="w-full h-full"
      >
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${viewportWidth} ${viewportHeight}`}
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: section === "hero" ? -1 : section === "features" ? 1 : -1,
          }}
        >
          {/* Glow effect */}
          <motion.path
            d={getPath()}
            fill="none"
            strokeWidth={lineThickness}
            stroke="#CCFF00"
            style={{
              pathLength: pathLength,
              pathOffset: pathOffset,
              opacity: lineOpacity,
              filter: `blur(8px) brightness(1.2)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Main line */}
          <motion.path
            d={getPath()}
            fill="none"
            strokeWidth={lineThickness}
            stroke="#CCFF00"
            style={{
              pathLength: pathLength,
              pathOffset: pathOffset,
              opacity: lineOpacity,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

