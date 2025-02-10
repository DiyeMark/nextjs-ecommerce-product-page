"use client";

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react'; // Import Lucid icons

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
      {/* Tabs */}
      <div className="border-b border-gray-200 pb-4">
        <nav className="flex gap-2 mb-[-1px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-black text-white'
                  : 'text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {/* Description Tab */}
        {activeTab === 'description' && (
          <div className="space-y-6">
            <div className="prose max-w-none">
              <h3 className="text-lg font-medium text-gray-900">Product Details</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Specification</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3">
                  <div className="flex">
                    <span className="text-gray-500 w-48">Package Dimensions</span>
                    <span>{product.specifications.packageDimensions}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-48">Department</span>
                    <span>{product.specifications.department}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-48">Date First Available</span>
                    <span>{product.specifications.dateFirstAvailable}</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">Features</span>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {product.specifications.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="space-y-8">
            {/* Rating Summary */}
            <div className="flex items-start space-x-8">
              <div className="text-center">
                <div className="text-5xl font-bold">{product.rating.average}</div>
                <div className="text-sm text-gray-500">out of 5</div>
                <div className="flex text-yellow-400 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating.average)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {product.rating.count} reviews
                </div>
              </div>
              <div className="flex-1 space-y-2">
                {Object.entries(product.rating.distribution)
                  .reverse()
                  .map(([stars, count]) => (
                    <div key={stars} className="flex items-center">
                      <div className="w-12 text-sm text-gray-600">{stars} star</div>
                      <div className="flex-1 h-2 mx-2 bg-gray-200 rounded">
                        <div
                          className="h-2 bg-yellow-400 rounded"
                          style={{
                            width: `${(count / product.rating.count) * 100}%`
                          }}
                        />
                      </div>
                      <div className="w-12 text-sm text-gray-500">{count}</div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Review List */}
            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{review.userName}</h4>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    Color: {review.color} | Size: {review.size}
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                  <div className="flex items-center space-x-4 mt-4">
                    <button className="flex items-center text-gray-500 hover:text-gray-700">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {review.likes}
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-gray-700">
                      <ThumbsDown className="w-4 h-4 mr-1" />
                      {review.dislikes}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}        
      </div>
    </div>
  );
} 