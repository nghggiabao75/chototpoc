'use client';

import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const HotDealsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3); // Tablet: 3 items
      } else {
        setItemsPerPage(4); // Desktop: 4 items
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

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
      isFreeShipping: true,
      shop: {
        name: 'Fashion Store VN',
        rating: 4.8,
        isVerified: true
      }
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
      isFreeShipping: false,
      shop: {
        name: 'Jeans House',
        rating: 4.6,
        isVerified: true
      }
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
      isFreeShipping: true,
      shop: {
        name: 'Dress Paradise',
        rating: 4.3,
        isVerified: false
      }
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
      isFreeShipping: true,
      shop: {
        name: 'Street Style',
        rating: 4.5,
        isVerified: true
      }
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
      isFreeShipping: false,
      shop: {
        name: 'Sneaker World',
        rating: 4.7,
        isVerified: true
      }
    }
  ];

  const maxIndex = Math.max(0, hotDeals.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + maxIndex + 1) % (maxIndex + 1));
  };



  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 my-4">
      {/* Section Title */}
      <div className="text-center mb-8">
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
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 hover:shadow-xl hover:scale-110 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Previous deals"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 hover:shadow-xl hover:scale-110 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
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
                className="w-full sm:w-1/3 lg:w-1/4 flex-shrink-0 px-2 pb-4"
              >
                <ProductCard product={product} showDiscount={true} />
              </div>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-4 sm:mt-6">
          <button
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md text-sm sm:text-base min-h-[44px] cursor-pointer"
          >
            Xem tất cả
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotDealsSection;
