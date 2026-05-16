import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "../lib/data";
import ProductCard from "../components/UI/ProductCard";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <main className="min-h-screen bg-luxury-black">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row min-h-[90vh] border-b border-white/10 pt-20 relative overflow-hidden">
        {/* Nature Highlight - Background Layer */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
             src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000&auto=format&fit=crop"
             className="w-full h-full object-cover grayscale"
             alt=""
          />
        </div>

        <div className="flex-1 lg:flex-[1.2] p-8 md:p-20 flex flex-col justify-center border-r border-white/10 relative z-10">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pill-tag w-fit"
          >
            Botanical Series 24'
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-[120px] leading-[0.85] serif uppercase tracking-tighter my-8"
          >
            Earth<br /><span className="italic lowercase tracking-normal">Whispers</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-md text-sm md:text-base opacity-60 leading-relaxed mb-12"
          >
            A deep connection to the wild. Monochromatic olfactory journeys through cold forest extractions. Notes of moss, silver cedar, and damp earth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/shop" className="btn-luxury">
              Purchase Experience
            </Link>
          </motion.div>
          
          <div className="mt-20 flex gap-12 border-t border-white/5 pt-10">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Origin</span>
              <span className="text-sm tracking-wide">Cairo, EG</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Intensity</span>
              <span className="text-sm tracking-wide">Parfum Extrait</span>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 bg-luxury-deep">
          {featured.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Fill the 4th spot with a "Shop All" card if needed */}
          {featured.length < 4 && (
            <div className="p-8 border-b border-white/10 flex flex-col justify-between bg-luxury-white text-luxury-black">
              <div>
                <span className="pill-tag border-black/20 text-black/60">Curated</span>
                <h3 className="text-xl serif italic leading-tight mt-4">Browse Entire<br />Collection</h3>
              </div>
              <Link to="/shop" className="text-[12px] font-bold tracking-widest uppercase flex items-center group">
                View 24 Oils 
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Marquee Text */}
      <section className="py-16 overflow-hidden border-b border-white/10 bg-luxury-black">
        <div className="flex whitespace-nowrap">
           <div className="animate-marquee flex items-center">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-4xl md:text-6xl serif uppercase tracking-[0.2em] mx-10 opacity-20 hover:opacity-100 transition-opacity cursor-default">
                Aroma Lab <span className="italic opacity-50 px-10">Essential Extracts</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="aspect-square bg-zinc-900 border border-white/10 overflow-hidden"
             >
                <img
                  src="https://images.unsplash.com/photo-1615484477201-9f4953340fab?q=80&w=1000&auto=format&fit=crop"
                  alt="Laboratory"
                  className="w-full h-full object-cover grayscale opacity-50"
                />
             </motion.div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-luxury-deep border border-white/10 p-8 hidden md:block">
                <p className="text-sm serif italic opacity-70 leading-relaxed">
                  "Scent is the most powerful time machine ever invented."
                </p>
                <div className="mt-6 text-[9px] uppercase tracking-widest opacity-40">
                  — The Alchemist
                </div>
             </div>
          </div>

          <div className="space-y-12">
             <h2 className="text-5xl md:text-7xl serif leading-[0.9]">Molecular <br/><span className="italic lowercase tracking-normal text-luxury-white/60">Storytelling</span></h2>
             <p className="text-lg opacity-60 leading-relaxed max-w-xl">
               We utilize cold-pressed extraction methods to preserve the raw, primal essence of each botanical. Every creation is aged for three moon cycles before being hand-poured into our signature monochromatic vessels.
             </p>
             <Link to="/about" className="btn-luxury inline-block bg-transparent border border-white/20 text-luxury-white hover:bg-white hover:text-black">
                Our Heritage
             </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
