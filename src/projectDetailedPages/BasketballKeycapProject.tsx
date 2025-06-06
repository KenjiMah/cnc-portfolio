import BlogLayout from "@/customComponents/BlogLayout";
import { ModelViewer } from "@/customComponents/ModelViewer";

export function BasketballKeycapProject() {
  return (
    <BlogLayout title="Basketball Keycap Project">
      <div className="ml-8 md:float-right border-2 border-white w-[300px] h-[200px] lg:w-[600px] lg:h-[400px]">
        <ModelViewer modelPath={"./models/Metal Keycap.obj"} />
      </div>
      <p className="mb-6 text-lg leading-relaxed">
        This project involved designing and milling a basketball keycap for a
        custom keyboard, focusing on precision and aesthetics. The keycap was
        designed to resemble a basketball, complete with the characteristic
        texture and color.
      </p>
    </BlogLayout>
  );
}
