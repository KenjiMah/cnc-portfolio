import type { ProjectEntry } from "./projectData";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function getAllUniqueTags(projects: ProjectEntry[]): string[] {
  const tagSet = new Set<string>();

  projects.forEach((project) => {
    project.tags?.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: string = "USD") {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount / 100); // Stripe prices are in cents
}