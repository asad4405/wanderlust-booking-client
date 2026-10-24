import { Josefin_Sans } from "next/font/google"

import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${josefinSans}`}>
        <body>
            <Navbar/>
            {children}
            <Footer/>
        </body>
    </html>
  )
}
