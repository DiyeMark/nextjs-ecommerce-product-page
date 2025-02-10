export default function ProductRecommendationsSkeleton() {
  return (
    <div data-testid="recommendations-skeleton" className="max-w-7xl mx-auto px-4 py-8 bg-white animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <div className="h-8 w-48 bg-gray-200 rounded" />
        <div className="flex gap-2">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="h-10 w-10 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-3">
            {/* Image */}
            <div className="aspect-square bg-gray-200 rounded-lg" />
            
            {/* Title */}
            <div className="h-5 w-3/4 bg-gray-200 rounded" />
            
            {/* Rating and Sold */}
            <div className="flex items-center gap-4">
              <div className="h-4 w-20 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>

            {/* Price and Action */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="h-5 w-20 bg-gray-200 rounded" />
                <div className="h-4 w-16 bg-gray-200 rounded" />
              </div>
              <div className="h-8 w-24 bg-gray-200 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 