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
} from "lucide-react";
import type {
  Experience,
  TechCategory,
  Metric,
  Competencies,
} from "@/types/computer-science";
import { ShadcnIcon } from "@/components/computer-science/ShadcnIcon";

export const experienceData: Experience[] = [
  {
    logo: "https://www.criticalsynthesissecurity.com/badgeLogo.png",
    title: "Software Engineer Technical Lead",
    company: "Critical Synthesis Security",
    employmentType: "Contract",
    duration: "Jun 2025 - Present",
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
    logo: "",
    title: "Freelance Full Stack Engineer",
    company: "EHM Design Studio",
    employmentType: "Freelance",
    duration: "Aug 2026 - Present",
    location: "Remote",
    description: "Engineered and launched a bespoke e-commerce platform and client portal from scratch for a custom costume design studio using Next.js 16, React 19, and TypeScript.",
    achievements: [
      "Partnered directly with the client to translate complex business workflows—including custom clothing design pipelines and multi-step fitting processes—into a scalable technical architecture",
      "Architected a secure backend using Supabase (PostgreSQL), implementing Row Level Security (RLS) policies and a robust schema to manage custom orders, client measurements, and project timelines",
      "Integrated Stripe via webhooks for automated deposit processing and secure checkout, alongside Calendly API for seamless client consultation bookings",
      "Developed a dynamic, SVG-based interactive measurement guide and crafted high-performance, accessible UI animations across the platform using Framer Motion and Tailwind CSS",
      "Established the complete development lifecycle and infrastructure, including local Docker-based Supabase environments, database migrations, and secure authentication flows"
    ],
    badgeColor: "bg-emerald-900/50 text-emerald-300 border border-emerald-700",
    bulletColor: "text-emerald-400",
  },
  {
    logo: "",
    title: "Creator & Lead Developer",
    company: "311 National Audit Index",
    employmentType: "Personal Project",
    duration: "2026 - Present",
    location: "Remote",
    description: "Built a high-performance, national-scale analytics dashboard for civic 311 data that standardizes and aggregates millions of 311 service requests across major US cities.",
    achievements: [
      "Architected a highly scalable, serverless data pipeline using Python and Polars to extract, transform, and normalize data from various Socrata APIs into 7 universal categories",
      "Implemented DuckDB-Wasm in the Next.js frontend to execute SQL queries directly against remote Parquet files (stored in Cloudflare R2) via HTTP Range Requests, eliminating traditional backend database costs",
      "Developed interactive WebGL point rendering visualizations with React-Map-GL (Mapbox) and Recharts for real-time cross-city comparisons and neighborhood livability analysis",
      "Integrated Clerk for authentication and Stripe via webhooks to build a freemium monetization model, granting Pro users access to historical datasets via AWS presigned URLs"
    ],
    badgeColor: "bg-orange-900/50 text-orange-300 border border-orange-700",
    bulletColor: "text-orange-400",
  },
  {
    logo: "breinify_inc__logo.png",
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
    logo: "sensagrate_logo.png",
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

export const techCategories: TechCategory[] = [
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

export const metricsData: Metric[] = [
  {
    value: "3+",
    label: "Full-Stack Products",
    description: "SaaS & e-commerce platforms launched",
    color: "text-blue-400",
  },
  {
    value: "1M+",
    label: "Data Points Processed",
    description: "In the 311 National Audit Index pipeline",
    color: "text-orange-400",
  },
  {
    value: "4+",
    label: "Years Experience",
    description: "Full-stack development",
    color: "text-purple-400",
  },
];

export const competenciesData: Competencies = {
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
