import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: "173,000-Plus Porsche Vehicles Recalled Over Rearview Camera",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "27,000-Plus Audi Vehicles Recalled for Child-Safety Seat Issue",
    img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "10 Biggest News Stories of the Week: Toyota Camry & Corolla Cross",
    img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "How Do Car Seats Fit in a 2025 Toyota Grand Highlander?",
    img: "https://images.unsplash.com/photo-1592193333411-2978864a9190?auto=format&fit=crop&q=80&w=800"
  }
];

const trendingNews = [
  "How Much Is the 2026 Audi Q3?",
  "EV Lease Deals Can Give Some Buyers Relief On Pricing",
  "Chevrolet Reveals Updated 2026 Corvette Interior",
  "Are AI and Connected Services in Cars Worth It?",
  "2026 Dodge Charger: Jumpin' Sixpack, It's a Gas!"
];

export default function NewsSection() {
  return (
    // Added ID and scroll-margin for smooth navigation
    <section id="news" className="px-6 py-24 bg-white border-t border-gray-100 scroll-mt-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
           <h2 className="text-4xl font-black text-gray-900 italic tracking-tighter">News & <span className="text-[#632197]">Reviews</span></h2>
           <div className="hidden md:flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Live Updates</span>
           </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left: Article Grid (2/3 width) */}
          <div className="lg:col-span-2 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <div key={article.id} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-lg">
                    <Image 
                      src={article.img} 
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-white text-lg font-bold leading-tight group-hover:text-[#632197] transition-colors">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Video Highlight Sub-section */}
            <div className="bg-gray-900 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden group cursor-pointer">
               <div className="relative z-10">
                  <span className="text-[#632197] font-black text-xs uppercase tracking-[0.3em]">Featured Video</span>
                  <h3 className="text-3xl font-black mt-4 mb-6 max-w-md italic">2026 BMW M5: The Ultimate Hybrid Track Test.</h3>
                  <button className="flex items-center gap-4 font-black uppercase text-xs tracking-widest group-hover:gap-6 transition-all">
                    <span className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center pl-1">▶</span>
                    Watch Review
                  </button>
               </div>
               {/* Faded Background Car Image */}
               <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800" className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
            </div>
          </div>

          {/* Right: Trending List (1/3 width) */}
          <div className="bg-gray-50 rounded-[40px] p-10 h-fit">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-8">Trending Near You</h3>
            <div className="divide-y divide-gray-200">
              {trendingNews.map((news, i) => (
                <div key={i} className="py-6 flex gap-6 group cursor-pointer first:pt-0">
                  <span className="text-3xl font-black text-gray-200 group-hover:text-[#632197] transition-colors tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm font-bold text-gray-800 leading-snug group-hover:text-[#632197] transition-colors">
                    {news}
                  </p>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 border-2 border-gray-200 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              See all news
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}