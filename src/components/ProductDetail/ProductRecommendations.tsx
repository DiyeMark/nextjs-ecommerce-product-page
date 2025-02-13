"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { Heart, ChevronLeft, ChevronRight, Star, ShoppingBag, ShoppingCart } from 'lucide-react';
import Toast from '@/components/Toast/Toast';

interface ProductRecommendationsProps {
  products: Product[];
}

export default function ProductRecommendations({ products }: ProductRecommendationsProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleQuickAdd = async (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    
    try {
      // For quick add, we'll add the default variant if available, otherwise just add the product
      const defaultVariant = product.variants?.[0];
      const defaultColor = product.colors?.[0];
      
      if (!defaultVariant) {
        throw new Error('No variants available');
      }

      await addToCart(
        product,
        1, // Default quantity
        defaultVariant.size,
        defaultColor
      );

      setToast({
        message: 'Item added to cart successfully!',
        type: 'success'
      });
    } catch (err) {
      setToast({
        message: err instanceof Error ? err.message : 'Failed to add item to cart',
        type: 'error'
      });
    }
  };

  const handleWishlist = async (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    try {
      if (isInWishlist(product.id)) {
        await removeFromWishlist(product.id);
        setToast({
          message: 'Removed from wishlist',
          type: 'success'
        });
      } else {
        await addToWishlist(product);
        setToast({
          message: 'Added to wishlist',
          type: 'success'
        });
      }
    } catch (err) {
      setToast({
        message: err instanceof Error ? err.message : 'Failed to update wishlist',
        type: 'error'
      });
    }
  };

  return (
    <div data-testid="recommendations-container" className="max-w-7xl mx-auto px-4 py-8 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Best Seller</h2>
        <div className="flex gap-2">
          <button 
            className={`p-2 border border-gray-200 rounded-lg ${products.length <= 4 ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-300'}`}
            disabled={products.length <= 4}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            className={`p-2 bg-black text-white rounded-lg ${products.length <= 4 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
            disabled={products.length <= 4}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link 
            href={`/products/${product.id}`} 
            key={product.id} 
            className="group block relative"
            data-testid={`recommendation-${product.id}`}
          >
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-contain"
              />
              <button 
                onClick={(e) => handleWishlist(e, product)}
                className="absolute top-3 right-3 p-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
                aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-black' : ''}`} />
              </button>
            </div>
            <div className="space-y-2">
              <h3 
                className="text-sm font-medium text-gray-900 truncate"
                data-testid={`recommendation-title-${product.id}`}
              >
                {product.title}
              </h3>
              
              {/* Rating and Units Sold */}
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star 
                    className={`w-4 h-4 ${
                      product.rating.average >= 1
                        ? 'text-yellow-400 fill-current'
                        : product.rating.average >= 0.5
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill={product.rating.average >= 0.5 && product.rating.average < 1 
                      ? 'url(#half-fill)' 
                      : product.rating.average >= 1 
                      ? 'currentColor' 
                      : 'none'}
                    stroke="currentColor"
                  >
                    {product.rating.average >= 0.5 && product.rating.average < 1 && (
                      <defs>
                        <linearGradient id="half-fill" x1="0" x2="1" y1="0" y2="0">
                          <stop offset="50%" stopColor="currentColor" />
                          <stop offset="50%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    )}
                  </Star>
                  <span>{product.rating.average}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShoppingBag className="w-4 h-4" />
                  <span>{product.unitsSold?.toLocaleString() || '1.2k'} sold</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p 
                    className="text-sm font-bold"
                    data-testid={`recommendation-price-${product.id}`}
                  >
                    ${product.price.toLocaleString()}
                  </p>
                  {product.originalPrice && (
                    <p className="text-xs text-gray-500 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </p>
                  )}
                </div>
                <button 
                  onClick={(e) => handleQuickAdd(e, product)}
                  className="px-3 py-1.5 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-1.5"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Quick add</span>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
} 