"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT — info */}
          <div>
            <span className="text-blue-600 text-sm font-bold uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-5">
              Get Your Free Quote Today
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Tell us what your office needs — whether it&apos;s a bulk toner order, a refurbished copier, or a flexible rental plan — and we&apos;ll come back to you fast with the best price.
            </p>

            <div className="space-y-5 mb-8">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  ),
                  label: "Call or Text",
                  value: "(520) 808-7203",
                  href: "tel:+15208087203",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  ),
                  label: "eBay Store",
                  value: "Shop on eBay →",
                  href: "https://ebay.us/m/R3R9Tk",
                },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wide font-semibold">{label}</p>
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-slate-900 font-bold text-base hover:text-blue-600 transition-colors">
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="flex gap-3">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 text-sm font-semibold text-blue-700">
                🇺🇸 English
              </span>
              <span className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-4 py-2.5 text-sm font-semibold text-green-700">
                🇲🇽 Español
              </span>
            </div>

            {/* Trust badges */}
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
              {[
                { val: "807", lbl: "Items Sold" },
                { val: "90.3%", lbl: "Positive Feedback" },
                { val: "30+", lbl: "Years Experience" },
              ].map(({ val, lbl }) => (
                <div key={lbl} className="bg-slate-50 rounded-xl py-4">
                  <p className="text-blue-700 font-extrabold text-xl">{val}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-slate-900 font-extrabold text-2xl mb-2">Message Sent!</h3>
                <p className="text-slate-500">We&apos;ll get back to you within a few hours. You can also call us at <a href="tel:+15208087203" className="text-blue-600 font-semibold">(520) 808-7203</a>.</p>
              </div>
            ) : (
              <>
                <h3 className="font-extrabold text-slate-900 text-xl mb-6">Request a Free Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 text-sm font-semibold mb-1.5">Full Name *</label>
                      <input
                        required name="name" value={form.name} onChange={handleChange}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 text-sm font-semibold mb-1.5">Phone</label>
                      <input
                        name="phone" value={form.phone} onChange={handleChange} type="tel"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        placeholder="(520) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-1.5">Email *</label>
                    <input
                      required name="email" value={form.email} onChange={handleChange} type="email"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-1.5">I&apos;m interested in</label>
                    <select
                      name="subject" value={form.subject} onChange={handleChange}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a product/service...</option>
                      <option>Toner Cartridges</option>
                      <option>Networking Equipment</option>
                      <option>Computer Memory & Components</option>
                      <option>Buying a Copy Machine / Computer</option>
                      <option>Renting a Copy Machine / Computer</option>
                      <option>Bulk Order Discount</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-1.5">Message *</label>
                    <textarea
                      required name="message" value={form.message} onChange={handleChange} rows={4}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white resize-none"
                      placeholder="Tell us what you need — model, quantity, budget, or any questions..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-900/20"
                  >
                    Send My Free Quote Request →
                  </button>
                  <p className="text-center text-slate-400 text-xs">No obligation. We reply within hours.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
