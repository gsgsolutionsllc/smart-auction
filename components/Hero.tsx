"use client";

import { useState, useEffect } from "react";

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl w-16 h-16 flex items-center justify-center">
        <span className="text-2xl font-bold text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs text-blue-200 mt-1 uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ h: 4, m: 23, s: 47 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse-dot" />
              <span className="text-red-300 text-sm font-semibold uppercase tracking-wider">Live Auctions Now</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Bid Smart.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Win Big.
              </span>
              <br />
              Shop Smarter.
            </h1>

            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
              Discover thousands of exclusive auctions on electronics, collectibles, jewelry, and more.
              Real-time bidding with guaranteed authenticity.
            </p>

            {/* Countdown */}
            <div className="mb-8">
              <p className="text-blue-300 text-sm font-medium mb-3 uppercase tracking-wider">
                Featured Auction Ends In
              </p>
              <div className="flex items-center gap-3">
                <CountdownUnit value={timeLeft.h} label="Hours" />
                <span className="text-white/40 text-2xl font-light mb-5">:</span>
                <CountdownUnit value={timeLeft.m} label="Mins" />
                <span className="text-white/40 text-2xl font-light mb-5">:</span>
                <CountdownUnit value={timeLeft.s} label="Secs" />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button className="btn-gold text-white font-bold px-8 py-4 rounded-xl text-base shadow-xl">
                Browse Auctions
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all">
                How It Works
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-white/10">
              {[
                { icon: "🛡️", text: "Buyer Protection" },
                { icon: "⚡", text: "Instant Notifications" },
                { icon: "🔐", text: "Secure Payments" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <span className="text-lg">{icon}</span>
                  <span className="text-blue-200 text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Featured auction card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl">
              {/* Featured tag */}
              <div className="flex justify-between items-start mb-4">
                <span className="bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Featured
                </span>
                <div className="flex items-center gap-1.5 text-red-300">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse-dot" />
                  <span className="text-xs font-semibold">LIVE</span>
                </div>
              </div>

              {/* Product image placeholder */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl h-52 mb-5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-violet-900/30" />
                <div className="relative text-center">
                  <div className="text-6xl mb-2 animate-float">💎</div>
                  <p className="text-white/50 text-sm">Diamond Luxury Watch</p>
                </div>
              </div>

              <h3 className="text-white font-bold text-xl mb-1">
                Rolex Submariner Limited Edition
              </h3>
              <p className="text-blue-200 text-sm mb-4">
                18k Gold • Certified Authentic • Mint Condition
              </p>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-blue-300 text-xs uppercase tracking-wider mb-1">Current Bid</p>
                  <p className="text-amber-400 text-3xl font-extrabold">$12,450</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-300 text-xs uppercase tracking-wider mb-1">Bids</p>
                  <p className="text-white text-xl font-bold">47</p>
                </div>
              </div>

              <button className="w-full btn-gold text-white font-bold py-3.5 rounded-xl text-base">
                Place Bid Now →
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {[
            { value: "50K+", label: "Active Bidders" },
            { value: "12K+", label: "Live Auctions" },
            { value: "$2.4M", label: "Paid to Sellers" },
            { value: "99.8%", label: "Satisfaction Rate" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-extrabold text-white">{value}</p>
              <p className="text-blue-300 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
