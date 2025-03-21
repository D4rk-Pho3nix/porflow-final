import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="mb-6 text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="bg-[#CCFF00] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#BBEE00] transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 