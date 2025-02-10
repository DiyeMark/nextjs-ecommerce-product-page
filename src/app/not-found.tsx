import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | Storefront',
  description: 'Sorry, we couldn\'t find the page you\'re looking for. Please check the URL or return to our homepage.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <ShoppingBag className="w-16 h-16 text-black mb-4" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Not Found</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Sorry, we couldn&apos;t find the product you&apos;re looking for. It might have been removed or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  )
} 