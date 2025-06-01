import { useState } from "react";
import { CNCProjectCard } from "./CNCProjectCard";
import { projects } from "./projectData";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Past Projects</h2>
      <p className="text-zinc-400 mb-8">
        Scroll down to explore the work I've done on aluminum parts and machine
        programming.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
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
