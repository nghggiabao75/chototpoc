'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  subtitle: string;
}

const ProductSection = ({ title, subtitle }: ProductSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock product data
  const products = [
    {
      id: 1,
      title: 'Áo sơ mi nam công sở cao cấp',
      price: 350000,
      image: '/api/placeholder/250/250',
      rating: 4.3,
      sold: 45,
      location: 'TP. Hồ Chí Minh',
      isVerified: true,
      isFreeShipping: false
    },
    {
      id: 2,
      title: 'Váy công sở nữ thanh lịch',
      price: 420000,
      image: '/api/placeholder/250/250',
      rating: 4.6,
      sold: 32,
      location: 'Hà Nội',
      isVerified: false,
      isFreeShipping: true
    },
    {
      id: 3,
      title: 'Quần âu nam slim fit',
      price: 280000,
      image: '/api/placeholder/250/250',
      rating: 4.4,
      sold: 67,
      location: 'Đà Nẵng',
      isVerified: true,
      isFreeShipping: true
    },
    {
      id: 4,
      title: 'Áo khoác nữ dáng dài',
      price: 550000,
      image: '/api/placeholder/250/250',
      rating: 4.7,
      sold: 28,
      location: 'TP. Hồ Chí Minh',
      isVerified: true,
      isFreeShipping: false
    },
    {
      id: 5,
      title: 'Giày oxford nam da thật',
      price: 890000,
      image: '/api/placeholder/250/250',
      rating: 4.8,
      sold: 19,
      location: 'Hà Nội',
      isVerified: false,
      isFreeShipping: false
    },
    {
      id: 6,
      title: 'Túi xách nữ da cao cấp',
      price: 650000,
      image: '/api/placeholder/250/250',
      rating: 4.5,
      sold: 41,
      location: 'TP. Hồ Chí Minh',
      isVerified: true,
      isFreeShipping: true
    }
  ];

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };



  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <div className="w-24 h-1 bg-green-500 rounded-full"></div>
        </div>
        <button
          className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
        >
          {subtitle}
        </button>
      </div>

      {/* Products Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          aria-label="Previous products"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          aria-label="Next products"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>

        {/* Products Grid */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2"
              >
                <ProductCard product={product} showDiscount={false} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
