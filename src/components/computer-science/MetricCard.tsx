import React, { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";
import type { MetricCardProps } from "@/types/computer-science";

export const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseFloat(metric.value);
  const suffix = metric.value.replace(/[0-9.-]/g, "");

  useEffect(() => {
    if (isInView && !isNaN(numericValue)) {
      animate(0, numericValue, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = `${
              Number.isInteger(numericValue)
                ? Math.round(value)
                : value.toFixed(1)
            }${suffix}`;
          }
        },
      });
    }
  }, [isInView, numericValue, suffix]);

  return (
    <div className="relative text-center p-6 bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_5s_linear_infinite]"></div>
      <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_5s_linear_infinite]"></div>
      <div className="relative z-10 bg-zinc-900 rounded-md p-4">
        <div
          className={`text-5xl font-bold ${metric.color} mb-2`}
          ref={ref}
        >{`0${suffix}`}</div>
        <div className="text-zinc-300 text-lg font-semibold">
          {metric.label}
        </div>
        <div className="text-zinc-400 text-sm">{metric.description}</div>
      </div>
    </div>
  );
};
