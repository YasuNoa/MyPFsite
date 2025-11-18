import Link from 'next/link'
import Image from 'next/image'
import { JSX } from 'react';
 
 interface HomeSectionProps {
    id?: string;
  }
  export function HomeSection({ id }: HomeSectionProps) {
    return <section id={id}>
    <section className="h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      
      <div className="h-full flex items-center justify-center">
        <h1 className="text-5xl text-white">Yasu&apos;s portfolio</h1>
        </div>
      </section>
      
      </section>

      
  }