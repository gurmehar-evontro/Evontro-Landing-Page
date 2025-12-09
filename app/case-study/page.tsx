"use client";

import { useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";

const allCategories = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "E-Commerce",
  "Branding",
  "AI / ML",
];

const caseStudies = Array.from({ length: 27 }, (_, i) => ({
  id: i + 1,
  title: `Premium Case Study ${i + 1}`,
  slug: `case-study-${i + 1}`,
  category: allCategories[i % allCategories.length],
  description: "A premium-level case study card with Tailwind styling.",
  image:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
}));

export default function CaseStudiesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 10;

  // Toggle filter
  const handleCategoryToggle = (cat: string) => {
    setSelectedCategories((prev) => {
      const updated = prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat];

      setCurrentPage(1); // RESET PAGE
      return updated;
    });
  };

  // Filter + search + sort
  const filtered = useMemo(() => {
    let data = [...caseStudies];

    if (search.trim() !== "") {
      data = data.filter((cs) =>
        cs.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      data = data.filter((cs) => selectedCategories.includes(cs.category));
    }

    if (sortOption === "az") {
      data.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "za") {
      data.sort((a, b) => b.title.localeCompare(a.title));
    }

    return data;
  }, [search, selectedCategories, sortOption]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="w-full">
      {/* ================= HERO SECTION FIXED ================= */}
      <section className="w-full h-[50vh] flex items-center justify-center bg-gradient-to-b from-blue-600/80 to-blue-800 text-white text-center px-5 relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg opacity-90">
            Real projects with real impact — filter, search & explore
            premium-level case studies.
          </p>
        </div>
      </section>

      {/* ================= FILTERS SECTION (FIXED SPACING) ================= */}
      <div className="relative z-10 w-full bg-white shadow-sm border-b py-6">
        <div className="max-w-6xl mx-auto px-5 space-y-6">
          {/* Search + Sort */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/2">
              <Search
                className="absolute left-3 top-3 text-gray-500"
                size={18}
              />
              <input
                type="text"
                placeholder="Search case studies..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2 rounded-xl border shadow-sm focus:ring-2 focus:ring-blue-500/40"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortOption}
              onChange={(e) => {
                setSortOption(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2 rounded-xl border shadow-sm bg-white focus:ring-2 focus:ring-orange-500/40"
            >
              <option value="latest">Latest</option>
              <option value="az">A → Z</option>
              <option value="za">Z → A</option>
            </select>
          </div>

          {/* Multi Select Filters */}
          <div className="flex flex-wrap gap-3">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryToggle(cat)}
                className={`px-4 py-2 rounded-full border text-sm transition ${
                  selectedCategories.includes(cat)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= CARDS GRID ================= */}

      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginated.map((cs) => (
          <Link
            key={cs.id}
            href={`/case-study/${cs.category
              .toLowerCase()
              .replace(/\s+/g, "-")}/${cs.slug}`}
          >
            <div
              key={cs.id}
              className="bg-white shadow-xl rounded-2xl overflow-hidden border hover:shadow-2xl transition cursor-pointer"
            >
              <img
                src={cs.image}
                alt={cs.title}
                className="w-full h-52 object-cover"
                loading="lazy"
              />

              <div className="p-5 space-y-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {cs.category}
                </span>

                <h3 className="text-lg font-semibold">{cs.title}</h3>

                <p className="text-gray-600 text-sm">{cs.description}</p>

                <button className="mt-3 w-full py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium">
                  View Case Study
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ================= PAGINATION ================= */}
      <div className="w-full flex items-center justify-center gap-3 py-10">
        {/* Prev */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="p-2 border rounded-xl disabled:opacity-30"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-xl border ${
              currentPage === i + 1
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="p-2 border rounded-xl disabled:opacity-30"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
