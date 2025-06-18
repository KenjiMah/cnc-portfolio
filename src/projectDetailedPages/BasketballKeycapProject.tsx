import BlogLayout from "@/customComponents/BlogLayout";
import ExpandableImage from "@/customComponents/ExpandableImage";
import { ModelViewer } from "@/customComponents/ModelViewer";
import type { ProjectEntry } from "@/utils/projectData";

const imageMap = import.meta.glob(
  "../assets/images/basketballKeycap/*.{png,jpeg,jpg,svg}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

export function BasketballKeycapProject({ lastUpdatedUnix }: ProjectEntry) {
  return (
    <BlogLayout
      title="Basketball Keycap Project"
      lastUpdatedUnix={lastUpdatedUnix}
    >
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 1: Early Modeling & Foam Prototyping
      </h2>
      <ModelViewer
        modelPath={"./models/Metal Keycap.obj"}
        camVectorInit={[1.237, 1.318, 1.226]}
        targetVectorInit={[-0.024, 0.06, -0.035]}
      />
      <p className="mb-6 text-base leading-relaxed">
        This basketball-themed keycap project started in CAD, where I modeled
        the overall geometry before heading into CAM and prototyping. For the
        first attempt, I used rigid foam to simulate the basic toolpaths and
        visualize potential tool collisions. However, the results were less than
        ideal — the foam was far too delicate for the feeds and speeds I was
        running, and the keycap broke loose mid-operation.
      </p>
      <p className="mb-6 text-base leading-relaxed">
        A few key lessons came out of this failure. First, the{" "}
        <strong>stem holding the keycap</strong> to the stock was too narrow,
        which caused severe deflection during the finishing operations.
        Additionally, my <strong>vise stop wasn’t trammed</strong> accurately,
        so the rotational alignment between toolpaths was inconsistent. It was a
        good reminder that even a “rough prototype” requires careful planning
        for rigidity, especially with delicate materials.
      </p>
      <div className="clear-both"></div>
      <div className="flex xs:flex-block justify-center gap-6 mb-6">
        <ExpandableImage
          src={imageMap["../assets/images/basketballKeycap/CAMFoam.png"]}
          alt="Basketball Keycap CAM setup for foam"
          description="Basketball Keycap CAM setup for foam"
          className="w-full md:w-[200px] lg:w-[300px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/basketballKeycap/foamProgress.jpeg"]}
          alt="Basketball Keycap foam progress"
          className="w-full md:w-[200px] lg:w-[300px] rounded shadow-sm"
        />
        <ExpandableImage
          src={imageMap["../assets/images/basketballKeycap/foamProgress2.jpeg"]}
          alt="Basketball Keycap foam progress2"
          className="w-full md:w-[200px] lg:w-[300px] rounded shadow-sm"
        />
      </div>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 2: Fixing Rigidity Issues & Transition to Aluminum
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        Based on the foam test, I made several CAM adjustments. Most notably, I
        designed a <strong>much thicker support stem</strong> for the keycap to
        improve rigidity. I also carefully <strong>trammed the vise</strong> so
        the part could be rotated consistently using a fixed stop. With these
        fixes in place, I began roughing out the actual part in 6061 aluminum.
      </p>
      <p className="mb-6 text-base leading-relaxed">
        I started by clearing out the general shape with a{" "}
        <strong>1/4” 2-flute flat end mill</strong> at aggressive speeds to
        remove the bulk of material. I left <strong>0.02” of stock</strong> for
        the finishing operations, then switched to a{" "}
        <strong>1/8” ball end mill</strong> to refine curves and details.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 3: Finer Detail Passes
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        To bring out more detail, especially in the grooves of the basketball
        lines, I moved to a <strong>tapered ball nose end mill</strong> with a{" "}
        <strong>1mm radius tip</strong> and a <strong>1/8” shank</strong>. This
        tool allowed me to reach tighter interior fillets and define curvature
        that was too small for the larger ball mill.
      </p>
      <p className="mb-6 text-base leading-relaxed">
        Finally, I performed a high-resolution finishing pass using an{" "}
        <strong>even finer tapered ball end mill</strong> with a{" "}
        <strong>0.025mm tip radius</strong>. Since this tool is extremely
        delicate, I slowed down the feedrate and kept the depth of cut very
        shallow to avoid deflection or tool breakage.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">What’s Next</h2>
      <p className="mb-6 text-base leading-relaxed italic">
        *More to come:* I’ll detail the final contour cut, keycap release, final
        polish, and show the first completed version once it's ready. Images,
        process notes, and performance feedback are still on the way—stay tuned!
      </p>
    </BlogLayout>
  );
}
