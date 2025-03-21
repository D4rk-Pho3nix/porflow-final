import Image from "next/image"
import Link from "next/link"

export default function Logo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  let dimensions: { width: number; height: number }
  
  switch (size) {
    case "small":
      dimensions = { width: 24, height: 24 }
      break
    case "large":
      dimensions = { width: 48, height: 48 }
      break
    default:
      dimensions = { width: 32, height: 32 }
  }
  
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative" style={{ width: dimensions.width, height: dimensions.height }}>
        <Image
          src="/logo.svg" // You'll need to create this SVG logo file
          alt="Portflow Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  )
}