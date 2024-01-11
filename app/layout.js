import { Inter } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'
import { Metadata } from "next";
import '@fortawesome/fontawesome-free/css/all.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});
console.log("cal");

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}