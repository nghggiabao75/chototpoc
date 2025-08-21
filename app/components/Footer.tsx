'use client';

import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Công ty',
      links: [
        { label: 'Về chúng tôi', href: '#' },
        { label: 'Tuyển dụng', href: '#' },
        { label: 'Liên hệ', href: '#' }
      ]
    },
    {
      title: 'Hỗ trợ',
      links: [
        { label: 'Hướng dẫn mua hàng', href: '#' },
        { label: 'Chính sách đổi trả', href: '#' },
        { label: 'Chính sách bảo mật', href: '#' }
      ]
    },
    {
      title: 'Danh mục',
      links: [
        { label: 'Thời trang nam', href: '#' },
        { label: 'Thời trang nữ', href: '#' },
        { label: 'Trẻ em', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { name: 'Youtube', icon: Youtube, href: '#', color: 'hover:text-red-400' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-2xl font-bold text-green-600 mb-4 cursor-pointer hover:text-green-700 transition-colors duration-200">
                LOGO
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
                Nền tảng thương mại điện tử hàng đầu Việt Nam, mang đến trải nghiệm mua sắm tuyệt vời.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-4 w-4 text-green-600" />
                  </div>
                  <span>1900 1234</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-4 w-4 text-green-600" />
                  </div>
                  <span>support@example.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-green-600" />
                  </div>
                  <span>123 Đường ABC, Quận 1, TP.HCM</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-200 cursor-pointer hover:scale-110`}
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-500">
            <div className="mb-2 md:mb-0">
              © 2025
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-green-600 transition-colors duration-200 cursor-pointer">
                Điều khoản
              </a>
              <a href="#" className="hover:text-green-600 transition-colors duration-200 cursor-pointer">
                Bảo mật
              </a>
              <a href="#" className="hover:text-green-600 transition-colors duration-200 cursor-pointer">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
