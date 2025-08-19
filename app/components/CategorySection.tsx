'use client';

import { User, Users, Baby, ChevronLeft, ChevronRight, Shirt, ShoppingBag, Watch, Crown, Gift } from 'lucide-react';
import { useState } from 'react';

const CategorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      gradient: 'from-blue-500 to-blue-600',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-blue-100'
    },
    {
      id: 2,
      title: 'Thời trang Nữ',
      icon: Users,
      items: [
        { name: 'Váy & Đầm', icon: Crown, count: '3.2k+' },
        { name: 'Áo kiểu & Blouse', icon: Shirt, count: '2.8k+' },
        { name: 'Quần jean & Legging', icon: ShoppingBag, count: '2.1k+' },
        { name: 'Túi xách thời trang', icon: ShoppingBag, count: '1.9k+' },
        { name: 'Giày cao gót & Sandal', icon: Crown, count: '1.6k+' },
        { name: 'Trang sức & Phụ kiện', icon: Gift, count: '1.3k+' }
      ],
      gradient: 'from-pink-500 to-rose-500',
      bgPattern: 'bg-gradient-to-br from-pink-50 to-rose-100'
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
      gradient: 'from-green-500 to-emerald-500',
      bgPattern: 'bg-gradient-to-br from-green-50 to-emerald-100'
    }
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, categories.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <ShoppingBag className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            DANH MỤC SẢN PHẨM
          </h2>
          <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
            <Gift className="h-5 w-5 text-white" />
          </div>
        </div>
        <p className="text-gray-600 text-lg mb-4">Khám phá các danh mục thời trang hot nhất</p>
        <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
      </div>

      {/* Categories Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          aria-label="Previous categories"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          aria-label="Next categories"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
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
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                    {/* Category Header */}
                    <div className={`bg-gradient-to-r ${category.gradient} p-6 text-white relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full"></div>
                      </div>

                      <div className="relative z-10 text-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                        <div className="w-12 h-1 bg-white/50 mx-auto rounded-full"></div>
                      </div>
                    </div>

                    {/* Category Items */}
                    <div className={`${category.bgPattern} p-6`}>
                      <div className="grid grid-cols-1 gap-3">
                        {category.items.map((item) => {
                          const ItemIcon = item.icon;
                          return (
                            <button
                              key={item.name}
                              className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-all duration-200 hover:scale-105 group/item"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="bg-gray-100 p-2 rounded-lg group-hover/item:bg-green-100 transition-colors duration-200">
                                  <ItemIcon className="h-4 w-4 text-gray-600 group-hover/item:text-green-600" />
                                </div>
                                <span className="font-medium text-gray-800 text-sm">{item.name}</span>
                              </div>
                              <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                {item.count}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* View All Button */}
                      <button className={`w-full mt-4 py-3 bg-gradient-to-r ${category.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105`}>
                        Xem tất cả
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Show all categories in grid */}
        <div className="md:hidden mt-8 space-y-6">
          {categories.map((category) => {
            const IconComponent = category.icon;

            return (
              <div
                key={`mobile-${category.id}`}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.gradient} p-4 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-white rounded-full"></div>
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white rounded-full"></div>
                  </div>

                  <div className="relative z-10 flex items-center space-x-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>
                </div>

                {/* Category Items */}
                <div className={`${category.bgPattern} p-4`}>
                  <div className="grid grid-cols-1 gap-2">
                    {category.items.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <button
                          key={item.name}
                          className="flex items-center justify-between p-2.5 bg-white rounded-lg hover:shadow-md transition-all duration-200 text-left"
                        >
                          <div className="flex items-center space-x-2">
                            <div className="bg-gray-100 p-1.5 rounded-md">
                              <ItemIcon className="h-3 w-3 text-gray-600" />
                            </div>
                            <span className="font-medium text-gray-800 text-sm">{item.name}</span>
                          </div>
                          <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full">
                            {item.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* View All Button */}
                  <button className={`w-full mt-3 py-2.5 bg-gradient-to-r ${category.gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200`}>
                    Xem tất cả
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
