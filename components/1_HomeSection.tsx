import Link from 'next/link'
import Image from 'next/image'
import { JSX } from 'react';
 
 interface HomeSectionProps {
    id?: string;
  }
  export default function HomeSection({ id }: HomeSectionProps) {
    return <section id={id}>...</section>
  }