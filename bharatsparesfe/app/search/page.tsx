import SearchHeader from "@/app/components/SearchHeader";

function SearchResults({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || "";

  return (
    <div className="mx-auto max-w-4xl p-6">
      <p className="mb-6 text-sm text-gray-500">
        About 1,240 results for &quot;{query}&quot;
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl text-blue-700 hover:underline cursor-pointer">
            {query} Supplier - Delhi
          </h3>
          <p className="text-sm text-gray-600">
            Genuine automotive parts suppliers with bulk pricing.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-blue-700 hover:underline cursor-pointer">
            Wholesale {query} Distributor - Mumbai
          </h3>
          <p className="text-sm text-gray-600">
            OEM quality spare parts across India.
          </p>
        </div>
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