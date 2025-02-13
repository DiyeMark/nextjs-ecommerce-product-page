"use client";

import { useEffect, useState } from 'react';
import { Product } from '@/types/product';
import OpenAI from 'openai';

interface User {
  id: string;
  name: string;
  purchaseHistory: {
    productId: string;
    productName: string;
    category: string;
    purchaseDate: string;
  }[];
}

// Dummy users with purchase history
const dummyUsers: User[] = [
  {
    id: '1',
    name: 'Alice Smith',
    purchaseHistory: [
      { productId: '101', productName: 'Running Shoes', category: 'Sports', purchaseDate: '2024-02-15' },
      { productId: '102', productName: 'Yoga Mat', category: 'Fitness', purchaseDate: '2024-01-20' },
    ],
  },
  {
    id: '2',
    name: 'Bob Johnson',
    purchaseHistory: [
      { productId: '103', productName: 'Basketball', category: 'Sports', purchaseDate: '2024-03-01' },
      { productId: '104', productName: 'Gym Bag', category: 'Accessories', purchaseDate: '2024-02-10' },
    ],
  },
  {
    id: '3',
    name: 'Carol Davis',
    purchaseHistory: [
      { productId: '105', productName: 'Tennis Racket', category: 'Sports', purchaseDate: '2024-02-28' },
      { productId: '106', productName: 'Sports Watch', category: 'Electronics', purchaseDate: '2024-01-15' },
    ],
  },
  {
    id: '4',
    name: 'David Wilson',
    purchaseHistory: [
      { productId: '107', productName: 'Fitness Tracker', category: 'Electronics', purchaseDate: '2024-03-05' },
      { productId: '108', productName: 'Protein Powder', category: 'Nutrition', purchaseDate: '2024-02-20' },
    ],
  },
];

interface EnhancedDescriptionProps {
  product: Product;
}

export default function EnhancedDescription({ product }: EnhancedDescriptionProps) {
  const [description, setDescription] = useState(product.description);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    const generateEnhancedDescription = async () => {
      try {
        // Create a timeout promise
        const timeout = new Promise((_, reject) => {
          setTimeout(() => {
            reject(new Error('Request timeout'));
          }, 5000);
        });

        const fetchDescription = async () => {
          const prompt = `Based on the following product information and user purchase history, generate a compelling and personalized product description:

Product Information:
- Title: ${product.title}
- Original Description: ${product.description}
- Price: $${product.price}
- Rating: ${product.rating.average}/5 from ${product.rating.count} reviews
- Key Features: ${product.specifications.features.join(', ')}

Recent Customer Purchase Patterns:
${dummyUsers.map(user => `${user.name}: Previously purchased ${user.purchaseHistory.map(p => p.productName).join(', ')}`).join('\\n')}

Please generate a detailed, engaging product description that highlights its key features and appeals to similar customers. Keep it concise but informative.`;

          const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
          });

          return response.choices[0]?.message?.content;
        };

        // Race between the fetch and timeout
        const result = await Promise.race([
          fetchDescription(),
          timeout
        ]);

        if (result) {
          setDescription(result as string);
        }
      } catch (error) {
        console.error('Error generating description:', error);
        // Fallback to original description on error
        setDescription(product.description);
      } finally {
        setIsLoading(false);
      }
    };

    generateEnhancedDescription();
  }, [product]);

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    );
  }

  return <p className="text-gray-700">{description}</p>;
} 