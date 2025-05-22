import React from "react";
import Link from "next/link";


export default function Header() {
  return (
    <header className="bg-peach text-black p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Survey 360 Research</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/resources">Resources</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
