import Link from 'next/link'
import Image from 'next/image'
import { JSX } from 'react';
 
 interface AboutMeSectionProps {
    id?: string;
  }
  export function AboutMeSection({ id }: AboutMeSectionProps) {
    return <section id={id}>...</section>
  }