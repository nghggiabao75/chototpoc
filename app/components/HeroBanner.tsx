'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Banner data - 4 banners arranged in 2 pairs
  const bannerPairs = [
    {
      id: 1,
      banners: [
        {
          title: "BANNER QUẢNG CÁO 1",
          subtitle: "Khuyến mãi đặc biệt cho quần áo nam",
          color: "bg-gradient-to-r from-green-500 to-green-600"
        },
        {
          title: "BANNER QUẢNG CÁO 2",
          subtitle: "Bộ sưu tập mới cho phụ nữ hiện đại",
          color: "bg-gradient-to-r from-green-600 to-green-700"
        }
      ]
    },
    {
      id: 2,
      banners: [
        {
          title: "BANNER QUẢNG CÁO 3",
          subtitle: "Thời trang trẻ em đáng yêu",
          color: "bg-gradient-to-r from-green-700 to-green-800"
        },
        {
          title: "BANNER QUẢNG CÁO 4",
          subtitle: "Phụ kiện thời trang cao cấp",
          color: "bg-gradient-to-r from-green-800 to-emerald-700"
        }
      ]
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    if (isHovered) return; // Don't auto-slide when hovering

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerPairs.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [bannerPairs.length, isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerPairs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerPairs.length) % bannerPairs.length);
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 my-4">
      <div
        className="relative overflow-hidden rounded-lg shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Banner Container - 2 banners side by side */}
        <div className="relative h-64 md:h-80 lg:h-96">
          {bannerPairs.map((pair, pairIndex) => (
            <div
              key={pair.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                pairIndex === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 h-full">
                {pair.banners.map((banner, bannerIndex) => (
                  <div
                    key={bannerIndex}
                    className={`${banner.color} h-full flex items-center justify-center relative cursor-pointer hover:shadow-xl hover:brightness-110 transition-all duration-300 rounded-lg overflow-hidden ${bannerIndex === 1 ? 'hidden md:flex' : ''}`}
                  >
                    {/* Banner Content */}
                    <div className="text-center text-white z-10 p-4">
                      <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2">
                        {banner.title}
                      </h2>
                      <p className="text-xs md:text-sm lg:text-base opacity-90">
                        {banner.subtitle}
                      </p>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-400/20"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 cursor-pointer hover:shadow-xl z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 cursor-pointer hover:shadow-xl z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>


      </div>
    </section>
  );
};

export default HeroBanner;
