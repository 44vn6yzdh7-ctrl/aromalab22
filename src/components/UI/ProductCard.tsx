import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { type Product } from "../../lib/data";
import { useCart } from "../../context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    navigate("/cart");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="group p-8 border-b border-r border-white/10 flex flex-col justify-between bg-luxury-deep"
    >
      <div>
        <span className="pill-tag">{product.category}</span>
        <div className="relative aspect-[3/4] overflow-hidden mb-8">
           <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110"
          />
        </div>
        <h3 className="text-xl serif italic mb-2 tracking-wide group-hover:not-italic transition-all duration-500">
          {product.name}
        </h3>
        <p className="text-[11px] uppercase tracking-widest opacity-50 mb-6">
          {product.notes.join(", ")}
        </p>
      </div>
      <div className="flex justify-between items-end">
        <div className="text-2xl font-light">
          {product.price.toLocaleString()} <span className="text-xs uppercase opacity-50">EGP</span>
        </div>
        <button 
          onClick={handleAddToCart}
          className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-white/30 pb-1 hover:border-white transition-colors"
        >
          Add To Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
