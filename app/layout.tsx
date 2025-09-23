import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    <body>{children}</body></html>
  )
}