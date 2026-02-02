"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fbf8f5] border-b border-[#223614]/10">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-[#223614] font-medium text-lg md:text-xl">
          Dr. Maya Reynolds, PsyD
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-[#223614] text-sm">
          <li className="hover:opacity-70 cursor-pointer">About</li>
          <li className="hover:opacity-70 cursor-pointer">Services</li>
          <li className="hover:opacity-70 cursor-pointer">Trauma & Anxiety</li>
          <li className="hover:opacity-70 cursor-pointer">Office</li>
          <li className="hover:opacity-70 cursor-pointer">FAQ</li>
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-[#223614] text-white px-6 py-2 rounded-full text-sm hover:opacity-90 transition">
            Book a Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#223614]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#fbf8f5] border-t border-[#223614]/10 px-4 py-6 space-y-4 text-[#223614]">
          <div>About</div>
          <div>Services</div>
          <div>Trauma & Anxiety</div>
          <div>Office</div>
          <div>FAQ</div>

          <button className="w-full mt-4 bg-[#223614] text-white py-3 rounded-full text-sm">
            Book a Consultation
          </button>
        </div>
      )}
    </header>
  );
}

