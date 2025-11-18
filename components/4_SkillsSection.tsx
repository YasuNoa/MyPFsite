import Link from 'next/link'
import Image from 'next/image'
import { JSX } from 'react';
 
 interface SkillsSectionProps {
    id?: string;
  }
  export function SkillsSection({ id }: SkillsSectionProps) {
    return <section id={id}>...</section>
  }

<section className="min-h-[50vh] bg-gradient-to-b from-gray-700 to-gray-600">
        <div className="p-8">
          <h2 className="text-3xl text-white">Skills</h2>
          <div className="border p-4 rounded">Terraform</div>
        </div>
        </section>