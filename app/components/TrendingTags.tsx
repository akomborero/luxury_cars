export default function QuickFilters() {
  const filters = [
    "Under $15,000",
    "SUVs & Crossovers",
    "Low Mileage (<50k)",
    "Recently Added",
    "Fuel Efficient"
  ];

  return (
    <section className="px-6 pt-12 pb-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-wider text-center lg:text-left">
          Find your perfect match
        </h2>
        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((name, i) => (
            <button
              key={i}
              className="whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold border-2 border-gray-100 hover:border-[#632197] hover:text-[#632197] transition-all bg-gray-50/50"
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}