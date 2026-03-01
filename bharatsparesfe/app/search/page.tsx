import SearchHeader from "@/app/components/SearchHeader";

async function SearchResults({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams
  const query = params.q || "";

  const res = await fetch('http://localhost:8000/api/v1/search', 
    {
      method: "GET",
      cache: "no-store"
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch search result")
  }

  const result = await res.json()
  const suppliers = result.data
  console.log(suppliers)

  return (
    <div className="mx-auto max-w-4xl p-6">
      <p className="mb-6 text-sm text-gray-500">
        {result.success
          ? `About ${suppliers.length} results for "${query}"`
          : "No results found"}
      </p>

      <div className="space-y-6">
        {suppliers.map((supplier) => (
          <div
            key={supplier.id}
            className="border-b pb-4 hover:bg-gray-50 transition"
          >
            <h3 className="text-xl text-blue-700 hover:underline cursor-pointer">
              {supplier.companyName}{" "}
              {supplier.verified && (
                <span className="text-green-600 text-sm ml-2">
                  ✔ Verified
                </span>
              )}
            </h3>

            <p className="text-sm text-gray-600">
              📍 {supplier.city}, {supplier.state}, {supplier.country}
            </p>

            <p className="text-sm text-gray-600">
              Specialization: {supplier.specialization.join(", ")}
            </p>

            <p className="text-sm text-gray-600">
              Vehicle Type: {supplier.vehicleType.join(", ")}
            </p>

            <p className="text-sm text-gray-600">
              ⭐ Rating: {supplier.rating}
            </p>

            <p className="text-sm text-gray-500">
              Contact: {supplier.contactPerson} | {supplier.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page(props: any) {
  return (
    <>
      <SearchHeader />
      <SearchResults {...props} />
    </>
  );
}