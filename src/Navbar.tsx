import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Cart", path: "/cart" },
    { name: "Collections", path: "#" },
    { name: "About", path: "#" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-12 bg-luxury-black/60 backdrop-blur-md border-b border-white/5",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-luxury-white"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl serif uppercase tracking-[0.3em] font-bold text-luxury-white"
        >
          Aroma Lab
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-[11px] uppercase tracking-[0.1em] transition-opacity hover:opacity-100",
                location.pathname === link.path ? "opacity-100" : "opacity-60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Link
            to="/cart"
            className="text-luxury-white opacity-60 hover:opacity-100 transition-opacity relative"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] tracking-widest">
              {itemCount}
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] bg-luxury-white dark:bg-luxury-black z-50 p-8 flex flex-col justify-between md:hidden"
            >
              <div>
                <div className="flex justify-between items-center mb-16">
                  <span className="text-xl serif uppercase tracking-widest">Aroma Lab</span>
                  <button onClick={() => setIsOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
                <div className="flex flex-col space-y-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-2xl serif italic tracking-wide"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-8 border-t border-luxury-black/10 dark:border-luxury-white/10 text-xs uppercase tracking-widest opacity-60">
                Cairo, Egypt
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
