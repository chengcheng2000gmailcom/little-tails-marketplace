
import { Heart, Award, Leaf, ShieldCheck } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-brand" />,
      title: "Crafted with Love",
      description: "Every batch is made with care and attention to detail, just like you would for your own family."
    },
    {
      icon: <Award className="w-8 h-8 text-brand" />,
      title: "Premium Ingredients",
      description: "We source only the highest quality ingredients, ensuring optimal nutrition and flavor."
    },
    {
      icon: <Leaf className="w-8 h-8 text-brand" />,
      title: "Sustainably Sourced",
      description: "Our ingredients are responsibly sourced to minimize environmental impact and support ethical practices."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand" />,
      title: "Nutritionist Approved",
      description: "Formulated by feline nutrition experts to meet all your cat's dietary needs for a healthy life."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-cream">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-primary mb-4">Why Choose Us</span>
          <h2 className="heading-lg mb-6">Exceptional Nutrition for Extraordinary Companions</h2>
          <p className="text-foreground/80">
            We believe your feline friend deserves nothing but the best. Our premium cat food is crafted with uncompromising quality and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-light">
                {benefit.icon}
              </div>
              <h3 className="heading-sm mb-3">{benefit.title}</h3>
              <p className="text-foreground/70">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center opacity-0 animate-fade-up" style={{ animationDelay: '600ms' }}>
          <div className="inline-block bg-white px-8 py-6 rounded-xl shadow-sm">
            <p className="font-display text-xl italic text-foreground/80 max-w-2xl">
              "Little Tails Planet transformed my picky eater into an enthusiastic diner. My cat now sits by his bowl waiting for mealtime!"
            </p>
            <div className="mt-4">
              <span className="font-semibold">— Sarah & Mr. Whiskers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
