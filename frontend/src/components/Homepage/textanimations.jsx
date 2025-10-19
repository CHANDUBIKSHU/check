import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const taglines = [
  "Your Go-To Partner for Hiring Excellence in Specialized Tech & Business Domains",
  "Our Quality. Your Trust. — That’s Our Success Story.",
  "Don’t Just Find a Job. Discover a Future. With Us.",
  "Your Reliable Partner — Turning Today’s Challenges into Tomorrow’s Wins",
  "Trust. Transformation. Triumph. That’s the B2 Tech Way",
];

export default function HeroText() {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    taglines.forEach((_, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, taglines[i]]);
      }, i * 1800); // delay between taglines
    });
  }, []);

  return (
    <div className="space-y-2 mb-6">
      {visibleLines.map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-500 bg-clip-text 
                     text-2xl md:text-xl font-semibold drop-shadow-[0_0_10px_rgba(56,189,248,0.4)] tracking-wide"
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
}
