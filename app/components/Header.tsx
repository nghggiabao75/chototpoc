'use client';

import { Search, User, Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'nam', label: 'Nam', href: '#', hasDropdown: true },
    { id: 'nu', label: 'Nữ', href: '#', hasDropdown: true },
    { id: 'tre-em', label: 'Trẻ em', href: '#', hasDropdown: true },
    { id: 'chuyen-muc', label: 'Chuyên mục', href: '#', hasDropdown: true },
    { id: 'thuong-hieu-viet', label: 'Thương hiệu Việt', href: '#', hasDropdown: true },
    { id: 'dich-vu', label: 'Dịch vụ', href: '#', hasDropdown: true },
  ];

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Search Bar - Mobile */}
          <div className="flex-1 md:hidden mx-2 sm:mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="block w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 min-h-[40px]"
              />
            </div>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-xl sm:text-2xl font-bold text-green-600">
              ChợTốt
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Auth Links */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors">
              <User className="h-5 w-5" />
              <span className="text-sm">Đăng ký</span>
            </button>
            <span className="hidden sm:inline text-gray-300">|</span>
            <button className="hidden sm:flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors">
              <span className="text-sm">Đăng nhập</span>
            </button>
            
            {/* Mobile auth */}
            <button className="sm:hidden p-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 py-4">
            {navigationItems.map((item) => (
              <div key={item.id} className="relative group">
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </a>
                {/* Green underline for active/hover state */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
              </div>
            ))}
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200 bg-white">
              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200 min-h-[48px] font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
