"use client"

import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
            <p className="mb-6 text-gray-400">
              A critical error has occurred. Please try again later.
            </p>
            <button
              onClick={reset}
              className="bg-[#CCFF00] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#BBEE00] transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
} 