import type { ProjectEntry } from "./projectData";

export function getAllUniqueTags(projects: ProjectEntry[]): string[] {
  const tagSet = new Set<string>();

  projects.forEach((project) => {
    project.tags?.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}
