import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

interface FloatingCTAProps {
  onOpenContact: () => void;
}

const FloatingCTA = ({ onOpenContact }: FloatingCTAProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={onOpenContact}
        className="relative flex items-center gap-2 bg-gradient-to-r from-primary to-primary-royal text-primary-foreground px-5 py-4 rounded-full shadow-glow transition-all duration-300 group"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 40px hsl(var(--primary) / 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isHovered ? [0, -10, 10, -10, 0] : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Mail className="w-5 h-5" />
        </motion.div>
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="font-semibold whitespace-nowrap overflow-hidden"
            >
              Email Us Now
            </motion.span>
          )}
        </AnimatePresence>

        {/* Animated Pulse Rings */}
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-gold/50"
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-primary/30"
          animate={{
            scale: [1, 1.8, 1.8],
            opacity: [0.3, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5,
          }}
        />
      </motion.button>
    </motion.div>
  );
};

export default FloatingCTA;
