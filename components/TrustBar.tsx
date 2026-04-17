const brands = ["HP", "Canon", "Brother", "Epson", "Ricoh", "Savin", "Xerox", "Cisco", "Hynix"];

export default function TrustBar() {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-400 text-xs uppercase tracking-widest font-semibold mb-6">
          Compatible with all major brands
        </p>

        {/* Scrolling brand ticker */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 mb-8">
          {brands.map((brand) => (
            <span
              key={brand}
              className="reveal text-slate-400 font-bold text-sm tracking-wider uppercase hover:text-blue-600 transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border-t border-slate-200 pt-8">
          {[
            { val: "807+", lbl: "Items Sold on eBay", delay: "0" },
            { val: "90.3%", lbl: "Positive Feedback", delay: "100" },
            { val: "30+", lbl: "Years in Business", delay: "200" },
            { val: "70%", lbl: "Average Savings", delay: "300" },
          ].map(({ val, lbl, delay }) => (
            <div key={lbl} className="reveal" data-delay={delay}>
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-700">{val}</p>
              <p className="text-slate-500 text-sm mt-1">{lbl}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
