import BlogLayout from "@/customComponents/BlogLayout";
import { ModelViewer } from "@/customComponents/ModelViewer";
import type { ProjectEntry } from "@/projectData";

export function BasketballKeycapProject({ lastUpdatedUnix }: ProjectEntry) {
  return (
    <BlogLayout
      title="Basketball Keycap Project"
      lastUpdatedUnix={lastUpdatedUnix}
    >
      <ModelViewer modelPath={"./models/Metal Keycap.obj"} />
      <p className="mb-6 text-lg leading-relaxed">
        This project involved designing and milling a basketball keycap for a
        custom keyboard, focusing on precision and aesthetics. The keycap was
        designed to resemble a basketball, complete with the characteristic
        texture and color.
      </p>
    </BlogLayout>
  );
}
