import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export function CNCProjectCard({
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
