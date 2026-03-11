import { motion } from "framer-motion";
import { Building2, TrendingUp, Landmark, Shield, Scale } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Real Estate",
    subtitle: "Consultation & Investment",
    description:
      "Expert guidance on property investments, market analysis, and end-to-end consultation for your real estate portfolio.",
    image: "/images/service-realestate.jpg",
  },
  {
    icon: TrendingUp,
    title: "Mutual Funds",
    subtitle: "Wealth Management",
    description:
      "Strategic mutual fund investments tailored to your risk appetite and financial goals for long-term wealth creation.",
    image: "/images/service-mutualfunds.jpg",
  },
  {
    icon: Landmark,
    title: "All Types of Loans",
    subtitle: "Personal, Business & More",
    description:
      "Comprehensive loan solutions including personal, home, business, and vehicle loans at competitive rates.",
    image: "/images/service-loans.jpg",
  },
  {
    icon: Shield,
    title: "Insurance",
    subtitle: "Life, Health & General",
    description:
      "Complete insurance coverage solutions to protect you and your family from life's uncertainties.",
    image: "/images/service-insurance.jpg",
  },
  {
    icon: Scale,
    title: "Legal Advice",
    subtitle: "Documentation Support",
    description:
      "Professional legal guidance and documentation support for all your financial and property matters.",
    image: "/images/service-legal.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/50">
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Financial Solutions
            <span className="gradient-text block mt-2">Under One Roof</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From real estate investments to insurance coverage, we provide
            comprehensive financial services tailored to your unique needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`service-card group relative overflow-hidden rounded-2xl bg-card shadow-card ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute bottom-4 left-6 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-gold flex items-center justify-center shadow-glow-sm">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <span className="text-sm font-medium text-primary">
                    {service.subtitle}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border-2 border-gold/30" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
