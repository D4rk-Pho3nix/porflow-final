export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-t-2 border-[#CCFF00] rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-[#CCFF00]">Loading...</p>
      </div>
    </div>
  )
} 