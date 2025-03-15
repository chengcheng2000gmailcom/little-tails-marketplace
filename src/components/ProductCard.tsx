import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
  index: number;
}

const ProductCard = ({ name, description, price, image, tags, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden h-full opacity-0 animate-fade-up`}
      style={{ animationDelay: `${(index + 1) * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-square">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        ></div>
      </div>

      <div className="p-6">
        <div className="flex gap-2 mb-3">
          {tags.map((tag, i) => (
            <span key={i} className="badge badge-secondary text-xs">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="heading-sm mb-2">{name}</h3>

        <p className="text-foreground/70 mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <span className="text-lg font-semibold">{price}</span>

          <button
            className="btn-primary py-2 group"
            aria-label={`將 ${name} 加入購物車`}
          >
            <span className="mr-2">立即購買</span>
            <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
