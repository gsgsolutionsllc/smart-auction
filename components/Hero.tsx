export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg pt-32 pb-20 lg:pt-44 lg:pb-32 min-h-screen flex items-center">
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute top-10 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="animate-blob delay-300 absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="animate-blob delay-600 absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Floating decoration circles */}
      <div className="pointer-events-none absolute top-32 right-32 w-64 h-64 rounded-full border border-white/5 animate-spin-slow hidden lg:block" />
      <div className="pointer-events-none absolute top-48 right-48 w-40 h-40 rounded-full border border-white/5 animate-spin-slow hidden lg:block" style={{ animationDirection: "reverse", animationDuration: "12s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <div className="animate-fade-in inline-flex items-center gap-2 bg-green-500/15 border border-green-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-300 text-sm font-semibold">30+ Years Serving Businesses</span>
            </div>

            <h1 className="animate-slide-left text-4xl sm:text-5xl xl:text-[3.6rem] font-extrabold text-white leading-[1.1] mb-5">
              Your Office Supplies &amp;<br />
              <span className="gradient-text-gold">Equipment HQ</span>
            </h1>

            <p className="animate-fade-up delay-200 text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
              Toner, ink, networking gear, memory &amp; certified refurbished copy machines — all at prices that beat the big stores.
              <strong className="text-white"> Save up to 70%.</strong>
            </p>

            {/* Checklist */}
            <ul className="space-y-2.5 mb-10 max-w-md">
              {[
                ["Compatible toner for Ricoh, HP, Canon, Brother & more", "0"],
                ["Enterprise networking gear — Cisco Meraki from $29.99", "100"],
                ["Server & workstation RAM from $10.99", "200"],
                ["Certified refurbished copy machines & computers", "300"],
                ["Flexible rental plans · Bilingual EN/ES support", "400"],
              ].map(([item, delay]) => (
                <li key={item} className={`reveal flex items-start gap-3 text-blue-100`} data-delay={delay}>
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="animate-fade-up delay-500 flex flex-wrap gap-3">
              <a href="#products" className="btn bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-blue-900/40">
                Shop Now →
              </a>
              <a href="#contact" className="btn bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-amber-900/30">
                Free Quote
              </a>
              <a href="https://ebay.us/m/R3R9Tk" target="_blank" rel="noopener noreferrer"
                className="btn border border-white/25 hover:border-white/50 text-white font-semibold px-6 py-4 rounded-xl text-base">
                eBay Store ↗
              </a>
            </div>

            {/* Trust row */}
            <div className="animate-fade-in delay-700 flex flex-wrap gap-5 mt-8 pt-8 border-t border-white/10">
              {[
                { icon: "🛡️", text: "90-Day Warranty" },
                { icon: "⭐", text: "90.3% Feedback" },
                { icon: "💬", text: "EN / Español" },
                { icon: "🚚", text: "Free Delivery $299+" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <span className="text-base">{icon}</span>
                  <span className="text-blue-200 text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — 3D showcase card ── */}
          <div className="animate-slide-right delay-200 relative perspective-1000">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/25 to-violet-500/25 rounded-3xl blur-2xl scale-105 animate-pulse-glow" />

            {/* Main card with 3D tilt on hover */}
            <div className="card-3d relative glass rounded-3xl overflow-hidden shadow-2xl">
              {/* Product showcase area */}
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900 p-8 flex items-end justify-center h-64 overflow-hidden">
                {/* Back glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 to-transparent" />

                {/* 3D product illustrations */}
                <svg viewBox="0 0 380 200" className="w-full h-auto relative z-10 drop-shadow-2xl animate-float">
                  {/* === TONER (left) === */}
                  <g transform="translate(15, 10)">
                    {/* Shadow */}
                    <ellipse cx="45" cy="178" rx="35" ry="6" fill="black" opacity="0.3"/>
                    {/* Body */}
                    <rect x="15" y="40" width="60" height="130" rx="10" fill="url(#tonerGrad)"/>
                    {/* Top cap */}
                    <rect x="10" y="22" width="70" height="24" rx="8" fill="#3b82f6"/>
                    <rect x="15" y="25" width="60" height="15" rx="5" fill="#0f172a"/>
                    <rect x="17" y="27" width="56" height="11" rx="4" fill="#1d4ed8" opacity="0.8"/>
                    {/* Label */}
                    <rect x="22" y="60" width="46" height="70" rx="5" fill="#0f172a" opacity="0.5"/>
                    <text x="45" y="88" fill="#93c5fd" fontSize="8" textAnchor="middle" fontWeight="bold">TONER</text>
                    <text x="45" y="100" fill="#60a5fa" fontSize="5.5" textAnchor="middle">COMPATIBLE</text>
                    <text x="45" y="110" fill="#60a5fa" fontSize="5" textAnchor="middle">Ricoh · HP · Canon</text>
                    {/* Price tag */}
                    <rect x="18" y="125" width="54" height="14" rx="4" fill="#1d4ed8"/>
                    <text x="45" y="134" fill="white" fontSize="7" textAnchor="middle" fontWeight="bold">FROM $20</text>
                    {/* Bottom */}
                    <rect x="20" y="158" width="50" height="8" rx="4" fill="#2563eb" opacity="0.5"/>
                    <text x="45" y="210" fill="#94a3b8" fontSize="8" textAnchor="middle">Toner</text>
                  </g>

                  {/* === NETWORKING (center-left) === */}
                  <g transform="translate(115, 50)">
                    <ellipse cx="50" cy="138" rx="42" ry="5" fill="black" opacity="0.25"/>
                    {/* Router body */}
                    <rect x="0" y="40" width="100" height="50" rx="8" fill="url(#netGrad)"/>
                    <rect x="0" y="40" width="100" height="18" rx="8" fill="#0d9488"/>
                    {/* Ports */}
                    {[10,24,38,52,66,80].map((x) => (
                      <rect key={x} x={x} y="47" width="10" height="6" rx="1.5" fill="#0f172a"/>
                    ))}
                    {/* LEDs */}
                    {[10,24,38,52,66,80].map((x,i) => (
                      <circle key={x} cx={x+5} cy="62" r="2.5" fill={i < 2 ? "#4ade80" : "#22d3ee"} opacity="0.9"/>
                    ))}
                    {/* Antenna */}
                    <rect x="90" y="18" width="4" height="26" rx="2" fill="#0d9488"/>
                    <circle cx="92" cy="16" r="3" fill="#5eead4"/>
                    {/* Label */}
                    <text x="50" y="80" fill="#ccfbf1" fontSize="6" textAnchor="middle" fontWeight="bold">CISCO MERAKI</text>
                    <text x="50" y="89" fill="#99f6e4" fontSize="5" textAnchor="middle">SD-WAN · VPN FIREWALL</text>
                    {/* Price */}
                    <rect x="20" y="95" width="60" height="13" rx="4" fill="#0f766e"/>
                    <text x="50" y="104" fill="white" fontSize="6.5" textAnchor="middle" fontWeight="bold">FROM $29.99</text>
                    <text x="50" y="175" fill="#94a3b8" fontSize="8" textAnchor="middle">Networking</text>
                  </g>

                  {/* === COPIER (center-right) === */}
                  <g transform="translate(225, 10)">
                    <ellipse cx="65" cy="180" rx="50" ry="7" fill="black" opacity="0.2"/>
                    {/* Body */}
                    <rect x="5" y="40" width="120" height="130" rx="10" fill="url(#copierGrad)"/>
                    {/* Top panel */}
                    <rect x="5" y="40" width="120" height="35" rx="10" fill="#1d4ed8"/>
                    {/* Screen */}
                    <rect x="12" y="46" width="65" height="22" rx="4" fill="#0f172a"/>
                    <rect x="14" y="48" width="61" height="18" rx="3" fill="#0ea5e9" opacity="0.7"/>
                    <text x="44" y="57" fill="white" fontSize="6" textAnchor="middle" fontWeight="bold">COPY · PRINT</text>
                    <text x="44" y="65" fill="#bae6fd" fontSize="5" textAnchor="middle">SCAN · FAX</text>
                    {/* Buttons */}
                    {[82,95,108].map((x) => (
                      <circle key={x} cx={x} cy="56" r="5" fill="#1e40af" stroke="#93c5fd" strokeWidth="1"/>
                    ))}
                    {/* Paper trays */}
                    <rect x="10" y="140" width="110" height="14" rx="4" fill="#1d4ed8"/>
                    <rect x="10" y="155" width="110" height="12" rx="4" fill="#1e40af"/>
                    {/* Output tray */}
                    <rect x="5" y="85" width="18" height="50" rx="4" fill="#1e40af"/>
                    {[0,3,6,9].map(i=>(
                      <rect key={i} x="7" y={90+i*4} width="14" height="2" rx="1" fill="white" opacity="0.5"/>
                    ))}
                    {/* Certified badge */}
                    <rect x="30" y="106" width="75" height="14" rx="4" fill="#15803d"/>
                    <text x="67" y="115" fill="white" fontSize="6" textAnchor="middle" fontWeight="bold">✓ CERTIFIED REFURB</text>
                    <text x="65" y="210" fill="#94a3b8" fontSize="8" textAnchor="middle">Copy Machine</text>
                  </g>

                  {/* Gradient defs */}
                  <defs>
                    <linearGradient id="tonerGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1e40af"/>
                      <stop offset="100%" stopColor="#1e3a8a"/>
                    </linearGradient>
                    <linearGradient id="netGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0f766e"/>
                      <stop offset="100%" stopColor="#065f46"/>
                    </linearGradient>
                    <linearGradient id="copierGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1e40af"/>
                      <stop offset="100%" stopColor="#1e3a8a"/>
                    </linearGradient>
                  </defs>
                </svg>

                {/* Certified badge overlay */}
                <div className="absolute bottom-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  ✓ Certified Refurbished
                </div>
                <div className="absolute bottom-3 right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  807 Items Sold
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 divide-x divide-white/10 bg-white/5">
                {[
                  { val: "807", lbl: "Items Sold" },
                  { val: "70%", lbl: "Avg. Savings" },
                  { val: "30+", lbl: "Years Exp." },
                ].map(({ val, lbl }) => (
                  <div key={lbl} className="py-4 text-center">
                    <p className="text-white font-extrabold text-xl">{val}</p>
                    <p className="text-blue-300 text-xs mt-0.5">{lbl}</p>
                  </div>
                ))}
              </div>

              {/* CTA strip */}
              <div className="p-4 bg-white/5">
                <a href="#contact" className="block w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-center py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg btn">
                  Get Your Free Quote Today →
                </a>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="hidden lg:flex absolute -bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-1 scroll-indicator">
              <span className="text-blue-300/60 text-xs">Scroll</span>
              <svg className="w-4 h-4 text-blue-300/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
