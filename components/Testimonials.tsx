import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    content:
      "The Sadguru And Associates helped me secure a business loan when no one else would. Their expertise and dedication made all the difference. Highly recommend their services!",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    role: "IT Professional",
    content:
      "I was clueless about mutual fund investments until I consulted with their team. They explained everything patiently and helped me build a solid investment portfolio.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Amit Patel",
    role: "Real Estate Investor",
    content:
      "Their real estate consultation services are top-notch. They helped me identify the best investment properties and handled all the documentation seamlessly.",
    rating: 5,
    avatar: "AP",
  },
  {
    name: "Sunita Devi",
    role: "Homemaker",
    content:
      "Thanks to their insurance advice, my family is now fully protected. They took the time to understand our needs and suggested the perfect coverage plan.",
    rating: 5,
    avatar: "SD",
  },
  {
    name: "Vikram Singh",
    role: "Retired Professional",
    content:
      "After retirement, I needed expert guidance for wealth management. Their team provided excellent advice that has given me financial security in my golden years.",
    rating: 5,
    avatar: "VS",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients
            <span className="gradient-text block mt-2">Say About Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {`Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience with us.`}
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-8 md:p-12 text-center"
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                {testimonials[currentIndex].content}
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <span className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-card-hover transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-card-hover transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
