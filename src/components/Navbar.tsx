import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-sm custom-blur-bg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="relative z-10 flex items-center">
            <span className="font-display text-2xl font-bold text-foreground">小尾巴星球 Little Tails Planet ™</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
              產品
            </a>
            <a href="#benefits" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
              優點
            </a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
              關於我們
            </a>
            <a href="#contact" className="btn-primary">
              立即購買
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden z-10 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="切換選單"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-0 flex flex-col pt-24 px-4">
              <nav className="flex flex-col space-y-6">
                <a
                  href="#products"
                  className="text-xl font-medium text-foreground py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  產品
                </a>
                <a
                  href="#benefits"
                  className="text-xl font-medium text-foreground py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  優點
                </a>
                <a
                  href="#about"
                  className="text-xl font-medium text-foreground py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  關於我們
                </a>
                <a
                  href="#contact"
                  className="btn-primary mt-4 w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  立即購買
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
