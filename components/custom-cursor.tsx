"use client"

import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

// Define cursor types
type CursorType = "default" | "hover" | "hidden" | "text" | "select"

interface CursorContextType {
  type: CursorType
  setType: (type: CursorType) => void
}

const CursorContext = createContext<CursorContextType>({
  type: "default",
  setType: () => {},
})

export const useCursor = () => useContext(CursorContext)

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [type, setType] = useState<CursorType>("default")
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isSelecting, setIsSelecting] = useState(false)
  const lastTypeRef = useRef<CursorType>("default")
  
  // Mouse position values - optimized for responsiveness
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Improved spring configuration for better responsiveness
  const springConfig = { damping: 20, stiffness: 400, mass: 0.2 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Use requestAnimationFrame for smoother cursor movement
  const rafRef = useRef<number | null>(null)
  
  // Prevent interactive changes for a brief period after clicks
  const isInteractionLockedRef = useRef(false)
  const lockInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize the cursor after component mount
  useEffect(() => {
    setMounted(true)
    
    // Add cursor hiding when component mounts
    document.documentElement.classList.add('custom-cursor-enabled')
    
    const moveCursor = (e: MouseEvent) => {
      // Cancel any existing animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      
      // Use requestAnimationFrame for smoother updates
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX)
        cursorY.set(e.clientY)
        setVisible(true)
      })
    }

    const handleMouseLeave = () => {
      setVisible(false)
    }

    const handleMouseEnter = () => {
      setVisible(true)
    }
    
    // Lock interactions briefly on click to prevent state flashing
    const handleMouseDown = () => {
      isInteractionLockedRef.current = true;
      
      // Clear any existing timeout
      if (lockInteractionTimeoutRef.current) {
        clearTimeout(lockInteractionTimeoutRef.current)
      }
    }
    
    const handleMouseUp = () => {
      // Keep interaction locked for a brief moment after mouseup
      // to prevent state flashes during rapid clicks
      if (lockInteractionTimeoutRef.current) {
        clearTimeout(lockInteractionTimeoutRef.current)
      }
      
      lockInteractionTimeoutRef.current = setTimeout(() => {
        isInteractionLockedRef.current = false;
      }, 100); // 100ms delay before allowing cursor type changes
    }
    
    // Optimized selection change handler
    const handleSelectionChange = () => {
      // Skip during locked interaction periods
      if (isInteractionLockedRef.current) return;
      
      const selection = window.getSelection()
      const hasSelection = selection && selection.toString().length > 0
      
      if (hasSelection && !isSelecting) {
        setIsSelecting(true)
        setType("select")
      } else if (!hasSelection && isSelecting) {
        setIsSelecting(false)
        // Reset to previous type or default
        setType(lastTypeRef.current || "default")
      }
    }

    // Debounce mouseover events for better stability
    let mouseMoveTimeout: NodeJS.Timeout | null = null;
    
    // Optimized mouseover handler with debouncing
    const handleMouseOver = (e: MouseEvent) => {
      // Skip during selection or locked interaction periods
      if (isSelecting || isInteractionLockedRef.current) return;
      
      // Debounce the mouseover events
      if (mouseMoveTimeout) {
        clearTimeout(mouseMoveTimeout);
      }
      
      mouseMoveTimeout = setTimeout(() => {
        const target = e.target as HTMLElement
        let newType: CursorType = "default"
        
        if (
          target.tagName === "A" || 
          target.tagName === "BUTTON" ||
          target.closest("a") || 
          target.closest("button") ||
          target.dataset.cursorHover
        ) {
          newType = "hover"
        } else if (
          target.tagName === "INPUT" || 
          target.tagName === "TEXTAREA" || 
          target.tagName === "P" ||
          target.tagName === "H1" ||
          target.tagName === "H2" ||
          target.tagName === "H3" ||
          target.tagName === "H4" ||
          target.tagName === "H5" ||
          target.tagName === "H6" ||
          target.tagName === "SPAN" ||
          target.tagName === "LI"
        ) {
          newType = "text"
        }
        
        // Only update if type has changed
        if (newType !== type) {
          lastTypeRef.current = newType;
          setType(newType)
        }
      }, 10); // Short debounce to prevent rapid changes
    }

    // Touch devices should not show custom cursor
    const isTouchDevice = "ontouchstart" in window
    if (!isTouchDevice) {
      document.addEventListener("mousemove", moveCursor, { passive: true })
      document.addEventListener("mouseleave", handleMouseLeave)
      document.addEventListener("mouseenter", handleMouseEnter)
      document.addEventListener("mouseover", handleMouseOver, { passive: true })
      document.addEventListener("mousedown", handleMouseDown)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("click", handleMouseDown) // Also lock on clicks
      document.addEventListener("selectionchange", handleSelectionChange)
    }

    // Add cleanup to restore cursor when component unmounts
    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled')
      
      document.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("click", handleMouseDown)
      document.removeEventListener("selectionchange", handleSelectionChange)
      
      // Clean up timeouts and animation frames
      if (mouseMoveTimeout) {
        clearTimeout(mouseMoveTimeout)
      }
      
      if (lockInteractionTimeoutRef.current) {
        clearTimeout(lockInteractionTimeoutRef.current)
      }
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [cursorX, cursorY, isSelecting, type])

  // Don't render on server or touch devices
  if (!mounted || typeof window === "undefined" || "ontouchstart" in window) {
    return <>{children}</>
  }

  return (
    <CursorContext.Provider value={{ type, setType }}>
      {children}

      {/* Fixed single cursor SVG with absolutely no conditional rendering */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: visible ? 1 : 0,
          scale: type === "hover" ? 1.3 : type === "text" ? 0.8 : 1,
        }}
        transition={{ 
          scale: { type: "spring", damping: 40, stiffness: 400 },
          opacity: { duration: 0.2 }
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24"
        >
          <path 
            fill="#000" 
            stroke="#CCFF00" 
            strokeWidth="2" 
            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
          />
        </svg>
      </motion.div>

      {/* Selection cursor with less animation */}
      {type === "select" && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[9998] h-5 w-5 -translate-x-1/2 -translate-y-1/2"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            opacity: visible ? 1 : 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4 0L7 14L10 9L14 13L20 0" 
              stroke="#CCFF00" 
              strokeWidth="2" 
              fill="none"
            />
          </svg>
        </motion.div>
      )}
    </CursorContext.Provider>
  )
}

