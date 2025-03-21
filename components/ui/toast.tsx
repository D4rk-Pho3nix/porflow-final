"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, X } from "lucide-react"

interface ToastProps {
  message: string
  type?: "success" | "error" | "info"
  isVisible: boolean
  onClose: () => void
  duration?: number
}

export default function Toast({
  message,
  type = "success",
  isVisible,
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose, duration])

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-[#CCFF00]" />
      case "error":
        return <X className="h-5 w-5 text-red-500" />
      default:
        return <CheckCircle className="h-5 w-5 text-[#CCFF00]" />
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative rounded-lg bg-[#1A1A1A] px-5 py-3 shadow-lg border border-[#333] min-w-[280px] max-w-[90vw]">
            <div className="flex items-center justify-center">
              <div className="mr-3">{getIcon()}</div>
              <p className="text-white text-center">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="absolute top-2 right-2 rounded-full p-1 hover:bg-[#333]"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 