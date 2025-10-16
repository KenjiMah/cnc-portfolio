import React from "react";
import type { SectionHeaderProps } from "@/types/computer-science";

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-100 tracking-tight">
        {title}
      </h2>
      <div className="h-1 w-24 bg-blue-500 mb-6 mx-auto"></div>
      {description && (
        <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
