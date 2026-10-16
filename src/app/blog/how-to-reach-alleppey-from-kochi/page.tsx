import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How to Reach Alleppey from Kochi — Distance, Cab Fare & Best Route (2026)",
  description:
    "Traveling from Kochi (Ernakulam) or Cochin Airport to Alleppey? Get exact distance (83 km), travel time, taxi cost, and step-by-step directions for the fastest, most scenic route to Kerala's backwater capital.",
  alternates: {
    canonical: "https://speedboatalleppey.com/blog/how-to-reach-alleppey-from-kochi",
  },
  openGraph: {
    title: "How to Reach Alleppey from Kochi — Distance, Cab Fare & Best Route",
    description:
      "Complete 2026 guide: Kochi to Alleppey distance, cab fares, travel time, and tips to reach the backwaters hassle-free. Written by locals.",
    url: "https://speedboatalleppey.com/blog/how-to-reach-alleppey-from-kochi",
    images: [
      {
        url: "https://speedboatalleppey.com/alleppey_kochi_route.jpg",
        width: 1200,
        height: 630,
        alt: "Scenic Kerala road through coconut palms — Kochi to Alleppey route",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Reach Alleppey from Kochi (2026 Guide)",
    description:
      "Distance, cab cost, travel time, and the best route from Kochi / Cochin Airport to Alleppey backwaters — all in one local guide.",
    images: ["https://speedboatalleppey.com/alleppey_kochi_route.jpg"],
  },
};

const BookingCTA = () => (
  <div className="my-10 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center shadow-sm">
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full mb-3">
      🚤 Just Arrived in Alleppey?
    </span>
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
      Book a Private Speed Boat Cruise
    </h3>
    <p className="text-gray-600 text-sm mb-6 max-w-lg mx-auto">
      Your driver drops you at Finishing Point Jetty — and within minutes you&apos;re skimming across
      Vembanad Lake and into the narrow village canals of Kainakary. No queuing, no shared crowds.
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
      <a
        href="https://wa.me/917012761588?text=Hi!%20I%20just%20reached%20Alleppey%20from%20Kochi%20and%20would%20like%20to%20book%20a%20private%20speed%20boat%20cruise."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all hover:scale-105 shadow-md shadow-emerald-500/20"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        WhatsApp to Book Now
      </a>
      <Link
        href="/#booking-widget"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm transition-all"
      >
        View Speed Boat Packages →
      </Link>
    </div>
  </div>
);

export default function HowToReachAlleppeyFromKochiPage() {
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How to Reach Alleppey from Kochi — Distance, Cab Fare & Best Route (2026)",
    image: "https://speedboatalleppey.com/alleppey_kochi_route.jpg",
    datePublished: "2026-10-16T00:00:00+05:30",
    dateModified: "2026-10-16T00:00:00+05:30",
    author: {
      "@type": "Organization",
      name: "Speed Boat Cruise Alleppey",
      url: "https://speedboatalleppey.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Speed Boat Cruise Alleppey",
      logo: {
        "@type": "ImageObject",
        url: "https://speedboatalleppey.com/logo.png",
      },
    },
    description:
      "A complete 2026 guide to traveling from Kochi (Ernakulam) or Cochin International Airport to Alleppey — covering distance, travel time, taxi fares, scenic route highlights, and tips from locals who make the journey every day.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://speedboatalleppey.com/blog/how-to-reach-alleppey-from-kochi",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How far is Alleppey from Kochi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alleppey (Alappuzha) is approximately 53 km from Ernakulam city centre and around 83 km from Cochin International Airport (COK), both via NH66.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to travel from Kochi to Alleppey by cab?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A private taxi from Ernakulam (Kochi city) to Alleppey takes about 1 hour 15 minutes to 1 hour 45 minutes under normal traffic conditions. From Cochin Airport, add another 25 to 35 minutes, making the total journey 1 hour 45 minutes to 2 hours 15 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "What is the taxi fare from Kochi to Alleppey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In 2026, a one-way private taxi from Ernakulam (Kochi) to Alleppey costs approximately Rs 1,400 to Rs 1,800 for a sedan (up to 4 passengers). From Cochin Airport, expect Rs 1,700 to Rs 2,200.",
        },
      },
      {
        "@type": "Question",
        name: "Which is the best route from Kochi to Alleppey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The fastest and most scenic route is via NH66 through Aroor and Cherthala. After crossing the Aroor bridge, the road runs alongside the backwaters and coconut groves for a beautiful approach into Alleppey town.",
        },
      },
      {
        "@type": "Question",
        name: "Can I travel from Cochin Airport directly to Alleppey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Pre-book a private taxi at the Cochin Airport taxi counter or through Ola/Uber. The airport (COK) is around 83 km from Alleppey and the ride takes 1 hour 45 minutes to 2 hours 15 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Where should my taxi drop me in Alleppey for a speed boat ride?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ask your driver to drop you at Finishing Point Jetty (also called Finishing Point Boat Jetty), near the town centre. This is the main hub for private speed boat cruises in Alleppey.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <header className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white pt-20 pb-16 sm:pt-28 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full blur-[130px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full mb-4 shadow-sm">
              Route Guide
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              How to Reach Alleppey from Kochi — Distance, Cab Fare &amp; Best Route
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Flying into Cochin Airport or staying in Kochi? Here is everything you need to know — exact
              distances, taxi costs, travel times, and the scenic route that makes the journey half the fun.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-6 text-sm text-gray-400">
              <span>Updated for 2026</span>
              <span className="hidden sm:inline">·</span>
              <span>7 min read</span>
              <span className="hidden sm:inline">·</span>
              <span className="text-emerald-400 font-medium">Verified by Local Captains</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            {/* Hero Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-lg border border-gray-100">
              <Image
                src="/alleppey_kochi_route.jpg"
                alt="Scenic Kerala road through coconut palms — driving from Kochi to Alleppey backwaters"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </div>

            {/* Quick-facts snapshot */}
            <div className="mb-10 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6 sm:p-7">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span>🗺️</span> Kochi → Alleppey: Quick Facts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">📍 Distance (City):</span>
                  <span><strong>~53 km</strong> from Ernakulam centre</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">✈️ Distance (Airport):</span>
                  <span><strong>~83 km</strong> from Cochin Airport (COK)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">⏱️ Travel Time:</span>
                  <span><strong>1 hr 15 min – 2 hrs</strong> by taxi</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">💰 Taxi Fare:</span>
                  <span><strong>₹1,400 – ₹2,200</strong> (2026 rates)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">🛣️ Best Route:</span>
                  <span>NH66 via Aroor &amp; Cherthala</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">📲 Cab Apps:</span>
                  <span>Ola, Uber, or airport pre-paid taxi</span>
                </div>
              </div>
            </div>

            {/* Lead paragraph */}
            <p className="text-xl text-gray-700 leading-relaxed font-medium border-l-4 border-emerald-500 pl-5 mb-10">
              Kochi is the gateway to Kerala — but Alleppey is where the backwaters begin. The good news?
              The drive between the two is one of the most beautiful stretches of road in South India, winding
              through coconut groves, paddy fields, and glimpses of the vast Vembanad Lake.
            </p>

            {/* Section 1 */}
            <div className="mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-2">
                Distance &amp; Travel Time
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                1. Kochi to Alleppey: How Far Is It?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  There are two common starting points for tourists heading to Alleppey, and the distances differ significantly:
                </p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-emerald-900 text-white">
                        <th className="py-3 px-4 font-semibold rounded-tl-lg">Starting Point</th>
                        <th className="py-3 px-4 font-semibold">Distance</th>
                        <th className="py-3 px-4 font-semibold">Travel Time</th>
                        <th className="py-3 px-4 font-semibold rounded-tr-lg">Taxi Fare (2026)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 bg-white hover:bg-emerald-50/30 transition-colors">
                        <td className="py-3 px-4 font-medium text-gray-800">Ernakulam (Kochi City)</td>
                        <td className="py-3 px-4">~53 km</td>
                        <td className="py-3 px-4">1 hr 15 min – 1 hr 45 min</td>
                        <td className="py-3 px-4 font-semibold text-emerald-700">₹1,400 – ₹1,800</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-white hover:bg-emerald-50/30 transition-colors">
                        <td className="py-3 px-4 font-medium text-gray-800">Cochin Airport (COK)</td>
                        <td className="py-3 px-4">~83 km</td>
                        <td className="py-3 px-4">1 hr 45 min – 2 hrs 15 min</td>
                        <td className="py-3 px-4 font-semibold text-emerald-700">₹1,700 – ₹2,200</td>
                      </tr>
                      <tr className="bg-white hover:bg-emerald-50/30 transition-colors">
                        <td className="py-3 px-4 font-medium text-gray-800">Fort Kochi / Mattancherry</td>
                        <td className="py-3 px-4">~60 km</td>
                        <td className="py-3 px-4">1 hr 30 min – 2 hrs</td>
                        <td className="py-3 px-4 font-semibold text-emerald-700">₹1,500 – ₹1,900</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  The fare above is for a standard sedan (up to 4 passengers). For an SUV or larger vehicle, add
                  approximately 20–30% to the quoted rate. Always confirm the fare before starting the journey, or book
                  through Ola or Uber for transparent metered pricing.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-2">
                The Scenic Route
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                2. The Best Route from Kochi to Alleppey
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The recommended route is <strong>NH66 (old NH47) via Aroor and Cherthala</strong>. This is the most
                  direct highway and it doubles as one of the most scenic drives in Kerala.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 my-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-base">
                    🗺️ Step-by-Step Directions (Ernakulam → Alleppey)
                  </h3>
                  <ol className="space-y-3 text-sm text-gray-700 list-none">
                    {[
                      { step: "1", label: "Start from Ernakulam", detail: "Head south on MG Road or via Edapally junction onto NH66." },
                      { step: "2", label: "Cross Aroor Bridge", detail: "About 30 km in, you cross the Aroor bridge over a backwater channel — your first glimpse of Kerala's waterways." },
                      { step: "3", label: "Drive through Cherthala", detail: "A scenic stretch lined with coconut palms and small fishing harbours. Keep right on NH66." },
                      { step: "4", label: "Enter Alleppey Town", detail: "Follow signs for 'Alappuzha' or 'Finishing Point'. NH66 feeds directly into the town." },
                      { step: "5", label: "Drop-off at Finishing Point Jetty", detail: "Your taxi should drop you here — the main hub for all private speed boat cruises in Alleppey." },
                    ].map((item) => (
                      <li key={item.step} className="flex gap-3 items-start">
                        <span className="flex-shrink-0 w-7 h-7 bg-emerald-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                          {item.step}
                        </span>
                        <div>
                          <span className="font-semibold text-gray-800">{item.label}:</span>{" "}
                          <span>{item.detail}</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                <p>
                  <strong>Pro tip from locals:</strong> If you are traveling between 7–9 AM or 5–7 PM on a weekday,
                  expect 20–30 minutes of extra time near Edapally junction and Aroor causeway during peak hours.
                  Start early and you will sail through.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-2">
                From the Airport
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                3. Cochin Airport to Alleppey: Direct Transfer Tips
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Cochin International Airport (COK) is located at Nedumbassery, roughly 30 km north-east of Kochi
                  city centre. If you land at COK and want to head directly to Alleppey without going through the city,
                  here is what to do:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  {[
                    {
                      icon: "🏷️",
                      title: "Pre-paid Airport Taxi",
                      body: "The Kerala Tourism counter inside the arrivals hall offers pre-paid taxis to Alleppey. Fixed rate, no bargaining needed. Expect ₹1,800 – ₹2,300.",
                    },
                    {
                      icon: "📲",
                      title: "Ola / Uber",
                      body: "Both apps work at COK. Book from the designated cab pickup zone (Zone B, outside arrivals). Pricing is transparent and similar to pre-paid counters.",
                    },
                    {
                      icon: "🧳",
                      title: "Hotel Pickup",
                      body: "Many hotels in Alleppey offer airport transfers if booked in advance. Ask your accommodation — it can be cheaper than on-the-spot taxis.",
                    },
                    {
                      icon: "⏰",
                      title: "Best Departure Time",
                      body: "Aim to leave the airport by 8 AM to reach Alleppey before 10 AM and catch the morning backwater light — the best time for a speed boat cruise.",
                    },
                  ].map((card) => (
                    <div key={card.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-emerald-300 hover:shadow-md transition-all">
                      <div className="text-2xl mb-2">{card.icon}</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">{card.title}</h3>
                      <p className="text-gray-600 text-sm">{card.body}</p>
                    </div>
                  ))}
                </div>
                <p>
                  The most direct airport-to-Alleppey route avoids Kochi city entirely: take the NH544 west toward
                  Aluva, then merge onto NH66 at North Paravur or Cherthala. Your driver should know this route
                  well — confirm it when booking.
                </p>
              </div>
            </div>

            {/* Inline CTA */}
            <BookingCTA />

            {/* Section 4 */}
            <div className="mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-2">
                Travel Tips
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                4. Practical Tips Before You Go
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <ul className="space-y-4">
                  {[
                    {
                      title: "Book your taxi the night before",
                      detail:
                        "Walk-up taxis near Ernakulam station charge 20–30% above app rates. Pre-booking via Ola/Uber or WhatsApp with a local driver avoids inflated tourist pricing.",
                    },
                    {
                      title: "Tell your driver your exact destination",
                      detail:
                        "Alleppey is a large town. Specify 'Finishing Point Jetty' or 'Alleppey Boat Jetty' rather than just 'Alleppey' to avoid a long auto-rickshaw hunt on arrival.",
                    },
                    {
                      title: "Carry cash",
                      detail:
                        "Most local taxi drivers prefer cash, especially on pre-booked deals. Keep ₹500–₹1,000 notes handy for tolls (there are 1–2 toll booths on NH66).",
                    },
                    {
                      title: "Check Google Maps traffic before leaving",
                      detail:
                        "NH66 near Aroor can back up on weekends and public holidays when Alleppey beach crowds swell. A 6:30–7:00 AM departure from Kochi beats the rush decisively.",
                    },
                    {
                      title: "Luggage storage",
                      detail:
                        "If you are doing a day trip and need to store bags, ask your speed boat operator or hotel — many provide secure storage so you can board the boat with just a daypack.",
                    },
                  ].map((tip, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="flex-shrink-0 mt-1 w-2 h-2 bg-emerald-500 rounded-full" />
                      <div>
                        <span className="font-semibold text-gray-800">{tip.title}: </span>
                        <span>{tip.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 5 — FAQ */}
            <div className="mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-2">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                5. Frequently Asked Questions
              </h2>
              <div className="space-y-5">
                {[
                  {
                    q: "How far is Alleppey from Kochi?",
                    a: "Alleppey is approximately 53 km from Ernakulam city centre and around 83 km from Cochin International Airport (COK), both via NH66.",
                  },
                  {
                    q: "How long does the taxi ride from Kochi to Alleppey take?",
                    a: "Roughly 1 hour 15 minutes to 1 hour 45 minutes from Ernakulam under normal traffic. Add 25–35 minutes if starting from Cochin Airport.",
                  },
                  {
                    q: "What is the taxi fare from Kochi to Alleppey in 2026?",
                    a: "A standard sedan costs ₹1,400–₹1,800 from Ernakulam, or ₹1,700–₹2,200 from Cochin Airport. SUVs cost 20–30% more. App-based cabs (Ola/Uber) charge similar rates.",
                  },
                  {
                    q: "Can I go directly from Cochin Airport to Alleppey without entering Kochi city?",
                    a: "Yes. Your driver can take NH544 west to Aluva and then join NH66 south toward Alleppey, bypassing Ernakulam entirely. It is actually 10–15 minutes faster than routing through the city.",
                  },
                  {
                    q: "Where should I be dropped in Alleppey for a speed boat ride?",
                    a: "Ask your driver for 'Finishing Point Jetty, Alleppey' — it is the main departure point for private speed boat cruises. Easily searchable on Google Maps.",
                  },
                  {
                    q: "Is there a direct bus from Kochi to Alleppey?",
                    a: "Yes, KSRTC runs regular bus services from Ernakulam KSRTC Bus Stand to Alleppey Bus Stand (around ₹90–₹130, 1.5–2 hrs). However, for tourists with luggage or those on a tight schedule, a private taxi is strongly recommended for comfort and time-efficiency.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gray-50 px-5 py-4">
                      <h3 className="font-bold text-gray-900 text-base flex items-start gap-2">
                        <span className="text-emerald-600 flex-shrink-0">Q:</span>
                        <span>{item.q}</span>
                      </h3>
                    </div>
                    <div className="px-5 py-4 text-gray-600 text-sm leading-relaxed flex gap-2">
                      <span className="text-emerald-600 font-bold flex-shrink-0">A:</span>
                      <span>{item.a}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Articles */}
            <div className="mb-10 bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Continue Planning Your Trip</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: "/blog/alleppey-1-day-trip-itinerary", label: "Alleppey 1-Day Itinerary" },
                  { href: "/blog/alleppey-speed-boat-cost-price-guide-2026", label: "Speed Boat Cost Guide 2026" },
                  { href: "/blog/best-time-to-visit-alleppey-backwaters", label: "Best Time to Visit Alleppey" },
                  { href: "/blog/alleppey-speed-boat-routes-guide", label: "Speed Boat Routes Explained" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-600 hover:underline transition-colors"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-900/50 px-3 py-1 rounded-full mb-4">
            You Made It to Alleppey!
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Now, Explore the Backwaters by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Speed Boat
            </span>
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            A private 7-seater speed boat gets you deep into Punnamada Lake, Kainakary village canals, and
            the open Vembanad Lake — all in 30 to 60 minutes. No crowds, no shared tours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/917012761588?text=Hi!%20I%20just%20arrived%20in%20Alleppey%20from%20Kochi%20and%20want%20to%20book%20a%20speed%20boat%20cruise."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-emerald-500/20"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Book on WhatsApp
            </a>
            <Link
              href="/#booking-widget"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold text-sm transition-all"
            >
              See All Packages →
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-500 bg-white">
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
