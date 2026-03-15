import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

const services = [
  "Real Estate Consultation",
  "Mutual Funds & Wealth Management",
  "Personal Loan",
  "Business Loan",
  "Home Loan",
  "Vehicle Loan",
  "Life Insurance",
  "Health Insurance",
  "General Insurance",
  "Legal Advice",
  "Other",
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "Ornate Galaxy CHS LTD, B-Wing, Shop No. 116, 1st Floor, Tivri Road, Naigaon East, 401208",
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "thesadguru.2025@gmail.com",
      "thesadguru.2026@homesinwesternline.in",
      //   "info@thesadguruassociates.com",
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sun: 9:00 AM - 7:00 PM"],
  },
];

const ContactForm = () => {
  //   const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast("Message Sent Successfully!", {
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const inputVariants = {
    focused: { scale: 1.02, transition: { duration: 0.2 } },
    unfocused: { scale: 1 },
  };

  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-royal rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Get In Touch
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Send Us Your
            <span className="gradient-text block mt-2">Query</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {`Have questions? We're here to help. Fill out the form below and our
            team will get back to you within 24 hours.`}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="flex gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer group"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                    {item.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  {item.details.map((detail) => (
                    <Link
                      target="_blank"
                      href={
                        item.title === "Email Us"
                          ? `mailto:${detail.split(" ")[0]}`
                          : item.title === "Visit Us"
                            ? `http://maps.google.com/?q=1200 Ornate Galaxy CHS LTD, B-Wing, Shop No. 116, 1st Floor, Tivri
                  Road, Naigaon East, 401208`
                            : ""
                      }
                      key={detail}
                    >
                      <p key={detail} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-royal/10 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-foreground">
                  100% Secure
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your information is protected with bank-level security. We never
                share your data with third parties.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    {`Your message has been sent successfully. We'll contact you
                    soon.`}
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      variants={inputVariants}
                      animate={
                        focusedField === "name" ? "focused" : "unfocused"
                      }
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className="h-12 transition-shadow duration-300 focus:shadow-lg focus:shadow-primary/10"
                      />
                    </motion.div>
                    <motion.div
                      variants={inputVariants}
                      animate={
                        focusedField === "email" ? "focused" : "unfocused"
                      }
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className="h-12 transition-shadow duration-300 focus:shadow-lg focus:shadow-primary/10"
                      />
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      variants={inputVariants}
                      animate={
                        focusedField === "phone" ? "focused" : "unfocused"
                      }
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        required
                        type="tel"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className="h-12 transition-shadow duration-300 focus:shadow-lg focus:shadow-primary/10"
                      />
                    </motion.div>
                    <motion.div
                      variants={inputVariants}
                      animate={
                        focusedField === "service" ? "focused" : "unfocused"
                      }
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Interested In *
                      </label>
                      <Select
                        required
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value || "" })
                        }
                      >
                        <SelectTrigger
                          className="h-12"
                          onFocus={() => setFocusedField("service")}
                          onBlur={() => setFocusedField(null)}
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </div>

                  <motion.div
                    variants={inputVariants}
                    animate={
                      focusedField === "message" ? "focused" : "unfocused"
                    }
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      required
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className="min-h-32 resize-none transition-shadow duration-300 focus:shadow-lg focus:shadow-primary/10"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                        />
                      ) : (
                        <>
                          Send Message
                          <motion.div
                            className="ml-2"
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                          >
                            <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                          </motion.div>
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
