
import { Server, Users, Check, ShoppingCart, ArrowDownToLine, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "All-in-One Platform",
    description: "Host consultations, webinars, and courses in one centralized platform.",
    benefits: [
      "Live consultations",
      "Interactive webinars",
      "Online courses",
      "Community features"
    ],
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Seamless Payments",
    description: "Automated payment processing and checkout for all your offerings.",
    benefits: [
      "Instant payments",
      "Multiple payment options",
      "Automated billing",
      "Secure transactions"
    ],
  },
  {
    icon: <ArrowDownToLine className="w-6 h-6" />,
    title: "Lead Generation",
    description: "Built-in tools for lead generation and funnel building.",
    benefits: [
      "Lead capture forms",
      "Marketing funnels",
      "Email automation",
      "Conversion tracking"
    ],
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Time & Cost Savings",
    description: "Reduce costs and eliminate technical hassles with our all-in-one solution.",
    benefits: [
      "Automated workflows",
      "No technical expertise needed",
      "Reduced overhead costs",
      "Time-saving features"
    ],
  }
];

export const Features = () => {
  const scrollToForm = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What SuperProfile Can Do For You</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to grow your spiritual practice and serve your clients better
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
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
