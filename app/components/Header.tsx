"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 shadow-md bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/safaricom-logo.png"
            alt="Safaricom Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden sm:flex gap-6 text-gray-700 dark:text-gray-200 text-sm font-medium">
          <Link href="/" className="hover:text-green-600 transition">Home</Link>
          <Link href="/about" className="hover:text-green-600 transition">About</Link>
          <Link href="/services" className="hover:text-green-600 transition">Services</Link>
          <Link href="/contact" className="hover:text-green-600 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}