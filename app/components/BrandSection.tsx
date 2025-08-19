'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const BrandSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock brand data
  const brands = [
    {
      id: 1,
      name: 'Nike',
      logo: '/api/placeholder/120/120',
      description: 'Thương hiệu thể thao hàng đầu'
    },
    {
      id: 2,
      name: 'Adidas',
      logo: '/api/placeholder/120/120',
      description: 'Phong cách thể thao châu Âu'
    },
    {
      id: 3,
      name: 'Zara',
      logo: '/api/placeholder/120/120',
      description: 'Thời trang fast fashion'
    },
    {
      id: 4,
      name: 'H&M',
      logo: '/api/placeholder/120/120',
      description: 'Thời trang bền vững'
    },
    {
      id: 5,
      name: 'Uniqlo',
      logo: '/api/placeholder/120/120',
      description: 'Thời trang tối giản Nhật Bản'
    },
    {
      id: 6,
      name: 'Canifa',
      logo: '/api/placeholder/120/120',
      description: 'Thương hiệu Việt Nam'
    },
    {
      id: 7,
      name: 'IVY Moda',
      logo: '/api/placeholder/120/120',
      description: 'Thời trang công sở Việt'
    },
    {
      id: 8,
      name: 'Routine',
      logo: '/api/placeholder/120/120',
      description: 'Thời trang nam Việt Nam'
    }
  ];

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, brands.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          THƯƠNG HIỆU
        </h2>
        <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
      </div>

      {/* Brands Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          aria-label="Previous brands"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          aria-label="Next brands"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>

        {/* Brands Grid */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Brand Logo */}
                  <div className="p-6">
                    <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4 shadow-lg">
                      <div className="text-white font-bold text-lg">
                        {brand.name.charAt(0)}
                      </div>
                    </div>
                    
                    {/* Brand Info */}
                    <div className="text-center">
                      <h3 className="font-bold text-gray-900 mb-2">
                        {brand.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {brand.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Show all brands in grid */}
        <div className="md:hidden mt-8 grid grid-cols-2 gap-4">
          {brands.map((brand) => (
            <div
              key={`mobile-${brand.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-4">
                <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-3 shadow-md">
                  <div className="text-white font-bold">
                    {brand.name.charAt(0)}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {brand.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="hidden md:flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(brands.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              Math.floor(currentIndex / itemsPerPage) === index
                ? 'bg-green-500 scale-110'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to brand group ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BrandSection;
