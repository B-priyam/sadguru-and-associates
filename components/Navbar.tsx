import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const id = href.replace("#", "");
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/80 backdrop-blur-xl" : ""
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary via-primary-royal to-primary-sky flex items-center justify-center shadow-glow-sm"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-primary-foreground font-bold text-xl">
                  S
                </span>
              </motion.div>
              <div className="hidden sm:block">
                <span
                  className={`font-bold text-lg transition-colors duration-300 ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  The Sadguru
                </span>
                <span
                  className={`font-medium text-sm block -mt-1 transition-colors duration-300 ${
                    isScrolled
                      ? "text-muted-foreground"
                      : "text-primary-foreground/70"
                  }`}
                >
                  & Associates
                </span>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isScrolled
                        ? isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                        : isActive
                          ? "text-primary-foreground"
                          : "text-primary-foreground/70 hover:text-primary-foreground"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full ${
                          isScrolled ? "bg-primary" : "bg-primary-foreground"
                        }`}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              className="hidden lg:flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                variant={isScrolled ? "gradient" : "hero"}
                size="default"
                onClick={() => scrollToSection("#contact")}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Contact Us
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-foreground hover:bg-secondary"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 lg:hidden bg-primary-navy/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[85vw] max-w-80 z-50 bg-card shadow-2xl lg:hidden"
            >
              <div className="p-6 pt-24">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.label}
                      onClick={() => scrollToSection(link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="w-full text-left px-4 py-3 rounded-lg text-foreground font-medium hover:bg-secondary transition-colors"
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </div>
                <motion.div
                  className="mt-8 pt-8 border-t border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <Button
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    onClick={() => scrollToSection("#contact")}
                  >
                    Get Free Consultation
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
