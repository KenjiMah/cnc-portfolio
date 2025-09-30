import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/animations/computer-science";
import type { SectionHeaderProps } from "@/types/computer-science";

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <motion.div
      className="mb-16 text-center"
      initial={fadeInAnimation.initial}
      whileInView={fadeInAnimation.animate}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-100 tracking-tight">
        {title}
      </h2>
      <div className="h-1 w-24 bg-blue-500 mb-6 mx-auto"></div>
      {description && (
        <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};
