import { Josefin_Sans } from "next/font/google"

import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/common/Navbar";

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
        </body>
    </html>
  )
}
