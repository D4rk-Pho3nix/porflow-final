import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorProvider } from "@/components/custom-cursor"
import GlobalStyles from "@/components/global-styles"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "Neon - Modern Dark Theme",
  description: "A modern dark-themed website with neon accents and glass-morphism effects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>
          {`
            @font-face {
              font-family: 'Monument Extended';
              src: local('Monument Extended'), url('/fonts/MonumentExtended-Regular.woff2') format('woff2');
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: 'Monument Extended';
              src: local('Monument Extended'), url('/fonts/MonumentExtended-Bold.woff2') format('woff2');
              font-weight: bold;
              font-style: normal;
              font-display: swap;
            }
          `}
        </style>
      </head>
      <body className={`${inter.variable} font-sans min-h-screen bg-black antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CursorProvider>
            <GlobalStyles />
            {children}
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

