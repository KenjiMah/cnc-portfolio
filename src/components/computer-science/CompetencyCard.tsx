import React from "react";
import { SpotlightCard } from "./SpotlightCard";
import type { CompetencyCardProps } from "@/types/computer-science";

export const CompetencyCard: React.FC<CompetencyCardProps> = ({
  title,
  competencies,
  icon,
}) => {
  return (
    <SpotlightCard className="h-full">
      <h4 className="font-semibold text-zinc-200 mb-4 text-lg flex items-center gap-3">
        {icon} {title}
      </h4>
      <ul className="space-y-2">
        {competencies.map((c, i) => (
          <li key={i} className="flex items-center text-zinc-300">
            <span className="text-green-400 mr-3">✓</span>
            {c}
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
};
