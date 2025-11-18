import Link from 'next/link'
import Image from 'next/image'
import { JSX } from 'react';
 
 interface WorksSectionProps {
    id?: string;
  }
  export function WorksSection({ id }: WorksSectionProps) {
    return <section id={id}>...</section>
  }