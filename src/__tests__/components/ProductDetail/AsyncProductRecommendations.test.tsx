import { render, screen, waitFor } from '@testing-library/react'
import AsyncProductRecommendations from '@/components/ProductDetail/AsyncProductRecommendations'
import { Product } from '@/types/product'

// Mock fetch
const mockFetch = jest.fn()
global.fetch = mockFetch

const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Product 1',
    price: 99.99,
    images: ['/image1.jpg'],
    description: '',
    variants: [],
    colorImages: [],
    rating: {
      average: 0,
      count: 0,
      distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      satisfactionPercentage: 0
    },
    reviews: [],
    specifications: {
      features: [],
      dateFirstAvailable: '',
      department: ''
    },
    seller: {
      name: '',
      imageUrl: '',
      isOfficial: false,
      location: '',
      rating: 0,
      chatResponse: 0
    }
  },
  {
    id: '2',
    title: 'Product 2',
    price: 149.99,
    images: ['/image2.jpg'],
    description: '',
    variants: [],
    colorImages: [],
    rating: {
      average: 0,
      count: 0,
      distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      satisfactionPercentage: 0
    },
    reviews: [],
    specifications: {
      features: [],
      dateFirstAvailable: '',
      department: ''
    },
    seller: {
      name: '',
      imageUrl: '',
      isOfficial: false,
      location: '',
      rating: 0,
      chatResponse: 0
    }
  }
]

describe('AsyncProductRecommendations', () => {
  beforeEach(() => {
    mockFetch.mockReset()
  })

  it('displays recommendations when loaded successfully', async () => {
    // Mock successful API response
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts
    })

    render(<AsyncProductRecommendations productId="1" />)

    // Check for loading state
    expect(screen.getByTestId('recommendations-skeleton')).toBeInTheDocument()

    // Wait for recommendations to load
    await waitFor(() => {
      expect(screen.getByTestId('recommendations-container')).toBeInTheDocument()
    })

    // Verify recommendations are displayed
    mockProducts.forEach(product => {
      expect(screen.getByTestId(`recommendation-${product.id}`)).toBeInTheDocument()
      expect(screen.getByTestId(`recommendation-title-${product.id}`)).toBeInTheDocument()
      expect(screen.getByTestId(`recommendation-price-${product.id}`)).toBeInTheDocument()
    })
  })

  it('shows error message when API call fails', async () => {
    // Mock API error
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500
    })

    render(<AsyncProductRecommendations productId="1" />)

    // Wait for error message
    await waitFor(() => {
      expect(screen.getByTestId('recommendations-error')).toBeInTheDocument()
    })
  })

  it('calls API with correct product ID', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts
    })

    render(<AsyncProductRecommendations productId="test-id" />)

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/products/test-id/recommendations?limit=4')
    })
  })
}) 