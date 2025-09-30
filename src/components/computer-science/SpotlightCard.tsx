import React, { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import type { SpotlightCardProps } from "@/types/computer-science";

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isFocused) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <Card
      ref={ref}
      onMouseMove={handleMouseMove}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseEnter={() => setIsFocused(false)}
      className={`relative p-8 bg-zinc-900/80 border border-zinc-800 shadow-2xl shadow-zinc-950/50 overflow-hidden 
                  before:content-[''] before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500
                  before:[background:radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(60,80,255,0.15),transparent)]
                  hover:before:opacity-100 ${className}`}
    >
      {children}
    </Card>
  );
};
