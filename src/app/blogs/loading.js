export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to the Blog Page </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-md animate-pulse"
          >
            <div className="w-full h-48 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6 mb-4"></div>
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
