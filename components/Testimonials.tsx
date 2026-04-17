const testimonials = [
  {
    name: "Maria L.",
    role: "Office Manager, Tucson Law Firm",
    avatar: "ML",
    color: "bg-blue-600",
    stars: 5,
    text: "We've been ordering toner from GS Solutions for years. Their compatible cartridges work just as well as the brand-name ones and we save about 60% every month. Incredible service!",
  },
  {
    name: "James T.",
    role: "Small Business Owner",
    avatar: "JT",
    color: "bg-teal-600",
    stars: 5,
    text: "Bought a refurbished Xerox copier from them. It came quickly, worked perfectly out of the box, and they even helped me set it up over the phone. Saved nearly $800 vs buying new.",
  },
  {
    name: "Rosa M.",
    role: "Administrative Assistant",
    avatar: "RM",
    color: "bg-violet-600",
    stars: 5,
    text: "Me gusta mucho el servicio bilingüe. Siempre me atienden bien y los precios son excelentes. Recomiendo GS Solutions a todos mis colegas.",
  },
  {
    name: "David K.",
    role: "IT Director, Healthcare Office",
    avatar: "DK",
    color: "bg-amber-600",
    stars: 5,
    text: "We rent three MFPs from GS Solutions. Monthly plans are flexible, maintenance is included, and whenever something comes up they respond same day. Highly recommend.",
  },
  {
    name: "Sandra O.",
    role: "Real Estate Agent",
    avatar: "SO",
    color: "bg-rose-600",
    stars: 5,
    text: "I needed ink in a hurry and GS Solutions had it shipped by next morning. The price was half of what I'd find at the office supply stores. Will definitely keep coming back.",
  },
  {
    name: "Michael R.",
    role: "Accounting Firm Partner",
    avatar: "MR",
    color: "bg-green-700",
    stars: 5,
    text: "We've purchased from GS Solutions three times now — toner, a scanner, and a copier. Every transaction was smooth and the quality has always been spot on. Trustworthy company.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-bold uppercase tracking-wider">Customer Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Stars count={5} />
            <span className="text-slate-600 font-semibold">5.0 · 500+ Happy Customers</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, avatar, color, stars, text }) => (
            <div key={name} className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <Stars count={stars} />
              <p className="text-slate-600 text-sm leading-relaxed mt-4 flex-1">&ldquo;{text}&rdquo;</p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-extrabold">{avatar}</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{name}</p>
                  <p className="text-slate-400 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
