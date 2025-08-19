'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock banner data
  const banners = [
    {
      id: 1,
      title: "BANNER QUẢNG CÁO",
      subtitle: "Khuyến mãi đặc biệt cho quần áo nam",
      image: "/api/placeholder/600/300",
      color: "bg-gradient-to-r from-green-500 to-green-600"
    },
    {
      id: 2,
      title: "BANNER QUẢNG CÁO",
      subtitle: "Bộ sưu tập mới cho phụ nữ hiện đại",
      image: "/api/placeholder/600/300",
      color: "bg-gradient-to-r from-green-600 to-green-700"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        {/* Banner Container */}
        <div className="relative h-64 md:h-80 lg:h-96">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className={`${banner.color} h-full flex items-center justify-center relative`}>
                {/* Banner Content */}
                <div className="text-center text-white z-10">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
                    {banner.title}
                  </h2>
                  <p className="text-sm md:text-lg opacity-90">
                    {banner.subtitle}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-400/20"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Split Banner Layout for larger screens */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4 lg:mt-6">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg h-48 flex items-center justify-center text-white shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold">BANNER QUẢNG CÁO</h3>
            <p className="text-sm opacity-90 mt-2">Ưu đãi đặc biệt</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg h-48 flex items-center justify-center text-white shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold">BANNER QUẢNG CÁO</h3>
            <p className="text-sm opacity-90 mt-2">Sản phẩm mới nhất</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
