'use client';

import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import { useState } from 'react';
import ProductCard from './ProductCard';

const HotDealsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock hot deals data
  const hotDeals = [
    {
      id: 1,
      title: 'Áo thun nam cao cấp Cotton 100%',
      originalPrice: 299000,
      salePrice: 199000,
      discount: 33,
      image: '/api/placeholder/250/250',
      rating: 4.5,
      sold: 120,
      location: 'TP. Hồ Chí Minh',
      isVerified: true,
      isFreeShipping: true
    },
    {
      id: 2,
      title: 'Quần jeans nữ skinny dáng đẹp',
      originalPrice: 599000,
      salePrice: 399000,
      discount: 33,
      image: '/api/placeholder/250/250',
      rating: 4.8,
      sold: 85,
      location: 'Hà Nội',
      isVerified: true,
      isFreeShipping: false
    },
    {
      id: 3,
      title: 'Váy maxi hoa nhí thời trang',
      originalPrice: 450000,
      salePrice: 299000,
      discount: 34,
      image: '/api/placeholder/250/250',
      rating: 4.6,
      sold: 95,
      location: 'Đà Nẵng',
      isVerified: false,
      isFreeShipping: true
    },
    {
      id: 4,
      title: 'Áo khoác bomber unisex',
      originalPrice: 799000,
      salePrice: 499000,
      discount: 38,
      image: '/api/placeholder/250/250',
      rating: 4.7,
      sold: 67,
      location: 'TP. Hồ Chí Minh',
      isVerified: true,
      isFreeShipping: true
    },
    {
      id: 5,
      title: 'Giày sneaker trắng thể thao',
      originalPrice: 899000,
      salePrice: 599000,
      discount: 33,
      image: '/api/placeholder/250/250',
      rating: 4.9,
      sold: 156,
      location: 'Hà Nội',
      isVerified: true,
      isFreeShipping: false
    }
  ];

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, hotDeals.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };



  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Section Title */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Flame className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            KHUYẾN MÃI "HOT" HÔM NAY
          </h2>
          <Flame className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
        </div>
        <div className="w-24 sm:w-32 h-1 bg-red-500 mx-auto rounded-full"></div>
      </div>

      {/* Products Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Previous deals"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Next deals"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
        </button>

        {/* Products Grid */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {hotDeals.map((product) => (
              <div
                key={product.id}
                className="w-1/2 sm:w-1/2 lg:w-1/4 flex-shrink-0 px-1 sm:px-2"
              >
                <ProductCard product={product} showDiscount={true} />
              </div>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-4 sm:mt-6">
          <button
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-md hover:shadow-lg text-sm sm:text-base min-h-[44px]"
          >
            Xem tất cả
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotDealsSection;
