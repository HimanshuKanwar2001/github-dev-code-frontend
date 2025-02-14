
import { Users, TrendingUp, Settings, ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const benefits = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client Acquisition Strategy",
    description: "Learn proven methods to attract and retain more high-quality clients for your spiritual practice.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Social Media Growth",
    description: "Master the art of building and engaging your audience across Instagram and other platforms.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Business Automation",
    description: "Streamline your practice with automated booking, payments, and client management systems.",
  },
  {
    icon: <ArrowDownToLine className="w-6 h-6" />,
    title: "High-Converting Funnels",
    description: "Create effective marketing funnels that turn followers into loyal, paying clients.",
  },
];

export const StrategyCall = () => {
  const scrollToForm = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 px-4 bg-primary/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Practice with Our Strategy Call</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get actionable insights and a personalized roadmap to scale your spiritual business
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 mb-12 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button onClick={scrollToForm} size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-6 h-auto">
            Book My Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};
