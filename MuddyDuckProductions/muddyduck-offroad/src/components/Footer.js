// src/components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-yellow-300 px-8 py-6 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 Muddy Duck Offroad</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="https://www.instagram.com/muddyduckoffroad/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Instagram
          </a>
          <a href="https://www.facebook.com/profile.php?id=61576921557564" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Facebook
          </a>
          <a href="https://x.com/MuddyDuckProduc" target="_blank" rel="noopener noreferrer" className="hover:underline">
            X (Twitter)
          </a>
          <a href="mailto:Mark@MuddyDuckProductions.com" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
