import { Josefin_Sans } from "next/font/google"

import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Toaster } from "@/components/ui/sonner";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${josefinSans.className}`}>
        <body>
            <Navbar/>
            {children}
            <Footer/>
            <Toaster richColors position="bottom-right" />
        </body>
    </html>
  )
}
