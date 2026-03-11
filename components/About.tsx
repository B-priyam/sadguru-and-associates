import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5000+", label: "Happy Clients" },
  { value: "₹500Cr+", label: "Assets Managed" },
  { value: "98%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in
              <span className="gradient-text block mt-2">Financial Growth</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The Sadguru And Associates is a premier financial consultancy firm
              dedicated to providing comprehensive financial solutions. With
              over 15 years of expertise, we help individuals and businesses
              achieve their financial goals through strategic planning and
              personalized guidance.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of certified experts combines deep market knowledge with
              a client-first approach, ensuring that every financial decision
              you make is backed by thorough analysis and professional insight.
            </p>

            {/* Mission Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Target, text: "Client-Centric Approach" },
                { icon: Users, text: "Expert Advisory Team" },
                { icon: Award, text: "Industry Recognition" },
                { icon: TrendingUp, text: "Proven Track Record" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="glass-card rounded-2xl p-6 text-center hover:shadow-card-hover transition-shadow duration-300"
                >
                  <span className="text-4xl md:text-5xl font-bold gradient-text block mb-2">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-gold/15 to-primary/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
