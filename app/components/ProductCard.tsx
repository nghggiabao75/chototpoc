'use client';

import { Star, MapPin, Shield, Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price?: number;
    originalPrice?: number;
    salePrice?: number;
    discount?: number;
    image?: string;
    rating: number;
    sold: number;
    location?: string;
    isVerified?: boolean;
    isFreeShipping?: boolean;
  };
  showDiscount?: boolean;
}

const ProductCard = ({ product, showDiscount = false }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-3 w-3 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-3 w-3 text-gray-300" />
      );
    }

    return stars;
  };

  const displayPrice = product.salePrice || product.price || 0;
  const originalPrice = product.originalPrice || product.price || 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        {/* Image Placeholder */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-full flex items-center justify-center">
          <div className="text-gray-500 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <div className="w-8 h-8 bg-green-500 rounded opacity-20"></div>
            </div>
            <p className="text-xs font-medium">Hình ảnh sản phẩm</p>
          </div>
        </div>

        {/* Discount Badge */}
        {showDiscount && product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold shadow-sm">
            -{product.discount}%
          </div>
        )}

        {/* Verified Badge */}
        {product.isVerified && (
          <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full shadow-sm">
            <Shield className="h-3 w-3" />
          </div>
        )}

        {/* Free Shipping Badge */}
        {product.isFreeShipping && (
          <div className="absolute bottom-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
            Miễn phí vận chuyển
          </div>
        )}

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <Heart 
            className={`h-4 w-4 transition-colors duration-200 ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
            }`} 
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-3">
        {/* Product Title */}
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 text-sm leading-relaxed">
          {product.title}
        </h3>
        
        {/* Price Section */}
        <div className="mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-green-600">
              {formatPrice(displayPrice)}
            </span>
            {showDiscount && product.originalPrice && product.salePrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Rating and Sales */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-1">
            <div className="flex items-center space-x-0.5">
              {renderStars(product.rating)}
            </div>
            <span className="text-xs text-gray-600">({product.rating})</span>
          </div>
          <span className="text-xs text-gray-500">Đã bán {product.sold}</span>
        </div>

        {/* Location */}
        {product.location && (
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <MapPin className="h-3 w-3" />
            <span>{product.location}</span>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="flex items-center space-x-2 mt-2">
          {product.isVerified && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
              <Shield className="h-3 w-3 mr-1" />
              Đã xác thực
            </span>
          )}
          {product.isFreeShipping && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
              Freeship
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
