"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
              </svg>
            </div>
            <span className={`font-bold text-lg tracking-tight ${scrolled ? "text-slate-900" : "text-white"}`}>
              GS<span className="text-amber-400">Solutions</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {["Auctions", "Categories", "How It Works", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-slate-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button className="btn-gold text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md">
              Start Bidding
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-5 h-0.5 mb-1 transition-all ${scrolled ? "bg-slate-900" : "bg-white"}`} />
            <div className={`w-5 h-0.5 mb-1 transition-all ${scrolled ? "bg-slate-900" : "bg-white"}`} />
            <div className={`w-5 h-0.5 transition-all ${scrolled ? "bg-slate-900" : "bg-white"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="px-4 py-4 flex flex-col gap-3">
            {["Auctions", "Categories", "How It Works", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-slate-700 font-medium py-2 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex gap-3 pt-2 border-t border-slate-100">
              <button className="flex-1 text-sm font-medium px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700">
                Sign In
              </button>
              <button className="flex-1 btn-gold text-white text-sm font-semibold px-4 py-2.5 rounded-xl">
                Start Bidding
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
