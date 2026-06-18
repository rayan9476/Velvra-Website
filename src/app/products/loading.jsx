export default function Loading() {
  return (
    <div className="w-full min-h-screen mt-[60px] px-4 py-6">
      <div className="animate-pulse">
        <div className="h-8 w-40 bg-gray-200 rounded mb-6"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i}>
              <div className="aspect-[3/4] bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded mt-3"></div>
              <div className="h-4 bg-gray-200 rounded mt-2 w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
