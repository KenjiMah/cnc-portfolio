import "./App.css";
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
    <Card className="overflow-hidden">
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
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  );
}

function App() {
  return (
    <>
      <div className="min-h-screen p-6 bg-muted text-foreground">
        <h1 className="text-3xl font-bold mb-6">Kenji Mah – CNC Portfolio</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, idx) => (
            <CNCProjectCard
              title={project.title}
              image={project.image}
              description={project.description}
              key={idx}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
