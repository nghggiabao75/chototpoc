'use client';

import { Mail, Phone, MapPin, Globe, MessageCircle, Share2, Video } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Về Chúng Tôi',
      links: [
        { label: 'Giới thiệu', href: '#' },
        { label: 'Tuyển dụng', href: '#' },
        { label: 'Tin tức', href: '#' },
        { label: 'Liên hệ', href: '#' }
      ]
    },
    {
      title: 'Hỗ Trợ Khách Hàng',
      links: [
        { label: 'Hướng dẫn mua hàng', href: '#' },
        { label: 'Chính sách đổi trả', href: '#' },
        { label: 'Chính sách bảo mật', href: '#' },
        { label: 'Điều khoản sử dụng', href: '#' }
      ]
    },
    {
      title: 'Danh Mục',
      links: [
        { label: 'Thời trang nam', href: '#' },
        { label: 'Thời trang nữ', href: '#' },
        { label: 'Thời trang trẻ em', href: '#' },
        { label: 'Phụ kiện', href: '#' }
      ]
    },
    {
      title: 'Kết Nối Với Chúng Tôi',
      links: [
        { label: 'Facebook', href: '#', icon: Globe },
        { label: 'Instagram', href: '#', icon: MessageCircle },
        { label: 'Twitter', href: '#', icon: Share2 },
        { label: 'Youtube', href: '#', icon: Video }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-2xl font-bold text-red-500 mb-4">
                LOGO
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nền tảng thương mại điện tử hàng đầu Việt Nam, chuyên cung cấp 
                các sản phẩm thời trang chất lượng cao với giá cả hợp lý.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  123 Đường ABC, Quận 1, TP. Hồ Chí Minh
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Hotline: 1900 1234
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  support@example.com
                </span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => {
                  const IconComponent = 'icon' in link ? link.icon : null;

                  return (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm flex items-center space-x-2"
                      >
                        {IconComponent && <IconComponent className="h-4 w-4" />}
                        <span>{link.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
            <h3 className="text-lg font-semibold mb-4">
              Đăng Ký Nhận Tin Khuyến Mãi
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors duration-200">
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Your Company Name. Tất cả quyền được bảo lưu.
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Phương thức thanh toán:</span>
              <div className="flex space-x-2">
                {['VISA', 'MC', 'MOMO', 'VNPAY'].map((method) => (
                  <div
                    key={method}
                    className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
