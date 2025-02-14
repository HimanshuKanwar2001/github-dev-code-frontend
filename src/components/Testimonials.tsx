
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Gita Ramachandran",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    location: "IN",
    rating: 5,
    reviewCount: "24 reviews",
    date: "Dec 12, 2024",
    title: "The platform is a well integrated...",
    review: "The platform is a well integrated platform. We don't have to struggle integrating various systems. Totally hassle free and convenient. It's a one-stop tool to collect payments, Conduct online group sessions, Schedule / Track/ Attendance for Webinars/ Master class / WICC / Workshops. Moreover they are ready to help us resolve any issues. Highly recommended"
  },
  {
    name: "Siddharth Maskara",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    location: "IN",
    rating: 5,
    reviewCount: "3 reviews",
    date: "Dec 24, 2024",
    title: "The best courses, community and digital business solution ever",
    review: "Am starting my digital coaching journey. And I think one of the main reasons I can get it actually started is SuperProfile. They have sorted about 80% of all the infra needs. Without this I probably would not have been able to manage it all. Moreover they are running it as a coaching business themselves, with Innovative initiatives to support their customers, which so far I have never see even with the biggest companies yet."
  },
  {
    name: "Ankush Maurya",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    location: "IN",
    rating: 5,
    reviewCount: "1 review",
    date: "Dec 26, 2024",
    title: "One of the best Digital Platform for Trainer's",
    review: "This is a very good platform for Trainer's. Well settled Trainer's can upgrade directly to ultimate. For new Trainer's I would suggest get on Enterprise plan and then give at least 1 or 2 months to learn the Automation process. For non technical person (like me) it would seem little bit challenging. But I am getting results because I took time to learn the platform. Otherwise support team is very helpful."
  },
  {
    name: "Priya Sharma",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    location: "IN",
    rating: 5,
    reviewCount: "8 reviews",
    date: "Jan 2, 2024",
    title: "Transformed my yoga teaching business",
    review: "SuperProfile has completely transformed how I run my yoga teaching business. The platform's seamless integration of booking, payments, and content delivery has made it so much easier to focus on what I love - teaching yoga. The automated systems have saved me countless hours of administrative work. Their customer support team is always ready to help with any questions."
  },
  {
    name: "Rajesh Verma",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    location: "IN",
    rating: 4,
    reviewCount: "5 reviews",
    date: "Jan 15, 2024",
    title: "Great platform with minor learning curve",
    review: "I've been using SuperProfile for my astrology consultation business for the past 3 months. The platform offers everything I need to manage my practice efficiently. The only reason for 4 stars instead of 5 is the initial learning curve - it took me about a week to get comfortable with all the features. But once you get the hang of it, it's incredibly powerful."
  },
  {
    name: "Maya Patel",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    location: "IN",
    rating: 5,
    reviewCount: "12 reviews",
    date: "Jan 20, 2024",
    title: "Perfect for wellness coaching",
    review: "As a wellness coach, I needed a platform that could handle everything from scheduling to course delivery, and SuperProfile delivers perfectly. The ability to create different membership tiers and automated workflows has helped me scale my business significantly. The analytics tools are particularly helpful in understanding client engagement and improving my offerings."
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "fill-green-500 text-green-500" : "fill-gray-200 text-gray-200"
        }`}
      />
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied creators who trust SuperProfile
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{testimonial.reviewCount}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-3">
                <StarRating rating={testimonial.rating} />
                <span className="text-sm text-muted-foreground">{testimonial.date}</span>
              </div>

              <h4 className="font-semibold mb-2">{testimonial.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {testimonial.review}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
