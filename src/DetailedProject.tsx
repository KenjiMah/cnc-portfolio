import { useParams } from "react-router-dom";
export function DetailedProject() {
  const { projectId } = useParams();
  return <div>Project ID: {projectId}</div>;
}
