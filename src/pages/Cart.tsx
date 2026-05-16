import { motion } from "motion/react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Trash2, ArrowLeft } from "lucide-react";

export default function Cart() {
  const { cart, removeFromCart, total, itemCount } = useCart();

  return (
    <main className="pt-40 min-h-screen px-4 md:px-12 pb-32 bg-luxury-black text-luxury-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Top Left Checkout Button */}
        {cart.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <button className="btn-luxury">
              Checkout Now
            </button>
          </motion.div>
        )}

        {/* Header */}
        <div className="mb-20 space-y-4">
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] opacity-40"
          >
            Laboratory / Cart
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl serif italic leading-none"
          >
            Your <span className="not-italic uppercase tracking-tighter">Selection</span>
          </motion.h1>
        </div>

        {cart.length === 0 ? (
          <div className="py-40 text-center space-y-8">
            <p className="italic serif text-2xl opacity-40">Your olfactory journey begins with a selection.</p>
            <Link to="/shop" className="btn-luxury inline-block">
              Browse Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-12">
              {cart.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col md:flex-row gap-8 pb-12 border-b border-white/10 group"
                >
                  <div className="w-full md:w-48 aspect-[3/4] overflow-hidden bg-luxury-deep">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl serif italic tracking-wide">{item.name}</h3>
                        <p className="text-xl font-light">{item.price.toLocaleString()} EGP</p>
                      </div>
                      <p className="text-[11px] uppercase tracking-[0.2em] opacity-40 mb-2">{item.collection}</p>
                      <p className="text-sm opacity-60 max-w-md line-clamp-2">{item.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-8">
                      <div className="text-[10px] uppercase tracking-widest bg-white/5 px-4 py-2 border border-white/10">
                        Qty: {item.quantity}
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-white/40 hover:text-white transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <Link to="/shop" className="inline-flex items-center text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity pt-8">
                <ArrowLeft size={14} className="mr-2" />
                Continue Exploring
              </Link>
            </div>

            {/* Summary */}
            <div className="relative">
              <div className="sticky top-40 space-y-10 bg-luxury-deep p-10 border border-white/10">
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold">Summary</h2>
                <div className="space-y-6 text-sm">
                  <div className="flex justify-between opacity-60">
                    <span>Items ({itemCount})</span>
                    <span>{total.toLocaleString()} EGP</span>
                  </div>
                  <div className="flex justify-between opacity-60">
                    <span>Shipping</span>
                    <span className="uppercase tracking-widest text-[10px]">Complimentary</span>
                  </div>
                  <div className="h-[1px] bg-white/10 my-6"></div>
                  <div className="flex justify-between text-lg">
                    <span className="serif italic">Total</span>
                    <span className="font-bold">{total.toLocaleString()} EGP</span>
                  </div>
                </div>
                
                <div className="pt-10">
                   <button className="w-full btn-luxury">
                     Proceed to Checkout
                   </button>
                </div>
                
                <p className="text-[9px] uppercase tracking-[0.2em] opacity-30 text-center leading-relaxed">
                  Taxes and shipping calculated at checkout. Secured olfactory transactions.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
