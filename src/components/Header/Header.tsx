'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import Toast from '@/components/Toast/Toast'

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { items, totalItems, removeFromCart, updateQuantity } = useCartStore()
  const cartRef = useRef<HTMLDivElement>(null)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  // Handle click outside to close cart
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false)
      }
    }

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isCartOpen])

  // Get the correct image for the variant
  const getVariantImage = (item: typeof items[0]) => {
    if (item.selectedColor && item.colorImages) {
      const colorImageSet = item.colorImages.find(ci => ci.color === item.selectedColor)
      return colorImageSet ? colorImageSet.images[0] : item.images[0]
    }
    return item.images[0]
  }

  // Handle remove from cart
  const handleRemoveFromCart = async (item: typeof items[0]) => {
    try {
      await removeFromCart(item.id, item.selectedSize, item.selectedColor)
      setToast({
        message: 'Item removed from cart',
        type: 'success'
      })
    } catch {
      setToast({
        message: 'Failed to remove item from cart',
        type: 'error'
      })
    }
  }

  // Handle quantity change
  const handleQuantityChange = async (item: typeof items[0], newQuantity: number) => {
    if (newQuantity > 0) {
      try {
        await updateQuantity(item.id, newQuantity, item.selectedSize, item.selectedColor)
        setToast({
          message: 'Cart updated successfully',
          type: 'success'
        })
      } catch {
        setToast({
          message: 'Failed to update cart',
          type: 'error'
        })
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <style jsx global>{`
        /* Remove number input spinners */
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }

        /* Custom scrollbar styles */
        .cart-items::-webkit-scrollbar {
          width: 4px;
        }
        
        .cart-items::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 2px;
        }
        
        .cart-items::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 2px;
        }
        
        .cart-items::-webkit-scrollbar-thumb:hover {
          background: #666;
        }

        /* Firefox scrollbar styles */
        .cart-items {
          scrollbar-width: thin;
          scrollbar-color: #888 #f1f1f1;
        }
      `}</style>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Storefront
          </Link>

          <div className="relative" ref={cartRef}>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="flex items-center space-x-1 rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="font-medium">{totalItems}</span>
            </button>

            {isCartOpen && (
              <div className="absolute right-0 mt-2 w-96 rounded-lg bg-white p-4 shadow-xl">
                <h3 className="mb-4 text-lg font-semibold">Shopping Cart</h3>
                {items.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty</p>
                ) : (
                  <div>
                    <div className="cart-items max-h-[60vh] overflow-y-auto space-y-4 pr-2">
                      {items.map((item) => (
                        <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex items-center space-x-4">
                          <Link 
                            href={`/products/${item.id}`}
                            onClick={() => setIsCartOpen(false)}
                            className="flex-shrink-0"
                          >
                            <Image
                              src={getVariantImage(item)}
                              alt={item.title}
                              width={64}
                              height={64}
                              className="rounded-md object-cover"
                            />
                          </Link>
                          <div className="flex-1">
                            <Link 
                              href={`/products/${item.id}`}
                              onClick={() => setIsCartOpen(false)}
                              className="font-medium hover:text-gray-600 transition-colors"
                            >
                              {item.title}
                            </Link>
                            <div className="mt-1 space-y-1">
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center border border-gray-300 rounded">
                                  <button
                                    onClick={() => handleQuantityChange(item, item.quantity - 1)}
                                    className="px-2 py-1 border-r border-gray-300 hover:bg-gray-50"
                                  >
                                    -
                                  </button>
                                  <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => {
                                      const value = parseInt(e.target.value)
                                      if (!isNaN(value) && value > 0) {
                                        handleQuantityChange(item, value)
                                      }
                                    }}
                                    className="w-12 px-2 py-1 text-center focus:outline-none"
                                    min="1"
                                  />
                                  <button
                                    onClick={() => handleQuantityChange(item, item.quantity + 1)}
                                    className="px-2 py-1 border-l border-gray-300 hover:bg-gray-50"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              {item.selectedColor && (
                                <p className="text-sm text-gray-500">
                                  Color: {item.selectedColor}
                                </p>
                              )}
                              {item.selectedSize && (
                                <p className="text-sm text-gray-500">
                                  Size: {item.selectedSize}
                                </p>
                              )}
                              <p className="text-sm font-medium">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleRemoveFromCart(item)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Total:</span>
                        <span className="font-medium">
                          $
                          {items
                            .reduce(
                              (total, item) => total + item.price * item.quantity,
                              0
                            )
                            .toFixed(2)}
                        </span>
                      </div>
                      <button className="mt-4 w-full rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800">
                        Checkout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </header>
  )
} 