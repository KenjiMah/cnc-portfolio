import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiVite,
  SiRadixui,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiStripe,
  SiVercel,
} from "react-icons/si";
import {
  KeyRound,
  Shield,
  Banknote,
  RefreshCw,
  Award,
  Rocket,
  Globe,
  Lock,
  Settings,
  TrendingUp,
  GaugeCircle,
  Smartphone,
  Accessibility,
  Briefcase,
  Star,
  Zap,
  type LucideProps,
} from "lucide-react";

// --- TYPE DEFINITIONS ---

// A generic type for icon components from various libraries
type IconComponentType =
  | IconType
  | React.FC<React.SVGProps<SVGSVGElement>>
  | React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;

// Types for our data structures
type Experience = {
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
};

type Technology = {
  name: string;
  icon: IconComponentType;
};

type TechCategory = {
  title: string;
  technologies: Technology[];
};

type Metric = {
  value: string;
  label: string;
  description: string;
  color: string;
};

type Competencies = {
  [key: string]: string[];
};

// Types for our component props
type SectionHeaderProps = {
  title: string;
  description?: string;
};

type ExperienceCardProps = {
  experience: Experience;
};

type MetricCardProps = {
  metric: Metric;
};

type CompetencyCardProps = {
  title: string;
  competencies: string[];
  icon: React.ReactNode;
};

// --- COMPONENT IMPLEMENTATIONS ---

// Custom Shadcn UI SVG icon
const ShadcnIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
};

// --- DATA ---

const experienceData: Experience[] = [
  {
    logo: "CSS",
    title: "Software Engineer Technical Lead",
    company: "Critical Synthesis Security",
    employmentType: "Contract",
    duration: "Jun 2025 - Present · 4 mos",
    location: "San Francisco, CA · Remote",
    description:
      "Spearheaded the greenfield development of a full-stack SaaS platform for security guard training and certification as the sole engineer and technical lead.",
    achievements: [
      "Architected a modular, responsive UI using React, TypeScript, Vite, and Shadcn UI (built on Radix and Tailwind CSS), with a focus on accessibility, visual clarity, and rapid development",
      "Built end-to-end user authentication, access control, and secure course enrollment using Supabase, reducing overhead and accelerating iteration",
      "Integrated Stripe for secure payments and automated transactional flows, including certificate issuance and course access gating",
      "Developed a custom certificate generation system using dynamic PDF templating, tied to course progress and form validation",
      "Deployed the platform to Vercel, managing all infrastructure: CI/CD pipelines, custom domains, DNS configuration, SSL, and environment-specific secrets",
      "Implemented SEO best practices and optimized frontend performance for a public-facing landing page and course portal",
      "Created internal developer tools and reusable component structures for maintainability and scaling",
      "Handled all architecture decisions, design system implementation, and platform rollout from scratch",
    ],
    badgeColor: "bg-blue-900/50 text-blue-300 border border-blue-700",
    bulletColor: "text-blue-400",
  },
  {
    logo: "B",
    title: "Frontend Engineer",
    company: "Breinify",
    employmentType: "Full-time",
    duration: "Jan 2022 - Aug 2023 · 1 yr 8 mos",
    location: "San Francisco, CA · Hybrid",
    description:
      "Led the development of complex UI features for large-scale data platforms, collaborating with cross-functional teams to deliver high-impact software solutions.",
    achievements: [
      "Reporting Module: Collaborated with Data Analysts, Customer Support, and Backend teams to design and develop a UI for a Reporting CRM tool using Agile methodologies, boosting analysts' productivity by 300%",
      "Database Module: Designed an efficient UI for a powerful database platform, enhancing data collection and organization with simulation tools for testing configurations and mappings",
      "Activity Monitor Module: Implemented an API Monitoring tool with paginated tables using react-table, partnering with the CTO to lead microservice development for faster debugging",
      "Messaging System Module: Collaborated with backend team to design user interfaces for configuring SMS flows, from basic welcoming flows to sophisticated interactive sequences",
      "API Monitor: Developed comprehensive UI to monitor Breinify's intricate API call ecosystem, enhancing oversight and efficiency in verification and debugging",
      "Messaging Rescheduler: Created features to enable users to reschedule batches of automated messages for different timeframes",
      "Customer Data Enhancement: Implemented schema creators to map customer data, enabling Customer Success team to assign semantic meaning and correct data errors",
    ],
    badgeColor: "bg-green-900/50 text-green-300 border border-green-700",
    bulletColor: "text-green-400",
  },
  {
    logo: "S",
    title: "Jr. Software Engineer Intern",
    company: "Sensagrate",
    employmentType: "Internship",
    duration: "Oct 2021 - Dec 2021 · 3 mos",
    location: "Scottsdale, AZ · Remote",
    description:
      "Focused on enhancing the user interface for zoning area annotations. Also annotated 3D LiDAR data files, aiming to improve accuracy and efficiency in object detection.",
    skills: [
      "User Interface Design",
      "Object-Oriented Programming",
      "3D LiDAR Data Processing",
      "Object Detection",
      "Data Annotation",
      "Remote Collaboration",
    ],
    badgeColor: "bg-purple-900/50 text-purple-300 border border-purple-700",
  },
];

const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Vite", icon: SiVite },
      { name: "Shadcn UI", icon: ShadcnIcon },
      { name: "Radix UI", icon: SiRadixui },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & Database",
    technologies: [
      { name: "Supabase", icon: SiSupabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Authentication", icon: KeyRound },
      { name: "Access Control", icon: Shield },
    ],
  },
  {
    title: "Payments & Integration",
    technologies: [
      { name: "Stripe", icon: SiStripe },
      { name: "Payment Processing", icon: Banknote },
      { name: "Automated Flows", icon: RefreshCw },
      { name: "Certificate Generation", icon: Award },
    ],
  },
  {
    title: "DevOps & Deployment",
    technologies: [
      { name: "Vercel", icon: SiVercel },
      { name: "CI/CD", icon: Rocket },
      { name: "DNS Configuration", icon: Globe },
      { name: "SSL", icon: Lock },
      { name: "Environment Management", icon: Settings },
    ],
  },
  {
    title: "Performance & SEO",
    technologies: [
      { name: "SEO Optimization", icon: TrendingUp },
      { name: "Frontend Performance", icon: GaugeCircle },
      { name: "Responsive Design", icon: Smartphone },
      { name: "Accessibility", icon: Accessibility },
    ],
  },
];

const metricsData: Metric[] = [
  {
    value: "300%",
    label: "Productivity Boost",
    description: "Analysts' efficiency improvement",
    color: "text-blue-400",
  },
  {
    value: "5+",
    label: "Major Modules",
    description: "Reporting, Database, API Monitor",
    color: "text-green-400",
  },
  {
    value: "2+",
    label: "Years Experience",
    description: "Full-stack development",
    color: "text-purple-400",
  },
];

const competenciesData: Competencies = {
  "Technical Leadership": [
    "Full-stack architecture & design",
    "Cross-functional team collaboration",
    "Agile development methodologies",
    "Performance optimization",
  ],
  "Business Impact": [
    "User experience enhancement",
    "Process automation & efficiency",
    "Data visualization & analytics",
    "Scalable system design",
  ],
};

// --- REUSABLE COMPONENTS ---

const SectionHeader: React.FC<SectionHeaderProps> = ({
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

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <Card className="p-8 bg-zinc-900 border border-zinc-800 shadow-2xl shadow-zinc-950/50 transition-transform duration-300 hover:border-zinc-700 hover:-translate-y-1">
      <div className="flex flex-col md:flex-row md:items-start md:gap-6 mb-6">
        <div className="w-12 h-12 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4 md:mb-0 flex-shrink-0">
          {experience.logo}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-zinc-100 mb-1">
            {experience.title}
          </h3>
          <p className="text-lg text-zinc-300 font-medium mb-3">
            {experience.company}
          </p>
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
      <p className="text-zinc-400 mb-6 leading-relaxed">
        {experience.description}
      </p>
      {experience.achievements && (
        <div>
          <h4 className="font-semibold text-zinc-200 mb-4 text-base flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" />
            Key Achievements
          </h4>
          <ul className="space-y-3">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span
                  className={`${experience.bulletColor} mr-3 mt-1.5 text-sm`}
                >
                  ▸
                </span>
                <span className="text-zinc-300 leading-relaxed">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {experience.skills && (
        <div>
          <h4 className="font-semibold text-zinc-200 mb-4 text-base flex items-center gap-2">
            <Zap className="w-4 h-4 text-green-400" />
            Key Skills & Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-zinc-700 bg-zinc-800/50 text-zinc-300 px-3 py-1 hover:bg-zinc-800 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

const TechStackSection: React.FC = () => {
  return (
    <Card className="p-8 bg-zinc-900 border border-zinc-800 shadow-2xl shadow-zinc-950/50">
      <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">
        Technical Stack
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((category, index) => (
          <div key={index}>
            <h4 className="font-semibold text-zinc-200 mb-4 text-lg border-b border-zinc-700 pb-2">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech, techIndex) => {
                const IconComponent = tech.icon;
                return (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 bg-zinc-800/50 hover:bg-zinc-800 transition-colors px-3 py-2 flex items-center gap-2 text-sm"
                  >
                    <IconComponent className="h-4 w-4" aria-hidden="true" />
                    <span>{tech.name}</span>
                  </Badge>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  return (
    <div className="text-center p-6 bg-zinc-800/50 rounded-lg border border-zinc-700">
      <div className={`text-5xl font-bold ${metric.color} mb-2`}>
        {metric.value}
      </div>
      <div className="text-zinc-300 text-lg font-semibold">{metric.label}</div>
      <div className="text-zinc-400 text-sm">{metric.description}</div>
    </div>
  );
};

const CompetencyCard: React.FC<CompetencyCardProps> = ({
  title,
  competencies,
  icon,
}) => {
  return (
    <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
      <h4 className="font-semibold text-zinc-200 mb-4 text-lg flex items-center gap-3">
        {icon}
        {title}
      </h4>
      <ul className="space-y-2">
        {competencies.map((competency, index) => (
          <li key={index} className="flex items-center text-zinc-300">
            <span className="text-green-400 mr-3">✓</span>
            {competency}
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

export function ComputerScience() {
  return (
    <div className="pt-20 pb-24 max-w-6xl mx-auto px-4">
      <SectionHeader
        title="Software Engineering Portfolio"
        description="A showcase of my journey in full-stack development, technical leadership, and building scalable SaaS platforms. I specialize in modern web technologies with a focus on user experience, performance, and maintainable code."
      />

      <div className="space-y-16">
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}

        <TechStackSection />

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
      </div>
    </div>
  );
}
