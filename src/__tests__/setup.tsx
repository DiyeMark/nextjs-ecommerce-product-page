import '@testing-library/jest-dom'
import React from 'react'
import type { ImageProps } from 'next/image'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: ImageProps) => {
    // Convert boolean props to strings
    const modifiedProps = {
      ...props,
      fill: props.fill?.toString(),
      priority: props.priority?.toString(),
    }
    // eslint-disable-next-line @next/next/no-img-element
    return React.createElement('img', {
      ...modifiedProps,
      alt: modifiedProps.alt || '',
    })
  },
}))

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }
  },
  useSearchParams() {
    return {
      get: jest.fn(),
    }
  },
})) 