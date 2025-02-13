import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/types/product'

interface WishlistStore {
  items: Product[]
  isLoading: boolean
  error: string | null
  addToWishlist: (product: Product) => Promise<void>
  removeFromWishlist: (productId: string) => Promise<void>
  isInWishlist: (productId: string) => boolean
  clearWishlist: () => Promise<void>
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,
      error: null,
      addToWishlist: async (product: Product) => {
        try {
          set({ isLoading: true, error: null })
          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 300))
          
          set((state) => {
            const existingItem = state.items.find((item) => item.id === product.id)
            if (existingItem) {
              return state
            }
            return {
              items: [...state.items, product],
              isLoading: false,
            }
          })
        } catch (error) {
          set({ error: 'Failed to add item to wishlist', isLoading: false })
          throw error
        }
      },
      removeFromWishlist: async (productId: string) => {
        try {
          set({ isLoading: true, error: null })
          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 300))
          
          set((state) => ({
            items: state.items.filter((item) => item.id !== productId),
            isLoading: false,
          }))
        } catch (error) {
          set({ error: 'Failed to remove item from wishlist', isLoading: false })
          throw error
        }
      },
      isInWishlist: (productId: string) => {
        return get().items.some((item) => item.id === productId)
      },
      clearWishlist: async () => {
        try {
          set({ isLoading: true, error: null })
          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 300))
          
          set({ items: [], isLoading: false })
        } catch (error) {
          set({ error: 'Failed to clear wishlist', isLoading: false })
          throw error
        }
      },
    }),
    {
      name: 'wishlist-storage',
    }
  )
) 