import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Zap } from "lucide-react";
import {
  SectionHeader,
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

// --- MAIN PAGE COMPONENT ---
export function ComputerScience() {
  return (
    <div className="relative pt-20 pb-24 max-w-6xl mx-auto px-4 overflow-x-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/50 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-48 right-1/4 w-96 h-96 bg-purple-900/50 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <SectionHeader
        title="Software Engineering Portfolio"
        description="A showcase of my journey in full-stack development, technical leadership, and building scalable SaaS platforms. I specialize in modern web technologies with a focus on user experience, performance, and maintainable code."
      />

      <div className="space-y-16">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            // CHANGED: Transition is now inside the whileInView variant.
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.1,
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ExperienceCard experience={exp} />
          </motion.div>
        ))}

        <TechStackSection />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="p-8 bg-transparent border-none shadow-none">
            <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">
              Key Impact & Metrics
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {metricsData.map((metric, index) => (
                <MetricCard key={index} metric={metric} />
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="p-8 bg-zinc-900 border border-zinc-800 shadow-2xl shadow-zinc-950/50">
            <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <CompetencyCard
                title="Technical Leadership"
                competencies={competenciesData["Technical Leadership"]}
                icon={<Briefcase className="w-6 h-6 text-blue-400" />}
              />
              <CompetencyCard
                title="Business Impact"
                competencies={competenciesData["Business Impact"]}
                icon={<Zap className="w-6 h-6 text-green-400" />}
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
