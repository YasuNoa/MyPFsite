import Link from 'next/link'
import Image from 'next/image'
import { JSX } from 'react';
 
 interface ContactSectionProps {
    id?: string;
  }
  export function ContactSection({ id }: ContactSectionProps) {
    return <section id={id}>...</section>
  }