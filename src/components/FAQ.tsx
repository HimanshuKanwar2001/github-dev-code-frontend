
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How long does the strategy call last?",
    answer: "Our strategy calls typically last around 30 minutes, giving us enough time to understand your needs and discuss how we can help you grow your business.",
  },
  {
    question: "What happens after the strategy call?",
    answer: "After the call, you'll receive a detailed action plan and recommendations. If you choose to move forward, we'll create a customized implementation plan.",
  },
  {
    question: "What is SuperProfile?",
    answer: "SuperProfile is an all-in-one platform designed to help creators and coaches convert their audience into customers. We streamline your entire business funnel with tools for consultations, courses, and automated payments, making it easier to acquire and serve clients effectively.",
  },
  {
    question: "Is SuperProfile free?",
    answer: "You can get started with SuperProfile for free. We offer different subscription plans with varying features and benefits to suit your business needs. Book a strategy call with us to explore the plan that best fits your goals.",
  },
  {
    question: "I don't have a social media audience. Can you still help me?",
    answer: "Absolutely! We've helped thousands of creators grow their social media presence from scratch and convert their audience into clients. Whether you're just starting out or already have a following, we provide personalized strategies tailored to your current stage and goals.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-muted mb-[72px] sm:mb-0">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
