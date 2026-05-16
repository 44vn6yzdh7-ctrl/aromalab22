import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-white/10 h-16 flex items-center px-4 md:px-12 text-[10px] uppercase tracking-widest text-luxury-white/60">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© 2024 Aroma Lab Middle East</div>
        <div className="flex gap-8">
          <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
          <span className="hover:text-white cursor-pointer transition-colors">Stockists</span>
          <span className="hover:text-white cursor-pointer transition-colors">Legal</span>
        </div>
        <div className="hidden md:block">
          Currency: EGP / Cairo
        </div>
      </div>
    </footer>
  );
}
