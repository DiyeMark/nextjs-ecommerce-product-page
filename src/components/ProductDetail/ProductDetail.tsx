"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import {
    BadgeCheck,
    MapPin,
    Star,
    MessageSquare,
    Heart,
    Store,
    Share2,
    MessageCircle,
    ShoppingBag,
    ShoppingCart
} from 'lucide-react';
import Toast from '@/components/Toast/Toast';

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const [selectedColor, setSelectedColor] = useState<string>(product.colors?.[0] || '');
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [activeImage, setActiveImage] = useState(0);
    const [quantity, setQuantity] = useState<string>('1');
    const addToCart = useCartStore((state) => state.addToCart);
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
    const [error, setError] = useState<string | null>(null);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    // Get images for the selected color
    const colorImages = useMemo(() => {
        if (!selectedColor) return product.images;
        const colorImageSet = product.colorImages.find(ci => ci.color === selectedColor);
        return colorImageSet ? colorImageSet.images : product.images;
    }, [product.colorImages, product.images, selectedColor]);

    // Check if the product can be added to cart
    const canAddToCart = useMemo(() => {
        const needsColor = product.colors && product.colors.length > 0;
        const needsSize = product.variants && product.variants.length > 0;

        if (needsColor && needsSize) {
            return selectedColor && selectedSize;
        }
        if (needsColor) {
            return !!selectedColor;
        }
        if (needsSize) {
            return !!selectedSize;
        }
        return true;
    }, [product.colors, product.variants, selectedColor, selectedSize]);

    // Handle quantity change
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '') {
            setQuantity('');
            return;
        }
        const numValue = parseInt(value);
        if (!isNaN(numValue) && numValue >= 0) {
            setQuantity(value.toString());
        }
    };

    // Handle add to cart
    const handleAddToCart = async () => {
        const quantityNum = parseInt(quantity);
        if (!selectedSize) {
            setError('Please select a size');
            return;
        }

        if (product.colors && product.colors.length > 0 && !selectedColor) {
            setError('Please select a color');
            return;
        }

        const variant = product.variants.find(v => 
            v.size === selectedSize && 
            (!product.colors || !selectedColor || v.color === selectedColor)
        );
        if (!variant) {
            setError('Selected variant not available');
            return;
        }

        if (quantityNum > variant.stock) {
            setError(`Only ${variant.stock} items available`);
            return;
        }

        try {
            setError(null);
            await addToCart(product, quantityNum, selectedSize, selectedColor);
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

    const handleSizeSelect = (size: string) => {
        setSelectedSize(size);
    };

    const handleColorSelect = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-4">
                <span>Home</span> / <span>Products</span> / <span>{product.title}</span>
            </div>

            {/* Main Product Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Image Gallery and Store Info */}
                <div className="space-y-6">
                    <div className="flex gap-4">
                        {/* Thumbnail List */}
                        <div className="flex flex-col gap-2 w-20">
                            {colorImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`relative w-full ${colorImages.length > 5 ? 'h-16' : 'h-20'} p-1.5 bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                                        activeImage === index
                                            ? 'ring-2 ring-black ring-offset-1'
                                            : 'border border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={image}
                                            alt={`${product.title} in ${selectedColor} view ${index + 1}`}
                                            fill
                                            priority
                                            sizes="80px"
                                            className="object-contain"
                                        />
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-1 relative h-[500px] bg-white rounded-lg border border-gray-200">
                            <div className="relative w-full h-full p-4">
                                <Image
                                    src={colorImages[activeImage]}
                                    alt={`${product.title} in ${selectedColor}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Seller Info - Below the image */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <div className="relative w-12 h-12 mr-3">
                                    <Image
                                        src={product.seller.imageUrl}
                                        alt={`Avatar of ${product.seller.name}`}
                                        fill
                                        sizes="48px"
                                        priority
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium flex items-center">
                                        {product.seller.name}
                                        {product.seller.isOfficial && (
                                            <BadgeCheck className="w-4 h-4 ml-1 text-black" />
                                        )}
                                    </h3>
                                    <div className="flex items-center text-sm">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5" />
                                        <span className="text-green-600">Online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors flex items-center gap-1.5">
                                    <Heart className="w-4 h-4" />
                                    <span>Follow</span>
                                </button>
                                <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-1.5">
                                    <Store className="w-4 h-4" />
                                    <span>Visit Store</span>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-1.5">
                                <Star className="w-4 h-4 text-gray-500" />
                                <span className="text-gray-500">Rating:</span>{' '}
                                <span className="font-medium">{product.seller.rating}%</span>
                            </div>
                            <div className="flex items-center justify-center gap-1.5">
                                <MapPin className="w-4 h-4 text-gray-500" />
                                <span className="text-gray-500">{product.seller.location}</span>
                            </div>
                            <div className="flex items-center justify-end gap-1.5">
                                <MessageSquare className="w-4 h-4 text-gray-500" />
                                <span className="text-gray-500">Response:</span>{' '}
                                <span className="font-medium">{product.seller.chatResponse}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Product Info */}
                <div className="space-y-6">
                    <h1 className="text-2xl font-semibold text-gray-900">{product.title}</h1>

                    {/* Rating Summary */}
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                        <div className="flex items-center divide-x divide-gray-200">
                            <div className="flex items-center gap-1.5 pr-6">
                                <ShoppingBag className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-600">
                                    {product.unitsSold?.toLocaleString() || '1.2k'} sold
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 px-6">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => {
                                        const ratingValue = product.rating.average;
                                        const isHalfStar = i < ratingValue && i + 1 > ratingValue;
                                        const isFullStar = i < Math.floor(ratingValue);
                                        
                                        return (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    isFullStar
                                                        ? 'text-yellow-400 fill-current'
                                                        : isHalfStar
                                                        ? 'text-yellow-400'
                                                        : 'text-gray-300'
                                                }`}
                                                fill={isHalfStar ? 'url(#half-fill)' : isFullStar ? 'currentColor' : 'none'}
                                                stroke="currentColor"
                                            >
                                                {isHalfStar && (
                                                    <defs>
                                                        <linearGradient id="half-fill" x1="0" x2="1" y1="0" y2="0">
                                                            <stop offset="50%" stopColor="currentColor" />
                                                            <stop offset="50%" stopColor="transparent" />
                                                        </linearGradient>
                                                    </defs>
                                                )}
                                            </Star>
                                        );
                                    })}
                                </div>
                                <span className="text-sm text-gray-600">
                                    {product.rating.average}
                                </span>
                            </div>
                            <div className="text-sm text-gray-600 pl-6">
                                {product.rating.count} Reviews
                            </div>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="space-y-1">
                        <div className="text-2xl font-bold">
                            ${product.price.toLocaleString()}
                            {product.discountPercentage && (
                                <span className="ml-2 text-sm text-red-500">
                                    {product.discountPercentage}% off
                                </span>
                            )}
                        </div>
                        {product.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">
                                ${product.originalPrice.toLocaleString()}
                            </div>
                        )}
                    </div>

                    {/* Color Selection */}
                    {product.colors && (
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-sm font-medium">Select Color</span>
                            </div>
                            <div className="flex space-x-2">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => handleColorSelect(color)}
                                        className={`w-8 h-8 rounded-full relative ${
                                            selectedColor === color
                                                ? 'ring-2 ring-black ring-offset-2'
                                                : ''
                                        }`}
                                    >
                                        <div
                                            className={`w-full h-full rounded-full ${
                                                color.toLowerCase() === 'white'
                                                    ? 'border border-gray-400 bg-white'
                                                    : ''
                                            }`}
                                            style={{ backgroundColor: color.toLowerCase() }}
                                        />
                                    </button>
                                ))}
                            </div>
                            <p className="text-sm text-gray-600">Selected: {selectedColor}</p>
                        </div>
                    )}

                    {/* Size Selection */}
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-sm font-medium">Select Size</span>
                            <button className="text-sm text-gray-500">Size Guide</button>
                        </div>
                        <div className="grid grid-cols-6 gap-2">
                            {product.variants
                                .filter((v) => !selectedColor || v.color === selectedColor)
                                .map((variant) => (
                                    <button
                                        key={variant.id}
                                        onClick={() => handleSizeSelect(variant.size)}
                                        disabled={variant.stock === 0}
                                        className={`py-2 text-sm border rounded relative ${
                                            variant.stock === 0
                                                ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed overflow-hidden'
                                                : selectedSize === variant.size
                                                ? 'border-black bg-black text-white'
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        {variant.size}
                                        {variant.stock === 0 && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-full border-t border-gray-300 absolute" />
                                            </div>
                                        )}
                                    </button>
                                ))}
                        </div>
                    </div>

                    {/* Add to Cart */}
                    <div className="space-y-6">
                        {/* Quantity Selector */}
                        <div className="space-y-2">
                            <span className="text-sm font-medium">Quantity</span>
                            <div className="flex items-center w-32">
                                <label htmlFor="quantity" className="sr-only">
                                    Quantity
                                </label>
                                <div className="flex items-center border border-gray-200 rounded-lg">
                                    <button
                                        type="button"
                                        onClick={async () => {
                                            const currentValue = parseInt(quantity) || 0;
                                            if (currentValue > 0) {
                                                setQuantity((currentValue - 1).toString());
                                            }
                                        }}
                                        className="px-3 py-2 border-r border-gray-200 hover:bg-gray-50 transition-colors"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        id="quantity"
                                        name="quantity"
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        className="w-16 px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                                        placeholder="1"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const currentValue = parseInt(quantity) || 0;
                                            setQuantity((currentValue + 1).toString());
                                        }}
                                        className="px-3 py-2 border-l border-gray-200 hover:bg-gray-50 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            disabled={!canAddToCart}
                            className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg transition-colors ${
                                canAddToCart
                                    ? 'bg-black text-white hover:bg-gray-800'
                                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            <ShoppingCart className="w-5 h-5" />
                            {!canAddToCart
                                ? `Please Select ${
                                    !selectedSize && (!product.colors || selectedColor)
                                        ? 'Size'
                                        : !selectedColor && product.colors
                                        ? 'Color'
                                        : 'Size and Color'
                                }`
                                : 'Add to Cart'}
                        </button>

                        {error && (
                            <div className="text-red-500 mt-2" role="alert" aria-live="polite">
                                {error}
                            </div>
                        )}

                        <div className="flex justify-between">
                            <button className="flex items-center text-gray-600 hover:text-gray-900">
                                <MessageCircle className="w-5 h-5 mr-1" />
                                Chat
                            </button>
                            <button 
                                onClick={() => {
                                    if (isInWishlist(product.id)) {
                                        removeFromWishlist(product.id);
                                        setToast({
                                            message: 'Removed from wishlist',
                                            type: 'success'
                                        });
                                    } else {
                                        addToWishlist(product);
                                        setToast({
                                            message: 'Added to wishlist',
                                            type: 'success'
                                        });
                                    }
                                }}
                                className="flex items-center text-gray-600 hover:text-gray-900"
                            >
                                <Heart className={`w-5 h-5 mr-1 ${isInWishlist(product.id) ? 'fill-black' : ''}`} />
                                {isInWishlist(product.id) ? 'Wishlisted' : 'Add to Wishlist'}
                            </button>
                            <button className="flex items-center text-gray-600 hover:text-gray-900">
                                <Share2 className="w-5 h-5 mr-1" />
                                Share
                            </button>
                        </div>
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
        </div>
    );
} 