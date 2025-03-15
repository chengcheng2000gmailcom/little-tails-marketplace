import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('animate-fade-up');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        elements.forEach(el => observerRef.current?.unobserve(el));
      }
    };
  }, []);

  const products = [
    {
      name: "海洋之味",
      description: "以野生三文魚、吞拿魚和蝦製成的海鮮大餐。富含 Omega-3 脂肪酸，有助於毛髮和腦部發展。",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1604186838347-9faaf0b83be8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      tags: ["海鮮", "無穀物"]
    },
    {
      name: "鄉村雞肉",
      description: "優質放養雞肉配以有機蔬菜和必需營養。特別適合腸胃敏感的貓咪。",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      tags: ["雞肉", "有機"]
    },
    {
      name: "美味野味",
      description: "精選鹿肉和兔肉配以蔓越莓和菠菜。高蛋白質含量，適合活躍的貓咪。",
      price: "$27.99",
      image: "https://images.unsplash.com/photo-1585584114963-503344a119b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      tags: ["野味", "高蛋白"]
    }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      <Navbar />
      <Hero />

      <section id="products" className="py-20">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <span className="badge badge-primary mb-4">我們的產品</span>
            <h2 className="heading-lg mb-6">您的貓咪會喜愛的美味之選</h2>
            <p className="text-foreground/80">
              每一款配方都經過精心調配，在提供均衡營養的同時，滿足您貓咪挑剔的味蕾。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Benefits />

      <section id="about" className="py-20 overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <span className="badge badge-primary mb-4">我們的故事</span>
              <h2 className="heading-lg mb-6">對完美的追求</h2>
              <p className="text-foreground/80 mb-4">
                小尾巴星球 Little Tails Planet ™ 源於一群貓咪營養師的愛心之作，他們相信我們的貓咪夥伴應該享有與人類同等用心準備的食物。
              </p>
              <p className="text-foreground/80 mb-4">
                我們精心挑選的食材不僅美味，更提供貓咪在各個生命階段所需的完美營養平衡。
              </p>
              <p className="text-foreground/80 mb-6">
                我們對品質的承諾意味著絕不使用填充物、人工防腐劑或可疑成分—每一口都是純淨、完整的營養。
              </p>
              <a href="#products" className="btn-primary">
                瀏覽產品
              </a>
            </div>

            <div className="relative animate-on-scroll opacity-0">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                  alt="橙白相間的貓咪享用小尾巴星球 Little Tails Planet ™ 貓糧"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="font-display text-lg italic text-foreground/80">
                  "我們相信每隻貓咪都應該享有與人類食品同等用心和品質的營養。"
                </p>
                <div className="mt-3">
                  <span className="font-semibold">— 陳博士，創辦人</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
