
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <img
          src="/lovable-uploads/617600ba-4bf9-4270-a1bc-a1b4cc902bb6.png"
          alt="SuperProfile Logo"
          className="h-8 md:h-10"
        />
        <a
          href="https://wa.me/918971189998"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">+91 8971189998</span>
        </a>
      </div>
    </motion.nav>
  );
};
