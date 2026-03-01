'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/search?q=${encodeURIComponent(query)}`)
    console.log("Test")
  }
  return (
    <div>

    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      
      {/* Logo / Title */}
      <h1 className="mb-8 text-5xl font-bold text-gray-800">
        Bharat<span className="text-blue-600">Spares</span>
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="w-full max-w-xl px-6"
      >
        <div className="flex items-center rounded-full border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
          <input
            type="text"
            placeholder="Search brake pads, clutch plate, suppliers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full px-6 py-3 text-lg outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            type="submit"
            className="rounded bg-gray-100 px-6 py-2 text-sm hover:bg-gray-200"
          >
            Search
          </button>

          <button
            type="button"
            onClick={() => router.push("/suppliers")}
            className="rounded bg-gray-100 px-6 py-2 text-sm hover:bg-gray-200"
          >
            Suppliers
          </button>
        </div>
      </form>

    </main>
 

    </div>
  );
}
