export default function ProductDetailSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white animate-pulse">
      {/* Breadcrumb */}
      <div className="h-4 w-48 bg-gray-200 rounded mb-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image Gallery */}
        <div className="space-y-6">
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-2 w-20">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-20 bg-gray-200 rounded-lg"
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative h-[500px] bg-gray-200 rounded-lg" />
          </div>

          {/* Seller Info Skeleton */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div className="flex-1">
                <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                <div className="h-3 w-24 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="space-y-6">
          <div className="h-8 w-3/4 bg-gray-200 rounded" />
          
          {/* Rating Summary */}
          <div className="flex items-center space-x-4">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>

          {/* Price */}
          <div className="h-8 w-32 bg-gray-200 rounded" />

          {/* Color Selection */}
          <div className="space-y-4">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="flex space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gray-200 rounded-full" />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-4">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="grid grid-cols-6 gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 rounded" />
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="space-y-4">
            <div className="h-12 bg-gray-200 rounded" />
            <div className="flex justify-between">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-8 w-24 bg-gray-200 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 