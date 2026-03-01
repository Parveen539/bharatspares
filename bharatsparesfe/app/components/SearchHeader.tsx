"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(currentQuery);

  useEffect(() => {
    setQuery(currentQuery);
  }, [currentQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
  <header className="sticky top-0 z-50 border-b bg-white">
    <div className="flex items-center px-6 py-4">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-6">
        <h1
          onClick={() => router.push("/")}
          className="cursor-pointer text-2xl font-bold"
        >
          Bharat<span className="text-blue-600">Spares</span>
        </h1>

        <h3 className="font-bold text-blue-800 cursor-pointer hover:underline">
          Register Your Company for Free
        </h3>
      </div>

      {/* CENTER SECTION - SEARCH */}
      <form
        onSubmit={handleSearch}
        className="mx-10 flex w-full max-w-3xl items-center rounded-full border px-4 py-3 shadow-sm hover:shadow-md"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search brake pads, clutch plate..."
          className="flex-1 text-lg outline-none"
        />

        <button
          type="submit"
          className="ml-4 rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>

      {/* RIGHT SECTION */}
      <button className="ml-auto rounded bg-blue-600 px-5 py-2 text-lg font-medium text-white hover:bg-blue-700 shadow-sm">
        Login
      </button>

    </div>
  </header>
);
}