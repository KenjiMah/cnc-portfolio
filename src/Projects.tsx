import { useMemo, useState } from "react";
import { CNCProjectCard } from "./CNCProjectCard";
import { projects } from "./projectData";
import { ProjectFilterSort } from "./ProjectFilterSort"; // make sure this path is correct

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("date-desc");

  const filteredProjects = useMemo(() => {
    let filtered = [...projects];

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((project) =>
        selectedTags.some((tag) => project?.tags?.includes(tag))
      );
    }

    // Sort logic
    switch (sortOption) {
      case "date-asc":
        filtered.sort((a, b) => a.lastUpdatedUnix - b.lastUpdatedUnix);
        break;
      case "date-desc":
        filtered.sort((a, b) => b.lastUpdatedUnix - a.lastUpdatedUnix);
        break;
      case "title-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return filtered;
  }, [selectedTags, sortOption]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Filter + Sort Controls */}
      <ProjectFilterSort
        onChange={(tags, sort) => {
          setSelectedTags(tags);
          setSortOption(sort);
        }}
      />

      {/* Project Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {filteredProjects.map((project, idx) => (
          <CNCProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            index={idx}
            hoveredIndex={hoveredIndex}
            projectType={project.projectType}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>
    </div>
  );
}
