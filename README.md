# Next.js E-Commerce Product Page

A modern e-commerce product page built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases a dynamic product detail page with features like image galleries, size/color selection, cart management, and product recommendations.

## ⚡ Built With

[![Next.js][Next.js]][Next-url]
[![TypeScript][TypeScript]][TypeScript-url]
[![TailwindCSS][TailwindCSS]][TailwindCSS-url]
[![React][React.js]][React-url]
[![Zustand][Zustand]][Zustand-url]
[![Jest][Jest]][Jest-url]

## 🎨 Design Inspiration

This project's UI design is inspired by [BeliBeli.com E-commerce Product Page](https://dribbble.com/shots/22224580-BeliBeli-com-Ecommerce-Product-Page) created by Andika Tata on Dribbble. The design features a modern and clean layout that emphasizes product presentation and user experience.

[Next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white
[Next-url]: https://nextjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Zustand]: https://img.shields.io/badge/Zustand-593D88?style=for-the-badge&logo=react&logoColor=white
[Zustand-url]: https://github.com/pmndrs/zustand
[Jest]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/

## ✨ Features

### 🛍️ Product Display
- Dynamic image gallery with color variants
- Detailed product information (title, description, price)
- Size and color variant selector
- Stock availability
- Product ratings and reviews
- Seller information

### 🛒 Cart Functionality
- Add products to cart with size/color variants
- Quantity selection
- Persistent cart data using Zustand
- Real-time cart total updates
- Quick view cart in header

### 🎯 Product Recommendations
- Related product suggestions
- Quick add functionality
- Lazy-loaded recommendations
- Loading skeleton states

### 🔧 Technical Features
- Server-side rendering with Next.js 14 App Router
- TypeScript for type safety
- Responsive design with Tailwind CSS
- State management with Zustand
- Comprehensive test coverage with Jest and React Testing Library
- Mock API integration with loading states

### 🧪 Testing
- Integration tests for cart operations
- Unit tests for UI components with React Testing Library
- Mock API integration for reliable test scenarios
- Key coverage areas:
  - Cart management (add, update, combine items)  
  - Async data loading and UI states

## 🚀 Getting Started

### Prerequisites
- Node.js (>= 18.17.0)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/diyemark/nextjs-ecommerce-product-page.git
cd nextjs-ecommerce-product-page
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000/products/fall-limited-edition-sneakers](http://localhost:3000/products/fall-limited-edition-sneakers) with your browser to see the result.

### 🧪 Testing

Run the test suite:
```bash
npm test
# or
yarn test
```

Watch mode for development:
```bash
npm run test:watch
# or
yarn test:watch
```

## 📋 Project Structure

```
📦 nextjs-ecommerce-product-page
├── 📂 src/
│   ├── 📂 app/                    # Next.js app router pages
│   │   ├── 📂 api/               # API routes
│   │   │   └── 📂 products/     # Product-related endpoints
│   │   │       ├── 📄 route.ts  # GET /api/products
│   │   │       └── 📂 [id]/     # Product-specific routes
│   │   └── 📂 products/         # Product pages
│   ├── 📂 components/             # Reusable UI components
│   │   ├── 📂 Header/            # Navigation and cart
│   │   ├── 📂 ProductDetail/     # Product page components
│   │   └── 📂 Toast/            # Notification system
│   ├── 📂 store/                 # Zustand state management
│   ├── 📂 lib/                   # Utilities and mock data
│   │   └── 📂 data/             # Mock product data
│   ├── 📂 types/                 # TypeScript definitions
│   └── 📂 __tests__/             # Test files
│       ├── 📂 integration/      # Integration tests
│       └── 📂 components/       # Component tests
└── 📝 Configuration files        # Next.js, TypeScript, ESLint
```

## 💭 Assumptions

1. **API Structure**
   - Mock API responses follow a consistent structure
   - Product data includes necessary fields for display
   - API latency is simulated for realistic loading states

2. **User Experience**
   - Users can select size and color before adding to cart
   - Cart data persists across page refreshes
   - Stock levels are tracked per variant

3. **Browser Support**
   - Modern browser features are available
   - JavaScript is enabled
   - Local storage is accessible

## 🚀 Future Improvements

1. **Feature Enhancements**
   - User authentication and profiles
   - Wishlist functionality
   - Product reviews and ratings submission
   - Advanced filtering for recommendations
   - Real-time stock updates

2. **Technical Improvements**
   - Integration with a real backend API
   - Performance optimization for image loading
   - Advanced caching strategies
   - E2E testing with Cypress
   - Accessibility improvements (ARIA labels, keyboard navigation)

3. **UI/UX Improvements**
   - Advanced image zoom functionality
   - Animation transitions
   - Mobile-optimized gallery view
   - Enhanced error handling UI
   - Dark mode support
