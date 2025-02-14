
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const CTABar = () => {
  const scrollToForm = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 bg-primary shadow-lg border-t border-white/10 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-3 sm:mb-0">
          <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
          <p className="text-white font-medium">
            Limited Spots Available - Book Your Strategy Call Now!
          </p>
        </div>
        <Button 
          onClick={scrollToForm} 
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 text-base px-8"
        >
          Book My Strategy Call
        </Button>
      </div>
    </motion.div>
  );
};
