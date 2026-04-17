const products = [
  {
    id: "toner",
    tag: "Best Seller",
    tagColor: "bg-blue-600",
    icon: (
      <svg viewBox="0 0 80 120" className="w-20 h-28 drop-shadow-lg">
        <rect x="10" y="25" width="60" height="85" rx="8" fill="#1e40af"/>
        <rect x="14" y="12" width="52" height="18" rx="5" fill="#2563eb"/>
        <rect x="18" y="16" width="44" height="10" rx="3" fill="#0f172a"/>
        <rect x="20" y="18" width="40" height="6" rx="2" fill="#3b82f6" opacity="0.6"/>
        <text x="40" y="65" fill="#93c5fd" fontSize="8" textAnchor="middle" fontWeight="bold">TONER</text>
        <text x="40" y="76" fill="#60a5fa" fontSize="5.5" textAnchor="middle">RICOH · CANON</text>
        <text x="40" y="85" fill="#60a5fa" fontSize="5.5" textAnchor="middle">HP · BROTHER</text>
        <rect x="14" y="92" width="52" height="10" rx="3" fill="#1d4ed8"/>
        <text x="40" y="99" fill="white" fontSize="6" textAnchor="middle" fontWeight="bold">FROM $20.00</text>
      </svg>
    ),
    title: "Toner Cartridges",
    subtitle: "Compatible — Ricoh, HP, Canon & More",
    description:
      "High-yield compatible toner cartridges for Ricoh MP, Savin, Lanier and all major brands. Cyan, Magenta, Yellow & Black available.",
    features: [
      "Ricoh MP C3500 / C4500 series",
      "Cyan, Magenta, Yellow, Black",
      "Compatible & OEM options",
      "Bulk order discounts available",
    ],
    price: "From $20",
    cta: "Shop Toner",
    href: "https://ebay.us/m/R3R9Tk",
    external: true,
  },
  {
    id: "networking",
    tag: "Hot Deal",
    tagColor: "bg-teal-600",
    icon: (
      <svg viewBox="0 0 100 80" className="w-24 h-20 drop-shadow-lg">
        {/* Router/firewall body */}
        <rect x="5" y="20" width="90" height="40" rx="6" fill="#0f766e"/>
        <rect x="5" y="20" width="90" height="14" rx="6" fill="#0d9488"/>
        {/* Ports */}
        {[18,31,44,57,70].map((x) => (
          <rect key={x} x={x} y="27" width="9" height="6" rx="1.5" fill="#0f172a"/>
        ))}
        {/* LEDs */}
        {[20,33,46,59,72].map((x,i) => (
          <circle key={x} cx={x+2.5} cy="42" r="2" fill={i === 0 ? "#4ade80" : "#22d3ee"}/>
        ))}
        {/* Antenna */}
        <rect x="82" y="5" width="3" height="18" rx="1.5" fill="#0d9488"/>
        <circle cx="83.5" cy="4" r="2" fill="#5eead4"/>
        <text x="50" y="56" fill="#ccfbf1" fontSize="6" textAnchor="middle" fontWeight="bold">CISCO MERAKI · SD-WAN</text>
      </svg>
    ),
    title: "Networking Equipment",
    subtitle: "Cisco Meraki, Routers & Firewalls",
    description:
      "Enterprise-grade networking gear at unbeatable prices. Cisco Meraki MX series firewalls, SD-WAN appliances, switches and access points.",
    features: [
      "Cisco Meraki MX64, MX67, MX84",
      "VPN & SD-WAN firewalls",
      "Routers, switches & APs",
      "Save up to 12% on multi-buy",
    ],
    price: "From $29.99",
    cta: "Shop Networking",
    href: "https://ebay.us/m/R3R9Tk",
    external: true,
  },
  {
    id: "memory",
    tag: "Low Price",
    tagColor: "bg-violet-600",
    icon: (
      <svg viewBox="0 0 100 60" className="w-24 h-16 drop-shadow-lg">
        {/* RAM stick */}
        <rect x="5" y="10" width="90" height="40" rx="3" fill="#4c1d95"/>
        <rect x="5" y="10" width="90" height="12" rx="3" fill="#7c3aed"/>
        {/* Chips */}
        {[12,24,36,48,60,72].map((x) => (
          <rect key={x} x={x} y="16" width="10" height="8" rx="1" fill="#2e1065"/>
        ))}
        {/* Notch */}
        <rect x="48" y="46" width="4" height="6" rx="1" fill="#1e0a3c"/>
        {/* Pins */}
        {Array.from({length:18}).map((_,i) => (
          <rect key={i} x={8+i*5} y="47" width="2" height="5" rx="0.5" fill="#a78bfa"/>
        ))}
        <text x="50" y="36" fill="#c4b5fd" fontSize="7" textAnchor="middle" fontWeight="bold">DDR3 ECC · 8GB</text>
      </svg>
    ),
    title: "Computer Memory & Components",
    subtitle: "RAM, ECC Memory & More",
    description:
      "Server and workstation memory at warehouse prices. Hynix, Samsung, Micron ECC RDIMM and UDIMM modules. Perfect for upgrades.",
    features: [
      "Hynix 8GB DDR3 PC3-10600R ECC",
      "RDIMM & UDIMM formats",
      "Server & workstation grade",
      "Tested & ready to ship",
    ],
    price: "From $10.99",
    cta: "Shop Memory",
    href: "https://ebay.us/m/R3R9Tk",
    external: true,
  },
  {
    id: "copiers",
    tag: "Sell & Rent",
    tagColor: "bg-amber-600",
    icon: (
      <svg viewBox="0 0 120 90" className="w-28 h-20 drop-shadow-lg">
        <rect x="10" y="15" width="100" height="65" rx="8" fill="#92400e"/>
        <rect x="10" y="15" width="100" height="25" rx="8" fill="#b45309"/>
        <rect x="16" y="20" width="48" height="16" rx="3" fill="#0f172a"/>
        <rect x="18" y="22" width="44" height="12" rx="2" fill="#f59e0b" opacity="0.7"/>
        <text x="40" y="30" fill="white" fontSize="6" textAnchor="middle" fontWeight="bold">COPY · PRINT · SCAN</text>
        {[75,88,101].map((x) => (
          <circle key={x} cx={x} cy="28" r="4" fill="#92400e" stroke="#fcd34d" strokeWidth="1"/>
        ))}
        <rect x="20" y="50" width="80" height="4" rx="2" fill="#0f172a"/>
        {[0,2,4,6].map((i) => (
          <rect key={i} x="22" y={52+i} width="76" height="1" rx="0.5" fill="white" opacity="0.2"/>
        ))}
        <rect x="30" y="68" width="60" height="7" rx="2" fill="#b45309"/>
        <text x="60" y="73.5" fill="white" fontSize="5.5" textAnchor="middle" fontWeight="bold">CERTIFIED REFURBISHED</text>
      </svg>
    ),
    title: "Copy Machines & Computers",
    subtitle: "Buy or Rent — Flexible Plans",
    description:
      "Our specialty for 30+ years. High-quality refurbished copy machines and computers for sale or flexible monthly rental. Ready to use from day one.",
    features: [
      "Color & B&W copy machines",
      "Desktops, laptops & workstations",
      "Flexible monthly rental plans",
      "90-day warranty on all units",
    ],
    price: "Custom Quote",
    cta: "Get a Quote",
    href: "#contact",
    external: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-bold uppercase tracking-wider">Our Products & Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Everything Your Office Needs
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Toner, networking gear, memory, copy machines and computers — all at prices that make sense for your business.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Visual */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 px-6 pt-8 pb-6 flex flex-col items-center">
                <div className="mb-4">{p.icon}</div>
                <span className={`${p.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>{p.tag}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-slate-400 text-xs uppercase tracking-wide font-semibold">{p.subtitle}</p>
                <h3 className="text-slate-900 font-extrabold text-xl mt-1 mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{p.description}</p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-600 text-sm">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <span className="text-slate-900 font-extrabold text-lg">{p.price}</span>
                  <a
                    href={p.href}
                    target={p.external ? "_blank" : undefined}
                    rel={p.external ? "noopener noreferrer" : undefined}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition-all"
                  >
                    {p.cta} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* eBay store CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-100 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-1">Live on eBay</p>
            <h3 className="text-slate-900 font-extrabold text-xl">Browse All 800+ Items in Our Store</h3>
            <p className="text-slate-500 text-sm mt-1">90.3% positive feedback · 807 items sold</p>
          </div>
          <a
            href="https://ebay.us/m/R3R9Tk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow whitespace-nowrap"
          >
            Visit Our eBay Store ↗
          </a>
        </div>
      </div>
    </section>
  );
}
