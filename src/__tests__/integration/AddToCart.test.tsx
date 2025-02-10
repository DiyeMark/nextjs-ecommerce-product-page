import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductDetail from '@/components/ProductDetail/ProductDetail'
import { useCartStore } from '@/store/cartStore'
import { Product } from '@/types/product'

describe('Add to Cart Flow', () => {
  const mockProduct: Product = {
    id: '1',
    title: 'Test Product',
    description: 'Test description',
    price: 99.99,
    images: ['/test.jpg'],
    variants: [
      {
        id: 'v1',
        size: 'M',
        color: 'Blue',
        stock: 5
      }
    ],
    colorImages: [
      {
        color: 'Blue',
        images: ['/blue-test.jpg']
      }
    ],
    colors: ['Blue'],
    rating: {
      average: 4.5,
      count: 10,
      distribution: {
        5: 5,
        4: 3,
        3: 1,
        2: 1,
        1: 0
      },
      satisfactionPercentage: 80
    },
    reviews: [],
    specifications: {
      features: ['Test Feature 1', 'Test Feature 2'],
      dateFirstAvailable: '2024-01-01',
      department: 'Test Department'
    },
    seller: {
      name: 'Test Seller',
      imageUrl: '/seller.jpg',
      isOfficial: true,
      location: 'Test Location',
      rating: 4.8,
      chatResponse: 95
    }
  }

  beforeEach(async () => {
    const store = useCartStore.getState()
    await store.clearCart()
  })

  it('allows adding a product to cart with selected options', async () => {
    const user = userEvent.setup()
    render(<ProductDetail product={mockProduct} />)

    // Select size
    const sizeButton = screen.getByRole('button', { name: 'M' })
    await user.click(sizeButton)

    // Wait for size selection to be processed
    await waitFor(() => {
      expect(sizeButton).toHaveClass('border-black')
    })

    // Set quantity
    const quantityInput = screen.getByLabelText('Quantity')
    await user.clear(quantityInput)
    await user.type(quantityInput, '2')

    // Click add to cart button
    const addToCartButton = screen.getByRole('button', { name: /add to cart/i })
    await user.click(addToCartButton)

    // Verify cart was updated
    await waitFor(() => {
      const cartState = useCartStore.getState()
      expect(cartState.items).toHaveLength(1)
      expect(cartState.items[0]).toEqual(expect.objectContaining({
        id: '1',
        title: 'Test Product',
        quantity: 2,
        selectedSize: 'M',
        selectedColor: 'Blue'
      }))
    })
  })

  it('shows error when trying to add more than available stock', async () => {
    const user = userEvent.setup()
    render(<ProductDetail product={mockProduct} />)

    // Select size
    const sizeButton = screen.getByRole('button', { name: 'M' })
    await user.click(sizeButton)

    // Wait for size selection to be processed
    await waitFor(() => {
      expect(sizeButton).toHaveClass('border-black')
    })

    // Try to set quantity higher than stock
    const quantityInput = screen.getByLabelText('Quantity')
    await user.clear(quantityInput)
    await user.type(quantityInput, '10')

    // Click add to cart button
    const addToCartButton = screen.getByRole('button', { name: /add to cart/i })
    await user.click(addToCartButton)

    // Verify error message is shown
    await waitFor(() => {
      expect(screen.getByText(/only 5 items available/i)).toBeInTheDocument()
    })

    // Verify cart was not updated
    expect(useCartStore.getState().items).toHaveLength(0)
  })

  it('combines quantities when adding the same item multiple times', async () => {
    const user = userEvent.setup()
    render(<ProductDetail product={mockProduct} />)

    // Add first item
    const sizeButton = screen.getByRole('button', { name: 'M' })
    await user.click(sizeButton)

    // Wait for size selection to be processed
    await waitFor(() => {
      expect(sizeButton).toHaveClass('border-black')
    })

    const quantityInput = screen.getByLabelText('Quantity')
    await user.clear(quantityInput)
    await user.type(quantityInput, '2')

    const addButton = screen.getByRole('button', { name: /add to cart/i })
    await user.click(addButton)

    // Add second item
    await user.clear(quantityInput)
    await user.type(quantityInput, '3')
    await user.click(addButton)

    // Verify cart was updated with combined quantity
    await waitFor(() => {
      const cartState = useCartStore.getState()
      expect(cartState.items).toHaveLength(1)
      expect(cartState.items[0].quantity).toBe(5) // 2 + 3 = 5
    })
  })
})