import { useState } from "react";
import { motion } from "motion/react";
import { products } from "../lib/data";
import ProductCard from "../components/UI/ProductCard";
import { Search, Filter } from "lucide-react";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const categories = ["all", "floral", "woody", "oriental", "fresh"];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="pt-40 min-h-screen px-4 md:px-12 pb-32 bg-luxury-black text-luxury-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 space-y-4">
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] opacity-40"
          >
            Laboratory / Shop
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl serif italic leading-none"
          >
            The <span className="not-italic uppercase tracking-tighter">Collection</span>
          </motion.h1>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-0 border-t border-white/10 py-10">
          <div className="flex flex-wrap gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] uppercase tracking-[0.2em] transition-all relative pb-2 ${
                  activeCategory === cat ? "opacity-100 font-bold underline underline-offset-4" : "opacity-40 hover:opacity-70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-12 w-full md:w-auto">
            <div className="relative flex-1 md:w-64 border-b border-white/10 pb-2">
              <input 
                type="text" 
                placeholder="SEARCH..." 
                className="w-full bg-transparent text-[11px] focus:outline-none placeholder:opacity-30 tracking-widest uppercase"
              />
              <Search size={14} className="absolute right-0 top-0 opacity-40" />
            </div>
          </div>
        </div>

        {/* Grid - No gap, borders from cards will create the grid lines */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Empty cells to complete the grid visually if needed */}
          {[...Array(3 - (filteredProducts.length % 3 || 3))].map((_, i) => (
            <div key={`empty-${i}`} className="border-b border-r border-white/10 bg-luxury-deep" />
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-40 text-center opacity-40 italic serif text-2xl">
            No scents found in this category.
          </div>
        )}
      </div>
    </main>
  );
}
