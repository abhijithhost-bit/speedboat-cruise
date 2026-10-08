import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Family Friendly Activities in Alleppey Backwaters | Speed Boat Cruise",
  description:
    "Planning a family trip to Alleppey? Discover the best family-friendly activities in the backwaters, from safe speedboat rides to village walks and cultural experiences.",
  alternates: { canonical: "https://www.speedboatcruisealleppey.com/blog/family-activities-alleppey" },
  openGraph: {
    title: "Family Friendly Activities in Alleppey Backwaters",
    description: "The definitive guide to family-friendly activities in Alleppey.",
    url: "https://www.speedboatcruisealleppey.com/blog/family-activities-alleppey",
    images: [{ url: "https://www.speedboatcruisealleppey.com/hero-poster.jpg", width: 1200, height: 630 }],
  },
};

const BookingCTA = () => (
  <div className="my-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center">
    <p className="text-sm text-emerald-700 font-semibold uppercase tracking-widest mb-2">Safe & Fun for All Ages</p>
    <h3 className="text-xl font-bold text-gray-900 mb-2">Book a Family Speedboat Cruise</h3>
    <p className="text-gray-600 text-sm mb-5">Life jackets for kids · Private boat · Flexible timings</p>
    <a href="https://wa.me/917012761588?text=Hi!%20I%20read%20your%20family%20guide%20and%20would%20like%20to%20book%20a%20family%20speed%20boat%20tour%20in%20Alleppey." target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all hover:scale-105">
      Book on WhatsApp →
    </a>
  </div>
);

export default function FamilyActivitiesAlleppey() {
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
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-purple-500 text-white px-3 py-1 rounded-full mb-4">Family Guide</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Family Friendly Activities in Alleppey Backwaters
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">Planning a trip to Kerala with kids? Here are the most engaging, safe, and memorable activities for families in the Alleppey backwaters.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
              <span>October 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </div>
      </header>

      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-md">
              <Image src="/hero-poster.jpg" alt="Family enjoying Alleppey backwaters" fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" priority />
            </div>

            <p className="text-xl text-gray-600 leading-relaxed font-medium border-l-4 border-emerald-500 pl-5 mb-10">
              Traveling with kids and older relatives can be challenging, but Alleppey offers a surprisingly accessible and wonderful natural environment for all ages.
            </p>

            {[
              {
                title: "1. Take a Short Private Speedboat Cruise",
                content: (
                  <div className="space-y-4">
                    <p className="text-gray-600">While houseboats are famous, they require a full day or overnight commitment which can sometimes be too long for restless toddlers. A private speedboat ride (30 mins to 1 hour) is the perfect thrilling activity.</p>
                    <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                      <li><strong>Safety First:</strong> We provide life jackets for adults and kids.</li>
                      <li><strong>Flexibility:</strong> See the vast Vembanad Lake and narrow village canals in a short time.</li>
                      <li><strong>Excitement:</strong> Kids love the speed and the splash, making it a memorable adventure.</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: "2. Explore Village Life",
                content: (
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>Take a walk through the backwater villages. It&apos;s safe, traffic-free, and highly educational for children.</p>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>Watch locals weaving coir ropes from coconut husks.</li>
                      <li>See traditional paddy farming below sea level.</li>
                      <li>Spot local domestic animals and colorful birds.</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: "3. Visit the Alleppey Beach and Lighthouse",
                content: (
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>After your backwater tour, head to the Alleppey Beach (Alappuzha Beach). It&apos;s incredibly family-friendly with a long sandy shore.</p>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>Climb the historic Alleppey Lighthouse (open in the afternoons) for a panoramic view of the coast and the backwaters.</li>
                      <li>Enjoy a safe sunset walk by the old pier.</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: "4. Try Traditional Kerala Cuisine",
                content: (
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>Introduce your family to mild, coconut-based Kerala dishes. Many local restaurants cater to families.</p>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li><strong>Appam and Stew:</strong> A very mild, sweet, and comforting dish that kids universally love.</li>
                      <li><strong>Fresh Seafood:</strong> Try Karimeen (Pearl Spot) fry, a local delicacy.</li>
                    </ul>
                  </div>
                ),
              },
            ].map((section) => (
              <div key={section.title} className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">{section.title}</h2>
                {section.content}
              </div>
            ))}

            <BookingCTA />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Related Articles</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/blog/things-to-do-in-alleppey" className="flex-1 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors text-sm font-medium text-gray-700 hover:text-emerald-700">10 Best Things to Do in Alleppey →</Link>
                <Link href="/blog/alleppey-backwater-tour-guide" className="flex-1 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors text-sm font-medium text-gray-700 hover:text-emerald-700">Backwater Tour Guide →</Link>
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
