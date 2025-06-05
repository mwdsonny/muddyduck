import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-950 text-yellow-300 px-4 py-4 shadow-md h-30">
      <div className="flex justify-between items-center w-full">
        {/* Logo + Title */}
        <div className="flex items-center space-x-4">
          <img src="/logo.jpg" alt="Muddy Duck Logo" className="h-20 w-auto" />
          <h1 className="text-7xl font-grundee">Muddy Duck Offroad</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#trails" className="hover:underline">Trails</a>
          <a href="#mods" className="hover:underline">Vehicle Mods</a>
          <a href="#trip-logs" className="hover:underline">Trip Logs</a>
          <a href="#blog" className="hover:underline">Blog</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#youtube" className="hover:underline">YouTube</a>
        </nav>

        {/* Mobile Nav Button */}
        <button
          className="md:hidden text-yellow-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-center">
          <a href="#trails" className="block hover:underline">Trails</a>
          <a href="#mods" className="block hover:underline">Vehicle Mods</a>
          <a href="#trip-logs" className="block hover:underline">Trip Logs</a>
          <a href="#blog" className="block hover:underline">Blog</a>
          <a href="#gallery" className="block hover:underline">Gallery</a>
          <a href="#youtube" className="block hover:underline">YouTube</a>
        </div>
      )}
    </header>
  );
}
