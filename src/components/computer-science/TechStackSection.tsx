import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "./SpotlightCard";
import { containerVariants, itemVariants } from "@/animations/computer-science";
import { techCategories } from "@/data/computer-science";

export const TechStackSection: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SpotlightCard>
        <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">
          Technical Stack
        </h3>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {techCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <h4 className="font-semibold text-zinc-200 mb-4 text-lg border-b border-zinc-700 pb-2">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <Badge
                    key={tech.name}
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 bg-zinc-800/50 hover:bg-zinc-800 transition-colors px-3 py-2 flex items-center gap-2 text-sm"
                  >
                    <tech.icon className="h-4 w-4" aria-hidden="true" />
                    <span>{tech.name}</span>
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SpotlightCard>
    </motion.div>
  );
};
