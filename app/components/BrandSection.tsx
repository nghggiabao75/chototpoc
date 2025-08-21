'use client';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const BrandSection = () => {
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

  // Simple brand data
  const brands = [
    {
      id: 1,
      name: 'Nike',
      description: 'Thương hiệu thể thao hàng đầu',
      rating: 4.8,
      products: '2.5k+'
    },
    {
      id: 2,
      name: 'Adidas',
      description: 'Phong cách thể thao châu Âu',
      rating: 4.7,
      products: '2.1k+'
    },
    {
      id: 3,
      name: 'Zara',
      description: 'Thời trang fast fashion',
      rating: 4.6,
      products: '3.2k+'
    },
    {
      id: 4,
      name: 'H&M',
      description: 'Thời trang bền vững',
      rating: 4.5,
      products: '2.8k+'
    },
    {
      id: 5,
      name: 'Uniqlo',
      description: 'Thời trang tối giản Nhật Bản',
      rating: 4.9,
      products: '1.9k+'
    },
    {
      id: 6,
      name: 'Canifa',
      description: 'Thương hiệu Việt Nam',
      rating: 4.4,
      products: '1.5k+'
    },
    {
      id: 7,
      name: 'IVY Moda',
      description: 'Thời trang công sở Việt',
      rating: 4.3,
      products: '980+'
    },
    {
      id: 8,
      name: 'Routine',
      description: 'Thời trang nam Việt Nam',
      rating: 4.2,
      products: '750+'
    }
  ];

  const maxIndex = Math.max(0, brands.length - itemsPerPage);

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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          THƯƠNG HIỆU
        </h2>
        <p className="text-gray-600 text-sm mb-4">Khám phá các thương hiệu uy tín</p>
        <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
      </div>

      {/* Brands Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 hover:shadow-xl hover:scale-110 transition-all duration-200 cursor-pointer"
          aria-label="Previous brands"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 hover:shadow-xl hover:scale-110 transition-all duration-200 cursor-pointer"
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
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2 pb-4"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  {/* Brand Logo */}
                  <div className="p-6">
                    <div className="bg-gray-100 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors duration-300">
                      <div className="text-gray-600 font-bold text-2xl group-hover:text-green-600">
                        {brand.name.charAt(0)}
                      </div>
                    </div>

                    {/* Brand Info */}
                    <div className="text-center">
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">
                        {brand.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {brand.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{brand.rating}</span>
                        </div>
                        <div className="text-gray-400">•</div>
                        <span className="font-medium">{brand.products} sản phẩm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>


    </section>
  );
};

export default BrandSection;
