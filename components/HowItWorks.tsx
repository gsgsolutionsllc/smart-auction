const steps = [
  {
    num: "01",
    color: "from-blue-500 to-blue-700",
    title: "Browse or Contact Us",
    body: "Shop our eBay store anytime or call/message us directly at (520) 808-7203. We speak English & Spanish.",
    icon: "🔍",
  },
  {
    num: "02",
    color: "from-violet-500 to-violet-700",
    title: "Get a Free Quote",
    body: "Tell us what you need — quantity, brand, model — and we'll send a custom quote within hours. No obligation.",
    icon: "📋",
  },
  {
    num: "03",
    color: "from-teal-500 to-teal-700",
    title: "We Ship It Fast",
    body: "Most orders ship same or next day. Free delivery on orders $299+. Equipment orders include setup guidance.",
    icon: "🚀",
  },
  {
    num: "04",
    color: "from-amber-500 to-amber-700",
    title: "You Save & We Support",
    body: "You enjoy up to 70% in savings. And if anything comes up, we're right here — guaranteed for 90 days.",
    icon: "🏆",
  },
];

export default function HowItWorks() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-bold uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Simple. Fast. Affordable.
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Getting what your office needs has never been easier. Here&apos;s how we work.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-blue-200 via-violet-200 to-amber-200 z-0" />

          {steps.map(({ num, color, title, body, icon }) => (
            <div key={num} className="relative z-10 flex flex-col items-center text-center">
              {/* Circle */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex flex-col items-center justify-center shadow-lg mb-5`}>
                <span className="text-2xl">{icon}</span>
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Step {num}</div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
          <div>
            <h3 className="text-white font-extrabold text-xl mb-1">Ready to save on office supplies?</h3>
            <p className="text-blue-200 text-sm">Get a free, no-obligation quote in minutes.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+15208087203" className="bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all whitespace-nowrap">
              📞 Call Now
            </a>
            <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-all whitespace-nowrap">
              Get a Free Quote →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
