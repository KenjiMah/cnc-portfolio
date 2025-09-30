import React from "react";
import { Badge } from "@/components/ui/badge";
import { Star, Zap, Globe } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import type { ExperienceCardProps } from "@/types/computer-science";

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => {
  return (
    <SpotlightCard className="transition-all duration-300 hover:border-blue-700/70 hover:-translate-y-1 hover:shadow-blue-950/30">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-zinc-100 mb-1">
          {experience.title}
        </h3>
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-white border border-zinc-300 rounded-lg flex items-center justify-center shrink-0 self-center">
            {experience.logo.includes("http") ||
            experience.logo.endsWith(".png") ? (
              <img
                src={experience.logo}
                alt={experience.company}
                className="w-8 h-8 object-contain"
              />
            ) : (
              experience.logo
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <p className="text-lg text-zinc-300 font-medium">
                {experience.company}
              </p>
              {experience.company === "Critical Synthesis Security" && (
                <a
                  href="https://www.criticalsynthesissecurity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" /> View Website
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              <Badge
                variant="secondary"
                className={`${experience.badgeColor} px-3 py-1`}
              >
                {experience.employmentType}
              </Badge>
              <Badge
                variant="outline"
                className="border-zinc-700 text-zinc-400 px-3 py-1"
              >
                {experience.duration}
              </Badge>
              <Badge
                variant="outline"
                className="border-zinc-700 text-zinc-400 px-3 py-1"
              >
                {experience.location}
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {experience.description}
      </p>
      {experience.achievements && (
        <div>
          <h4 className="font-semibold text-zinc-200 mb-4 text-base flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" /> Key Achievements
          </h4>
          <ul className="space-y-3">
            {experience.achievements.map((a, i) => (
              <li key={i} className="flex items-start">
                <span
                  className={`${experience.bulletColor} mr-3 mt-1.5 text-sm`}
                >
                  ▸
                </span>
                <span className="text-zinc-300 leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {experience.skills && (
        <div>
          <h4 className="font-semibold text-zinc-200 mt-6 mb-4 text-base flex items-center gap-2">
            <Zap className="w-4 h-4 text-green-400" /> Key Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <Badge
                key={i}
                variant="outline"
                className="border-zinc-700 bg-zinc-800/50 text-zinc-300 px-3 py-1 hover:bg-zinc-800"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </SpotlightCard>
  );
};
