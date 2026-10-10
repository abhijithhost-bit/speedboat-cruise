import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shikara Boat vs Speed Boat in Alleppey | Which is Better?",
  description:
    "Comparing Shikara boats and Speed boats in Alleppey backwaters. Learn about routes, pricing, speed, and why a speed boat might be your best choice.",
  alternates: { canonical: "https://www.speedboatcruisealleppey.com/blog/shikara-boat-vs-speed-boat-alleppey" },
  openGraph: {
    title: "Shikara Boat vs Speed Boat in Alleppey",
    description: "The definitive comparison between Shikara and Speed Boat in Alleppey.",
    url: "https://www.speedboatcruisealleppey.com/blog/shikara-boat-vs-speed-boat-alleppey",
    images: [{ url: "https://www.speedboatcruisealleppey.com/shikara_vs_speedboat.jpg", width: 1200, height: 630 }],
  },
};

const BookingCTA = () => (
  <div className="my-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center">
    <p className="text-sm text-emerald-700 font-semibold uppercase tracking-widest mb-2">Ready for an Adventure?</p>
    <h3 className="text-xl font-bold text-gray-900 mb-2">Book a Speed Boat Cruise Now</h3>
    <p className="text-gray-600 text-sm mb-5">Cover more distance · Private & Exclusive · Safe & Thrilling</p>
    <a href="https://wa.me/917012761588?text=Hi!%20I%20read%20your%20comparison%20guide%20and%20would%20like%20to%20book%20a%20speed%20boat%20tour%20in%20Alleppey." target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all hover:scale-105">
      Book on WhatsApp →
    </a>
  </div>
);

export default function ShikaraVsSpeedBoatAlleppey() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white pt-20 pb-16 sm:pt-28 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-blue-500 text-white px-3 py-1 rounded-full mb-4">Comparison</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Shikara Boat vs Speed Boat in Alleppey
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">Wondering whether to book a Shikara or a Speed boat for your backwater tour? Here is a complete breakdown of speed, distance, pricing, and routes.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
              <span>October 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </div>
      </header>

      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-md">
              <Image src="/shikara_vs_speedboat.jpg" alt="Speed boat vs Shikara in Alleppey" fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" priority />
            </div>

            <p className="text-xl text-gray-600 leading-relaxed font-medium border-l-4 border-emerald-500 pl-5 mb-10">
              While houseboats get all the attention, most day-trippers choose between a Shikara boat and a Speed boat. If you want to see the most of Alleppey's backwaters efficiently, here's why a speed boat takes the crown.
            </p>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">1. Speed and Distance Covered (The Speedboat Advantage)</h2>
              <div className="space-y-4 text-gray-600">
                <p>The biggest difference between a Shikara and a speed boat is, unsurprisingly, <strong>the speed</strong>. Shikaras move at a leisurely pace, which means in a 3-hour trip, you cover a relatively small area.</p>
                <p>A speed boat allows you to zip across the vast Vembanad Lake and delve deep into narrow village canals, covering distances of up to 30km in just one hour! You get to see diverse landscapes—from wide open lakes to tiny coconut groves—in a fraction of the time.</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">2. Speed Boat Routes & Pricing</h2>
              <div className="space-y-4 text-gray-600">
                <p>Here are the popular speedboat packages that offer incredible value for your time:</p>
                <ul className="space-y-4 text-sm list-none">
                  <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <strong className="text-gray-900 text-base block mb-2">🚤 1-Hour Full Village Safari</strong>
                    <p className="mb-1"><strong>Route:</strong> Starts from Alleppey (2km from town) → Boat Race Track → Village Narrow Canals → Kainakary Terminal → Coconut Groves → Vembanad Lake</p>
                    <p><strong>Total distance covered:</strong> 30km</p>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <strong className="text-gray-900 text-base block mb-2">🚤 30 Minutes Lake Loop</strong>
                    <p className="mb-1"><strong>Route:</strong> Starts from Alleppey → Boat Race Track → Vembanad Lake → Punnamada Lake</p>
                    <p><strong>Total distance covered:</strong> 15km</p>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <strong className="text-gray-900 text-base block mb-2">🚤 10 Minutes Ride</strong>
                    <p><strong>Route:</strong> Punnamada Lake (7km fun ride)</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">3. Shikara Ride Routes & Pricing</h2>
              <div className="space-y-4 text-gray-600">
                <p>If you prefer a slower pace, Shikaras are available, though they require a much larger time commitment to see the same sights:</p>
                <ul className="space-y-4 text-sm list-none">
                  <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <strong className="text-gray-900 text-base block mb-2">🕑 2 Hours – ₹2,000</strong>
                    <p><strong>Route:</strong> Alleppey → Punnamada Lake → Vilakumaram Canal → SNDP Village Canals → Alleppey Boat Race Track → Back</p>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <strong className="text-gray-900 text-base block mb-2">🕒 3 Hours – ₹3,000 ⭐</strong>
                    <p><strong>Route:</strong> Alleppey → Punnamada Lake → Kuppappuram Village → Vembanad Lake → SAI Boat House → Boat Race Track → Back</p>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <strong className="text-gray-900 text-base block mb-2">🕓 4 Hours – ₹4,000</strong>
                    <p><strong>Route:</strong> Alleppey → Punnamada Lake → Kanjitta → Narrow Village Canals → Kayinakari Boat Terminal → Meenappally Villages → Vembanad Lake → Boat Race Track → Back</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">4. Best Time to Ride</h2>
              <div className="space-y-4 text-gray-600">
                <p>For both boats, the early morning (around 7:00 AM) and late afternoon (around 4:30 PM) offer the best experiences. However, the thrill of a speed boat cutting across the water against a setting sun on Vembanad Lake is unmatched.</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">The Verdict</h2>
              <div className="space-y-4 text-gray-600">
                <p>While Shikaras are great for a long, slow lounge on the water, a <strong>Speed Boat is the ultimate winner</strong> for anyone looking to maximize their Alleppey experience. You get the thrill, the privacy, and the ability to cover up to 30km of pristine backwaters in just an hour. Why spend 4 hours in a slow boat when you can see more in a fraction of the time?</p>
              </div>
            </div>

            <BookingCTA />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Related Articles</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/blog/speed-boat-vs-houseboat-alleppey" className="flex-1 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors text-sm font-medium text-gray-700 hover:text-emerald-700">Speed Boat vs Houseboat →</Link>
                <Link href="/blog/alleppey-speed-boat-cost-price-guide-2026" className="flex-1 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors text-sm font-medium text-gray-700 hover:text-emerald-700">Cost & Price Guide 2026 →</Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-500">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-emerald-600 transition-colors">About</Link>
          <Link href="/gallery" className="hover:text-emerald-600 transition-colors">Gallery</Link>
          <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
          <Link href="/privacy-policy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="hover:text-emerald-600 transition-colors">Terms of Service</Link>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Speed Boat Cruise Alleppey. All rights reserved.</p>
      </footer>
    </main>
  );
}
