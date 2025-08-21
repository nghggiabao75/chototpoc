'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  subtitle: string;
}

const ProductSection = ({ title, subtitle }: ProductSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Mobile: 1 item
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2); // Small tablet: 2 items
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
      isFreeShipping: false,
      shop: {
        name: 'Office Style',
        rating: 4.4,
        isVerified: true
      }
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
      isFreeShipping: true,
      shop: {
        name: 'Elegant Fashion',
        rating: 4.2,
        isVerified: false
      }
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
      isFreeShipping: true,
      shop: {
        name: 'Men\'s Corner',
        rating: 4.3,
        isVerified: true
      }
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
      isFreeShipping: false,
      shop: {
        name: 'Winter Collection',
        rating: 4.6,
        isVerified: true
      }
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
      isFreeShipping: false,
      shop: {
        name: 'Leather Craft',
        rating: 4.1,
        isVerified: false
      }
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
      isFreeShipping: true,
      shop: {
        name: 'Luxury Bags',
        rating: 4.8,
        isVerified: true
      }
    }
  ];

  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + maxIndex + 1) % (maxIndex + 1));
  };



  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 my-4">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
      </div>

      {/* Products Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 hover:shadow-xl hover:scale-110 transition-all duration-200 cursor-pointer"
          aria-label="Previous products"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 hover:shadow-xl hover:scale-110 transition-all duration-200 cursor-pointer"
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
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2 pb-4"
              >
                <ProductCard product={product} showDiscount={false} />
              </div>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-4 sm:mt-6">
          <button
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md text-sm sm:text-base min-h-[44px] cursor-pointer"
          >
            {subtitle}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
