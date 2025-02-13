export function useRouter() {
  return {
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }
}

export function useSearchParams() {
  return {
    get: jest.fn(),
  }
} 