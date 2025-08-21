import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CategorySection from './components/CategorySection';
import HotDealsSection from './components/HotDealsSection';
import ProductSection from './components/ProductSection';
import BrandSection from './components/BrandSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header với navigation */}
      <Header />

      {/* Main Content */}
      <main className="space-y-8">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Category Section */}
        <CategorySection />

        {/* Hot Deals Section */}
        <HotDealsSection />

        {/* Product Sections */}
        <ProductSection
          title="VỪA MỚI ĐĂNG"
          subtitle="Xem tất cả"
        />

        <ProductSection
          title="XEM NHIỀU NHẤT"
          subtitle="Xem tất cả"
        />

        {/* Brand Section */}
        <BrandSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
