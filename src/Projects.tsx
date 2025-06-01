import { useState } from "react";
import { projects } from "./constants";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

function CNCProjectCard({
  id,
  title,
  description,
  image,
  index,
  projectType,
  hoveredIndex,
  setHoveredIndex,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
  index: number;
  hoveredIndex: number | null;
  projectType: string;
  setHoveredIndex: (i: number | null) => void;
}) {
  const navigate = useNavigate();
  const isHovered = hoveredIndex === index;
  const isBlurred = hoveredIndex !== null && !isHovered;

  return (
    <Card
      onClick={() => navigate(`/projects/${id}`)}
      className={`cursor-pointer overflow-hidden bg-zinc-900 p-6 rounded-xl shadow text-zinc-100 transform transition-all duration-300 ${
        isHovered ? "scale-105 z-10" : ""
      } ${isBlurred ? "blur-sm brightness-75" : ""}`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-48 object-contain"
      />
      <CardHeader>
        <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
        <Badge variant={"secondary"}>{projectType}</Badge>
        <CardDescription className="text-zinc-400 text-left">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Recent Projects</h2>
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
