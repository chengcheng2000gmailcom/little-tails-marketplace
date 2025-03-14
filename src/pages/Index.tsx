
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
      name: "Ocean's Delight",
      description: "A seafood medley crafted with wild-caught salmon, tuna, and shrimp. Rich in omega-3 fatty acids for a healthy coat and brain development.",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1604186838347-9faaf0b83be8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      tags: ["Seafood", "Grain-Free"]
    },
    {
      name: "Countryside Chicken",
      description: "Premium free-range chicken blended with organic vegetables and essential nutrients. Perfect for cats with sensitive digestion.",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      tags: ["Chicken", "Organic"]
    },
    {
      name: "Gourmet Game",
      description: "An exquisite blend of venison and rabbit with cranberries and spinach. High protein content for active cats.",
      price: "$27.99",
      image: "https://images.unsplash.com/photo-1585584114963-503344a119b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      tags: ["Game Meat", "High-Protein"]
    }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      <Navbar />
      <Hero />
      
      <section id="products" className="py-20">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <span className="badge badge-primary mb-4">Our Products</span>
            <h2 className="heading-lg mb-6">Gourmet Selections Your Cat Will Adore</h2>
            <p className="text-foreground/80">
              Each recipe is thoughtfully crafted to provide balanced nutrition while delighting your cat's discerning palate.
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
              <span className="badge badge-primary mb-4">Our Story</span>
              <h2 className="heading-lg mb-6">Passionate About Purr-fection</h2>
              <p className="text-foreground/80 mb-4">
                Little Tails Planet began as a labor of love by cat nutritionists who believed our feline friends deserve food that's as thoughtfully prepared as our own.
              </p>
              <p className="text-foreground/80 mb-4">
                We meticulously source ingredients that are not only delicious but provide the perfect balance of nutrients that cats need to thrive at every stage of life.
              </p>
              <p className="text-foreground/80 mb-6">
                Our commitment to quality means no fillers, artificial preservatives, or questionable ingredients—just pure, wholesome nutrition in every bite.
              </p>
              <a href="#products" className="btn-primary">
                Explore Our Products
              </a>
            </div>
            
            <div className="relative animate-on-scroll opacity-0">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="Orange and white cat enjoying Little Tails Planet food" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="font-display text-lg italic text-foreground/80">
                  "We believe every cat deserves nutrition crafted with the same care and quality as human food."
                </p>
                <div className="mt-3">
                  <span className="font-semibold">— Dr. Emily Chen, Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 bg-brand-light">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll opacity-0">
            <span className="badge badge-primary mb-4">Stay Connected</span>
            <h2 className="heading-lg mb-6">Join the Little Tails Family</h2>
            <p className="text-foreground/80 mb-8">
              Subscribe to receive exclusive offers, nutrition tips, and be the first to know about new products.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button 
                  type="submit" 
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-foreground/60 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
