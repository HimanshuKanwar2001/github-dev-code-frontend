
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Badge } from "./ui/badge";

const creators = [
  {
    name: "Dr. Vishal Arora",
    title: "Spirituality Coach",
    image: "https://images.unsplash.com/photo-1622174207399-f9b9191d702a?w=800&fit=crop",
    followers: "293K followers",
    verified: true
  },
  {
    name: "Alka Bakshi",
    title: "Tarot Expert",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&fit=crop",
    followers: "176K followers",
    verified: false
  },
  {
    name: "Sareeka Sapra",
    title: "Spiritual Coach",
    image: "https://images.unsplash.com/photo-1573055418049-c8e0b7e3403b?w=800&fit=crop",
    followers: "115K followers",
    verified: false
  },
  {
    name: "Priya Malik",
    title: "Astrologer",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&fit=crop",
    followers: "165K followers",
    verified: true
  },
  {
    name: "Rahul Kaushik",
    title: "Numerologist",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&fit=crop",
    followers: "143K followers",
    verified: true
  },
  {
    name: "Dr. Meena Sharma",
    title: "Vedic Teacher",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&fit=crop",
    followers: "198K followers",
    verified: false
  }
];

export const SuccessStories = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Creators Using SuperProfile</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join these successful creators who transformed their online presence
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {creators.map((creator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full sm:w-[300px]"
            >
              <div className="rounded-3xl p-6 bg-white shadow-lg border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 mb-4 relative">
                    <img 
                      src={creator.image} 
                      alt={creator.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                    {creator.verified && (
                      <div className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{creator.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Instagram className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-600 text-sm">{creator.followers}</span>
                  </div>
                  
                  <Badge 
                    variant="secondary" 
                    className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    {creator.title}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
