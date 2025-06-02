import ExpandableImage from "@/customComponents/ExpandableImage";
import BlogLayout from "../customComponents/BlogLayout";
import { ModelViewer } from "../customComponents/ModelViewer";

const imageMap = import.meta.glob(
  "../assets/images/metalLetter/*.{png,jpeg,jpg,svg}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

export function MetalLetterProject() {
  return (
    <BlogLayout title="Learning the Basics: Letter Project">
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 1: CAD Modeling and Blueprint Preparation
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        Before cutting any material, I created a to-scale CAD model of the
        letter and exported a 1:1 blueprint. This gave me a precise reference I
        could physically use during fabrication. After printing the outline, I
        carefully cut out the paper and taped it directly to the aluminum stock.
        This made it easy to trace and cut the exact profile by hand.
      </p>
      <div className="ml-8 md:float-right border-2 border-white w-[300px] h-[200px] lg:w-[600px] lg:h-[400px]">
        <ModelViewer
          modelPath={"./models/Basic Metal Project.obj"}
          camVectorInit={[
            2.2281599097064553, 4.108045279059962, 3.305352991147572,
          ]}
          targetVectorInit={[
            0.7644810412751796, 0.7634351964348373, -0.8778743140089241,
          ]}
        />
      </div>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 2: Preparing the Aluminum Stock
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        I started with a flat aluminum plate approximately
        <strong>0.25 inches thick</strong> and just under 2.5 inches wide. The
        initial length was oversized, so I trimmed it down to
        <strong>3.5 inches</strong> using a vertical bandsaw. This ensured the
        stock had a manageable footprint while still giving me enough material
        to work with for the final letter shape.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 3: Rough Cutting the Letter Profile
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        With the paper blueprint securely taped to the stock, I used a
        <strong>vertical bandsaw</strong> to carefully cut out the outline of
        the letter. This required slow, deliberate cuts — especially around the
        internal corners — to stay tight to the layout while avoiding
        overcutting. Once the basic profile was freed, I removed the paper and
        prepared the piece for finishing.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 4: Edge Cleanup and Chamfering
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        To clean up the rough bandsaw edges and remove any burrs, I used a
        <strong>Dremel rotary tool</strong> with various sanding and grinding
        attachments. I rounded and chamfered all outside and inside corners to
        soften the geometry and give the piece a more polished, intentional
        appearance. This also made the letter safer to handle by eliminating any
        sharp points.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Step 5: Adding a Custom Surface Finish
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        For the final step, I used the Dremel again — this time to apply a
        unique surface texture. Moving the tool in tight, controlled swirls, I
        created a fine, directional finish that plays with the light and gives
        the letter a more handcrafted feel. It’s a small detail, but it adds a
        lot of character to the piece and sets it apart from a generic machined
        surface.
      </p>
      <ExpandableImage
        src={imageMap["../assets/images/metalLetter/Letter.jpeg"]}
        alt="Dice progress"
        className="float-right ml-6 mb-4 max-w-[250px] rounded shadow-sm"
      />
    </BlogLayout>
  );
}
