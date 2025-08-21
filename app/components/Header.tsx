'use client';

import { Search, User, Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Mock dropdown data
  const dropdownData = {
    'nam': {
      categories: [
        { name: 'Áo thun', href: '#', items: ['Áo thun cổ tròn', 'Áo thun polo', 'Áo thun dài tay'] },
        { name: 'Quần', href: '#', items: ['Quần jean', 'Quần kaki', 'Quần short'] },
        { name: 'Áo sơ mi', href: '#', items: ['Sơ mi công sở', 'Sơ mi casual', 'Sơ mi dài tay'] },
        { name: 'Phụ kiện', href: '#', items: ['Thắt lưng', 'Ví nam', 'Đồng hồ'] }
      ]
    },
    'nu': {
      categories: [
        { name: 'Váy đầm', href: '#', items: ['Váy công sở', 'Váy dạ hội', 'Đầm maxi'] },
        { name: 'Áo kiểu', href: '#', items: ['Áo sơ mi nữ', 'Áo blouse', 'Áo croptop'] },
        { name: 'Quần nữ', href: '#', items: ['Quần jean nữ', 'Quần tây', 'Legging'] },
        { name: 'Phụ kiện', href: '#', items: ['Túi xách', 'Trang sức', 'Giày cao gót'] }
      ]
    },
    'tre-em': {
      categories: [
        { name: 'Bé trai', href: '#', items: ['Áo thun bé trai', 'Quần short', 'Đồ bộ'] },
        { name: 'Bé gái', href: '#', items: ['Váy bé gái', 'Áo kiểu', 'Đầm công chúa'] },
        { name: 'Sơ sinh', href: '#', items: ['Body suit', 'Áo liền quần', 'Phụ kiện em bé'] },
        { name: 'Giày dép', href: '#', items: ['Giày thể thao', 'Sandal', 'Dép'] }
      ]
    },
    'chuyen-muc': {
      categories: [
        { name: 'Thể thao', href: '#', items: ['Đồ gym', 'Đồ bơi', 'Giày thể thao'] },
        { name: 'Công sở', href: '#', items: ['Vest', 'Áo sơ mi', 'Giày tây'] },
        { name: 'Dạo phố', href: '#', items: ['Áo hoodie', 'Sneaker', 'Túi đeo chéo'] },
        { name: 'Dự tiệc', href: '#', items: ['Đầm dạ hội', 'Vest nam', 'Phụ kiện sang trọng'] }
      ]
    },
    'thuong-hieu-viet': {
      categories: [
        { name: 'Thời trang', href: '#', items: ['Canifa', 'IVY moda', 'Routine'] },
        { name: 'Giày dép', href: '#', items: ['Biti\'s', 'Ananas', 'Juno'] },
        { name: 'Phụ kiện', href: '#', items: ['Saigon Bags', 'Lyn Around', 'Maison'] },
        { name: 'Mỹ phẩm', href: '#', items: ['Cocoon', 'Thorakao', 'Hasaki'] }
      ]
    },
    'dich-vu': {
      categories: [
        { name: 'Giao hàng', href: '#', items: ['Giao hàng nhanh', 'Giao hàng tiết kiệm', 'Giao hàng COD'] },
        { name: 'Thanh toán', href: '#', items: ['Ví điện tử', 'Thẻ tín dụng', 'Trả góp'] },
        { name: 'Hỗ trợ', href: '#', items: ['Chăm sóc khách hàng', 'Đổi trả', 'Bảo hành'] },
        { name: 'Khác', href: '#', items: ['Tích điểm', 'Ưu đãi thành viên', 'Gift card'] }
      ]
    }
  };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Header */}
        <div className="md:hidden">
          {/* Top Row: Menu + Logo + User */}
          <div className="flex items-center justify-between h-14">
            <button
              className="p-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="text-xl font-bold text-green-600 cursor-pointer hover:text-green-700 transition-colors duration-200">
              LOGO
            </div>

            <button className="p-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center">
              <User className="h-5 w-5" />
            </button>
          </div>

          {/* Bottom Row: Search Bar */}
          <div className="pb-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="block w-full pl-10 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:grid grid-cols-3 items-center h-16 gap-4">
          {/* Left Section - Search */}
          <div className="flex items-center">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="block w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 min-h-[40px]"
                />
              </div>
            </div>
          </div>

          {/* Center Section - Logo */}
          <div className="flex justify-center">
            <div className="text-2xl font-bold text-green-600 cursor-pointer hover:text-green-700 transition-colors duration-200">
              LOGO
            </div>
          </div>

          {/* Right Section - Auth */}
          <div className="flex items-center justify-end space-x-4">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer">
              <span className="text-sm">Đăng ký</span>
            </button>
            <span className="text-gray-300">|</span>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer">
              <span className="text-sm">Đăng nhập</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 py-4 justify-center">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 text-sm font-medium transition-all duration-200 flex items-center cursor-pointer rounded-lg"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${hoveredItem === item.id ? 'rotate-180' : ''}`} />
                  )}
                </a>

                {/* Green underline for active/hover state */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>

                {/* Dropdown Menu */}
                {item.hasDropdown && hoveredItem === item.id && dropdownData[item.id as keyof typeof dropdownData] && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {dropdownData[item.id as keyof typeof dropdownData].categories.map((category, index) => (
                          <div key={index} className="space-y-2">
                            <h3 className="font-semibold text-gray-900 text-sm border-b border-gray-100 pb-2">
                              {category.name}
                            </h3>
                            <ul className="space-y-1">
                              {category.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <a
                                    href="#"
                                    className="text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 px-2 py-1 rounded transition-colors duration-200 block cursor-pointer"
                                  >
                                    {subItem}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-3 border-t border-gray-200 bg-white">
              <div className="space-y-1 px-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    className="block w-full text-left px-3 py-2.5 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium cursor-pointer text-sm"
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
