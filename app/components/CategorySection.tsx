'use client';

import { User, Heart, Baby, ChevronLeft, ChevronRight, Shirt, ShoppingBag, Watch, Crown, Gift, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const CategorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet: 2 items
      } else {
        setItemsPerPage(3); // Desktop: 3 items
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Enhanced category data with better structure
  const categories = [
    {
      id: 1,
      title: 'Thời trang Nam',
      icon: User,
      items: [
        { name: 'Áo thun & Polo', icon: Shirt, count: '2.5k+' },
        { name: 'Quần jeans & Kaki', icon: ShoppingBag, count: '1.8k+' },
        { name: 'Áo sơ mi', icon: Shirt, count: '1.2k+' },
        { name: 'Đồng hồ & Phụ kiện', icon: Watch, count: '890+' },
        { name: 'Giày dép nam', icon: ShoppingBag, count: '1.5k+' },
        { name: 'Túi xách & Balo', icon: ShoppingBag, count: '650+' }
      ],
      gradient: 'from-blue-300 to-blue-400',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-blue-100',
      hoverBg: 'hover:bg-blue-50',
      hoverIconBg: 'group-hover/item:bg-blue-100',
      hoverIconColor: 'group-hover/item:text-blue-500',
      shadowColor: 'hover:shadow-blue-300/25'
    },
    {
      id: 2,
      title: 'Thời trang Nữ',
      icon: Heart,
      items: [
        { name: 'Váy & Đầm', icon: Crown, count: '3.2k+' },
        { name: 'Áo kiểu & Blouse', icon: Shirt, count: '2.8k+' },
        { name: 'Quần jean & Legging', icon: ShoppingBag, count: '2.1k+' },
        { name: 'Túi xách thời trang', icon: ShoppingBag, count: '1.9k+' },
        { name: 'Giày cao gót & Sandal', icon: Crown, count: '1.6k+' },
        { name: 'Trang sức & Phụ kiện', icon: Gift, count: '1.3k+' }
      ],
      gradient: 'from-pink-300 to-pink-400',
      bgPattern: 'bg-gradient-to-br from-pink-50 to-pink-100',
      hoverBg: 'hover:bg-pink-50',
      hoverIconBg: 'group-hover/item:bg-pink-100',
      hoverIconColor: 'group-hover/item:text-pink-500',
      shadowColor: 'hover:shadow-pink-300/25'
    },
    {
      id: 3,
      title: 'Thời trang Trẻ em',
      icon: Baby,
      items: [
        { name: 'Áo thun bé trai', icon: Shirt, count: '980+' },
        { name: 'Váy bé gái', icon: Crown, count: '1.1k+' },
        { name: 'Quần short & Dài', icon: ShoppingBag, count: '850+' },
        { name: 'Giày thể thao trẻ em', icon: ShoppingBag, count: '720+' },
        { name: 'Đồ chơi giáo dục', icon: Gift, count: '1.5k+' },
        { name: 'Phụ kiện trẻ em', icon: Gift, count: '450+' }
      ],
      gradient: 'from-yellow-300 to-yellow-400',
      bgPattern: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
      hoverBg: 'hover:bg-yellow-50',
      hoverIconBg: 'group-hover/item:bg-yellow-100',
      hoverIconColor: 'group-hover/item:text-yellow-600',
      shadowColor: 'hover:shadow-yellow-300/25'
    },
    {
      id: 4,
      title: 'Phụ kiện & Làm đẹp',
      icon: Sparkles,
      items: [
        { name: 'Trang sức cao cấp', icon: Crown, count: '1.8k+' },
        { name: 'Đồng hồ thời trang', icon: Watch, count: '1.2k+' },
        { name: 'Kính mắt & Kính râm', icon: Crown, count: '950+' },
        { name: 'Mỹ phẩm & Skincare', icon: Sparkles, count: '2.3k+' },
        { name: 'Nước hoa & Dưỡng thể', icon: Gift, count: '780+' },
        { name: 'Phụ kiện tóc', icon: Crown, count: '650+' }
      ],
      gradient: 'from-purple-300 to-purple-400',
      bgPattern: 'bg-gradient-to-br from-purple-50 to-purple-100',
      hoverBg: 'hover:bg-purple-50',
      hoverIconBg: 'group-hover/item:bg-purple-100',
      hoverIconColor: 'group-hover/item:text-purple-500',
      shadowColor: 'hover:shadow-purple-300/25'
    }
  ];

  const maxIndex = Math.max(0, categories.length - itemsPerPage);

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
        <div className="inline-flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <ShoppingBag className="h-3 w-3 sm:h-5 sm:w-5 text-white" />
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            DANH MỤC SẢN PHẨM
          </h2>
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
            <Gift className="h-3 w-3 sm:h-5 sm:w-5 text-white" />
          </div>
        </div>
        <p className="text-gray-600 text-sm sm:text-lg mb-3 sm:mb-4">Khám phá các danh mục thời trang hot nhất</p>
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
      </div>

      {/* Categories Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 hover:shadow-xl hover:scale-110 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Previous categories"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 hover:shadow-xl hover:scale-110 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Next categories"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
        </button>

        {/* Categories Grid */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {categories.map((category) => {
              const IconComponent = category.icon;

              return (
                <div
                  key={category.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 pb-4"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                    {/* Category Header */}
                    <div className={`bg-gradient-to-r ${category.gradient} p-4 sm:p-6 text-white relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-white rounded-full"></div>
                        <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 sm:w-16 h-12 sm:h-16 bg-white rounded-full"></div>
                      </div>

                      <div className="relative z-10 text-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2">{category.title}</h3>
                        <div className="w-10 sm:w-12 h-1 bg-white/50 mx-auto rounded-full"></div>
                      </div>
                    </div>

                    {/* Category Items */}
                    <div className={`${category.bgPattern} p-4 sm:p-6`}>
                      <div className="grid grid-cols-1 gap-2 sm:gap-3">
                        {category.items.map((item) => {
                          const ItemIcon = item.icon;
                          return (
                            <button
                              key={item.name}
                              className={`flex items-center justify-between p-2.5 sm:p-3 bg-white rounded-lg sm:rounded-xl hover:shadow-md ${category.hoverBg} transition-all duration-200 hover:scale-105 group/item min-h-[44px] cursor-pointer`}
                            >
                              <div className="flex items-center space-x-2 sm:space-x-3">
                                <div className={`bg-gray-100 p-1.5 sm:p-2 rounded-md sm:rounded-lg ${category.hoverIconBg} transition-colors duration-200`}>
                                  <ItemIcon className={`h-3 w-3 sm:h-4 sm:w-4 text-gray-600 ${category.hoverIconColor}`} />
                                </div>
                                <span className="font-medium text-gray-800 text-xs sm:text-sm">{item.name}</span>
                              </div>
                              <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                                {item.count}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* View All Button */}
                      <button className={`w-full mt-3 sm:mt-4 py-2.5 sm:py-3 bg-gradient-to-r ${category.gradient} text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg ${category.shadowColor} transition-all duration-200 hover:scale-105 text-sm sm:text-base min-h-[44px] cursor-pointer`}>
                        Xem tất cả
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
};

export default CategorySection;
