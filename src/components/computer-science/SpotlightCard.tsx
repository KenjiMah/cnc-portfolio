import React, { useRef, useState, useCallback, memo } from "react";
import { Card } from "@/components/ui/card";
import type { SpotlightCardProps } from "@/types/computer-science";

// Throttle function to limit mouse move events
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const SpotlightCard = memo<SpotlightCardProps>(
  ({ children, className = "" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const handleMouseMove = useCallback(
      throttle((e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || isFocused) return;
        const rect = ref.current.getBoundingClientRect();
        ref.current.style.setProperty(
          "--mouse-x",
          `${e.clientX - rect.left}px`
        );
        ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      }, 16),
      [isFocused]
    ); // Throttle to ~60fps

    return (
      <Card
        ref={ref}
        onMouseMove={handleMouseMove}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseEnter={() => setIsFocused(false)}
        className={`relative p-8 bg-zinc-900/80 border border-zinc-800 shadow-2xl shadow-zinc-950/50 overflow-hidden 
                  before:content-[''] before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300
                  before:[background:radial-gradient(300px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(60,80,255,0.1),transparent)]
                  hover:before:opacity-100 ${className}`}
      >
        {children}
      </Card>
    );
  }
);
