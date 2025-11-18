import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'


export const metadata: Metadata={
  title: {
    default:"Yasu's Portfolio",
    template:'%s | Yasu'
  },
  description: 'yasuのポートフォリオサイト',
  keywords:['ios','Swift', 'Portfolio', 'Developer'],
  authors:[{name:'Yasu'}],
  openGraph:{
    title:"Yasu's Portfolio",
    description: "yasuのポートフォリオ",
    type:'website',
  },
}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}){
  return(
    <html lang="ja">
    <body>
      <nav className="fixed top-0 right-0 p-6 z-50">
        <div className="flex gap-6">
      <Link href="#myapps" className="text-white hover:text-gray-300 transition-colors">MyApps</Link>
      <Link href="#works" className="text-white hover:text-gray-300 transition-colors">Works</Link>
      <Link href="#skills" className="text-white hover:text-gray-300 transition-colors">Skills</Link>
      <Link href="#aboutme" className="text-white hover:text-gray-300 transition-colors">About</Link>
      <Link href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
       </div>
      </nav>
      {children}
      
      </body>
      </html>
  )
}