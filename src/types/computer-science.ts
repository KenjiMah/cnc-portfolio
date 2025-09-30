import type { IconType } from "react-icons";
import type { LucideProps } from "lucide-react";

export type IconComponentType =
  | IconType
  | React.FC<React.SVGProps<SVGSVGElement>>
  | React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;

export interface Experience {
  logo: string;
  title: string;
  company: string;
  employmentType: string;
  duration: string;
  location: string;
  description: string;
  achievements?: string[];
  skills?: string[];
  badgeColor: string;
  bulletColor?: string;
}

export interface Technology {
  name: string;
  icon: IconComponentType;
}

export interface TechCategory {
  title: string;
  technologies: Technology[];
}

export interface Metric {
  value: string;
  label: string;
  description: string;
  color: string;
}

export interface Competencies {
  [key: string]: string[];
}

export interface SectionHeaderProps {
  title: string;
  description?: string;
}

export interface MetricCardProps {
  metric: Metric;
}

export interface CompetencyCardProps {
  title: string;
  competencies: string[];
  icon: React.ReactNode;
}

export interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export interface ExperienceCardProps {
  experience: Experience;
}
