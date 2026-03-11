import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We maintain complete transparency in all our dealings, ensuring you always know where your money is going.",
  },
  {
    icon: Award,
    title: "Expert Professionals",
    description:
      "Our team of certified financial experts brings years of experience and industry knowledge to serve you better.",
  },
  {
    icon: Users,
    title: "One-Stop Solutions",
    description:
      "From loans to insurance, real estate to legal advice – all your financial needs addressed under one roof.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always available to assist you with any queries or concerns.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Results",
    description:
      "Our track record speaks for itself – thousands of satisfied clients and millions in managed assets.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Approach",
    description:
      "Every client is unique, and so are our solutions. We tailor our services to match your specific needs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="py-24 hero-gradient text-primary-foreground"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/90 text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Makes Us Different
          </h2>
          <p className="text-lg text-primary-foreground/80">
            We combine expertise, integrity, and personalized service to deliver
            exceptional results for our clients.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-glow" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
