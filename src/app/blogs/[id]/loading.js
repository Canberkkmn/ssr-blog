export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="h-6 w-40 bg-gray-200 rounded mb-6 animate-pulse"></div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="h-10 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>

        <div className="mb-6">
          <div className="h-5 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded w-1/4 animate-pulse"></div>
        </div>

        <div className="h-10 bg-gray-200 rounded w-24 mb-6 animate-pulse"></div>

        <div className="space-y-4 mb-8">
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
        </div>

        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>

        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-50 p-4 rounded animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
