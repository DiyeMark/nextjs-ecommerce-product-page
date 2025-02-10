import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/types/product'

interface CartItem extends Product {
  quantity: number
  selectedSize?: string
  selectedColor?: string
}

interface CartStore {
  items: CartItem[]
  totalItems: number
  isLoading: boolean
  error: string | null
  addToCart: (product: Product, quantity: number, selectedSize?: string, selectedColor?: string) => Promise<void>
  removeFromCart: (productId: string, selectedSize?: string, selectedColor?: string) => Promise<void>
  updateQuantity: (productId: string, quantity: number, selectedSize?: string, selectedColor?: string) => Promise<void>
  clearCart: () => Promise<void>
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      totalItems: 0,
      isLoading: false,
      error: null,
      addToCart: async (product: Product, quantity: number, selectedSize?: string, selectedColor?: string) => {
        try {
          set({ isLoading: true, error: null })
          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 500))
          
          set((state) => {
            const existingItem = state.items.find(
              (item) => 
                item.id === product.id && 
                item.selectedSize === selectedSize && 
                item.selectedColor === selectedColor
            )

            // Check stock availability
            const selectedVariant = product.variants.find(v => v.size === selectedSize && v.color === selectedColor);
            if (selectedVariant && quantity > selectedVariant.stock) {
              throw new Error('Not enough stock available');
            }

            if (existingItem) {
              // Check if total quantity would exceed stock
              if (selectedVariant && existingItem.quantity + quantity > selectedVariant.stock) {
                throw new Error('Not enough stock available');
              }

              const updatedItems = state.items.map((item) =>
                item.id === product.id &&
                item.selectedSize === selectedSize &&
                item.selectedColor === selectedColor
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              );

              return {
                items: updatedItems,
                totalItems: updatedItems.reduce((total, item) => total + item.quantity, 0),
                isLoading: false,
              }
            }

            const newItems = [...state.items, { ...product, quantity, selectedSize, selectedColor }];
            return {
              items: newItems,
              totalItems: newItems.reduce((total, item) => total + item.quantity, 0),
              isLoading: false,
            }
          })
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'Failed to add item to cart', isLoading: false })
          throw error
        }
      },
      removeFromCart: async (productId: string, selectedSize?: string, selectedColor?: string) => {
        try {
          set({ isLoading: true, error: null })
          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 300))
          
          set((state) => {
            const item = state.items.find(
              (item) =>
                item.id === productId &&
                item.selectedSize === selectedSize &&
                item.selectedColor === selectedColor
            )
            return {
              items: state.items.filter(
                (item) =>
                  !(
                    item.id === productId &&
                    item.selectedSize === selectedSize &&
                    item.selectedColor === selectedColor
                  )
              ),
              totalItems: state.totalItems - (item?.quantity || 0),
              isLoading: false,
            }
          })
        } catch (error) {
          set({ error: 'Failed to remove item from cart', isLoading: false })
          throw error
        }
      },
      updateQuantity: async (productId: string, quantity: number, selectedSize?: string, selectedColor?: string) => {
        try {
          set({ isLoading: true, error: null })
          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 300))
          
          set((state) => {
            const item = state.items.find(
              (item) =>
                item.id === productId &&
                item.selectedSize === selectedSize &&
                item.selectedColor === selectedColor
            )
            const quantityDiff = quantity - (item?.quantity || 0)
            return {
              items: state.items.map((item) =>
                item.id === productId &&
                item.selectedSize === selectedSize &&
                item.selectedColor === selectedColor
                  ? { ...item, quantity }
                  : item
              ),
              totalItems: state.totalItems + quantityDiff,
              isLoading: false,
            }
          })
        } catch (error) {
          set({ error: 'Failed to update quantity', isLoading: false })
          throw error
        }
      },
      clearCart: async () => {
        try {
          set({ isLoading: true, error: null })
          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 300))
          
          set({ items: [], totalItems: 0, isLoading: false })
        } catch (error) {
          set({ error: 'Failed to clear cart', isLoading: false })
          throw error
        }
      },
    }),
    {
      name: 'cart-storage',
    }
  )
) 