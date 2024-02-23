import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          <div className="flex space-x-2">
            <Link href="/parlays" className="text-violet-700 hover:bg-white text-4xl font-bold md:border-0 antialiased rounded md:bg-transparent">Parlays</Link>
          </div>
          <div className="flex space-x-2"> 
            <Link href="/story" className="text-violet-700 hover:bg-white text-4xl font-bold md:border-0 antialiased rounded md:bg-transparent">Story</Link>
          </div>
          <div className="flex space-x-2">
            <Link href="/" className="text-violet-700 hover:bg-white font-bold md:border-0 antialiased rounded md:bg-transparent">Home</Link>
          </div>
          <div className="flex space-x-2">
            <Link href="/team" className="text-violet-700 hover:bg-white font-bold md:border-0 antialiased rounded md:bg-transparent">Team</Link>
          </div>
          <div className="flex space-x-2">
            <Link href="/login" className="text-violet-700 hover:bg-white font-bold md:border-0 antialiased rounded md:bg-transparent">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}