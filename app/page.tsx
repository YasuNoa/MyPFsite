import Link from 'next/link'
import Image from 'next/image'
import { JSX } from 'react';
import { HomeSection } from '@/components/1_HomeSection';
import { MyAppsSection } from '@/components/2_MyAppsSection';
import { WorksSection } from '@/components/3_WorksSection';  // .tsx削除, s追加
import { SkillsSection } from '@/components/4_SkillsSection';
import { AboutMeSection } from '@/components/5_AboutMeSection';
import { ContactSection } from '@/components/6_ContactSection';



export default function Home() {  // ← これを追加！
  return (
    <main>
      <HomeSection id="home" />
      <MyAppsSection id="myapps" />
      <WorksSection id="works" />
      <SkillsSection id="skills" />
      <AboutMeSection id="aboutme" />
      <ContactSection id="contact" />
    </main>
  );
} 