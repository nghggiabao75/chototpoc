'use client';

interface LoadingSkeletonProps {
  type?: 'product' | 'banner' | 'category';
  count?: number;
}

const LoadingSkeleton = ({ type = 'product', count = 4 }: LoadingSkeletonProps) => {
  const ProductSkeleton = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="aspect-square bg-gray-200"></div>
      
      {/* Content Skeleton */}
      <div className="p-3 space-y-3">
        {/* Title */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        
        {/* Price */}
        <div className="h-5 bg-gray-200 rounded w-1/3"></div>
        
        {/* Rating and Sales */}
        <div className="flex justify-between">
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
        
        {/* Location */}
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );

  const BannerSkeleton = () => (
    <div className="bg-gray-200 rounded-lg h-64 md:h-80 lg:h-96 animate-pulse"></div>
  );

  const CategorySkeleton = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      {/* Header */}
      <div className="bg-gray-300 p-4">
        <div className="flex items-center justify-center space-x-2">
          <div className="bg-gray-200 rounded-full w-8 h-8"></div>
          <div className="h-5 bg-gray-200 rounded w-16"></div>
        </div>
      </div>
      
      {/* Items */}
      <div className="bg-gray-200 p-4 space-y-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-4 bg-gray-300 rounded w-full"></div>
        ))}
      </div>
    </div>
  );

  const renderSkeleton = () => {
    switch (type) {
      case 'banner':
        return <BannerSkeleton />;
      case 'category':
        return <CategorySkeleton />;
      default:
        return <ProductSkeleton />;
    }
  };

  if (type === 'banner') {
    return renderSkeleton();
  }

  return (
    <div className={`grid gap-4 ${
      type === 'category' 
        ? 'grid-cols-1 md:grid-cols-3' 
        : 'grid-cols-2 md:grid-cols-4'
    }`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
