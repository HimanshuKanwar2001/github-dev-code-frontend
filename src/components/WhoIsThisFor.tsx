
import { Users, Stars, Calculator, Hand, Heart, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const cards = [
  {
    icon: <Users className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1622174207399-f9b9191d702a?w=800&fit=crop",
    title: "Tarot Readers",
    description: "Perfect for tarot practitioners looking to expand their reach and connect with more seekers.",
  },
  {
    icon: <Stars className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&fit=crop",
    title: "Astrologers",
    description: "Ideal for astrologers ready to share their celestial wisdom and grow their consultation practice.",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1626619431892-832acb0b8745?w=800&fit=crop",
    title: "Numerologists",
    description: "For numerology experts wanting to reach more clients and scale their practice digitally.",
  },
  {
    icon: <Hand className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1582511967670-840b4b4ce32c?w=800&fit=crop",
    title: "Palm Readers",
    description: "Designed for palmistry practitioners aiming to modernize and expand their services.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&fit=crop",
    title: "Holistic Healers",
    description: "For healing practitioners seeking to bring balance and wellness to more people's lives.",
  },
  {
    icon: <Flame className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1573055418049-c8e0b7e3403b?w=800&fit=crop",
    title: "Occult Practitioners",
    description: "Perfect for spiritual guides and occult practitioners looking to reach a wider audience.",
  },
];

export const WhoIsThisFor = () => {
  const scrollToForm = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Who Is This For?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Our platform is designed for spiritual and holistic practitioners ready to expand their reach
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 relative">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button 
            onClick={scrollToForm} 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-lg px-12 py-6 h-auto"
          >
            Book My Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};
