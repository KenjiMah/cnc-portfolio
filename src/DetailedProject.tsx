import { Link, useParams } from "react-router-dom";
import { PROJECT_MAPPER, projects } from "./projectData";
import type { ReactNode } from "react";
import { Button } from "./components/ui/button";
import { ROUTES } from "./constants";

function EmptyPage() {
  return (
    <div className="text-2xl">
      Oops, looks like nothing is here yet!
      <br />
      Come back another time to read about the details of this project
    </div>
  );
}

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="text-left grid col-6 max-w-6xl mx-auto">
      <div className="col-start-2 col-span-4">
        <Link to={`/${ROUTES.PROJECTPAGE}`}>
          <Button>Back to projects</Button>
        </Link>
        {children}
      </div>
    </div>
  );
}

export function DetailedProject() {
  const { projectId = "" } = useParams<{ projectId: string }>();
  const matchingProject = projects.find((p) => p.id === projectId);
  const ProjectComponent = PROJECT_MAPPER[projectId];
  return (
    <Wrapper>
      {ProjectComponent && matchingProject ? (
        <ProjectComponent {...matchingProject} />
      ) : (
        <EmptyPage />
      )}
    </Wrapper>
  );
}
