
import { motion } from "framer-motion";

const stats = [
  {
    number: "52,000+",
    label: "Creators"
  },
  {
    number: "80,00,000+",
    label: "Products Sold"
  },
  {
    number: "₹30Cr+",
    label: "Revenue Generated"
  }
];

export const Stats = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {stat.number}
              </h3>
              <p className="text-lg text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
