"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      {/* Top utility bar */}
      <div className="bg-blue-900 text-blue-100 text-xs py-1.5 text-center px-4">
        <span className="hidden sm:inline">Serving homes &amp; businesses for 30+ years &nbsp;·&nbsp; </span>
        📞 <a href="tel:+15208087203" className="font-semibold underline hover:text-white">(520) 808-7203</a>
        &nbsp;·&nbsp; 🇺🇸 English &amp; 🇲🇽 Español
        &nbsp;·&nbsp; <a href="https://ebay.us/m/R3R9Tk" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-white">eBay Store ↗</a>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className={`font-extrabold text-base tracking-tight ${scrolled ? "text-slate-900" : "text-white"}`}>
              GS<span className="text-blue-400">Solutions</span>
            </span>
            <p className={`text-[10px] uppercase tracking-widest leading-none ${scrolled ? "text-slate-400" : "text-blue-200"}`}>Store</p>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className={`text-sm font-medium transition-colors hover:text-blue-500 ${scrolled ? "text-slate-700" : "text-white/90"}`}>
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://ebay.us/m/R3R9Tk"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-medium px-4 py-2 rounded-lg border transition-all ${scrolled ? "border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600" : "border-white/30 text-white hover:border-white"}`}
          >
            eBay Store ↗
          </a>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow transition-all hover:-translate-y-0.5"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className={`w-6 h-6 ${scrolled ? "text-slate-900" : "text-white"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t shadow-xl px-4 py-5 flex flex-col gap-3">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className="text-slate-700 font-medium py-1.5 border-b border-slate-100 last:border-0" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-3">
            <a href="https://ebay.us/m/R3R9Tk" target="_blank" rel="noopener noreferrer" className="text-center border border-slate-200 text-slate-700 font-medium py-3 rounded-xl">
              eBay Store ↗
            </a>
            <a href="#contact" className="text-center bg-blue-600 text-white font-bold py-3 rounded-xl">
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
