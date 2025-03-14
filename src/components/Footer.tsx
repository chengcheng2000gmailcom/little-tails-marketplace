
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
            <h2 className="font-display text-2xl font-bold mb-4">Little Tails Planet</h2>
            <p className="text-cream-light/80 mb-6 max-w-md">
              Devoted to creating exceptional nutrition for your extraordinary feline companions. Premium cat food made with love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-cream-light/80 hover:text-cream-light transition-colors">Our Story</a></li>
              <li><a href="#products" className="text-cream-light/80 hover:text-cream-light transition-colors">Products</a></li>
              <li><a href="#benefits" className="text-cream-light/80 hover:text-cream-light transition-colors">Benefits</a></li>
              <li><a href="#" className="text-cream-light/80 hover:text-cream-light transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-cream-light/80">support@littletailsplanet.com</li>
              <li className="text-cream-light/80">1-800-CAT-FOOD</li>
              <li className="text-cream-light/80">123 Whisker Lane<br />Purrington, CA 90210</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream-light/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-light/60 text-sm">
            © {new Date().getFullYear()} Little Tails Planet. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-cream-light/60 hover:text-cream-light text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-cream-light/60 hover:text-cream-light text-sm transition-colors">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop} 
            className="mt-6 md:mt-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-cream-light/10 hover:bg-cream-light/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
