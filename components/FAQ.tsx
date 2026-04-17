"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Are compatible toner cartridges as good as OEM?",
    a: "Yes — our compatible cartridges are manufactured to meet or exceed OEM standards for page yield, print quality, and reliability. They work perfectly in your printer and do not void your warranty. We also carry OEM options if you prefer the original brand.",
  },
  {
    q: "What brands of toner and ink do you carry?",
    a: "We stock compatible and OEM cartridges for HP, Canon, Brother, Epson, Xerox, Ricoh, Kyocera, Lexmark, and more. If you don't see your brand or model listed, just call us at (520) 808-7203 and we'll source it for you.",
  },
  {
    q: "What does 'certified refurbished' mean?",
    a: "Every refurbished device we sell goes through a 50-point inspection: cleaning, part replacement, calibration, test prints, and final quality check. You get a fully functional device backed by our 90-day warranty — at a fraction of the new price.",
  },
  {
    q: "Do you offer equipment rentals?",
    a: "Yes! Our monthly rental plans start at $49/month and include maintenance. Rentals are ideal for startups, temporary offices, or businesses that want to upgrade frequently without the large upfront cost. Contact us for a custom rental quote.",
  },
  {
    q: "Do you offer bulk discounts?",
    a: "Absolutely. Businesses buying multiple cartridges or equipment pieces receive volume pricing. Contact us directly and we'll build a custom quote tailored to your monthly usage.",
  },
  {
    q: "How fast do you ship?",
    a: "Most in-stock items ship same or next business day. Orders over $299 qualify for free delivery. Refurbished equipment typically ships within 1–2 business days and includes packaging to prevent any damage in transit.",
  },
  {
    q: "Do you speak Spanish?",
    a: "¡Sí! Our team is fully bilingual in English and Spanish. You're welcome to communicate with us in whichever language you prefer — we're here to help.",
  },
  {
    q: "What if I have a problem with my order?",
    a: "We stand behind everything we sell. If you experience any issue, contact us at (520) 808-7203 or through our contact form and we'll make it right. Refurbished equipment is covered by our 90-day warranty.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 text-sm font-bold uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-lg">
            Got questions? We&apos;ve got answers. Or just call us: <a href="tel:+15208087203" className="text-blue-600 font-semibold">(520) 808-7203</a>
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-slate-900 text-sm sm:text-base">{q}</span>
                <svg
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
