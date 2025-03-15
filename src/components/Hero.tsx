import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cream-light/80 via-cream/50 to-cream-light/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=3200&q=80')] bg-cover bg-center opacity-20 z-0"></div>
      </div>

      <div className="section-container relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="opacity-0 animate-fade-down animate-delay-100">
            <span className="badge badge-primary mb-6">優質貓糧營養</span>
          </div>

          <h1 className="heading-xl mb-6 opacity-0 animate-fade-up animate-delay-200">
            為您的愛貓精心打造的 <span className="text-brand-dark">完美營養</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animate-delay-300">
            為您的貓咪提供精心調配的美味貓糧。以愛心、科學和優質食材製作而成。
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-up animate-delay-400">
            <a href="#products" className="btn-primary">
              瀏覽產品
            </a>
            <a href="#benefits" className="btn-outline">
              了解優點
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animate-delay-1000">
        <a href="#products" className="inline-flex flex-col items-center text-foreground/70 hover:text-foreground transition-colors">
          <span className="text-sm font-medium mb-2">向下滾動以了解更多</span>
          <ArrowDown className="w-5 h-5 animate-float" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
