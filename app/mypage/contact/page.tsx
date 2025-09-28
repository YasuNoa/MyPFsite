import Link from "next/link"
import {JSX, FormEvent, ChangeEvent,useState} from 'react';

export default function ContactPage() {
    return (
        
        <section className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-700 p-8">
            <Link href="/" className="fixed top-6 left-6 text-white hover:text-gray-300">
            ← Back to home
            </Link>
            <div className="max-w-4xl mx-auto pt-20">
                <h1 className="text-4xl font-bold text-white mb-8">Contact</h1>

                <div className="text-gray-300 space-y-4">
                    <p>お問い合わせはこちらから</p>

                </div>
            </div>
        </section>
       
    )
}