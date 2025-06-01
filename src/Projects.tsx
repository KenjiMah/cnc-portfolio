import { projects } from "./constants";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function CNCProjectCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <Card className="overflow-hidden bg-zinc-900 p-6 rounded-xl shadow text-zinc-100">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-48 object-cover"
        style={{
          objectFit: "contain", // 'cover' or 'contain' depending on effect
        }}
      />
      <CardHeader>
        <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
        <CardDescription className="text-zinc-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  );
}

export function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Recent Projects</h2>
      <p className="text-zinc-400 mb-8">
        Scroll down to explore the work I've done on aluminum parts and machine
        programming.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <>
          {projects.map((project, idx) => (
            <>
              <CNCProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                key={idx}
              />
            </>
          ))}
        </>
      </div>
    </div>
  );
}
