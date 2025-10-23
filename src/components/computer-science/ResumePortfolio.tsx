import { memo, useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Zap } from "lucide-react";
import {
  ExperienceCard,
  TechStackSection,
  MetricCard,
  CompetencyCard,
} from "@/components/computer-science";
import {
  experienceData,
  metricsData,
  competenciesData,
} from "@/data/computer-science";

// Memoized components to prevent unnecessary re-renders
const MemoizedExperienceCard = memo(ExperienceCard);
const MemoizedTechStackSection = memo(TechStackSection);
const MemoizedMetricCard = memo(MetricCard);
const MemoizedCompetencyCard = memo(CompetencyCard);

// Intersection Observer hook for lazy loading
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsIntersecting(true);
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [hasIntersected, options]);

  return [ref, isIntersecting] as const;
};

// Lazy loaded section component
const LazySection = memo(function LazySection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div ref={ref} className={className}>
      {isIntersecting ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay * 0.1 }}
        >
          {children}
        </motion.div>
      ) : (
        <div className="opacity-0 h-96" /> // Placeholder to maintain layout
      )}
    </div>
  );
});

export const ResumePortfolio = memo(function ResumePortfolio() {
  return (
    <div className="space-y-16">
      {experienceData.map((exp, index) => (
        <LazySection key={index} delay={index}>
          <MemoizedExperienceCard experience={exp} />
        </LazySection>
      ))}

      <LazySection delay={experienceData.length}>
        <MemoizedTechStackSection />
      </LazySection>

      <LazySection delay={experienceData.length + 1}>
        <Card className="p-8 bg-transparent border-none shadow-none">
          <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">
            Key Impact & Metrics
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {metricsData.map((metric, index) => (
              <MemoizedMetricCard key={index} metric={metric} />
            ))}
          </div>
        </Card>
      </LazySection>

      <LazySection delay={experienceData.length + 2}>
        <Card className="p-8 bg-zinc-900 border border-zinc-800 shadow-2xl shadow-zinc-950/50">
          <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <MemoizedCompetencyCard
              title="Technical Leadership"
              competencies={competenciesData["Technical Leadership"]}
              icon={<Briefcase className="w-6 h-6 text-blue-400" />}
            />
            <MemoizedCompetencyCard
              title="Business Impact"
              competencies={competenciesData["Business Impact"]}
              icon={<Zap className="w-6 h-6 text-green-400" />}
            />
          </div>
        </Card>
      </LazySection>
    </div>
  );
});
