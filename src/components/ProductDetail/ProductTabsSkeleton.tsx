export default function ProductTabsSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white animate-pulse">
      {/* Tabs */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex gap-2">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-6 space-y-6">
        {/* Description Section */}
        <div className="space-y-4">
          <div className="h-6 w-48 bg-gray-200 rounded" />
          <div className="space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-4 w-full bg-gray-200 rounded" />
            ))}
          </div>
        </div>

        {/* Specifications Section */}
        <div className="space-y-4">
          <div className="h-6 w-48 bg-gray-200 rounded" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg">
            {/* Left Column */}
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-4 w-48 bg-gray-200 rounded" />
                </div>
              ))}
            </div>
            {/* Right Column */}
            <div className="space-y-2">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-4 w-full bg-gray-200 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 