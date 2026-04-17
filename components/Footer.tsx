export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                </svg>
              </div>
              <div>
                <span className="text-white font-extrabold text-base">GS<span className="text-blue-400">Solutions</span></span>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest leading-none">Store</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Your trusted partner for office equipment solutions since the 1990s. Competitive pricing, top-tier products, and expert support.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+15208087203" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="text-blue-400">📞</span> (520) 808-7203
              </a>
              <a href="https://ebay.us/m/R3R9Tk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="text-blue-400">🛒</span> eBay Store ↗
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Toner Cartridges", "https://ebay.us/m/R3R9Tk"],
                ["Ink Cartridges", "https://ebay.us/m/R3R9Tk"],
                ["Networking Equipment", "https://ebay.us/m/R3R9Tk"],
                ["Computer Memory & RAM", "https://ebay.us/m/R3R9Tk"],
                ["Copy Machines", "#contact"],
                ["Computers & Laptops", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Equipment Rental", "#contact"],
                ["Bulk Orders", "#contact"],
                ["Free Quote", "#contact"],
                ["Bilingual Support", "#contact"],
                ["eBay Store", "https://ebay.us/m/R3R9Tk"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & CTA */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Shop with Confidence</h4>
            <ul className="space-y-3 text-sm mb-6">
              {[
                "90-Day Warranty",
                "90.3% Positive Feedback",
                "807 Items Sold",
                "Free Delivery $299+",
                "English & Español",
                "30+ Years Experience",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition-all">
              Get a Free Quote →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {year} GS Solutions Store. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="https://ebay.us/m/R3R9Tk" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              eBay Seller: gersolutions_1
            </a>
            <span>United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
