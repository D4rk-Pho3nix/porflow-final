import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/components/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorProvider } from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PortFlow - AI-powered customs clearance platform",
  description: "PortFlow is an AI-powered platform that streamlines customs clearance for importers and exporters, reducing delays and eliminating the need for middlemen.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CursorProvider>
            {children}
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 