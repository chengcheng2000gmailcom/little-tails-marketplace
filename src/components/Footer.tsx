import { ArrowUp, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-foreground text-cream-light">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl font-bold mb-4">小尾巴星球 Little Tails Planet ™</h2>
            <p className="text-cream-light/80 mb-6 max-w-md">
              致力為您的特別貓咪夥伴創造優質營養。用愛製作的優質貓糧。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">快速連結</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-cream-light/80 hover:text-cream-light transition-colors">我們的故事</a></li>
              <li><a href="#products" className="text-cream-light/80 hover:text-cream-light transition-colors">產品</a></li>
              <li><a href="#benefits" className="text-cream-light/80 hover:text-cream-light transition-colors">優點</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">聯絡我們</h3>
            <ul className="space-y-3">
              <li className="text-cream-light/80">hi@littletailsplanet.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream-light/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-light/60 text-sm">
            © {new Date().getFullYear()} 小尾巴星球 Little Tails Planet ™
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <a href="#" className="text-cream-light/60 hover:text-cream-light text-sm transition-colors">私隱政策</a>
            <a href="#" className="text-cream-light/60 hover:text-cream-light text-sm transition-colors">服務條款</a> */}
          </div>
          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-cream-light/10 hover:bg-cream-light/20 transition-colors"
            aria-label="回到頂部"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
