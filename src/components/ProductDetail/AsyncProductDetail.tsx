'use client'

import { useState, useEffect } from 'react'
import ProductDetail from './ProductDetail'
import ProductTabs from './ProductTabs'
import { Product } from '@/types/product'

interface AsyncProductDetailProps {
  productId: string
  initialProduct: Product
}

async function getProduct(productId: string): Promise<Product> {
  const res = await fetch(`/api/products/${productId}`)
  if (!res.ok) {
    throw new Error('Failed to load product')
  }
  return res.json()
}

function ProductLoader({ productId, initialProduct }: AsyncProductDetailProps) {
  const [product, setProduct] = useState<Product>(initialProduct)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // Only fetch if the productId changes from the initial one
    if (productId !== initialProduct.id) {
      getProduct(productId)
        .then(setProduct)
        .catch(setError)
    }
  }, [productId, initialProduct.id])

  if (error) {
    return (
      <div className="text-red-500">
        Error loading product. Please try again later.
      </div>
    )
  }

  return (
    <>
      <ProductDetail product={product} />
      <ProductTabs product={product} />
    </>
  )
}

export default function AsyncProductDetail({ productId, initialProduct }: AsyncProductDetailProps) {
  return <ProductLoader productId={productId} initialProduct={initialProduct} />
} 